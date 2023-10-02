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

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { GetModelCustomizationJobRequest, GetModelCustomizationJobResponse } from "../models/models_0";
import { de_GetModelCustomizationJobCommand, se_GetModelCustomizationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetModelCustomizationJobCommand}.
 */
export interface GetModelCustomizationJobCommandInput extends GetModelCustomizationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetModelCustomizationJobCommand}.
 */
export interface GetModelCustomizationJobCommandOutput extends GetModelCustomizationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the properties associated with a model-customization job, including the status of the job.
 *             For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelCustomizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelCustomizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetModelCustomizationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetModelCustomizationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetModelCustomizationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * //   jobName: "STRING_VALUE", // required
 * //   outputModelName: "STRING_VALUE", // required
 * //   outputModelArn: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //   failureMessage: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   baseModelArn: "STRING_VALUE", // required
 * //   hyperParameters: { // ModelCustomizationHyperParameters // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   trainingDataConfig: { // TrainingDataConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   validationDataConfig: { // ValidationDataConfig
 * //     validators: [ // Validators // required
 * //       { // Validator
 * //         s3Uri: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   outputDataConfig: { // OutputDataConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   outputModelKmsKeyArn: "STRING_VALUE",
 * //   trainingMetrics: { // TrainingMetrics
 * //     trainingLoss: Number("float"),
 * //   },
 * //   validationMetrics: [ // ValidationMetrics
 * //     { // ValidatorMetric
 * //       validationLoss: Number("float"),
 * //     },
 * //   ],
 * //   vpcConfig: { // VpcConfig
 * //     subnetIds: [ // SubnetIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetModelCustomizationJobCommandInput - {@link GetModelCustomizationJobCommandInput}
 * @returns {@link GetModelCustomizationJobCommandOutput}
 * @see {@link GetModelCustomizationJobCommandInput} for command's `input` shape.
 * @see {@link GetModelCustomizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 */
export class GetModelCustomizationJobCommand extends $Command<
  GetModelCustomizationJobCommandInput,
  GetModelCustomizationJobCommandOutput,
  BedrockClientResolvedConfig
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
  constructor(readonly input: GetModelCustomizationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetModelCustomizationJobCommandInput, GetModelCustomizationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetModelCustomizationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockClient";
    const commandName = "GetModelCustomizationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockControlPlaneService",
        operation: "GetModelCustomizationJob",
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
  private serialize(input: GetModelCustomizationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetModelCustomizationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetModelCustomizationJobCommandOutput> {
    return de_GetModelCustomizationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
