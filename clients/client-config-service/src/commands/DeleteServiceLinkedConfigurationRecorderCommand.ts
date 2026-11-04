// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteServiceLinkedConfigurationRecorderRequest,
  DeleteServiceLinkedConfigurationRecorderResponse,
} from "../models/models_0";
import { DeleteServiceLinkedConfigurationRecorder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceLinkedConfigurationRecorderCommand}.
 */
export interface DeleteServiceLinkedConfigurationRecorderCommandInput extends DeleteServiceLinkedConfigurationRecorderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceLinkedConfigurationRecorderCommand}.
 */
export interface DeleteServiceLinkedConfigurationRecorderCommandOutput extends DeleteServiceLinkedConfigurationRecorderResponse, __MetadataBearer {}

/**
 * Deletes an existing service-linked configuration recorder.
 *
 * This operation does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the [GetResourceConfigHistory](https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html) operation, but you will not be able to access this information in the Config console until you have created a new service-linked configuration recorder for the same service.
 *
 * > **Note:**
 * >
 * > **The recording scope determines if you receive configuration items**
 * >
 * > The recording scope is set by the service that is linked to the configuration recorder and determines whether you receive configuration items (CIs) in the delivery channel. If the recording scope is internal, you will not receive CIs in the delivery channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteServiceLinkedConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteServiceLinkedConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteServiceLinkedConfigurationRecorderRequest
 *   ServicePrincipal: "STRING_VALUE",
 *   Arn: "STRING_VALUE",
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
 * @throws {@link NoSuchConfigurationRecorderException} (client fault)
 *
 * You have specified a configuration recorder that does not exist.
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
export class DeleteServiceLinkedConfigurationRecorderCommand extends command<DeleteServiceLinkedConfigurationRecorderCommandInput, DeleteServiceLinkedConfigurationRecorderCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceLinkedConfigurationRecorder",
  DeleteServiceLinkedConfigurationRecorder$
) {
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
