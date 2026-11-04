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
 * Creates a network connector that enables Lambda compute resources to route outbound traffic through your Amazon VPC. The network connector provisions elastic network interfaces (ENIs) in the subnets you specify, providing a managed network path to private resources such as databases, caches, and internal APIs.
 *
 * This operation is asynchronous. The network connector starts in `PENDING` state while ENIs are provisioned in your VPC (provisioning typically takes up to 10 minutes). Use `GetNetworkConnector` to poll the connector state until it reaches `ACTIVE`. Once active, you can attach the connector to supported Lambda compute resources — such as MicroVMs and WebFunctions — at run time. For how to attach a connector, see the documentation for the specific compute type.
 *
 * This operation is idempotent when you provide a `ClientToken` — if you retry a request that completed successfully using the same client token, the operation returns the existing connector without creating a duplicate.
 *
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
 *         "MicroVm" || "WebFunction",
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
 * //   VersionArn: "STRING_VALUE",
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
 * //         "MicroVm" || "WebFunction",
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
