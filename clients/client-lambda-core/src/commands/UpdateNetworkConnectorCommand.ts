// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaCoreClient";
import type { UpdateNetworkConnectorRequest, UpdateNetworkConnectorResponse } from "../models/models_0";
import { UpdateNetworkConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the VPC configuration or operator role of an existing network connector. You can modify the subnet IDs, security group IDs, network protocol, or operator role. The connector must be in <code>ACTIVE</code> state to accept updates.</p> <p>This operation is asynchronous. The connector remains in <code>ACTIVE</code> state during the update — existing workloads that reference this connector are not disrupted. Use <code>GetNetworkConnector</code> to monitor the <code>LastUpdateStatus</code> field, which transitions through <code>InProgress</code> to <code>Successful</code> or <code>Failed</code>. If the update fails, the <code>LastUpdateStatusReasonCode</code> field provides a specific error code for troubleshooting. This operation is idempotent when you provide a <code>ClientToken</code>.</p>
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
 *         "MicroVm",
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
 * //         "MicroVm",
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
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. For example, attempting to update a connector that is not in <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified network connector does not exist. Verify the identifier (ID, name, or ARN) and Region.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal service error occurred. Retry the request with exponential backoff.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link LambdaCoreServiceException}
 * <p>Base exception class for all service exceptions from LambdaCore service.</p>
 *
 *
 * @public
 */
export class UpdateNetworkConnectorCommand extends $Command
  .classBuilder<
    UpdateNetworkConnectorCommandInput,
    UpdateNetworkConnectorCommandOutput,
    LambdaCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaCoreApiService", "UpdateNetworkConnector", {})
  .n("LambdaCoreClient", "UpdateNetworkConnectorCommand")
  .sc(UpdateNetworkConnector$)
  .build() {
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
