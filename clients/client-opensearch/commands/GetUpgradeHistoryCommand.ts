import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { GetUpgradeHistoryRequest, GetUpgradeHistoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetUpgradeHistoryCommand,
  serializeAws_restJson1GetUpgradeHistoryCommand,
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

export interface GetUpgradeHistoryCommandInput extends GetUpgradeHistoryRequest {}
export interface GetUpgradeHistoryCommandOutput extends GetUpgradeHistoryResponse, __MetadataBearer {}

/**
 * <p>Retrieves the complete history of the last 10 upgrades performed on the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetUpgradeHistoryCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetUpgradeHistoryCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new GetUpgradeHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUpgradeHistoryCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeHistoryCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetUpgradeHistoryCommand extends $Command<
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUpgradeHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "GetUpgradeHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUpgradeHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUpgradeHistoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUpgradeHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUpgradeHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUpgradeHistoryCommandOutput> {
    return deserializeAws_restJson1GetUpgradeHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
