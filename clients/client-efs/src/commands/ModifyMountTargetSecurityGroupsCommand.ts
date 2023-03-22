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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import {
  ModifyMountTargetSecurityGroupsRequest,
  ModifyMountTargetSecurityGroupsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand,
  serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ModifyMountTargetSecurityGroupsCommand}.
 */
export interface ModifyMountTargetSecurityGroupsCommandInput extends ModifyMountTargetSecurityGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyMountTargetSecurityGroupsCommand}.
 */
export interface ModifyMountTargetSecurityGroupsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Modifies the set of security groups in effect for a mount target.</p>
 *          <p>When you create a mount target, Amazon EFS also creates a new network interface. For
 *       more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the
 *       network interface associated with a mount target, with the <code>SecurityGroups</code>
 *       provided in the request. This operation requires that the network interface of the mount
 *       target has been created and the lifecycle state of the mount target is not
 *         <code>deleted</code>. </p>
 *          <p>The operation requires permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount
 *           target's file system. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network
 *           interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, ModifyMountTargetSecurityGroupsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, ModifyMountTargetSecurityGroupsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new ModifyMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyMountTargetSecurityGroupsCommandInput - {@link ModifyMountTargetSecurityGroupsCommandInput}
 * @returns {@link ModifyMountTargetSecurityGroupsCommandOutput}
 * @see {@link ModifyMountTargetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link ModifyMountTargetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link IncorrectMountTargetState} (client fault)
 *  <p>Returned if the mount target is not in the correct state for the
 *             operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link MountTargetNotFound} (client fault)
 *  <p>Returned if there is no mount target with the specified ID found in the
 *             caller's Amazon Web Services account.</p>
 *
 * @throws {@link SecurityGroupLimitExceeded} (client fault)
 *  <p>Returned if the size of <code>SecurityGroups</code> specified in the request is
 *             greater than five.</p>
 *
 * @throws {@link SecurityGroupNotFound} (client fault)
 *  <p>Returned if one of the specified security groups doesn't exist in the subnet's
 *             virtual private cloud (VPC).</p>
 *
 *
 * @example To modify the security groups associated with a mount target for a file system
 * ```javascript
 * // This operation modifies the security groups associated with a mount target for a file system.
 * const input = {
 *   "MountTargetId": "fsmt-12340abc",
 *   "SecurityGroups": [
 *     "sg-abcd1234"
 *   ]
 * };
 * const command = new ModifyMountTargetSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: to-modify-the-security-groups-associated-with-a-mount-target-for-a-file-system-1481850772562
 * ```
 *
 */
export class ModifyMountTargetSecurityGroupsCommand extends $Command<
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
  EFSClientResolvedConfig
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
  constructor(readonly input: ModifyMountTargetSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyMountTargetSecurityGroupsCommandInput, ModifyMountTargetSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyMountTargetSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "ModifyMountTargetSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyMountTargetSecurityGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
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
  private serialize(
    input: ModifyMountTargetSecurityGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyMountTargetSecurityGroupsCommandOutput> {
    return deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
