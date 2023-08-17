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
} from "@smithy/types";

import { RegisterInstanceRequest, RegisterInstanceResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_RegisterInstanceCommand, se_RegisterInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterInstanceCommand}.
 */
export interface RegisterInstanceCommandInput extends RegisterInstanceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterInstanceCommand}.
 */
export interface RegisterInstanceCommandOutput extends RegisterInstanceResult, __MetadataBearer {}

/**
 * @public
 * <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p>
 *          <note>
 *             <p>We do not recommend using this action to register instances. The complete registration
 *       operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering
 *       the instance with the stack. <code>RegisterInstance</code> handles only the second step. You
 *       should instead use the AWS CLI <code>register</code> command, which performs the entire
 *       registration operation. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html">
 *       Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p>
 *          </note>
 *          <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API.
 *       For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance
 *       type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html">
 *           Preparing the Instance</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // RegisterInstanceRequest
 *   StackId: "STRING_VALUE", // required
 *   Hostname: "STRING_VALUE",
 *   PublicIp: "STRING_VALUE",
 *   PrivateIp: "STRING_VALUE",
 *   RsaPublicKey: "STRING_VALUE",
 *   RsaPublicKeyFingerprint: "STRING_VALUE",
 *   InstanceIdentity: { // InstanceIdentity
 *     Document: "STRING_VALUE",
 *     Signature: "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterInstanceResult
 * //   InstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterInstanceCommandInput - {@link RegisterInstanceCommandInput}
 * @returns {@link RegisterInstanceCommandOutput}
 * @see {@link RegisterInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class RegisterInstanceCommand extends $Command<
  RegisterInstanceCommandInput,
  RegisterInstanceCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: RegisterInstanceCommandInput) {
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
  ): Handler<RegisterInstanceCommandInput, RegisterInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "RegisterInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: RegisterInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterInstanceCommandOutput> {
    return de_RegisterInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
