// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { CreateDeploymentRequest, CreateDeploymentResponse } from "../models/models_0";
import { CreateDeployment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandInput extends CreateDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends CreateDeploymentResponse, __MetadataBearer {}

/**
 * <p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core
 *       devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass
 *       deploys that group's deployment to the new device.</p>
 *          <p>You can define one deployment for each target. When you create a new deployment for a
 *       target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the
 *       new deployment to the target devices.</p>
 *          <p>Every deployment has a revision number that indicates how many deployment revisions you
 *       define for a target. Use this operation to create a new revision of an existing
 *       deployment.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the
 *         <i>IoT Greengrass V2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, CreateDeploymentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, CreateDeploymentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // CreateDeploymentRequest
 *   targetArn: "STRING_VALUE", // required
 *   deploymentName: "STRING_VALUE",
 *   components: { // ComponentDeploymentSpecifications
 *     "<keys>": { // ComponentDeploymentSpecification
 *       componentVersion: "STRING_VALUE", // required
 *       configurationUpdate: { // ComponentConfigurationUpdate
 *         merge: "STRING_VALUE",
 *         reset: [ // ComponentConfigurationPathList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       runWith: { // ComponentRunWith
 *         posixUser: "STRING_VALUE",
 *         systemResourceLimits: { // SystemResourceLimits
 *           memory: Number("long"),
 *           cpus: Number("double"),
 *         },
 *         windowsUser: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   iotJobConfiguration: { // DeploymentIoTJobConfiguration
 *     jobExecutionsRolloutConfig: { // IoTJobExecutionsRolloutConfig
 *       exponentialRate: { // IoTJobExponentialRolloutRate
 *         baseRatePerMinute: Number("int"), // required
 *         incrementFactor: Number("double"), // required
 *         rateIncreaseCriteria: { // IoTJobRateIncreaseCriteria
 *           numberOfNotifiedThings: Number("int"),
 *           numberOfSucceededThings: Number("int"),
 *         },
 *       },
 *       maximumPerMinute: Number("int"),
 *     },
 *     abortConfig: { // IoTJobAbortConfig
 *       criteriaList: [ // IoTJobAbortCriteriaList // required
 *         { // IoTJobAbortCriteria
 *           failureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL", // required
 *           action: "CANCEL", // required
 *           thresholdPercentage: Number("double"), // required
 *           minNumberOfExecutedThings: Number("int"), // required
 *         },
 *       ],
 *     },
 *     timeoutConfig: { // IoTJobTimeoutConfig
 *       inProgressTimeoutInMinutes: Number("long"),
 *     },
 *   },
 *   deploymentPolicies: { // DeploymentPolicies
 *     failureHandlingPolicy: "ROLLBACK" || "DO_NOTHING",
 *     componentUpdatePolicy: { // DeploymentComponentUpdatePolicy
 *       timeoutInSeconds: Number("int"),
 *       action: "NOTIFY_COMPONENTS" || "SKIP_NOTIFY_COMPONENTS",
 *     },
 *     configurationValidationPolicy: { // DeploymentConfigurationValidationPolicy
 *       timeoutInSeconds: Number("int"),
 *     },
 *   },
 *   parentTargetArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentResponse
 * //   deploymentId: "STRING_VALUE",
 * //   iotJobId: "STRING_VALUE",
 * //   iotJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentCommandInput - {@link CreateDeploymentCommandInput}
 * @returns {@link CreateDeploymentCommandOutput}
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link RequestAlreadyInProgressException} (client fault)
 *  <p>The request is already in progress. This exception occurs when you use a client token for
 *       multiple requests while IoT Greengrass is still processing an earlier request that uses the same client
 *       token.</p>
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
 *
 * @public
 */
export class CreateDeploymentCommand extends $Command
  .classBuilder<
    CreateDeploymentCommandInput,
    CreateDeploymentCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "CreateDeployment", {})
  .n("GreengrassV2Client", "CreateDeploymentCommand")
  .sc(CreateDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentRequest;
      output: CreateDeploymentResponse;
    };
    sdk: {
      input: CreateDeploymentCommandInput;
      output: CreateDeploymentCommandOutput;
    };
  };
}
