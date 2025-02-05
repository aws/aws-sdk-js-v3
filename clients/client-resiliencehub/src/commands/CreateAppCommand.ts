// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAppRequest,
  CreateAppRequestFilterSensitiveLog,
  CreateAppResponse,
  CreateAppResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAppCommand, se_CreateAppCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppCommand}.
 */
export interface CreateAppCommandInput extends CreateAppRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppCommand}.
 */
export interface CreateAppCommandOutput extends CreateAppResponse, __MetadataBearer {}

/**
 * <p>Creates an Resilience Hub application. An Resilience Hub application is a
 *       collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an
 *       application name, resources from one or more CloudFormation stacks, Resource Groups, Terraform state files, AppRegistry applications, and an appropriate
 *       resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information
 *       about the number of resources supported per application, see <a href="https://docs.aws.amazon.com/general/latest/gr/resiliencehub.html#limits_resiliencehub">Service
 *       quotas</a>.</p>
 *          <p>After you create an Resilience Hub application, you publish it so that you can run
 *       a resiliency assessment on it. You can then use recommendations from the assessment to improve
 *       resiliency by running another assessment, comparing results, and then iterating the process
 *       until you achieve your goals for recovery time objective (RTO) and recovery point objective
 *       (RPO).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, CreateAppCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, CreateAppCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResiliencehubClient(config);
 * const input = { // CreateAppRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   policyArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   assessmentSchedule: "Disabled" || "Daily",
 *   permissionModel: { // PermissionModel
 *     type: "LegacyIAMUser" || "RoleBased", // required
 *     invokerRoleName: "STRING_VALUE",
 *     crossAccountRoleArns: [ // IamRoleArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   eventSubscriptions: [ // EventSubscriptionList
 *     { // EventSubscription
 *       name: "STRING_VALUE", // required
 *       eventType: "ScheduledAssessmentFailure" || "DriftDetected", // required
 *       snsTopicArn: "STRING_VALUE",
 *     },
 *   ],
 *   awsApplicationArn: "STRING_VALUE",
 * };
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppResponse
 * //   app: { // App
 * //     appArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     policyArn: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     status: "Active" || "Deleting",
 * //     complianceStatus: "PolicyBreached" || "PolicyMet" || "NotAssessed" || "ChangesDetected" || "NotApplicable" || "MissingPolicy",
 * //     lastAppComplianceEvaluationTime: new Date("TIMESTAMP"),
 * //     resiliencyScore: Number("double"),
 * //     lastResiliencyScoreEvaluationTime: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     assessmentSchedule: "Disabled" || "Daily",
 * //     permissionModel: { // PermissionModel
 * //       type: "LegacyIAMUser" || "RoleBased", // required
 * //       invokerRoleName: "STRING_VALUE",
 * //       crossAccountRoleArns: [ // IamRoleArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     eventSubscriptions: [ // EventSubscriptionList
 * //       { // EventSubscription
 * //         name: "STRING_VALUE", // required
 * //         eventType: "ScheduledAssessmentFailure" || "DriftDetected", // required
 * //         snsTopicArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     driftStatus: "NotChecked" || "NotDetected" || "Detected",
 * //     lastDriftEvaluationTime: new Date("TIMESTAMP"),
 * //     rtoInSecs: Number("int"),
 * //     rpoInSecs: Number("int"),
 * //     awsApplicationArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAppCommandInput - {@link CreateAppCommandInput}
 * @returns {@link CreateAppCommandOutput}
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 * @public
 */
export class CreateAppCommand extends $Command
  .classBuilder<
    CreateAppCommandInput,
    CreateAppCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "CreateApp", {})
  .n("ResiliencehubClient", "CreateAppCommand")
  .f(CreateAppRequestFilterSensitiveLog, CreateAppResponseFilterSensitiveLog)
  .ser(se_CreateAppCommand)
  .de(de_CreateAppCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppRequest;
      output: CreateAppResponse;
    };
    sdk: {
      input: CreateAppCommandInput;
      output: CreateAppCommandOutput;
    };
  };
}
