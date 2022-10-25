// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  DescribeJobInput,
  DescribeJobInputFilterSensitiveLog,
  GlacierJobDescription,
  GlacierJobDescriptionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobCommand,
  serializeAws_restJson1DescribeJobCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeJobCommandInput extends DescribeJobInput {}
export interface DescribeJobCommandOutput extends GlacierJobDescription, __MetadataBearer {}

/**
 * <p>This operation returns information about a job you previously initiated, including
 *          the job initiation date, the user who initiated the job, the job status code/message and
 *          the Amazon SNS topic to notify after Amazon S3 Glacier (Glacier) completes the job. For more information
 *          about initiating a job, see <a>InitiateJob</a>. </p>
 *
 *          <note>
 *             <p>This operation enables you to check the status of your job. However, it is
 *             strongly recommended that you set up an Amazon SNS topic and specify it in your initiate
 *             job request so that Glacier can notify the topic after it completes the
 *             job.</p>
 *          </note>
 *
 *          <p>A job ID will not expire for at least 24 hours after Glacier completes the
 *          job.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *
 *          <p> For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html">Describe Job</a>
 *          in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DescribeJobCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DescribeJobCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class DescribeJobCommand extends $Command<
  DescribeJobCommandInput,
  DescribeJobCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DescribeJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobCommandInput, DescribeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "DescribeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: GlacierJobDescriptionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobCommandOutput> {
    return deserializeAws_restJson1DescribeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
