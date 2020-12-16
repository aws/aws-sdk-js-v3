import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DisassociateDRTLogBucketRequest, DisassociateDRTLogBucketResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateDRTLogBucketCommand,
  serializeAws_json1_1DisassociateDRTLogBucketCommand,
} from "../protocols/Aws_json1_1";
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

export type DisassociateDRTLogBucketCommandInput = DisassociateDRTLogBucketRequest;
export type DisassociateDRTLogBucketCommandOutput = DisassociateDRTLogBucketResponse & __MetadataBearer;

/**
 * <p>Removes the DDoS Response Team's (DRT) access to the specified Amazon S3 bucket containing your AWS WAF logs.</p>
 * 	        <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
 */
export class DisassociateDRTLogBucketCommand extends $Command<
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateDRTLogBucketCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateDRTLogBucketCommandInput, DisassociateDRTLogBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DisassociateDRTLogBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDRTLogBucketRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDRTLogBucketResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateDRTLogBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateDRTLogBucketCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateDRTLogBucketCommandOutput> {
    return deserializeAws_json1_1DisassociateDRTLogBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
