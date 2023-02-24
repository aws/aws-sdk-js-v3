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

import {
  RegisterEcsClusterRequest,
  RegisterEcsClusterRequestFilterSensitiveLog,
  RegisterEcsClusterResult,
  RegisterEcsClusterResultFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  deserializeAws_json1_1RegisterEcsClusterCommand,
  serializeAws_json1_1RegisterEcsClusterCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterEcsClusterCommandInput extends RegisterEcsClusterRequest {}
export interface RegisterEcsClusterCommandOutput extends RegisterEcsClusterResult, __MetadataBearer {}

/**
 * <p>Registers a specified Amazon ECS cluster with a stack. You can register only one
 *       cluster with a stack. A cluster can be registered with only one stack.
 *       For more information, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html">
 *       Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">
 *       Managing User Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterEcsClusterCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterEcsClusterCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new RegisterEcsClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterEcsClusterCommandInput} for command's `input` shape.
 * @see {@link RegisterEcsClusterCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 */
export class RegisterEcsClusterCommand extends $Command<
  RegisterEcsClusterCommandInput,
  RegisterEcsClusterCommandOutput,
  OpsWorksClientResolvedConfig
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

  constructor(readonly input: RegisterEcsClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterEcsClusterCommandInput, RegisterEcsClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterEcsClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "RegisterEcsClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterEcsClusterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterEcsClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterEcsClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterEcsClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterEcsClusterCommandOutput> {
    return deserializeAws_json1_1RegisterEcsClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
