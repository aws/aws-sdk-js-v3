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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { GetDeploymentRequest, GetDeploymentResponse } from "../models/models_0";
import { de_GetDeploymentCommand, se_GetDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandInput extends GetDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandOutput extends GetDeploymentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a deployment. Deployments define the components that run on Greengrass core devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetDeploymentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetDeploymentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = { // GetDeploymentRequest
 *   deploymentId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentResponse
 * //   targetArn: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * //   deploymentId: "STRING_VALUE",
 * //   deploymentName: "STRING_VALUE",
 * //   deploymentStatus: "ACTIVE" || "COMPLETED" || "CANCELED" || "FAILED" || "INACTIVE",
 * //   iotJobId: "STRING_VALUE",
 * //   iotJobArn: "STRING_VALUE",
 * //   components: { // ComponentDeploymentSpecifications
 * //     "<keys>": { // ComponentDeploymentSpecification
 * //       componentVersion: "STRING_VALUE",
 * //       configurationUpdate: { // ComponentConfigurationUpdate
 * //         merge: "STRING_VALUE",
 * //         reset: [ // ComponentConfigurationPathList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       runWith: { // ComponentRunWith
 * //         posixUser: "STRING_VALUE",
 * //         systemResourceLimits: { // SystemResourceLimits
 * //           memory: Number("long"),
 * //           cpus: Number("double"),
 * //         },
 * //         windowsUser: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   deploymentPolicies: { // DeploymentPolicies
 * //     failureHandlingPolicy: "ROLLBACK" || "DO_NOTHING",
 * //     componentUpdatePolicy: { // DeploymentComponentUpdatePolicy
 * //       timeoutInSeconds: Number("int"),
 * //       action: "NOTIFY_COMPONENTS" || "SKIP_NOTIFY_COMPONENTS",
 * //     },
 * //     configurationValidationPolicy: { // DeploymentConfigurationValidationPolicy
 * //       timeoutInSeconds: Number("int"),
 * //     },
 * //   },
 * //   iotJobConfiguration: { // DeploymentIoTJobConfiguration
 * //     jobExecutionsRolloutConfig: { // IoTJobExecutionsRolloutConfig
 * //       exponentialRate: { // IoTJobExponentialRolloutRate
 * //         baseRatePerMinute: Number("int"), // required
 * //         incrementFactor: Number("double"), // required
 * //         rateIncreaseCriteria: { // IoTJobRateIncreaseCriteria
 * //           numberOfNotifiedThings: Number("int"),
 * //           numberOfSucceededThings: Number("int"),
 * //         },
 * //       },
 * //       maximumPerMinute: Number("int"),
 * //     },
 * //     abortConfig: { // IoTJobAbortConfig
 * //       criteriaList: [ // IoTJobAbortCriteriaList // required
 * //         { // IoTJobAbortCriteria
 * //           failureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL", // required
 * //           action: "CANCEL", // required
 * //           thresholdPercentage: Number("double"), // required
 * //           minNumberOfExecutedThings: Number("int"), // required
 * //         },
 * //       ],
 * //     },
 * //     timeoutConfig: { // IoTJobTimeoutConfig
 * //       inProgressTimeoutInMinutes: Number("long"),
 * //     },
 * //   },
 * //   creationTimestamp: new Date("TIMESTAMP"),
 * //   isLatestForTarget: true || false,
 * //   parentTargetArn: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentCommandInput - {@link GetDeploymentCommandInput}
 * @returns {@link GetDeploymentCommandOutput}
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 */
export class GetDeploymentCommand extends $Command<
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
  GreengrassV2ClientResolvedConfig
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
  constructor(readonly input: GetDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeploymentCommandInput, GetDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDeploymentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "GetDeploymentCommand";
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
  private serialize(input: GetDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentCommandOutput> {
    return de_GetDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
