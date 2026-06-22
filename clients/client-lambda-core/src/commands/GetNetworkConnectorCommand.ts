// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaCoreClient";
import type { GetNetworkConnectorRequest, GetNetworkConnectorResponse } from "../models/models_0";
import { GetNetworkConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkConnectorCommand}.
 */
export interface GetNetworkConnectorCommandInput extends GetNetworkConnectorRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkConnectorCommand}.
 */
export interface GetNetworkConnectorCommandOutput extends GetNetworkConnectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current configuration, state, and metadata of a network connector. The <code>Identifier</code> parameter accepts the connector ID, name, or full ARN. Use this operation to poll connector state after creation or update, or to inspect the current VPC configuration and any failure reasons.</p> <p>The response includes the full connector configuration, current state, and — if the connector has been updated — the <code>LastUpdateStatus</code> and <code>LastUpdateStatusReasonCode</code> fields that indicate whether the most recent update succeeded or failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, GetNetworkConnectorCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, GetNetworkConnectorCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // GetNetworkConnectorRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkConnectorCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkConnectorResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Version: Number("long"),
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
 * //   OperatorRole: "STRING_VALUE",
 * //   State: "PENDING" || "ACTIVE" || "INACTIVE" || "FAILED" || "DELETING" || "DELETE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   StateReasonCode: "DisallowedByVpcEncryptionControl" || "Ec2RequestLimitExceeded" || "InsufficientRolePermissions" || "InternalError" || "InvalidSecurityGroup" || "InvalidSubnet" || "SubnetOutOfIPAddresses",
 * //   LastUpdateStatus: "Successful" || "Failed" || "InProgress",
 * //   LastUpdateStatusReason: "STRING_VALUE",
 * //   LastUpdateStatusReasonCode: "DisallowedByVpcEncryptionControl" || "Ec2RequestLimitExceeded" || "InsufficientRolePermissions" || "InternalError" || "InvalidSecurityGroup" || "InvalidSubnet" || "SubnetOutOfIPAddresses",
 * //   LastModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetNetworkConnectorCommandInput - {@link GetNetworkConnectorCommandInput}
 * @returns {@link GetNetworkConnectorCommandOutput}
 * @see {@link GetNetworkConnectorCommandInput} for command's `input` shape.
 * @see {@link GetNetworkConnectorCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
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
export class GetNetworkConnectorCommand extends $Command
  .classBuilder<
    GetNetworkConnectorCommandInput,
    GetNetworkConnectorCommandOutput,
    LambdaCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaCoreApiService", "GetNetworkConnector", {})
  .n("LambdaCoreClient", "GetNetworkConnectorCommand")
  .sc(GetNetworkConnector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkConnectorRequest;
      output: GetNetworkConnectorResponse;
    };
    sdk: {
      input: GetNetworkConnectorCommandInput;
      output: GetNetworkConnectorCommandOutput;
    };
  };
}
