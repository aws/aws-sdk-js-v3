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
 * <p>Creates or updates a service-linked configuration recorder that is linked to a third-party cloud service provider based on the <code>ConnectorArn</code> you specify.</p>
 *          <p>The configuration recorder's <code>name</code>, <code>recordingGroup</code>, <code>recordingMode</code>, and <code>recordingScope</code> is set by the service that is linked to the configuration recorder.</p>
 *          <p>If a service-linked configuration recorder already exists for the specified service principal and connector, calling this operation again updates the <code>ScopeConfiguration</code>.</p>
 *          <note>
 *             <p>
 *                <b>This operation can only be called by the Amazon Web Services service linked to the configuration recorder</b>
 *             </p>
 *             <p>Customers cannot call this operation directly. Only the linked Amazon Web Services service can create or update the service-linked configuration recorder.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <b>Tags are added at creation and cannot be updated with this operation</b>
 *             </p>
 *             <p>Use <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html">UntagResource</a> to update tags after creation.</p>
 *          </note>
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
 *  <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, you cannot create a service-linked recorder because a service-linked recorder already exists for the specified service.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutThirdPartyServiceLinkedConfigurationRecorder.html">PutThirdPartyServiceLinkedConfigurationRecorder</a>, you cannot create a service-linked recorder because the specified service principal does not support multiple configuration recorders and one already exists.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutThirdPartyServiceLinkedConfigurationRecorder.html">PutThirdPartyServiceLinkedConfigurationRecorder</a>, another in-progress operation is currently referencing the same connector or service principal. Please try again later.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConnector.html">PutConnector</a>, you cannot create a connector because a connector already exists for the specified connector configuration.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a>, you cannot delete the service-linked recorder because it is currently in use by the linked Amazon Web Services service.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a>, another in-progress operation is currently referencing the same connector. Please try again later.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConnector.html">DeleteConnector</a>, another in-progress operation is currently referencing the connector. Please try again later.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html">DeleteDeliveryChannel</a>, you cannot delete the specified delivery channel because the customer managed configuration recorder is running. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html">StopConfigurationRecorder</a> operation to stop the customer managed configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html">AssociateResourceTypes</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html">DisassociateResourceTypes</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For service-linked configuration recorders, the configuration recorder is not in use by the service. No association or dissociation of resource types is permitted.</p>
 *             </li>
 *             <li>
 *                <p>For service-linked configuration recorders, your requested change to the configuration recorder has been denied by its linked Amazon Web Services service.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *  <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html">PutOrganizationConfigRule</a>, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html">PutOrganizationConformancePack</a>, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, a service-linked configuration recorder cannot be created because you do not have the following permissions: IAM <code>CreateServiceLinkedRole</code>.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConnector.html">PutConnector</a>, a connector cannot be created because you do not have the following permissions: IAM <code>CreateServiceLinkedRole</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html">PutStoredQuery</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>There are missing required fields.</p>
 *             </li>
 *             <li>
 *                <p>The input value fails the validation.</p>
 *             </li>
 *             <li>
 *                <p>You are trying to create more than 300 queries.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html">DescribeConfigurationRecorders</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html">DescribeConfigurationRecorderStatus</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>You have specified more than one configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>You have provided a service principal for service-linked configuration recorder that is not valid.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html">AssociateResourceTypes</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html">DisassociateResourceTypes</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.</p>
 *             </li>
 *             <li>
 *                <p>One or more of the specified resource types are already associated or disassociated with the configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>You have provided both <code>Arn</code> and <code>ServicePrincipal</code>. Only one of <code>Arn</code> or <code>ServicePrincipal</code> can be specified.</p>
 *             </li>
 *             <li>
 *                <p>You have provided a service principal for service-linked configuration recorder that is not valid.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
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
