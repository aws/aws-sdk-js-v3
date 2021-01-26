import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import {
  DescribeMountTargetSecurityGroupsRequest,
  DescribeMountTargetSecurityGroupsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand,
  serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand,
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

export type DescribeMountTargetSecurityGroupsCommandInput = DescribeMountTargetSecurityGroupsRequest;
export type DescribeMountTargetSecurityGroupsCommandOutput = DescribeMountTargetSecurityGroupsResponse &
  __MetadataBearer;

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
 */
export class DescribeMountTargetSecurityGroupsCommand extends $Command<
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeMountTargetSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMountTargetSecurityGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMountTargetSecurityGroupsResponse.filterSensitiveLog,
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
