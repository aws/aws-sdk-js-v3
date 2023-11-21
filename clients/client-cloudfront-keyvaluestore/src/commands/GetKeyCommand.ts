// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CloudFrontKeyValueStoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFrontKeyValueStoreClient";
import { GetKeyRequest, GetKeyResponse, GetKeyResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetKeyCommand, se_GetKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetKeyCommand}.
 */
export interface GetKeyCommandInput extends GetKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyCommand}.
 */
export interface GetKeyCommandOutput extends GetKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a key value pair.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, GetKeyCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, GetKeyCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // GetKeyRequest
 *   KvsARN: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 * };
 * const command = new GetKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyResponse
 * //   Key: "STRING_VALUE", // required
 * //   Value: "STRING_VALUE", // required
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetKeyCommandInput - {@link GetKeyCommandInput}
 * @returns {@link GetKeyCommandOutput}
 * @see {@link GetKeyCommandInput} for command's `input` shape.
 * @see {@link GetKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontKeyValueStoreClientResolvedConfig | config} for CloudFrontKeyValueStoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Resource is not in expected state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link CloudFrontKeyValueStoreServiceException}
 * <p>Base exception class for all service exceptions from CloudFrontKeyValueStore service.</p>
 *
 */
export class GetKeyCommand extends $Command<
  GetKeyCommandInput,
  GetKeyCommandOutput,
  CloudFrontKeyValueStoreClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      KvsARN: { type: "contextParams", name: "KvsARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetKeyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontKeyValueStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKeyCommandInput, GetKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontKeyValueStoreClient";
    const commandName = "GetKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetKeyResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFrontKeyValueStore",
        operation: "GetKey",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyCommandOutput> {
    return de_GetKeyCommand(output, context);
  }
}
