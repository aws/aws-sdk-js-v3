import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointPolicyStatusRequest, GetAccessPointPolicyStatusResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetAccessPointPolicyStatusCommand,
  serializeAws_restXmlGetAccessPointPolicyStatusCommand,
} from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

export type GetAccessPointPolicyStatusCommandInput = GetAccessPointPolicyStatusRequest;
export type GetAccessPointPolicyStatusCommandOutput = GetAccessPointPolicyStatusResult & __MetadataBearer;

/**
 * <p>Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export class GetAccessPointPolicyStatusCommand extends $Command<
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccessPointPolicyStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccessPointPolicyStatusCommandInput, GetAccessPointPolicyStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetAccessPointPolicyStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessPointPolicyStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessPointPolicyStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccessPointPolicyStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetAccessPointPolicyStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAccessPointPolicyStatusCommandOutput> {
    return deserializeAws_restXmlGetAccessPointPolicyStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
