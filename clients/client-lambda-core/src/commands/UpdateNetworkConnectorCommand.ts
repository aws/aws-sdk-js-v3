// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNetworkConnectorRequest, UpdateNetworkConnectorResponse } from "../models/models_0";
import { UpdateNetworkConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateNetworkConnectorCommand}.
 */
export interface UpdateNetworkConnectorCommandInput extends UpdateNetworkConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkConnectorCommand}.
 */
export interface UpdateNetworkConnectorCommandOutput extends UpdateNetworkConnectorResponse, __MetadataBearer {}

/**
 * Updates the VPC configuration or operator role of an existing network connector. You can modify the subnet IDs, security group IDs, network protocol, or operator role. The connector must be in `ACTIVE` state to accept updates.
 *
 * This operation is asynchronous. The connector remains in `ACTIVE` state during the update — existing workloads that reference this connector are not disrupted. Use `GetNetworkConnector` to monitor the `LastUpdateStatus` field, which transitions through `InProgress` to `Successful` or `Failed`. If the update fails, the `LastUpdateStatusReasonCode` field provides a specific error code for troubleshooting. This operation is idempotent when you provide a `ClientToken`.
 *
 * Each successful configuration change creates a new immutable version. A connector can have a limited number of versions; once that limit is reached, further updates fail with `NetworkConnectorLimitExceededException` until you delete older versions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, UpdateNetworkConnectorCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, UpdateNetworkConnectorCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // UpdateNetworkConnectorRequest
 *   Identifier: "STRING_VALUE", // required
 *   Configuration: { // NetworkConnectorConfiguration Union: only one key present
 *     VpcEgressConfiguration: { // NetworkConnectorVpcEgressConfiguration
 *       SubnetIds: [ // NetworkConnectorSubnetIds
 *         "STRING_VALUE",
 *       ],
 *       SecurityGroupIds: [ // NetworkConnectorSecurityGroupIds
 *         "STRING_VALUE",
 *       ],
 *       NetworkProtocol: "IPv4" || "DualStack",
 *       AssociatedComputeResourceTypes: [ // AssociatedComputeResourceTypesList
 *         "MicroVm" || "WebFunction",
 *       ],
 *     },
 *   },
 *   OperatorRole: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateNetworkConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNetworkConnectorResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   VersionArn: "STRING_VALUE",
 * //   Version: Number("long"),
 * //   OperatorRole: "STRING_VALUE",
 * //   Configuration: { // NetworkConnectorConfiguration Union: only one key present
 * //     VpcEgressConfiguration: { // NetworkConnectorVpcEgressConfiguration
 * //       SubnetIds: [ // NetworkConnectorSubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // NetworkConnectorSecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //       NetworkProtocol: "IPv4" || "DualStack",
 * //       AssociatedComputeResourceTypes: [ // AssociatedComputeResourceTypesList
 * //         "MicroVm" || "WebFunction",
 * //       ],
 * //     },
 * //   },
 * //   State: "PENDING" || "ACTIVE" || "INACTIVE" || "FAILED" || "DELETING" || "DELETE_FAILED",
 * //   LastUpdateStatus: "Successful" || "Failed" || "InProgress",
 * //   LastUpdateStatusReason: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateNetworkConnectorCommandInput - {@link UpdateNetworkConnectorCommandInput}
 * @returns {@link UpdateNetworkConnectorCommandOutput}
 * @see {@link UpdateNetworkConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkConnectorCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.
 *
 * @throws {@link NetworkConnectorLimitExceededException} (client fault)
 *
 * The request would exceed a network connector limit. For `CreateNetworkConnector`, the account has reached the maximum number of network connectors allowed. For `UpdateNetworkConnector`, the connector has reached the maximum number of versions allowed.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource. For example, attempting to update a connector that is not in `ACTIVE` state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified network connector does not exist. Verify the identifier (ID, name, or ARN) and Region.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An internal service error occurred. Retry the request with exponential backoff.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.
 *
 * @throws {@link LambdaCoreServiceException}
 *
 * Base exception class for all service exceptions from LambdaCore service.
 *
 * @public
 */
export class UpdateNetworkConnectorCommand extends command<UpdateNetworkConnectorCommandInput, UpdateNetworkConnectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNetworkConnector",
  UpdateNetworkConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNetworkConnectorRequest;
      output: UpdateNetworkConnectorResponse;
    };
    sdk: {
      input: UpdateNetworkConnectorCommandInput;
      output: UpdateNetworkConnectorCommandOutput;
    };
  };
}
