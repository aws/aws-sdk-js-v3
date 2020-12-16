import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeNetworkInterfacePermissionsRequest,
  DescribeNetworkInterfacePermissionsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeNetworkInterfacePermissionsCommand,
  serializeAws_ec2DescribeNetworkInterfacePermissionsCommand,
} from "../protocols/Aws_ec2";
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

export type DescribeNetworkInterfacePermissionsCommandInput = DescribeNetworkInterfacePermissionsRequest;
export type DescribeNetworkInterfacePermissionsCommandOutput = DescribeNetworkInterfacePermissionsResult &
  __MetadataBearer;

/**
 * <p>Describes the permissions for your network interfaces. </p>
 */
export class DescribeNetworkInterfacePermissionsCommand extends $Command<
  DescribeNetworkInterfacePermissionsCommandInput,
  DescribeNetworkInterfacePermissionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNetworkInterfacePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNetworkInterfacePermissionsCommandInput, DescribeNetworkInterfacePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInterfacePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNetworkInterfacePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeNetworkInterfacePermissionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNetworkInterfacePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeNetworkInterfacePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInterfacePermissionsCommandOutput> {
    return deserializeAws_ec2DescribeNetworkInterfacePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
