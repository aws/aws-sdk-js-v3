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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateModelRequest, CreateModelResponse } from "../models/models_0";
import { de_CreateModelCommand, se_CreateModelCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCommand}.
 */
export interface CreateModelCommandInput extends CreateModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCommand}.
 */
export interface CreateModelCommandOutput extends CreateModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a machine learning model for data inference. </p>
 *          <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data.
 *          In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal
 *          behavior that could be potential equipment failure (or maintenance events). The models are
 *          made by analyzing normal data and abnormalities in machine behavior that have already
 *          occurred.</p>
 *          <p>Your model is trained using a portion of the data from your dataset and uses that data
 *          to learn patterns of normal behavior and abnormal patterns that lead to equipment failure.
 *          Another portion of the data is used to evaluate the model's accuracy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateModelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateModelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // CreateModelRequest
 *   ModelName: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE", // required
 *   DatasetSchema: { // DatasetSchema
 *     InlineDataSchema: "STRING_VALUE",
 *   },
 *   LabelsInputConfiguration: { // LabelsInputConfiguration
 *     S3InputConfiguration: { // LabelsS3InputConfiguration
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *     },
 *     LabelGroupName: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE", // required
 *   TrainingDataStartTime: new Date("TIMESTAMP"),
 *   TrainingDataEndTime: new Date("TIMESTAMP"),
 *   EvaluationDataStartTime: new Date("TIMESTAMP"),
 *   EvaluationDataEndTime: new Date("TIMESTAMP"),
 *   RoleArn: "STRING_VALUE",
 *   DataPreProcessingConfiguration: { // DataPreProcessingConfiguration
 *     TargetSamplingRate: "PT1S" || "PT5S" || "PT10S" || "PT15S" || "PT30S" || "PT1M" || "PT5M" || "PT10M" || "PT15M" || "PT30M" || "PT1H",
 *   },
 *   ServerSideKmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   OffCondition: "STRING_VALUE",
 * };
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelResponse
 * //   ModelArn: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS",
 * // };
 *
 * ```
 *
 * @param CreateModelCommandInput - {@link CreateModelCommandInput}
 * @returns {@link CreateModelCommandOutput}
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> Resource limitations have been exceeded. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class CreateModelCommand extends $Command<
  CreateModelCommandInput,
  CreateModelCommandOutput,
  LookoutEquipmentClientResolvedConfig
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
  constructor(readonly input: CreateModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateModelCommandInput, CreateModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "CreateModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLookoutEquipmentFrontendService",
        operation: "CreateModel",
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
  private serialize(input: CreateModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelCommandOutput> {
    return de_CreateModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
