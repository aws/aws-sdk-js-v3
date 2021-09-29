import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListAppsListsRequest, ListAppsListsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAppsListsCommand,
  serializeAws_json1_1ListAppsListsCommand,
} from "../protocols/Aws_json1_1";
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

export interface ListAppsListsCommandInput extends ListAppsListsRequest {}
export interface ListAppsListsCommandOutput extends ListAppsListsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of <code>AppsListDataSummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListAppsListsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListAppsListsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListAppsListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppsListsCommandInput} for command's `input` shape.
 * @see {@link ListAppsListsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAppsListsCommand extends $Command<
  ListAppsListsCommandInput,
  ListAppsListsCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppsListsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppsListsCommandInput, ListAppsListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListAppsListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppsListsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppsListsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppsListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAppsListsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppsListsCommandOutput> {
    return deserializeAws_json1_1ListAppsListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
