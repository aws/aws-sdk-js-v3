// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteServiceLinkedConfigurationRecorderRequest,
  DeleteServiceLinkedConfigurationRecorderResponse,
} from "../models/models_0";
import { DeleteServiceLinkedConfigurationRecorder } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceLinkedConfigurationRecorderCommand}.
 */
export interface DeleteServiceLinkedConfigurationRecorderCommandInput
  extends DeleteServiceLinkedConfigurationRecorderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceLinkedConfigurationRecorderCommand}.
 */
export interface DeleteServiceLinkedConfigurationRecorderCommandOutput
  extends DeleteServiceLinkedConfigurationRecorderResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an existing service-linked configuration recorder.</p>
 *          <p>This operation does not delete the configuration information that was previously recorded. You will be able to access the previously
 * 			recorded information by using the
 * 			<a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html">GetResourceConfigHistory</a> operation, but you will not
 * 			be able to access this information in the Config console until
 * 			you have created a new service-linked configuration recorder for the same service.</p>
 *          <note>
 *             <p>
 *                <b>The recording scope determines if you receive configuration items</b>
 *             </p>
 *             <p>The recording scope is set by the service that is linked to the configuration recorder and determines whether you receive configuration items (CIs) in the delivery channel. If the recording scope is internal, you will not receive CIs in the delivery channel.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteServiceLinkedConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteServiceLinkedConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteServiceLinkedConfigurationRecorderRequest
 *   ServicePrincipal: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceLinkedConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceLinkedConfigurationRecorderResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteServiceLinkedConfigurationRecorderCommandInput - {@link DeleteServiceLinkedConfigurationRecorderCommandInput}
 * @returns {@link DeleteServiceLinkedConfigurationRecorderCommandOutput}
 * @see {@link DeleteServiceLinkedConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceLinkedConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, you cannot create a service-linked recorder because a service-linked recorder already exists for the specified service.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a>, you cannot delete the service-linked recorder because it is currently in use by the linked Amazon Web Services service.</p>
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
 * @throws {@link NoSuchConfigurationRecorderException} (client fault)
 *  <p>You have specified a configuration recorder that does not
 * 			exist.</p>
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
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DeleteServiceLinkedConfigurationRecorderCommand extends $Command
  .classBuilder<
    DeleteServiceLinkedConfigurationRecorderCommandInput,
    DeleteServiceLinkedConfigurationRecorderCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeleteServiceLinkedConfigurationRecorder", {})
  .n("ConfigServiceClient", "DeleteServiceLinkedConfigurationRecorderCommand")
  .sc(DeleteServiceLinkedConfigurationRecorder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceLinkedConfigurationRecorderRequest;
      output: DeleteServiceLinkedConfigurationRecorderResponse;
    };
    sdk: {
      input: DeleteServiceLinkedConfigurationRecorderCommandInput;
      output: DeleteServiceLinkedConfigurationRecorderCommandOutput;
    };
  };
}
