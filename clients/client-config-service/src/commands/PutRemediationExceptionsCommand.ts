// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRemediationExceptionsRequest, PutRemediationExceptionsResponse } from "../models/models_0";
import { PutRemediationExceptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRemediationExceptionsCommand}.
 */
export interface PutRemediationExceptionsCommandInput extends PutRemediationExceptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutRemediationExceptionsCommand}.
 */
export interface PutRemediationExceptionsCommandOutput extends PutRemediationExceptionsResponse, __MetadataBearer {}

/**
 * A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule.
 *
 * > **Note:**
 * >
 * > **Exceptions block auto remediation**
 * >
 * > Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.
 *
 * > **Note:**
 * >
 * > **Manual remediation is recommended when placing an exception**
 * >
 * > When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as `NON_COMPLIANT`. Once the resource has been evaluated as `NON_COMPLIANT`, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a `NON_COMPLIANT` evaluation result can delete resources before the exception is applied.
 *
 * > **Note:**
 * >
 * > **Exceptions can only be performed on non-compliant resources**
 * >
 * > Placing an exception can only be performed on resources that are `NON_COMPLIANT`. If you use this API for `COMPLIANT` resources or resources that are `NOT_APPLICABLE`, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see [Concepts | Config Rules](https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules) in the *Config Developer Guide*.
 *
 * > **Note:**
 * >
 * > **Exceptions cannot be placed on service-linked remediation actions**
 * >
 * > You cannot place an exception on service-linked remediation actions, such as remediation actions put by an organizational conformance pack.
 *
 * > **Note:**
 * >
 * > **Auto remediation can be initiated even for compliant resources**
 * >
 * > If you enable auto remediation for a specific Config rule using the [PutRemediationConfigurations](https://docs.aws.amazon.com/config/latest/APIReference/emAPI_PutRemediationConfigurations.html) API or the Config console, it initiates the remediation process for all non-compliant resources for that specific rule. The auto remediation process relies on the compliance data snapshot which is captured on a periodic basis. Any non-compliant resource that is updated between the snapshot schedule will continue to be remediated based on the last known compliance data snapshot.
 * >
 * > This means that in some cases auto remediation can be initiated even for compliant resources, since the bootstrap processor uses a database that can have stale evaluation results based on the last known compliance data snapshot.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutRemediationExceptionsRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ResourceKeys: [ // RemediationExceptionResourceKeys // required
 *     { // RemediationExceptionResourceKey
 *       ResourceType: "STRING_VALUE",
 *       ResourceId: "STRING_VALUE",
 *     },
 *   ],
 *   Message: "STRING_VALUE",
 *   ExpirationTime: new Date("TIMESTAMP"),
 * };
 * const command = new PutRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * // { // PutRemediationExceptionsResponse
 * //   FailedBatches: [ // FailedRemediationExceptionBatches
 * //     { // FailedRemediationExceptionBatch
 * //       FailureMessage: "STRING_VALUE",
 * //       FailedItems: [ // RemediationExceptions
 * //         { // RemediationException
 * //           ConfigRuleName: "STRING_VALUE", // required
 * //           ResourceType: "STRING_VALUE", // required
 * //           ResourceId: "STRING_VALUE", // required
 * //           Message: "STRING_VALUE",
 * //           ExpirationTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutRemediationExceptionsCommandInput - {@link PutRemediationExceptionsCommandInput}
 * @returns {@link PutRemediationExceptionsCommandOutput}
 * @see {@link PutRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
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
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class PutRemediationExceptionsCommand extends command<PutRemediationExceptionsCommandInput, PutRemediationExceptionsCommandOutput>(
  _ep0,
  _mw0,
  "PutRemediationExceptions",
  PutRemediationExceptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRemediationExceptionsRequest;
      output: PutRemediationExceptionsResponse;
    };
    sdk: {
      input: PutRemediationExceptionsCommandInput;
      output: PutRemediationExceptionsCommandOutput;
    };
  };
}
