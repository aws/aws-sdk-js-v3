import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  CancelSpotFleetRequestsRequest,
  CancelSpotFleetRequestsResponse
} from "../models/index";
import {
  deserializeAws_ec2CancelSpotFleetRequestsCommand,
  serializeAws_ec2CancelSpotFleetRequestsCommand
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

export type CancelSpotFleetRequestsCommandInput = CancelSpotFleetRequestsRequest;
export type CancelSpotFleetRequestsCommandOutput = CancelSpotFleetRequestsResponse &
  __MetadataBearer;

export class CancelSpotFleetRequestsCommand extends $Command<
  CancelSpotFleetRequestsCommandInput,
  CancelSpotFleetRequestsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelSpotFleetRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CancelSpotFleetRequestsCommandInput,
    CancelSpotFleetRequestsCommandOutput
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
    input: CancelSpotFleetRequestsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CancelSpotFleetRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelSpotFleetRequestsCommandOutput> {
    return deserializeAws_ec2CancelSpotFleetRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
