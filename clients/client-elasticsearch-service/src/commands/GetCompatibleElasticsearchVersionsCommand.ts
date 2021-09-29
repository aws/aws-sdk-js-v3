import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  GetCompatibleElasticsearchVersionsRequest,
  GetCompatibleElasticsearchVersionsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand,
  serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetCompatibleElasticsearchVersionsCommandInput extends GetCompatibleElasticsearchVersionsRequest {}
export interface GetCompatibleElasticsearchVersionsCommandOutput
  extends GetCompatibleElasticsearchVersionsResponse,
    __MetadataBearer {}

/**
 * <p>
 *         Returns a list of upgrade compatible Elastisearch versions.
 *         You can optionally pass a
 *         <code>
 *           <a>DomainName</a>
 *         </code>
 *         to get all upgrade compatible Elasticsearch versions for that specific domain.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetCompatibleElasticsearchVersionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetCompatibleElasticsearchVersionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new GetCompatibleElasticsearchVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCompatibleElasticsearchVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleElasticsearchVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCompatibleElasticsearchVersionsCommand extends $Command<
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCompatibleElasticsearchVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCompatibleElasticsearchVersionsCommandInput, GetCompatibleElasticsearchVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "GetCompatibleElasticsearchVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCompatibleElasticsearchVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCompatibleElasticsearchVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCompatibleElasticsearchVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCompatibleElasticsearchVersionsCommandOutput> {
    return deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
