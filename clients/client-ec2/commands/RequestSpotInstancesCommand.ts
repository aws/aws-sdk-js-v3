import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RequestSpotInstancesRequest, RequestSpotInstancesResult } from "../models/models_4";
import {
  deserializeAws_ec2RequestSpotInstancesCommand,
  serializeAws_ec2RequestSpotInstancesCommand,
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

export type RequestSpotInstancesCommandInput = RequestSpotInstancesRequest;
export type RequestSpotInstancesCommandOutput = RequestSpotInstancesResult & __MetadataBearer;

/**
 * <p>Creates a Spot Instance request.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html">Spot Instance requests</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export class RequestSpotInstancesCommand extends $Command<
  RequestSpotInstancesCommandInput,
  RequestSpotInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RequestSpotInstancesCommandInput) {
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
  ): Handler<RequestSpotInstancesCommandInput, RequestSpotInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RequestSpotInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestSpotInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestSpotInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestSpotInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RequestSpotInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestSpotInstancesCommandOutput> {
    return deserializeAws_ec2RequestSpotInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
