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
} from "@smithy/types";

import { DescribeBatchInferenceJobRequest, DescribeBatchInferenceJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeBatchInferenceJobCommand, se_DescribeBatchInferenceJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBatchInferenceJobCommand}.
 */
export interface DescribeBatchInferenceJobCommandInput extends DescribeBatchInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBatchInferenceJobCommand}.
 */
export interface DescribeBatchInferenceJobCommandOutput extends DescribeBatchInferenceJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the properties of a batch inference job including name, Amazon Resource Name (ARN),
 *       status, input and output configurations, and the ARN of the solution version used to generate
 *       the recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeBatchInferenceJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeBatchInferenceJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeBatchInferenceJobRequest
 *   batchInferenceJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeBatchInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchInferenceJobResponse
 * //   batchInferenceJob: { // BatchInferenceJob
 * //     jobName: "STRING_VALUE",
 * //     batchInferenceJobArn: "STRING_VALUE",
 * //     filterArn: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     solutionVersionArn: "STRING_VALUE",
 * //     numResults: Number("int"),
 * //     jobInput: { // BatchInferenceJobInput
 * //       s3DataSource: { // S3DataConfig
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     jobOutput: { // BatchInferenceJobOutput
 * //       s3DataDestination: {
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     batchInferenceJobConfig: { // BatchInferenceJobConfig
 * //       itemExplorationConfig: { // HyperParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBatchInferenceJobCommandInput - {@link DescribeBatchInferenceJobCommandInput}
 * @returns {@link DescribeBatchInferenceJobCommandOutput}
 * @see {@link DescribeBatchInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class DescribeBatchInferenceJobCommand extends $Command<
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: DescribeBatchInferenceJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBatchInferenceJobCommandInput, DescribeBatchInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBatchInferenceJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeBatchInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeBatchInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBatchInferenceJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBatchInferenceJobCommandOutput> {
    return de_DescribeBatchInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
