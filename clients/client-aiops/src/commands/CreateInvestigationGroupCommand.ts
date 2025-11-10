// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInvestigationGroupInput, CreateInvestigationGroupOutput } from "../models/models_0";
import { CreateInvestigationGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInvestigationGroupCommand}.
 */
export interface CreateInvestigationGroupCommandInput extends CreateInvestigationGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateInvestigationGroupCommand}.
 */
export interface CreateInvestigationGroupCommandOutput extends CreateInvestigationGroupOutput, __MetadataBearer {}

/**
 * <p>Creates an <i>investigation group</i> in your account. Creating an investigation group is a one-time setup task for each Region in your account. It is a necessary task to be able to perform investigations.</p> <p>Settings in the investigation group help you centrally manage the common properties of your investigations, such as the following:</p> <ul> <li> <p>Who can access the investigations</p> </li> <li> <p>Whether investigation data is encrypted with a customer managed Key Management Service key.</p> </li> <li> <p>How long investigations and their data are retained by default.</p> </li> </ul> <p>Currently, you can have one investigation group in each Region in your account. Each investigation in a Region is a part of the investigation group in that Region</p> <p>To create an investigation group and set up CloudWatch investigations, you must be signed in to an IAM principal that has either the <code>AIOpsConsoleAdminPolicy</code> or the <code>AdministratorAccess</code> IAM policy attached, or to an account that has similar permissions.</p> <important> <p>You can configure CloudWatch alarms to start investigations and add events to investigations. If you create your investigation group with <code>CreateInvestigationGroup</code> and you want to enable alarms to do this, you must use <code>PutInvestigationGroupPolicy</code> to create a resource policy that grants this permission to CloudWatch alarms. </p> <p>For more information about configuring CloudWatch alarms, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html">Using Amazon CloudWatch alarms</a> </p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, CreateInvestigationGroupCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, CreateInvestigationGroupCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // CreateInvestigationGroupInput
 *   name: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY",
 *     kmsKeyId: "STRING_VALUE",
 *   },
 *   retentionInDays: Number("long"),
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   tagKeyBoundaries: [ // TagKeyBoundaries
 *     "STRING_VALUE",
 *   ],
 *   chatbotNotificationChannel: { // ChatbotNotificationChannel
 *     "<keys>": [ // ChatConfigurationArns
 *       "STRING_VALUE",
 *     ],
 *   },
 *   isCloudTrailEventHistoryEnabled: true || false,
 *   crossAccountConfigurations: [ // CrossAccountConfigurations
 *     { // CrossAccountConfiguration
 *       sourceRoleArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateInvestigationGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateInvestigationGroupOutput
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateInvestigationGroupCommandInput - {@link CreateInvestigationGroupCommandInput}
 * @returns {@link CreateInvestigationGroupCommandOutput}
 * @see {@link CreateInvestigationGroupCommandInput} for command's `input` shape.
 * @see {@link CreateInvestigationGroupCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation couldn't be completed because of a conflict in resource states.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. You can try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits. You can try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This operation or its parameters aren't formatted correctly.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 *
 * @throws {@link AIOpsServiceException}
 * <p>Base exception class for all service exceptions from AIOps service.</p>
 *
 *
 * @public
 */
export class CreateInvestigationGroupCommand extends $Command
  .classBuilder<
    CreateInvestigationGroupCommandInput,
    CreateInvestigationGroupCommandOutput,
    AIOpsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AIOpsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AIOps", "CreateInvestigationGroup", {})
  .n("AIOpsClient", "CreateInvestigationGroupCommand")
  .sc(CreateInvestigationGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInvestigationGroupInput;
      output: CreateInvestigationGroupOutput;
    };
    sdk: {
      input: CreateInvestigationGroupCommandInput;
      output: CreateInvestigationGroupCommandOutput;
    };
  };
}
