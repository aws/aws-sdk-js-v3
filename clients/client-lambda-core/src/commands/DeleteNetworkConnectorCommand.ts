// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNetworkConnectorRequest, DeleteNetworkConnectorResponse } from "../models/models_0";
import { DeleteNetworkConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNetworkConnectorCommand}.
 */
export interface DeleteNetworkConnectorCommandInput extends DeleteNetworkConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkConnectorCommand}.
 */
export interface DeleteNetworkConnectorCommandOutput extends DeleteNetworkConnectorResponse, __MetadataBearer {}

/**
 * <p>Initiates deletion of a network connector. The connector transitions to <code>DELETING</code> state while elastic network interfaces are cleaned up asynchronously. After deletion completes, subsequent calls to <code>GetNetworkConnector</code> return <code>ResourceNotFoundException</code>.</p> <p>This operation is idempotent — calling delete on a connector that is already deleting or has been deleted succeeds without error. You can delete connectors in <code>ACTIVE</code> or <code>FAILED</code> states. Before deleting a connector, ensure that no Lambda MicroVMs are using it, as they will lose VPC egress connectivity immediately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, DeleteNetworkConnectorCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, DeleteNetworkConnectorCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // DeleteNetworkConnectorRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkConnectorResponse
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
 * @param DeleteNetworkConnectorCommandInput - {@link DeleteNetworkConnectorCommandInput}
 * @returns {@link DeleteNetworkConnectorCommandOutput}
 * @see {@link DeleteNetworkConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkConnectorCommandOutput} for command's `response` shape.
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
export class DeleteNetworkConnectorCommand extends command<DeleteNetworkConnectorCommandInput, DeleteNetworkConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNetworkConnector",
  DeleteNetworkConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkConnectorRequest;
      output: DeleteNetworkConnectorResponse;
    };
    sdk: {
      input: DeleteNetworkConnectorCommandInput;
      output: DeleteNetworkConnectorCommandOutput;
    };
  };
}
