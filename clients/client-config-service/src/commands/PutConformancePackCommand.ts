// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutConformancePackRequest, PutConformancePackResponse } from "../models/models_0";
import { PutConformancePack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutConformancePackCommand}.
 */
export interface PutConformancePackCommandInput extends PutConformancePackRequest {}
/**
 * @public
 *
 * The output of {@link PutConformancePackCommand}.
 */
export interface PutConformancePackCommandOutput extends PutConformancePackResponse, __MetadataBearer {}

/**
 * Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * > **Important:**
 * >
 * > When you use `PutConformancePack` to deploy conformance packs in your account, the operation can create Config rules and remediation actions without requiring `config:PutConfigRule` or `config:PutRemediationConfigurations` permissions in your account IAM policies.
 * >
 * > This API uses the `AWSServiceRoleForConfigConforms` service-linked role in your account to create conformance pack resources. This service-linked role includes the permissions to create Config rules and remediation configurations, even if your account IAM policies explicitly deny these actions.
 *
 * This API creates a service-linked role `AWSServiceRoleForConfigConforms` in your account. The service-linked role is created only when the role does not exist in your account.
 *
 * > **Note:** You must specify only one of the follow parameters: `TemplateS3Uri`, `TemplateBody` or `TemplateSSMDocumentDetails`.
 *
 * > **Note:**
 * >
 * > **Tags are added at creation and cannot be updated with this operation**
 * >
 * > `PutConformancePack` is an idempotent API. Subsequent requests won't create a duplicate resource if one was already created. If a following request has different `tags` values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, `tags` will not be updated, even if they are different.
 * >
 * > Use [TagResource](https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html) and [UntagResource](https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html) to update tags after creation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutConformancePackRequest
 *   ConformancePackName: "STRING_VALUE", // required
 *   TemplateS3Uri: "STRING_VALUE",
 *   TemplateBody: "STRING_VALUE",
 *   DeliveryS3Bucket: "STRING_VALUE",
 *   DeliveryS3KeyPrefix: "STRING_VALUE",
 *   ConformancePackInputParameters: [ // ConformancePackInputParameters
 *     { // ConformancePackInputParameter
 *       ParameterName: "STRING_VALUE", // required
 *       ParameterValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   TemplateSSMDocumentDetails: { // TemplateSSMDocumentDetails
 *     DocumentName: "STRING_VALUE", // required
 *     DocumentVersion: "STRING_VALUE",
 *   },
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutConformancePackCommand(input);
 * const response = await client.send(command);
 * // { // PutConformancePackResponse
 * //   ConformancePackArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutConformancePackCommandInput - {@link PutConformancePackCommandInput}
 * @returns {@link PutConformancePackCommandOutput}
 * @see {@link PutConformancePackCommandInput} for command's `input` shape.
 * @see {@link PutConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ConformancePackTemplateValidationException} (client fault)
 *
 * You have specified a template that is not valid or supported.
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *
 * Indicates one of the following errors:
 *
 * - For [PutConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html), the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.
 * - For [PutConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html), the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.
 * - For [PutOrganizationConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html), organization Config rule cannot be created because you do not have permissions to call IAM `GetRole` action or create a service-linked role.
 * - For [PutConformancePack](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html) and [PutOrganizationConformancePack](https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html), a conformance pack cannot be created because you do not have the following permissions:
 *
 *   - You do not have permission to call IAM `GetRole` action or create a service-linked role.
 *   - You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.
 * - For [PutServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html), a service-linked configuration recorder cannot be created because you do not have the following permissions: IAM `CreateServiceLinkedRole`.
 * - For [PutConnector](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConnector.html), a connector cannot be created because you do not have the following permissions: IAM `CreateServiceLinkedRole`.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link MaxNumberOfConformancePacksExceededException} (client fault)
 *
 * You have reached the limit of the number of conformance packs you can create in an account. For more information, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * You see this exception in the following cases:
 *
 * - For DeleteConfigRule, Config is deleting this rule. Try your request again later.
 * - For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.
 * - For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.
 * - For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.
 * - For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.
 * - For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 * - For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class PutConformancePackCommand extends command<PutConformancePackCommandInput, PutConformancePackCommandOutput>(
  _ep0,
  _mw0,
  "PutConformancePack",
  PutConformancePack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConformancePackRequest;
      output: PutConformancePackResponse;
    };
    sdk: {
      input: PutConformancePackCommandInput;
      output: PutConformancePackCommandOutput;
    };
  };
}
