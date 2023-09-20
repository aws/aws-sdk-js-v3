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

import { ListInferenceRecommendationsJobsRequest, ListInferenceRecommendationsJobsResponse } from "../models/models_3";
import {
  de_ListInferenceRecommendationsJobsCommand,
  se_ListInferenceRecommendationsJobsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceRecommendationsJobsCommand}.
 */
export interface ListInferenceRecommendationsJobsCommandInput extends ListInferenceRecommendationsJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListInferenceRecommendationsJobsCommand}.
 */
export interface ListInferenceRecommendationsJobsCommandOutput
  extends ListInferenceRecommendationsJobsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists recommendation jobs that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListInferenceRecommendationsJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListInferenceRecommendationsJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListInferenceRecommendationsJobsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOPPING" || "STOPPED",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ModelNameEquals: "STRING_VALUE",
 *   ModelPackageVersionArnEquals: "STRING_VALUE",
 * };
 * const command = new ListInferenceRecommendationsJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceRecommendationsJobsResponse
 * //   InferenceRecommendationsJobs: [ // InferenceRecommendationsJobs // required
 * //     { // InferenceRecommendationsJob
 * //       JobName: "STRING_VALUE", // required
 * //       JobDescription: "STRING_VALUE", // required
 * //       JobType: "Default" || "Advanced", // required
 * //       JobArn: "STRING_VALUE", // required
 * //       Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       RoleArn: "STRING_VALUE", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       FailureReason: "STRING_VALUE",
 * //       ModelName: "STRING_VALUE",
 * //       SamplePayloadUrl: "STRING_VALUE",
 * //       ModelPackageVersionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInferenceRecommendationsJobsCommandInput - {@link ListInferenceRecommendationsJobsCommandInput}
 * @returns {@link ListInferenceRecommendationsJobsCommandOutput}
 * @see {@link ListInferenceRecommendationsJobsCommandInput} for command's `input` shape.
 * @see {@link ListInferenceRecommendationsJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListInferenceRecommendationsJobsCommand extends $Command<
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListInferenceRecommendationsJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInferenceRecommendationsJobsCommandInput, ListInferenceRecommendationsJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInferenceRecommendationsJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListInferenceRecommendationsJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListInferenceRecommendationsJobs",
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
  private serialize(
    input: ListInferenceRecommendationsJobsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListInferenceRecommendationsJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListInferenceRecommendationsJobsCommandOutput> {
    return de_ListInferenceRecommendationsJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
