// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { StartSigningJobRequest, StartSigningJobResponse } from "../models/models_0";
import { de_StartSigningJobCommand, se_StartSigningJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSigningJobCommand}.
 */
export interface StartSigningJobCommandInput extends StartSigningJobRequest {}
/**
 * @public
 *
 * The output of {@link StartSigningJobCommand}.
 */
export interface StartSigningJobCommandOutput extends StartSigningJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Initiates a signing job to be performed on the code provided. Signing jobs are
 * 			viewable by the <code>ListSigningJobs</code> operation for two years after they are
 * 			performed. Note the following requirements: </p>
 * 		       <ul>
 *             <li>
 * 				           <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Creating a Bucket</a> in the
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
 * 		       <p>For a Java example that shows how to use this action, see <a href="https://docs.aws.amazon.com/signer/latest/developerguide/api-startsigningjob.html">StartSigningJob</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, StartSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, StartSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // StartSigningJobRequest
 *   source: { // Source
 *     s3: { // S3Source
 *       bucketName: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *       version: "STRING_VALUE", // required
 *     },
 *   },
 *   destination: { // Destination
 *     s3: { // S3Destination
 *       bucketName: "STRING_VALUE",
 *       prefix: "STRING_VALUE",
 *     },
 *   },
 *   profileName: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE", // required
 *   profileOwner: "STRING_VALUE",
 * };
 * const command = new StartSigningJobCommand(input);
 * const response = await client.send(command);
 * // { // StartSigningJobResponse
 * //   jobId: "STRING_VALUE",
 * //   jobOwner: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSigningJobCommandInput - {@link StartSigningJobCommandInput}
 * @returns {@link StartSigningJobCommandOutput}
 * @see {@link StartSigningJobCommandInput} for command's `input` shape.
 * @see {@link StartSigningJobCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 * 		       <p>Instead of this error, <code>TooManyRequestsException</code> should be used.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WallabyService",
        operation: "StartSigningJob",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartSigningJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSigningJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSigningJobCommandOutput> {
    return de_StartSigningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
