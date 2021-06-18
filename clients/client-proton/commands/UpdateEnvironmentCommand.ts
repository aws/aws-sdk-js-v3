import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { UpdateEnvironmentInput, UpdateEnvironmentOutput } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateEnvironmentCommand,
  serializeAws_json1_0UpdateEnvironmentCommand,
} from "../protocols/Aws_json1_0";
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

export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentInput {}
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Update an environment.</p>
 *         <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the
 *                 <code>protonServiceRoleArn</code> parameter to update or connect to an environment account connection. </p>
 *         <p>You can only update to a new environment account connection if it was created in the same environment account that the current
 *             environment account connection was created in and associated with the current environment.</p>
 *         <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or
 *             include the <code>environmentAccountConnectionId</code> parameter to update or connect to an environment account connection.</p>
 *         <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You
 *             can’t update both.</p>
 *         <p>There are four modes for updating an environment as described in the following. The <code>deploymentType</code> field defines the
 *             mode.</p>
 *         <dl>
 *             <dt/>
 *             <dd>
 *                     <p>
 *                   <code>NONE</code>
 *                </p>
 *                     <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p>
 *                 </dd>
 *             <dt/>
 *             <dd>
 *                     <p>
 *                   <code>CURRENT_VERSION</code>
 *                </p>
 *                     <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are
 *                         updated. <i>Don’t</i> include minor or major version parameters when you use this
 *                         <code>deployment-type</code>.</p>
 *                 </dd>
 *             <dt/>
 *             <dd>
 *                     <p>
 *                   <code>MINOR_VERSION</code>
 *                </p>
 *                     <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current
 *                         major version in use, by default. You can also specify a different minor version of the current major version in use.</p>
 *                 </dd>
 *             <dt/>
 *             <dd>
 *                     <p>
 *                   <code>MAJOR_VERSION</code>
 *                </p>
 *                     <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of
 *                         the current template, by default. You can also specify a different major version that's higher than the major version in use
 *                         and a minor version (optional).</p>
 *                 </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateEnvironmentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateEnvironmentCommand extends $Command<
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEnvironmentCommandInput) {
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
  ): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "UpdateEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEnvironmentInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEnvironmentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEnvironmentCommandOutput> {
    return deserializeAws_json1_0UpdateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
