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

export interface ModifyMountTargetSecurityGroupsCommandInput extends ModifyMountTargetSecurityGroupsRequest {}
export interface ModifyMountTargetSecurityGroupsCommandOutput extends __MetadataBearer {}

/**
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
 * @see {@link ModifyMountTargetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link ModifyMountTargetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
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

  private serialize(
    input: ModifyMountTargetSecurityGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyMountTargetSecurityGroupsCommandOutput> {
    return deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
