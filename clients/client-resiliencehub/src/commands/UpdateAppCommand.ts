// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAppRequest, UpdateAppResponse, UpdateAppResponseFilterSensitiveLog } from "../models/models_0";
import { de_UpdateAppCommand, se_UpdateAppCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandInput extends UpdateAppRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandOutput extends UpdateAppResponse, __MetadataBearer {}

/**
 * <p>Updates an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, UpdateAppCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, UpdateAppCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // UpdateAppRequest
 *   appArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   policyArn: "STRING_VALUE",
 *   clearResiliencyPolicyArn: true || false,
 *   assessmentSchedule: "STRING_VALUE",
 *   permissionModel: { // PermissionModel
 *     type: "STRING_VALUE", // required
 *     invokerRoleName: "STRING_VALUE",
 *     crossAccountRoleArns: [ // IamRoleArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   eventSubscriptions: [ // EventSubscriptionList
 *     { // EventSubscription
 *       name: "STRING_VALUE", // required
 *       eventType: "STRING_VALUE", // required
 *       snsTopicArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateAppCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppResponse
 * //   app: { // App
 * //     appArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     policyArn: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE",
 * //     complianceStatus: "STRING_VALUE",
 * //     lastAppComplianceEvaluationTime: new Date("TIMESTAMP"),
 * //     resiliencyScore: Number("double"),
 * //     lastResiliencyScoreEvaluationTime: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     assessmentSchedule: "STRING_VALUE",
 * //     permissionModel: { // PermissionModel
 * //       type: "STRING_VALUE", // required
 * //       invokerRoleName: "STRING_VALUE",
 * //       crossAccountRoleArns: [ // IamRoleArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     eventSubscriptions: [ // EventSubscriptionList
 * //       { // EventSubscription
 * //         name: "STRING_VALUE", // required
 * //         eventType: "STRING_VALUE", // required
 * //         snsTopicArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     driftStatus: "STRING_VALUE",
 * //     lastDriftEvaluationTime: new Date("TIMESTAMP"),
 * //     rtoInSecs: Number("int"),
 * //     rpoInSecs: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAppCommandInput - {@link UpdateAppCommandInput}
 * @returns {@link UpdateAppCommandOutput}
 * @see {@link UpdateAppCommandInput} for command's `input` shape.
 * @see {@link UpdateAppCommandOutput} for command's `response` shape.
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
export class UpdateAppCommand extends $Command
  .classBuilder<
    UpdateAppCommandInput,
    UpdateAppCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "UpdateApp", {})
  .n("ResiliencehubClient", "UpdateAppCommand")
  .f(void 0, UpdateAppResponseFilterSensitiveLog)
  .ser(se_UpdateAppCommand)
  .de(de_UpdateAppCommand)
  .build() {}
