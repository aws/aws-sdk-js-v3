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
import { StartExperimentRequest, StartExperimentResponse } from "../models/models_0";
import { de_StartExperimentCommand, se_StartExperimentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartExperimentCommand}.
 */
export interface StartExperimentCommandInput extends StartExperimentRequest {}
/**
 * @public
 *
 * The output of {@link StartExperimentCommand}.
 */
export interface StartExperimentCommandOutput extends StartExperimentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts running an experiment from the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, StartExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, StartExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // StartExperimentRequest
 *   clientToken: "STRING_VALUE", // required
 *   experimentTemplateId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartExperimentCommand(input);
 * const response = await client.send(command);
 * // { // StartExperimentResponse
 * //   experiment: { // Experiment
 * //     id: "STRING_VALUE",
 * //     experimentTemplateId: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     state: { // ExperimentState
 * //       status: "pending" || "initiating" || "running" || "completed" || "stopping" || "stopped" || "failed",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     targets: { // ExperimentTargetMap
 * //       "<keys>": { // ExperimentTarget
 * //         resourceType: "STRING_VALUE",
 * //         resourceArns: [ // ResourceArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         resourceTags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         filters: [ // ExperimentTargetFilterList
 * //           { // ExperimentTargetFilter
 * //             path: "STRING_VALUE",
 * //             values: [ // ExperimentTargetFilterValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         selectionMode: "STRING_VALUE",
 * //         parameters: { // ExperimentTargetParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     actions: { // ExperimentActionMap
 * //       "<keys>": { // ExperimentAction
 * //         actionId: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         parameters: { // ExperimentActionParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         targets: { // ExperimentActionTargetMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         startAfter: [ // ExperimentActionStartAfterList
 * //           "STRING_VALUE",
 * //         ],
 * //         state: { // ExperimentActionState
 * //           status: "pending" || "initiating" || "running" || "completed" || "cancelled" || "stopping" || "stopped" || "failed",
 * //           reason: "STRING_VALUE",
 * //         },
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     stopConditions: [ // ExperimentStopConditionList
 * //       { // ExperimentStopCondition
 * //         source: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     logConfiguration: { // ExperimentLogConfiguration
 * //       cloudWatchLogsConfiguration: { // ExperimentCloudWatchLogsLogConfiguration
 * //         logGroupArn: "STRING_VALUE",
 * //       },
 * //       s3Configuration: { // ExperimentS3LogConfiguration
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
 * @param StartExperimentCommandInput - {@link StartExperimentCommandInput}
 * @returns {@link StartExperimentCommandOutput}
 * @see {@link StartExperimentCommandInput} for command's `input` shape.
 * @see {@link StartExperimentCommandOutput} for command's `response` shape.
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
export class StartExperimentCommand extends $Command<
  StartExperimentCommandInput,
  StartExperimentCommandOutput,
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
  constructor(readonly input: StartExperimentCommandInput) {
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
  ): Handler<StartExperimentCommandInput, StartExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExperimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "StartExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FaultInjectionSimulator",
        operation: "StartExperiment",
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
  private serialize(input: StartExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartExperimentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExperimentCommandOutput> {
    return de_StartExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
