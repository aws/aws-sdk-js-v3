// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutThirdPartyServiceLinkedConfigurationRecorderRequest,
  PutThirdPartyServiceLinkedConfigurationRecorderResponse,
} from "../models/models_0";
import { PutThirdPartyServiceLinkedConfigurationRecorder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutThirdPartyServiceLinkedConfigurationRecorderCommand}.
 */
export interface PutThirdPartyServiceLinkedConfigurationRecorderCommandInput extends PutThirdPartyServiceLinkedConfigurationRecorderRequest {}
/**
 * @public
 *
 * The output of {@link PutThirdPartyServiceLinkedConfigurationRecorderCommand}.
 */
export interface PutThirdPartyServiceLinkedConfigurationRecorderCommandOutput extends PutThirdPartyServiceLinkedConfigurationRecorderResponse, __MetadataBearer {}

/**
 * Creates or updates a service-linked configuration recorder that is linked to a third-party cloud service provider based on the `ConnectorArn` you specify.
 *
 * The configuration recorder's `name`, `recordingGroup`, `recordingMode`, and `recordingScope` is set by the service that is linked to the configuration recorder.
 *
 * If a service-linked configuration recorder already exists for the specified service principal and connector, calling this operation again updates the `ScopeConfiguration`.
 *
 * > **Note:**
 * >
 * > **This operation can only be called by the Amazon Web Services service linked to the configuration recorder**
 * >
 * > Customers cannot call this operation directly. Only the linked Amazon Web Services service can create or update the service-linked configuration recorder.
 *
 * > **Note:**
 * >
 * > **Tags are added at creation and cannot be updated with this operation**
 * >
 * > Use [TagResource](https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html) and [UntagResource](https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html) to update tags after creation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutThirdPartyServiceLinkedConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutThirdPartyServiceLinkedConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutThirdPartyServiceLinkedConfigurationRecorderRequest
 *   ServicePrincipal: "STRING_VALUE", // required
 *   ConnectorArn: "STRING_VALUE", // required
 *   ScopeConfiguration: { // ScopeConfiguration
 *     scopeType: "STRING_VALUE", // required
 *     scopeValues: [ // ScopeValues
 *       "STRING_VALUE",
 *     ],
 *     allRegions: true || false, // required
 *     includedRegions: [ // IncludedRegions
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutThirdPartyServiceLinkedConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * // { // PutThirdPartyServiceLinkedConfigurationRecorderResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutThirdPartyServiceLinkedConfigurationRecorderCommandInput - {@link PutThirdPartyServiceLinkedConfigurationRecorderCommandInput}
 * @returns {@link PutThirdPartyServiceLinkedConfigurationRecorderCommandOutput}
 * @see {@link PutThirdPartyServiceLinkedConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyServiceLinkedConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * For [PutServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html), you cannot create a service-linked recorder because a service-linked recorder already exists for the specified service.
 *
 * For [PutThirdPartyServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutThirdPartyServiceLinkedConfigurationRecorder.html), you cannot create a service-linked recorder because the specified service principal does not support multiple configuration recorders and one already exists.
 *
 * For [PutThirdPartyServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutThirdPartyServiceLinkedConfigurationRecorder.html), another in-progress operation is currently referencing the same connector or service principal. Please try again later.
 *
 * For [PutConnector](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConnector.html), you cannot create a connector because a connector already exists for the specified connector configuration.
 *
 * For [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html), you cannot delete the service-linked recorder because it is currently in use by the linked Amazon Web Services service.
 *
 * For [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html), another in-progress operation is currently referencing the same connector. Please try again later.
 *
 * For [DeleteConnector](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConnector.html), another in-progress operation is currently referencing the connector. Please try again later.
 *
 * For [DeleteDeliveryChannel](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html), you cannot delete the specified delivery channel because the customer managed configuration recorder is running. Use the [StopConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html) operation to stop the customer managed configuration recorder.
 *
 * For [AssociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html) and [DisassociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html), one of the following errors:
 *
 * - For service-linked configuration recorders, the configuration recorder is not in use by the service. No association or dissociation of resource types is permitted.
 * - For service-linked configuration recorders, your requested change to the configuration recorder has been denied by its linked Amazon Web Services service.
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
 * @throws {@link ValidationException} (client fault)
 *
 * The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.
 *
 * For [PutStoredQuery](https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html), one of the following errors:
 *
 * - There are missing required fields.
 * - The input value fails the validation.
 * - You are trying to create more than 300 queries.
 *
 * For [DescribeConfigurationRecorders](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html) and [DescribeConfigurationRecorderStatus](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html), one of the following errors:
 *
 * - You have specified more than one configuration recorder.
 * - You have provided a service principal for service-linked configuration recorder that is not valid.
 *
 * For [AssociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html) and [DisassociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html), one of the following errors:
 *
 * - Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.
 * - One or more of the specified resource types are already associated or disassociated with the configuration recorder.
 * - For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.
 *
 * For [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html), one of the following errors:
 *
 * - You have provided both `Arn` and `ServicePrincipal`. Only one of `Arn` or `ServicePrincipal` can be specified.
 * - You have provided a service principal for service-linked configuration recorder that is not valid.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class PutThirdPartyServiceLinkedConfigurationRecorderCommand extends command<PutThirdPartyServiceLinkedConfigurationRecorderCommandInput, PutThirdPartyServiceLinkedConfigurationRecorderCommandOutput>(
  _ep0,
  _mw0,
  "PutThirdPartyServiceLinkedConfigurationRecorder",
  PutThirdPartyServiceLinkedConfigurationRecorder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutThirdPartyServiceLinkedConfigurationRecorderRequest;
      output: PutThirdPartyServiceLinkedConfigurationRecorderResponse;
    };
    sdk: {
      input: PutThirdPartyServiceLinkedConfigurationRecorderCommandInput;
      output: PutThirdPartyServiceLinkedConfigurationRecorderCommandOutput;
    };
  };
}
