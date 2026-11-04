// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterInstanceRequest, RegisterInstanceResponse } from "../models/models_0";
import { RegisterInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterInstanceCommand}.
 */
export interface RegisterInstanceCommandInput extends RegisterInstanceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterInstanceCommand}.
 */
export interface RegisterInstanceCommandOutput extends RegisterInstanceResponse, __MetadataBearer {}

/**
 * Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a `RegisterInstance` request, the following occurs:
 *
 * - For each DNS record that you define in the service that's specified by `ServiceId`, a record is created or updated in the hosted zone that's associated with the corresponding namespace.
 * - If the service includes `HealthCheckConfig`, a health check is created based on the settings in the health check configuration.
 * - The health check, if any, is associated with each of the new or updated records.
 *
 * > **Important:** One `RegisterInstance` request must complete before you can submit another request and specify the same service ID and instance ID.
 *
 * For more information, see [CreateService](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html).
 *
 * When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:
 *
 * - **If the health check is healthy**: returns all the records
 * - **If the health check is unhealthy**: returns the applicable value for the last healthy instance
 * - **If you didn't specify a health check configuration**: returns all the records
 *
 * For the current quota on the number of instances that you can register using the same namespace and using the same service, see [Cloud Map quotas](https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html) in the *Cloud Map Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, RegisterInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, RegisterInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // RegisterInstanceRequest
 *   ServiceId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   CreatorRequestId: "STRING_VALUE",
 *   Attributes: { // Attributes // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterInstanceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterInstanceCommandInput - {@link RegisterInstanceCommandInput}
 * @returns {@link RegisterInstanceCommandOutput}
 * @see {@link RegisterInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *
 * The operation is already in progress.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.
 *
 * @throws {@link ResourceInUse} (client fault)
 *
 * The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that contains any instances.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * The resource can't be created because you've reached the quota on the number of resources.
 *
 * @throws {@link ServiceNotFound} (client fault)
 *
 * No service exists with the specified ID.
 *
 * @throws {@link ServiceDiscoveryServiceException}
 *
 * Base exception class for all service exceptions from ServiceDiscovery service.
 *
 * @example Example: Register Instance
 * ```javascript
 * // Example: Register Instance
 * const input = {
 *   Attributes: {
 *     AWS_INSTANCE_IPV4: "172.2.1.3",
 *     AWS_INSTANCE_PORT: "808"
 *   },
 *   CreatorRequestId: "7a48a98a-72e6-4849-bfa7-1a458e030d7b",
 *   InstanceId: "myservice-53",
 *   ServiceId: "srv-p5zdwlg5uvvzjita"
 * };
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "4yejorelbukcjzpnr6tlmrghsjwpngf4-k95yg2u7"
 * }
 * *\/
 * ```
 *
 * @example Register instance using service ARN
 * ```javascript
 * // Registers an instance using a service ARN instead of service ID, useful when working with shared namespaces. Shows registering an instance to a service created by a sharee in a namespace owned by another account.
 * const input = {
 *   Attributes: {
 *     AWS_INSTANCE_IPV4: "192.0.2.44",
 *     AWS_INSTANCE_PORT: "80"
 *   },
 *   InstanceId: "i-abcd1234xmpl5678",
 *   ServiceId: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678"
 * };
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "abcd1234-xmpl-5678-9012-abcd1234xmpl"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterInstanceCommand extends command<RegisterInstanceCommandInput, RegisterInstanceCommandOutput>(
  _ep0,
  _mw0,
  "RegisterInstance",
  RegisterInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterInstanceRequest;
      output: RegisterInstanceResponse;
    };
    sdk: {
      input: RegisterInstanceCommandInput;
      output: RegisterInstanceCommandOutput;
    };
  };
}
