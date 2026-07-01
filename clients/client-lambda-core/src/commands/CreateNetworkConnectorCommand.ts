// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNetworkConnectorRequest, CreateNetworkConnectorResponse } from "../models/models_0";
import { CreateNetworkConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNetworkConnectorCommand}.
 */
export interface CreateNetworkConnectorCommandInput extends CreateNetworkConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkConnectorCommand}.
 */
export interface CreateNetworkConnectorCommandOutput extends CreateNetworkConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates a network connector that enables Lambda compute resources to route outbound traffic through your Amazon VPC. The network connector provisions elastic network interfaces (ENIs) in the subnets you specify, providing a managed network path to private resources such as databases, caches, and internal APIs.</p> <p>This operation is asynchronous. The network connector starts in <code>PENDING</code> state while ENIs are provisioned in your VPC (provisioning typically takes up to 10 minutes). Use <code>GetNetworkConnector</code> to poll the connector state until it reaches <code>ACTIVE</code>. Once active, you can attach the connector to Lambda MicroVMs at run time using the <code>egressNetworkConnectors</code> parameter on <code>RunMicroVm</code>.</p> <p>This operation is idempotent when you provide a <code>ClientToken</code> — if you retry a request that completed successfully using the same client token, the operation returns the existing connector without creating a duplicate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, CreateNetworkConnectorCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, CreateNetworkConnectorCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // CreateNetworkConnectorRequest
 *   Name: "STRING_VALUE", // required
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
 *   Tags: { // NetworkConnectorTags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNetworkConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkConnectorResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
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
 * // };
 *
 * ```
 *
 * @param CreateNetworkConnectorCommandInput - {@link CreateNetworkConnectorCommandInput}
 * @returns {@link CreateNetworkConnectorCommandOutput}
 * @see {@link CreateNetworkConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkConnectorCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link NetworkConnectorLimitExceededException} (client fault)
 *  <p>The account has reached the maximum number of network connectors allowed. Delete unused connectors or request a limit increase through Service Quotas.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. For example, attempting to update a connector that is not in <code>ACTIVE</code> state.</p>
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
export class CreateNetworkConnectorCommand extends command<CreateNetworkConnectorCommandInput, CreateNetworkConnectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateNetworkConnector",
  CreateNetworkConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkConnectorRequest;
      output: CreateNetworkConnectorResponse;
    };
    sdk: {
      input: CreateNetworkConnectorCommandInput;
      output: CreateNetworkConnectorCommandOutput;
    };
  };
}
