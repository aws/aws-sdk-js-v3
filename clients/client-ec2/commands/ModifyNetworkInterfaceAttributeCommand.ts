import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyNetworkInterfaceAttributeRequest } from "../models/models_4";
import {
  deserializeAws_ec2ModifyNetworkInterfaceAttributeCommand,
  serializeAws_ec2ModifyNetworkInterfaceAttributeCommand,
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

export type ModifyNetworkInterfaceAttributeCommandInput = ModifyNetworkInterfaceAttributeRequest;
export type ModifyNetworkInterfaceAttributeCommandOutput = __MetadataBearer;

/**
 * <p>Modifies the specified network interface attribute. You can specify only one
 *             attribute at a time. You can use this action to attach and detach security groups from
 *             an existing EC2 instance.</p>
 */
export class ModifyNetworkInterfaceAttributeCommand extends $Command<
  ModifyNetworkInterfaceAttributeCommandInput,
  ModifyNetworkInterfaceAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyNetworkInterfaceAttributeCommandInput) {
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
  ): Handler<ModifyNetworkInterfaceAttributeCommandInput, ModifyNetworkInterfaceAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyNetworkInterfaceAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyNetworkInterfaceAttributeRequest.filterSensitiveLog,
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
    input: ModifyNetworkInterfaceAttributeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyNetworkInterfaceAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyNetworkInterfaceAttributeCommandOutput> {
    return deserializeAws_ec2ModifyNetworkInterfaceAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
