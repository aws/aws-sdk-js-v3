import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand,
  serializeAws_json1_1UpdateMaintenanceWindowTargetCommand,
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

export type UpdateMaintenanceWindowTargetCommandInput = UpdateMaintenanceWindowTargetRequest;
export type UpdateMaintenanceWindowTargetCommandOutput = UpdateMaintenanceWindowTargetResult & __MetadataBearer;

/**
 * <p>Modifies the target of an existing maintenance window. You
 *    can change the following:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Name</p>
 *             </li>
 *             <li>
 *                <p>Description</p>
 *             </li>
 *             <li>
 *                <p>Owner</p>
 *             </li>
 *             <li>
 *                <p>IDs for an ID target</p>
 *             </li>
 *             <li>
 *                <p>Tags for a Tag target</p>
 *             </li>
 *             <li>
 *                <p>From any supported tag type to another. The three supported tag types are ID target, Tag
 *      target, and resource group. For more information, see <a>Target</a>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If a parameter is null, then the corresponding field is not modified.</p>
 *          </note>
 */
export class UpdateMaintenanceWindowTargetCommand extends $Command<
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMaintenanceWindowTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateMaintenanceWindowTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMaintenanceWindowTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMaintenanceWindowTargetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMaintenanceWindowTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMaintenanceWindowTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMaintenanceWindowTargetCommandOutput> {
    return deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
