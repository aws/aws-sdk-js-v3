import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelSpotInstanceRequestsRequest, CancelSpotInstanceRequestsResult } from "../models/index";
import {
  deserializeAws_ec2CancelSpotInstanceRequestsCommand,
  serializeAws_ec2CancelSpotInstanceRequestsCommand,
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

export type CancelSpotInstanceRequestsCommandInput = CancelSpotInstanceRequestsRequest;
export type CancelSpotInstanceRequestsCommandOutput = CancelSpotInstanceRequestsResult & __MetadataBearer;

export class CancelSpotInstanceRequestsCommand extends $Command<
  CancelSpotInstanceRequestsCommandInput,
  CancelSpotInstanceRequestsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelSpotInstanceRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelSpotInstanceRequestsCommandInput, CancelSpotInstanceRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelSpotInstanceRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CancelSpotInstanceRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelSpotInstanceRequestsCommandOutput> {
    return deserializeAws_ec2CancelSpotInstanceRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
