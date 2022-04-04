import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  NotifyResourceDeploymentStatusChangeInput,
  NotifyResourceDeploymentStatusChangeOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand,
  serializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface NotifyResourceDeploymentStatusChangeCommandInput extends NotifyResourceDeploymentStatusChangeInput {}
export interface NotifyResourceDeploymentStatusChangeCommandOutput
  extends NotifyResourceDeploymentStatusChangeOutput,
    __MetadataBearer {}

/**
 * <p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, NotifyResourceDeploymentStatusChangeCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, NotifyResourceDeploymentStatusChangeCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new NotifyResourceDeploymentStatusChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyResourceDeploymentStatusChangeCommandInput} for command's `input` shape.
 * @see {@link NotifyResourceDeploymentStatusChangeCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class NotifyResourceDeploymentStatusChangeCommand extends $Command<
  NotifyResourceDeploymentStatusChangeCommandInput,
  NotifyResourceDeploymentStatusChangeCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NotifyResourceDeploymentStatusChangeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyResourceDeploymentStatusChangeCommandInput, NotifyResourceDeploymentStatusChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "NotifyResourceDeploymentStatusChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyResourceDeploymentStatusChangeInput.filterSensitiveLog,
      outputFilterSensitiveLog: NotifyResourceDeploymentStatusChangeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: NotifyResourceDeploymentStatusChangeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyResourceDeploymentStatusChangeCommandOutput> {
    return deserializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
