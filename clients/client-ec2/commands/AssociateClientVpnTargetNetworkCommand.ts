import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  AssociateClientVpnTargetNetworkRequest,
  AssociateClientVpnTargetNetworkResult
} from "../models/index";
import {
  deserializeAws_ec2AssociateClientVpnTargetNetworkCommand,
  serializeAws_ec2AssociateClientVpnTargetNetworkCommand
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type AssociateClientVpnTargetNetworkCommandInput = AssociateClientVpnTargetNetworkRequest;
export type AssociateClientVpnTargetNetworkCommandOutput = AssociateClientVpnTargetNetworkResult &
  __MetadataBearer;

export class AssociateClientVpnTargetNetworkCommand extends $Command<
  AssociateClientVpnTargetNetworkCommandInput,
  AssociateClientVpnTargetNetworkCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateClientVpnTargetNetworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AssociateClientVpnTargetNetworkCommandInput,
    AssociateClientVpnTargetNetworkCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateClientVpnTargetNetworkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateClientVpnTargetNetworkCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateClientVpnTargetNetworkCommandOutput> {
    return deserializeAws_ec2AssociateClientVpnTargetNetworkCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
