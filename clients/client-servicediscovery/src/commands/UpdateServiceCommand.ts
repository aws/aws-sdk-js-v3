// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import { UpdateService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandInput extends UpdateServiceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandOutput extends UpdateServiceResponse, __MetadataBearer {}

/**
 * Submits a request to perform the following operations:
 *
 * - Update the TTL setting for existing `DnsRecords` configurations
 * - Add, update, or delete `HealthCheckConfig` for a specified service
 *
 *   > **Note:** You can't add, update, or delete a `HealthCheckCustomConfig` configuration.
 *
 * For public and private DNS namespaces, note the following:
 *
 * - If you omit any existing `DnsRecords` or `HealthCheckConfig` configurations from an `UpdateService` request, the configurations are deleted from the service.
 * - If you omit an existing `HealthCheckCustomConfig` configuration from an `UpdateService` request, the configuration isn't deleted from the service.
 *
 * > **Note:**
 * >
 * > You can't call `UpdateService` and update settings in the following scenarios:
 * >
 * > - When the service is associated with an HTTP namespace
 * > - When the service is associated with a shared namespace and contains instances that were registered by Amazon Web Services accounts other than the account making the `UpdateService` call
 *
 * When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdateServiceRequest
 *   Id: "STRING_VALUE", // required
 *   Service: { // ServiceChange
 *     Description: "STRING_VALUE",
 *     DnsConfig: { // DnsConfigChange
 *       DnsRecords: [ // DnsRecordList // required
 *         { // DnsRecord
 *           Type: "SRV" || "A" || "AAAA" || "CNAME", // required
 *           TTL: Number("long"), // required
 *         },
 *       ],
 *     },
 *     HealthCheckConfig: { // HealthCheckConfig
 *       Type: "HTTP" || "HTTPS" || "TCP", // required
 *       ResourcePath: "STRING_VALUE",
 *       FailureThreshold: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateServiceCommandInput - {@link UpdateServiceCommandInput}
 * @returns {@link UpdateServiceCommandOutput}
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceNotFound} (client fault)
 *
 * No service exists with the specified ID.
 *
 * @throws {@link ServiceDiscoveryServiceException}
 *
 * Base exception class for all service exceptions from ServiceDiscovery service.
 *
 * @example UpdateService Example
 * ```javascript
 * // This example submits a request to replace the DnsConfig and HealthCheckConfig settings of a specified service.
 * const input = {
 *   Id: "srv-e4anhexample0004",
 *   Service: {
 *     DnsConfig: {
 *       DnsRecords: [
 *         {
 *           TTL: 60,
 *           Type: "A"
 *         }
 *       ]
 *     },
 *     HealthCheckConfig: {
 *       FailureThreshold: 2,
 *       ResourcePath: "/",
 *       Type: "HTTP"
 *     }
 *   }
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "m35hsdrkxwjffm3xef4bxyy6vc3ewakx-jdn3y5g5"
 * }
 * *\/
 * ```
 *
 * @example Update service using service ARN for shared namespace
 * ```javascript
 * // This example updates a service using a service ARN instead of service ID. This is useful for updating services associated with shared namespaces.
 * const input = {
 *   Id: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004",
 *   Service: {
 *     Description: "Updated service description for shared namespace"
 *   }
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "m35hsdrkxwjffm3xef4bxyy6vc3ewakx-jdn3y5g5"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateServiceCommand extends command<UpdateServiceCommandInput, UpdateServiceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateService",
  UpdateService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceRequest;
      output: UpdateServiceResponse;
    };
    sdk: {
      input: UpdateServiceCommandInput;
      output: UpdateServiceCommandOutput;
    };
  };
}
