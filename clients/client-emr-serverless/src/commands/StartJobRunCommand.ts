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

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { StartJobRunRequest, StartJobRunRequestFilterSensitiveLog, StartJobRunResponse } from "../models/models_0";
import { de_StartJobRunCommand, se_StartJobRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartJobRunCommand}.
 */
export interface StartJobRunCommandInput extends StartJobRunRequest {}
/**
 * @public
 *
 * The output of {@link StartJobRunCommand}.
 */
export interface StartJobRunCommandOutput extends StartJobRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, StartJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, StartJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const input = { // StartJobRunRequest
 *   applicationId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE", // required
 *   jobDriver: { // JobDriver Union: only one key present
 *     sparkSubmit: { // SparkSubmit
 *       entryPoint: "STRING_VALUE", // required
 *       entryPointArguments: [ // EntryPointArguments
 *         "STRING_VALUE",
 *       ],
 *       sparkSubmitParameters: "STRING_VALUE",
 *     },
 *     hive: { // Hive
 *       query: "STRING_VALUE", // required
 *       initQueryFile: "STRING_VALUE",
 *       parameters: "STRING_VALUE",
 *     },
 *   },
 *   configurationOverrides: { // ConfigurationOverrides
 *     applicationConfiguration: [ // ConfigurationList
 *       { // Configuration
 *         classification: "STRING_VALUE", // required
 *         properties: { // SensitivePropertiesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         configurations: [
 *           {
 *             classification: "STRING_VALUE", // required
 *             properties: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             configurations: "<ConfigurationList>",
 *           },
 *         ],
 *       },
 *     ],
 *     monitoringConfiguration: { // MonitoringConfiguration
 *       s3MonitoringConfiguration: { // S3MonitoringConfiguration
 *         logUri: "STRING_VALUE",
 *         encryptionKeyArn: "STRING_VALUE",
 *       },
 *       managedPersistenceMonitoringConfiguration: { // ManagedPersistenceMonitoringConfiguration
 *         enabled: true || false,
 *         encryptionKeyArn: "STRING_VALUE",
 *       },
 *       cloudWatchLoggingConfiguration: { // CloudWatchLoggingConfiguration
 *         enabled: true || false, // required
 *         logGroupName: "STRING_VALUE",
 *         logStreamNamePrefix: "STRING_VALUE",
 *         encryptionKeyArn: "STRING_VALUE",
 *         logTypes: { // LogTypeMap
 *           "<keys>": [ // LogTypeList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   executionTimeoutMinutes: Number("long"),
 *   name: "STRING_VALUE",
 * };
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * // { // StartJobRunResponse
 * //   applicationId: "STRING_VALUE", // required
 * //   jobRunId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartJobRunCommandInput - {@link StartJobRunCommandInput}
 * @returns {@link StartJobRunCommandOutput}
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 */
export class StartJobRunCommand extends $Command<
  StartJobRunCommandInput,
  StartJobRunCommandOutput,
  EMRServerlessClientResolvedConfig
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
  constructor(readonly input: StartJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartJobRunCommandInput, StartJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartJobRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRServerlessClient";
    const commandName = "StartJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartJobRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsToledoWebService",
        operation: "StartJobRun",
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
  private serialize(input: StartJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartJobRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartJobRunCommandOutput> {
    return de_StartJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
