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

import { StartLoaderJobInput, StartLoaderJobOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_StartLoaderJobCommand, se_StartLoaderJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartLoaderJobCommand}.
 */
export interface StartLoaderJobCommandInput extends StartLoaderJobInput {}
/**
 * @public
 *
 * The output of {@link StartLoaderJobCommand}.
 */
export interface StartLoaderJobCommandOutput extends StartLoaderJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Starts a Neptune bulk loader job to load data from an Amazon S3
 *       bucket into a Neptune DB instance. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html">Using the Amazon Neptune
 *       Bulk Loader to Ingest Data</a>.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startloaderjob">neptune-db:StartLoaderJob</a>
 *       IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, StartLoaderJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, StartLoaderJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // StartLoaderJobInput
 *   source: "STRING_VALUE", // required
 *   format: "csv" || "opencypher" || "ntriples" || "nquads" || "rdfxml" || "turtle", // required
 *   s3BucketRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "sa-east-1" || "eu-north-1" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "me-south-1" || "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-south-1" || "cn-north-1" || "cn-northwest-1" || "us-gov-west-1" || "us-gov-east-1", // required
 *   iamRoleArn: "STRING_VALUE", // required
 *   mode: "RESUME" || "NEW" || "AUTO",
 *   failOnError: true || false,
 *   parallelism: "LOW" || "MEDIUM" || "HIGH" || "OVERSUBSCRIBE",
 *   parserConfiguration: { // StringValuedMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   updateSingleCardinalityProperties: true || false,
 *   queueRequest: true || false,
 *   dependencies: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   userProvidedEdgeIds: true || false,
 * };
 * const command = new StartLoaderJobCommand(input);
 * const response = await client.send(command);
 * // { // StartLoaderJobOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: { // StringValuedMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartLoaderJobCommandInput - {@link StartLoaderJobCommandInput}
 * @returns {@link StartLoaderJobCommandOutput}
 * @see {@link StartLoaderJobCommandInput} for command's `input` shape.
 * @see {@link StartLoaderJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link BulkLoadIdNotFoundException} (client fault)
 *  <p>Raised when a specified bulk-load job ID cannot be found.</p>
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
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Raised when the processing of the request failed unexpectedly.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link LoadUrlAccessDeniedException} (client fault)
 *  <p>Raised when access is denied to a specified load URL.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link S3Exception} (client fault)
 *  <p>Raised when there is a problem accessing Amazon S3.</p>
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
export class StartLoaderJobCommand extends $Command<
  StartLoaderJobCommandInput,
  StartLoaderJobCommandOutput,
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
  constructor(readonly input: StartLoaderJobCommandInput) {
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
  ): Handler<StartLoaderJobCommandInput, StartLoaderJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartLoaderJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "StartLoaderJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "StartLoaderJob",
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
  private serialize(input: StartLoaderJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartLoaderJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartLoaderJobCommandOutput> {
    return de_StartLoaderJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
