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

import { DescribeFlowDefinitionRequest, DescribeFlowDefinitionResponse } from "../models/models_2";
import { de_DescribeFlowDefinitionCommand, se_DescribeFlowDefinitionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowDefinitionCommand}.
 */
export interface DescribeFlowDefinitionCommandInput extends DescribeFlowDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowDefinitionCommand}.
 */
export interface DescribeFlowDefinitionCommandOutput extends DescribeFlowDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFlowDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeFlowDefinitionRequest
 *   FlowDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowDefinitionResponse
 * //   FlowDefinitionArn: "STRING_VALUE", // required
 * //   FlowDefinitionName: "STRING_VALUE", // required
 * //   FlowDefinitionStatus: "Initializing" || "Active" || "Failed" || "Deleting", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   HumanLoopRequestSource: { // HumanLoopRequestSource
 * //     AwsManagedHumanLoopRequestSource: "AWS/Rekognition/DetectModerationLabels/Image/V3" || "AWS/Textract/AnalyzeDocument/Forms/V1", // required
 * //   },
 * //   HumanLoopActivationConfig: { // HumanLoopActivationConfig
 * //     HumanLoopActivationConditionsConfig: { // HumanLoopActivationConditionsConfig
 * //       HumanLoopActivationConditions: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   HumanLoopConfig: { // HumanLoopConfig
 * //     WorkteamArn: "STRING_VALUE", // required
 * //     HumanTaskUiArn: "STRING_VALUE", // required
 * //     TaskTitle: "STRING_VALUE", // required
 * //     TaskDescription: "STRING_VALUE", // required
 * //     TaskCount: Number("int"), // required
 * //     TaskAvailabilityLifetimeInSeconds: Number("int"),
 * //     TaskTimeLimitInSeconds: Number("int"),
 * //     TaskKeywords: [ // FlowDefinitionTaskKeywords
 * //       "STRING_VALUE",
 * //     ],
 * //     PublicWorkforceTaskPrice: { // PublicWorkforceTaskPrice
 * //       AmountInUsd: { // USD
 * //         Dollars: Number("int"),
 * //         Cents: Number("int"),
 * //         TenthFractionsOfACent: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   OutputConfig: { // FlowDefinitionOutputConfig
 * //     S3OutputPath: "STRING_VALUE", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   RoleArn: "STRING_VALUE", // required
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFlowDefinitionCommandInput - {@link DescribeFlowDefinitionCommandInput}
 * @returns {@link DescribeFlowDefinitionCommandOutput}
 * @see {@link DescribeFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeFlowDefinitionCommand extends $Command<
  DescribeFlowDefinitionCommandInput,
  DescribeFlowDefinitionCommandOutput,
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
  constructor(readonly input: DescribeFlowDefinitionCommandInput) {
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
  ): Handler<DescribeFlowDefinitionCommandInput, DescribeFlowDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFlowDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeFlowDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeFlowDefinition",
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
  private serialize(input: DescribeFlowDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFlowDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFlowDefinitionCommandOutput> {
    return de_DescribeFlowDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
