import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateDashboardRequest, UpdateDashboardResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateDashboardCommand,
  serializeAws_restJson1UpdateDashboardCommand,
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

export interface UpdateDashboardCommandInput extends UpdateDashboardRequest {}
export interface UpdateDashboardCommandOutput extends UpdateDashboardResponse, __MetadataBearer {}

/**
 * <p>Updates a dashboard in an Amazon Web Services account.</p>
 *         <note>
 *             <p>Updating a Dashboard creates a new dashboard version but does not immediately publish
 *                 the new version.  You can update the published version of a dashboard by
 *                 using the <a>UpdateDashboardPublishedVersion</a> API operation.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDashboardCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDashboardCommand extends $Command<
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDashboardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDashboardCommandInput, UpdateDashboardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateDashboardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDashboardRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDashboardResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDashboardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDashboardCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDashboardCommandOutput> {
    return deserializeAws_restJson1UpdateDashboardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
