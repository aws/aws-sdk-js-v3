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
import {
  UpdateApplicationRequest,
  UpdateApplicationRequestFilterSensitiveLog,
  UpdateApplicationResponse,
  UpdateApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateApplicationCommand, se_UpdateApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a specified application. An application has to be in a stopped or created state
 *          in order to be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, UpdateApplicationCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, UpdateApplicationCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const input = { // UpdateApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   initialCapacity: { // InitialCapacityConfigMap
 *     "<keys>": { // InitialCapacityConfig
 *       workerCount: Number("long"), // required
 *       workerConfiguration: { // WorkerResourceConfig
 *         cpu: "STRING_VALUE", // required
 *         memory: "STRING_VALUE", // required
 *         disk: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   maximumCapacity: { // MaximumAllowedResources
 *     cpu: "STRING_VALUE", // required
 *     memory: "STRING_VALUE", // required
 *     disk: "STRING_VALUE",
 *   },
 *   autoStartConfiguration: { // AutoStartConfig
 *     enabled: true || false,
 *   },
 *   autoStopConfiguration: { // AutoStopConfig
 *     enabled: true || false,
 *     idleTimeoutMinutes: Number("int"),
 *   },
 *   networkConfiguration: { // NetworkConfiguration
 *     subnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   architecture: "STRING_VALUE",
 *   imageConfiguration: { // ImageConfigurationInput
 *     imageUri: "STRING_VALUE",
 *   },
 *   workerTypeSpecifications: { // WorkerTypeSpecificationInputMap
 *     "<keys>": { // WorkerTypeSpecificationInput
 *       imageConfiguration: {
 *         imageUri: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   releaseLabel: "STRING_VALUE",
 *   runtimeConfiguration: [ // ConfigurationList
 *     { // Configuration
 *       classification: "STRING_VALUE", // required
 *       properties: { // SensitivePropertiesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       configurations: [
 *         {
 *           classification: "STRING_VALUE", // required
 *           properties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           configurations: "<ConfigurationList>",
 *         },
 *       ],
 *     },
 *   ],
 *   monitoringConfiguration: { // MonitoringConfiguration
 *     s3MonitoringConfiguration: { // S3MonitoringConfiguration
 *       logUri: "STRING_VALUE",
 *       encryptionKeyArn: "STRING_VALUE",
 *     },
 *     managedPersistenceMonitoringConfiguration: { // ManagedPersistenceMonitoringConfiguration
 *       enabled: true || false,
 *       encryptionKeyArn: "STRING_VALUE",
 *     },
 *     cloudWatchLoggingConfiguration: { // CloudWatchLoggingConfiguration
 *       enabled: true || false, // required
 *       logGroupName: "STRING_VALUE",
 *       logStreamNamePrefix: "STRING_VALUE",
 *       encryptionKeyArn: "STRING_VALUE",
 *       logTypes: { // LogTypeMap
 *         "<keys>": [ // LogTypeList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationResponse
 * //   application: { // Application
 * //     applicationId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     releaseLabel: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     state: "STRING_VALUE", // required
 * //     stateDetails: "STRING_VALUE",
 * //     initialCapacity: { // InitialCapacityConfigMap
 * //       "<keys>": { // InitialCapacityConfig
 * //         workerCount: Number("long"), // required
 * //         workerConfiguration: { // WorkerResourceConfig
 * //           cpu: "STRING_VALUE", // required
 * //           memory: "STRING_VALUE", // required
 * //           disk: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     maximumCapacity: { // MaximumAllowedResources
 * //       cpu: "STRING_VALUE", // required
 * //       memory: "STRING_VALUE", // required
 * //       disk: "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     autoStartConfiguration: { // AutoStartConfig
 * //       enabled: true || false,
 * //     },
 * //     autoStopConfiguration: { // AutoStopConfig
 * //       enabled: true || false,
 * //       idleTimeoutMinutes: Number("int"),
 * //     },
 * //     networkConfiguration: { // NetworkConfiguration
 * //       subnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     architecture: "STRING_VALUE",
 * //     imageConfiguration: { // ImageConfiguration
 * //       imageUri: "STRING_VALUE", // required
 * //       resolvedImageDigest: "STRING_VALUE",
 * //     },
 * //     workerTypeSpecifications: { // WorkerTypeSpecificationMap
 * //       "<keys>": { // WorkerTypeSpecification
 * //         imageConfiguration: {
 * //           imageUri: "STRING_VALUE", // required
 * //           resolvedImageDigest: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     runtimeConfiguration: [ // ConfigurationList
 * //       { // Configuration
 * //         classification: "STRING_VALUE", // required
 * //         properties: { // SensitivePropertiesMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         configurations: [
 * //           {
 * //             classification: "STRING_VALUE", // required
 * //             properties: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             configurations: "<ConfigurationList>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     monitoringConfiguration: { // MonitoringConfiguration
 * //       s3MonitoringConfiguration: { // S3MonitoringConfiguration
 * //         logUri: "STRING_VALUE",
 * //         encryptionKeyArn: "STRING_VALUE",
 * //       },
 * //       managedPersistenceMonitoringConfiguration: { // ManagedPersistenceMonitoringConfiguration
 * //         enabled: true || false,
 * //         encryptionKeyArn: "STRING_VALUE",
 * //       },
 * //       cloudWatchLoggingConfiguration: { // CloudWatchLoggingConfiguration
 * //         enabled: true || false, // required
 * //         logGroupName: "STRING_VALUE",
 * //         logStreamNamePrefix: "STRING_VALUE",
 * //         encryptionKeyArn: "STRING_VALUE",
 * //         logTypes: { // LogTypeMap
 * //           "<keys>": [ // LogTypeList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
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
export class UpdateApplicationCommand extends $Command<
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
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
  constructor(readonly input: UpdateApplicationCommandInput) {
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
  ): Handler<UpdateApplicationCommandInput, UpdateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRServerlessClient";
    const commandName = "UpdateApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateApplicationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsToledoWebService",
        operation: "UpdateApplication",
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
  private serialize(input: UpdateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApplicationCommandOutput> {
    return de_UpdateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
