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
import { UpdateKeysRequest, UpdateKeysRequestFilterSensitiveLog, UpdateKeysResponse } from "../models/models_0";
import { de_UpdateKeysCommand, se_UpdateKeysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeysCommand}.
 */
export interface UpdateKeysCommandInput extends UpdateKeysRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeysCommand}.
 */
export interface UpdateKeysCommandOutput extends UpdateKeysResponse, __MetadataBearer {}

/**
 * @public
 * <p>Puts or Deletes multiple key value pairs in a single, all-or-nothing operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, UpdateKeysCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, UpdateKeysCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // UpdateKeysRequest
 *   KvsARN: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 *   Puts: [ // PutKeyRequestsList
 *     { // PutKeyRequestListItem
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Deletes: [ // DeleteKeyRequestsList
 *     { // DeleteKeyRequestListItem
 *       Key: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateKeysCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeysResponse
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * //   ETag: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateKeysCommandInput - {@link UpdateKeysCommandInput}
 * @returns {@link UpdateKeysCommandOutput}
 * @see {@link UpdateKeysCommandInput} for command's `input` shape.
 * @see {@link UpdateKeysCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Limit exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation failed.</p>
 *
 * @throws {@link CloudFrontKeyValueStoreServiceException}
 * <p>Base exception class for all service exceptions from CloudFrontKeyValueStore service.</p>
 *
 */
export class UpdateKeysCommand extends $Command<
  UpdateKeysCommandInput,
  UpdateKeysCommandOutput,
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
  constructor(readonly input: UpdateKeysCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontKeyValueStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKeysCommandInput, UpdateKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateKeysCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontKeyValueStoreClient";
    const commandName = "UpdateKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFrontKeyValueStore",
        operation: "UpdateKeys",
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
  private serialize(input: UpdateKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKeysCommandOutput> {
    return de_UpdateKeysCommand(output, context);
  }
}
