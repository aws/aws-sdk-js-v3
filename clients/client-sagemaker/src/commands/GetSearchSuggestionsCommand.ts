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

import { GetSearchSuggestionsRequest, GetSearchSuggestionsResponse } from "../models/models_3";
import { de_GetSearchSuggestionsCommand, se_GetSearchSuggestionsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSearchSuggestionsCommand}.
 */
export interface GetSearchSuggestionsCommandInput extends GetSearchSuggestionsRequest {}
/**
 * @public
 *
 * The output of {@link GetSearchSuggestionsCommand}.
 */
export interface GetSearchSuggestionsCommandOutput extends GetSearchSuggestionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>An auto-complete API for the search functionality in the SageMaker console. It returns
 *       suggestions of possible matches for the property name to use in <code>Search</code>
 *       queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and
 *       <code>Metrics</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetSearchSuggestionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetSearchSuggestionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // GetSearchSuggestionsRequest
 *   Resource: "TrainingJob" || "Experiment" || "ExperimentTrial" || "ExperimentTrialComponent" || "Endpoint" || "ModelPackage" || "ModelPackageGroup" || "Pipeline" || "PipelineExecution" || "FeatureGroup" || "Project" || "FeatureMetadata" || "HyperParameterTuningJob" || "ModelCard" || "Model", // required
 *   SuggestionQuery: { // SuggestionQuery
 *     PropertyNameQuery: { // PropertyNameQuery
 *       PropertyNameHint: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new GetSearchSuggestionsCommand(input);
 * const response = await client.send(command);
 * // { // GetSearchSuggestionsResponse
 * //   PropertyNameSuggestions: [ // PropertyNameSuggestionList
 * //     { // PropertyNameSuggestion
 * //       PropertyName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSearchSuggestionsCommandInput - {@link GetSearchSuggestionsCommandInput}
 * @returns {@link GetSearchSuggestionsCommandOutput}
 * @see {@link GetSearchSuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetSearchSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class GetSearchSuggestionsCommand extends $Command<
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput,
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
  constructor(readonly input: GetSearchSuggestionsCommandInput) {
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
  ): Handler<GetSearchSuggestionsCommandInput, GetSearchSuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSearchSuggestionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetSearchSuggestionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "GetSearchSuggestions",
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
  private serialize(input: GetSearchSuggestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSearchSuggestionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSearchSuggestionsCommandOutput> {
    return de_GetSearchSuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
