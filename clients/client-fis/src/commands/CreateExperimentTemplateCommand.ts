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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { CreateExperimentTemplateRequest, CreateExperimentTemplateResponse } from "../models/models_0";
import { de_CreateExperimentTemplateCommand, se_CreateExperimentTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateExperimentTemplateCommand}.
 */
export interface CreateExperimentTemplateCommandInput extends CreateExperimentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateExperimentTemplateCommand}.
 */
export interface CreateExperimentTemplateCommandOutput extends CreateExperimentTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an experiment template. </p>
 *          <p>An experiment template includes the following components:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Targets</b>: A target can be a specific resource in
 *                your Amazon Web Services environment, or one or more resources that match criteria that you
 *                specify, for example, resources that have specific tags.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Actions</b>: The actions to carry out on the
 *                target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Stop conditions</b>: If a stop condition is
 *                triggered while an experiment is running, the experiment is automatically
 *                stopped. You can define a stop condition as a CloudWatch alarm.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, CreateExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, CreateExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // CreateExperimentTemplateRequest
 *   clientToken: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   stopConditions: [ // CreateExperimentTemplateStopConditionInputList // required
 *     { // CreateExperimentTemplateStopConditionInput
 *       source: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   targets: { // CreateExperimentTemplateTargetInputMap
 *     "<keys>": { // CreateExperimentTemplateTargetInput
 *       resourceType: "STRING_VALUE", // required
 *       resourceArns: [ // ResourceArnList
 *         "STRING_VALUE",
 *       ],
 *       resourceTags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       filters: [ // ExperimentTemplateTargetFilterInputList
 *         { // ExperimentTemplateTargetInputFilter
 *           path: "STRING_VALUE", // required
 *           values: [ // ExperimentTemplateTargetFilterValues // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       selectionMode: "STRING_VALUE", // required
 *       parameters: { // ExperimentTemplateTargetParameterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   actions: { // CreateExperimentTemplateActionInputMap // required
 *     "<keys>": { // CreateExperimentTemplateActionInput
 *       actionId: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       parameters: { // ExperimentTemplateActionParameterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       targets: { // ExperimentTemplateActionTargetMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       startAfter: [ // ExperimentTemplateActionStartAfterList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   logConfiguration: { // CreateExperimentTemplateLogConfigurationInput
 *     cloudWatchLogsConfiguration: { // ExperimentTemplateCloudWatchLogsLogConfigurationInput
 *       logGroupArn: "STRING_VALUE", // required
 *     },
 *     s3Configuration: { // ExperimentTemplateS3LogConfigurationInput
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *     },
 *     logSchemaVersion: Number("int"), // required
 *   },
 * };
 * const command = new CreateExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateExperimentTemplateResponse
 * //   experimentTemplate: { // ExperimentTemplate
 * //     id: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     targets: { // ExperimentTemplateTargetMap
 * //       "<keys>": { // ExperimentTemplateTarget
 * //         resourceType: "STRING_VALUE",
 * //         resourceArns: [ // ResourceArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         resourceTags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         filters: [ // ExperimentTemplateTargetFilterList
 * //           { // ExperimentTemplateTargetFilter
 * //             path: "STRING_VALUE",
 * //             values: [ // ExperimentTemplateTargetFilterValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         selectionMode: "STRING_VALUE",
 * //         parameters: { // ExperimentTemplateTargetParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     actions: { // ExperimentTemplateActionMap
 * //       "<keys>": { // ExperimentTemplateAction
 * //         actionId: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         parameters: { // ExperimentTemplateActionParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         targets: { // ExperimentTemplateActionTargetMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         startAfter: [ // ExperimentTemplateActionStartAfterList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     stopConditions: [ // ExperimentTemplateStopConditionList
 * //       { // ExperimentTemplateStopCondition
 * //         source: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //     roleArn: "STRING_VALUE",
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     logConfiguration: { // ExperimentTemplateLogConfiguration
 * //       cloudWatchLogsConfiguration: { // ExperimentTemplateCloudWatchLogsLogConfiguration
 * //         logGroupArn: "STRING_VALUE",
 * //       },
 * //       s3Configuration: { // ExperimentTemplateS3LogConfiguration
 * //         bucketName: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       logSchemaVersion: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateExperimentTemplateCommandInput - {@link CreateExperimentTemplateCommandInput}
 * @returns {@link CreateExperimentTemplateCommandOutput}
 * @see {@link CreateExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 */
export class CreateExperimentTemplateCommand extends $Command<
  CreateExperimentTemplateCommandInput,
  CreateExperimentTemplateCommandOutput,
  FisClientResolvedConfig
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
  constructor(readonly input: CreateExperimentTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExperimentTemplateCommandInput, CreateExperimentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExperimentTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "CreateExperimentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FaultInjectionSimulator",
        operation: "CreateExperimentTemplate",
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
  private serialize(input: CreateExperimentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateExperimentTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExperimentTemplateCommandOutput> {
    return de_CreateExperimentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
