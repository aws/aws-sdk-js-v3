// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCoreNetworkPolicyRequest, GetCoreNetworkPolicyResponse } from "../models/models_0";
import { GetCoreNetworkPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCoreNetworkPolicyCommand}.
 */
export interface GetCoreNetworkPolicyCommandInput extends GetCoreNetworkPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetCoreNetworkPolicyCommand}.
 */
export interface GetCoreNetworkPolicyCommandOutput extends GetCoreNetworkPolicyResponse, __MetadataBearer {}

/**
 * Returns details about a core network policy. You can get details about your current live policy or any previous policy version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCoreNetworkPolicyCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCoreNetworkPolicyCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetCoreNetworkPolicyRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"),
 *   Alias: "LIVE" || "LATEST",
 * };
 * const command = new GetCoreNetworkPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreNetworkPolicyResponse
 * //   CoreNetworkPolicy: { // CoreNetworkPolicy
 * //     CoreNetworkId: "STRING_VALUE",
 * //     PolicyVersionId: Number("int"),
 * //     Alias: "LIVE" || "LATEST",
 * //     Description: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     ChangeSetState: "PENDING_GENERATION" || "FAILED_GENERATION" || "READY_TO_EXECUTE" || "EXECUTING" || "EXECUTION_SUCCEEDED" || "OUT_OF_DATE",
 * //     PolicyErrors: [ // CoreNetworkPolicyErrorList
 * //       { // CoreNetworkPolicyError
 * //         ErrorCode: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //         Path: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PolicyDocument: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCoreNetworkPolicyCommandInput - {@link GetCoreNetworkPolicyCommandInput}
 * @returns {@link GetCoreNetworkPolicyCommandOutput}
 * @see {@link GetCoreNetworkPolicyCommandInput} for command's `input` shape.
 * @see {@link GetCoreNetworkPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class GetCoreNetworkPolicyCommand extends command<GetCoreNetworkPolicyCommandInput, GetCoreNetworkPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetCoreNetworkPolicy",
  GetCoreNetworkPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoreNetworkPolicyRequest;
      output: GetCoreNetworkPolicyResponse;
    };
    sdk: {
      input: GetCoreNetworkPolicyCommandInput;
      output: GetCoreNetworkPolicyCommandOutput;
    };
  };
}
