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
import { DescribeKeyValueStoreRequest, DescribeKeyValueStoreResponse } from "../models/models_0";
import { de_DescribeKeyValueStoreCommand, se_DescribeKeyValueStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeKeyValueStoreCommand}.
 */
export interface DescribeKeyValueStoreCommandInput extends DescribeKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyValueStoreCommand}.
 */
export interface DescribeKeyValueStoreCommandOutput extends DescribeKeyValueStoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata information about Key Value Store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // DescribeKeyValueStoreRequest
 *   KvsARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyValueStoreResponse
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * //   KvsARN: "STRING_VALUE", // required
 * //   Created: new Date("TIMESTAMP"), // required
 * //   ETag: "STRING_VALUE", // required
 * //   LastModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeKeyValueStoreCommandInput - {@link DescribeKeyValueStoreCommandInput}
 * @returns {@link DescribeKeyValueStoreCommandOutput}
 * @see {@link DescribeKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyValueStoreCommandOutput} for command's `response` shape.
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
export class DescribeKeyValueStoreCommand extends $Command<
  DescribeKeyValueStoreCommandInput,
  DescribeKeyValueStoreCommandOutput,
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
  constructor(readonly input: DescribeKeyValueStoreCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontKeyValueStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeKeyValueStoreCommandInput, DescribeKeyValueStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeKeyValueStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontKeyValueStoreClient";
    const commandName = "DescribeKeyValueStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFrontKeyValueStore",
        operation: "DescribeKeyValueStore",
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
  private serialize(input: DescribeKeyValueStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeKeyValueStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeKeyValueStoreCommandOutput> {
    return de_DescribeKeyValueStoreCommand(output, context);
  }
}
