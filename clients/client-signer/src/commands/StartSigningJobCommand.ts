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

import {
  StartSigningJobRequest,
  StartSigningJobRequestFilterSensitiveLog,
  StartSigningJobResponse,
  StartSigningJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartSigningJobCommand,
  serializeAws_restJson1StartSigningJobCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

export interface StartSigningJobCommandInput extends StartSigningJobRequest {}
export interface StartSigningJobCommandOutput extends StartSigningJobResponse, __MetadataBearer {}

/**
 * <p>Initiates a signing job to be performed on the code provided. Signing jobs are
 * 			viewable by the <code>ListSigningJobs</code> operation for two years after they are
 * 			performed. Note the following requirements: </p>
 * 		       <ul>
 *             <li>
 * 				           <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the
 * 						<i>Amazon S3 Getting Started Guide</i>. </p>
 * 			         </li>
 *             <li>
 * 				           <p>Your S3 source bucket must be version enabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must create an S3 destination bucket. Code signing uses your S3 destination
 * 					bucket to write your signed code.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You specify the name of the source and destination buckets when calling the
 * 						<code>StartSigningJob</code> operation.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must also specify a request token that identifies your request to
 * 					code signing.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call
 * 			<code>StartSigningJob</code>.</p>
 * 		       <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, StartSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, StartSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new StartSigningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSigningJobCommandInput} for command's `input` shape.
 * @see {@link StartSigningJobCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 */
export class StartSigningJobCommand extends $Command<
  StartSigningJobCommandInput,
  StartSigningJobCommandOutput,
  SignerClientResolvedConfig
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

  constructor(readonly input: StartSigningJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSigningJobCommandInput, StartSigningJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSigningJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "StartSigningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSigningJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSigningJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSigningJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartSigningJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSigningJobCommandOutput> {
    return deserializeAws_restJson1StartSigningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
