// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { DeleteDeploymentRequest, DeleteDeploymentRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDeploymentCommand,
  serializeAws_restJson1DeleteDeploymentCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteDeploymentCommandInput extends DeleteDeploymentRequest {}
export interface DeleteDeploymentCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more
 *       information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p>
 *          <p>Deleting a deployment doesn't affect core devices that run that deployment, because core
 *       devices store the deployment's configuration on the device. Additionally, core devices can
 *       roll back to a previous deployment that has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DeleteDeploymentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DeleteDeploymentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new DeleteDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeploymentCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 */
export class DeleteDeploymentCommand extends $Command<
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DeleteDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "DeleteDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDeploymentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeploymentCommandOutput> {
    return deserializeAws_restJson1DeleteDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
