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

import { CreateFlowDefinitionRequest, CreateFlowDefinitionResponse } from "../models/models_1";
import { de_CreateFlowDefinitionCommand, se_CreateFlowDefinitionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFlowDefinitionCommand}.
 */
export interface CreateFlowDefinitionCommandInput extends CreateFlowDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlowDefinitionCommand}.
 */
export interface CreateFlowDefinitionCommandOutput extends CreateFlowDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateFlowDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateFlowDefinitionRequest
 *   FlowDefinitionName: "STRING_VALUE", // required
 *   HumanLoopRequestSource: { // HumanLoopRequestSource
 *     AwsManagedHumanLoopRequestSource: "AWS/Rekognition/DetectModerationLabels/Image/V3" || "AWS/Textract/AnalyzeDocument/Forms/V1", // required
 *   },
 *   HumanLoopActivationConfig: { // HumanLoopActivationConfig
 *     HumanLoopActivationConditionsConfig: { // HumanLoopActivationConditionsConfig
 *       HumanLoopActivationConditions: "STRING_VALUE", // required
 *     },
 *   },
 *   HumanLoopConfig: { // HumanLoopConfig
 *     WorkteamArn: "STRING_VALUE", // required
 *     HumanTaskUiArn: "STRING_VALUE", // required
 *     TaskTitle: "STRING_VALUE", // required
 *     TaskDescription: "STRING_VALUE", // required
 *     TaskCount: Number("int"), // required
 *     TaskAvailabilityLifetimeInSeconds: Number("int"),
 *     TaskTimeLimitInSeconds: Number("int"),
 *     TaskKeywords: [ // FlowDefinitionTaskKeywords
 *       "STRING_VALUE",
 *     ],
 *     PublicWorkforceTaskPrice: { // PublicWorkforceTaskPrice
 *       AmountInUsd: { // USD
 *         Dollars: Number("int"),
 *         Cents: Number("int"),
 *         TenthFractionsOfACent: Number("int"),
 *       },
 *     },
 *   },
 *   OutputConfig: { // FlowDefinitionOutputConfig
 *     S3OutputPath: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFlowDefinitionResponse
 * //   FlowDefinitionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFlowDefinitionCommandInput - {@link CreateFlowDefinitionCommandInput}
 * @returns {@link CreateFlowDefinitionCommandOutput}
 * @see {@link CreateFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateFlowDefinitionCommand extends $Command<
  CreateFlowDefinitionCommandInput,
  CreateFlowDefinitionCommandOutput,
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
  constructor(readonly input: CreateFlowDefinitionCommandInput) {
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
  ): Handler<CreateFlowDefinitionCommandInput, CreateFlowDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFlowDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateFlowDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateFlowDefinition",
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
  private serialize(input: CreateFlowDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFlowDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlowDefinitionCommandOutput> {
    return de_CreateFlowDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
