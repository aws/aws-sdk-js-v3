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

import { StartMLDataProcessingJobInput, StartMLDataProcessingJobOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_StartMLDataProcessingJobCommand, se_StartMLDataProcessingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMLDataProcessingJobCommand}.
 */
export interface StartMLDataProcessingJobCommandInput extends StartMLDataProcessingJobInput {}
/**
 * @public
 *
 * The output of {@link StartMLDataProcessingJobCommand}.
 */
export interface StartMLDataProcessingJobCommandOutput extends StartMLDataProcessingJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Neptune ML data processing job for processing the
 *       graph data exported from Neptune for training. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-api-dataprocessing.html">The
 *       <code>dataprocessing</code> command</a>.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmlmodeldataprocessingjob">neptune-db:StartMLModelDataProcessingJob</a>
 *       IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, StartMLDataProcessingJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, StartMLDataProcessingJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // StartMLDataProcessingJobInput
 *   id: "STRING_VALUE",
 *   previousDataProcessingJobId: "STRING_VALUE",
 *   inputDataS3Location: "STRING_VALUE", // required
 *   processedDataS3Location: "STRING_VALUE", // required
 *   sagemakerIamRoleArn: "STRING_VALUE",
 *   neptuneIamRoleArn: "STRING_VALUE",
 *   processingInstanceType: "STRING_VALUE",
 *   processingInstanceVolumeSizeInGB: Number("int"),
 *   processingTimeOutInSeconds: Number("int"),
 *   modelType: "STRING_VALUE",
 *   configFileName: "STRING_VALUE",
 *   subnets: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   volumeEncryptionKMSKey: "STRING_VALUE",
 *   s3OutputEncryptionKMSKey: "STRING_VALUE",
 * };
 * const command = new StartMLDataProcessingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMLDataProcessingJobOutput
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   creationTimeInMillis: Number("long"),
 * // };
 *
 * ```
 *
 * @param StartMLDataProcessingJobCommandInput - {@link StartMLDataProcessingJobCommandInput}
 * @returns {@link StartMLDataProcessingJobCommandOutput}
 * @see {@link StartMLDataProcessingJobCommandInput} for command's `input` shape.
 * @see {@link StartMLDataProcessingJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *  <p>Raised when a specified machine-learning resource could not be found.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 */
export class StartMLDataProcessingJobCommand extends $Command<
  StartMLDataProcessingJobCommandInput,
  StartMLDataProcessingJobCommandOutput,
  NeptunedataClientResolvedConfig
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
  constructor(readonly input: StartMLDataProcessingJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptunedataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMLDataProcessingJobCommandInput, StartMLDataProcessingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMLDataProcessingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "StartMLDataProcessingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "StartMLDataProcessingJob",
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
  private serialize(input: StartMLDataProcessingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMLDataProcessingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMLDataProcessingJobCommandOutput> {
    return de_StartMLDataProcessingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
