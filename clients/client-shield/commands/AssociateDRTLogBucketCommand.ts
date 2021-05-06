import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { AssociateDRTLogBucketRequest, AssociateDRTLogBucketResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDRTLogBucketCommand,
  serializeAws_json1_1AssociateDRTLogBucketCommand,
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

export interface AssociateDRTLogBucketCommandInput extends AssociateDRTLogBucketRequest {}
export interface AssociateDRTLogBucketCommandOutput extends AssociateDRTLogBucketResponse, __MetadataBearer {}

/**
 * <p>Authorizes the DDoS Response Team (DRT) to access the specified Amazon S3 bucket containing your AWS WAF logs. You can associate up to 10 Amazon S3 buckets with your subscription.</p>
 * 	        <p>To use the services of the DRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, AssociateDRTLogBucketCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, AssociateDRTLogBucketCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new AssociateDRTLogBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDRTLogBucketCommandInput} for command's `input` shape.
 * @see {@link AssociateDRTLogBucketCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateDRTLogBucketCommand extends $Command<
  AssociateDRTLogBucketCommandInput,
  AssociateDRTLogBucketCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDRTLogBucketCommandInput) {
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
  ): Handler<AssociateDRTLogBucketCommandInput, AssociateDRTLogBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "AssociateDRTLogBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDRTLogBucketRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDRTLogBucketResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDRTLogBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDRTLogBucketCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateDRTLogBucketCommandOutput> {
    return deserializeAws_json1_1AssociateDRTLogBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
