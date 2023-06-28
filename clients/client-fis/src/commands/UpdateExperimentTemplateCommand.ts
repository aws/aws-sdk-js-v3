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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { UpdateExperimentTemplateRequest, UpdateExperimentTemplateResponse } from "../models/models_0";
import { de_UpdateExperimentTemplateCommand, se_UpdateExperimentTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateExperimentTemplateCommand}.
 */
export interface UpdateExperimentTemplateCommandInput extends UpdateExperimentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExperimentTemplateCommand}.
 */
export interface UpdateExperimentTemplateCommandOutput extends UpdateExperimentTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, UpdateExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, UpdateExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // UpdateExperimentTemplateRequest
 *   id: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   stopConditions: [ // UpdateExperimentTemplateStopConditionInputList
 *     { // UpdateExperimentTemplateStopConditionInput
 *       source: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   targets: { // UpdateExperimentTemplateTargetInputMap
 *     "<keys>": { // UpdateExperimentTemplateTargetInput
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
 *   actions: { // UpdateExperimentTemplateActionInputMap
 *     "<keys>": { // UpdateExperimentTemplateActionInputItem
 *       actionId: "STRING_VALUE",
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
 *   roleArn: "STRING_VALUE",
 *   logConfiguration: { // UpdateExperimentTemplateLogConfigurationInput
 *     cloudWatchLogsConfiguration: { // ExperimentTemplateCloudWatchLogsLogConfigurationInput
 *       logGroupArn: "STRING_VALUE", // required
 *     },
 *     s3Configuration: { // ExperimentTemplateS3LogConfigurationInput
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *     },
 *     logSchemaVersion: Number("int"),
 *   },
 * };
 * const command = new UpdateExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExperimentTemplateResponse
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
 * @param UpdateExperimentTemplateCommandInput - {@link UpdateExperimentTemplateCommandInput}
 * @returns {@link UpdateExperimentTemplateCommandOutput}
 * @see {@link UpdateExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
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
export class UpdateExperimentTemplateCommand extends $Command<
  UpdateExperimentTemplateCommandInput,
  UpdateExperimentTemplateCommandOutput,
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
  constructor(readonly input: UpdateExperimentTemplateCommandInput) {
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
  ): Handler<UpdateExperimentTemplateCommandInput, UpdateExperimentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateExperimentTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "UpdateExperimentTemplateCommand";
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
  private serialize(input: UpdateExperimentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateExperimentTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateExperimentTemplateCommandOutput> {
    return de_UpdateExperimentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
