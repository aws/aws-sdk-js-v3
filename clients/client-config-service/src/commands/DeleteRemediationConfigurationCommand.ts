// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRemediationConfigurationRequest, DeleteRemediationConfigurationResponse } from "../models/models_0";
import { DeleteRemediationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRemediationConfigurationCommand}.
 */
export interface DeleteRemediationConfigurationCommandInput extends DeleteRemediationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRemediationConfigurationCommand}.
 */
export interface DeleteRemediationConfigurationCommandOutput extends DeleteRemediationConfigurationResponse, __MetadataBearer {}

/**
 * Deletes the remediation configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteRemediationConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteRemediationConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteRemediationConfigurationRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE",
 * };
 * const command = new DeleteRemediationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRemediationConfigurationCommandInput - {@link DeleteRemediationConfigurationCommandInput}
 * @returns {@link DeleteRemediationConfigurationCommandOutput}
 * @see {@link DeleteRemediationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRemediationConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link NoSuchRemediationConfigurationException} (client fault)
 *
 * You specified an Config rule without a remediation configuration.
 *
 * @throws {@link RemediationInProgressException} (client fault)
 *
 * Remediation action is in progress. You can either cancel execution in Amazon Web Services Systems Manager or wait and try again later.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class DeleteRemediationConfigurationCommand extends command<DeleteRemediationConfigurationCommandInput, DeleteRemediationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRemediationConfiguration",
  DeleteRemediationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRemediationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteRemediationConfigurationCommandInput;
      output: DeleteRemediationConfigurationCommandOutput;
    };
  };
}
