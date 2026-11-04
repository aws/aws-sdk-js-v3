// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateInvestigationGroupInput, CreateInvestigationGroupOutput } from "../models/models_0";
import { CreateInvestigationGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an *investigation group* in your account. Creating an investigation group is a one-time setup task for each Region in your account. It is a necessary task to be able to perform investigations.
 *
 * Settings in the investigation group help you centrally manage the common properties of your investigations, such as the following:
 *
 * - Who can access the investigations
 * - Whether investigation data is encrypted with a customer managed Key Management Service key.
 * - How long investigations and their data are retained by default.
 *
 * Currently, you can have one investigation group in each Region in your account. Each investigation in a Region is a part of the investigation group in that Region
 *
 * To create an investigation group and set up CloudWatch investigations, you must be signed in to an IAM principal that has either the `AIOpsConsoleAdminPolicy` or the `AdministratorAccess` IAM policy attached, or to an account that has similar permissions.
 *
 * > **Important:**
 * >
 * > You can configure CloudWatch alarms to start investigations and add events to investigations. If you create your investigation group with `CreateInvestigationGroup` and you want to enable alarms to do this, you must use `PutInvestigationGroupPolicy` to create a resource policy that grants this permission to CloudWatch alarms.
 * >
 * > For more information about configuring CloudWatch alarms, see [Using Amazon CloudWatch alarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html)
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation couldn't be completed because of a conflict in resource states.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. You can try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits. You can try again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This operation or its parameters aren't formatted correctly.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Access id denied for this operation, or this operation is not valid for the specified resource.
 *
 * @throws {@link AIOpsServiceException}
 *
 * Base exception class for all service exceptions from AIOps service.
 *
 * @public
 */
export class CreateInvestigationGroupCommand extends command<CreateInvestigationGroupCommandInput, CreateInvestigationGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateInvestigationGroup",
  CreateInvestigationGroup$
) {
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
