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
  DescribeMountTargetSecurityGroupsRequest,
  DescribeMountTargetSecurityGroupsRequestFilterSensitiveLog,
  DescribeMountTargetSecurityGroupsResponse,
  DescribeMountTargetSecurityGroupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand,
  serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeMountTargetSecurityGroupsCommandInput extends DescribeMountTargetSecurityGroupsRequest {}
export interface DescribeMountTargetSecurityGroupsCommandOutput
  extends DescribeMountTargetSecurityGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the security groups currently in effect for a mount target. This operation
 *       requires that the network interface of the mount target has been created and the lifecycle
 *       state of the mount target is not <code>deleted</code>.</p>
 *          <p>This operation requires permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount
 *           target's file system. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's
 *           network interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeMountTargetSecurityGroupsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeMountTargetSecurityGroupsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMountTargetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeMountTargetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class DescribeMountTargetSecurityGroupsCommand extends $Command<
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
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

  constructor(readonly input: DescribeMountTargetSecurityGroupsCommandInput) {
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
  ): Handler<DescribeMountTargetSecurityGroupsCommandInput, DescribeMountTargetSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMountTargetSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeMountTargetSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMountTargetSecurityGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMountTargetSecurityGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMountTargetSecurityGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMountTargetSecurityGroupsCommandOutput> {
    return deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
