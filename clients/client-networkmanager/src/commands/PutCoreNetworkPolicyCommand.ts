// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutCoreNetworkPolicyRequest, PutCoreNetworkPolicyResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { PutCoreNetworkPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutCoreNetworkPolicyCommand}.
 */
export interface PutCoreNetworkPolicyCommandInput extends PutCoreNetworkPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutCoreNetworkPolicyCommand}.
 */
export interface PutCoreNetworkPolicyCommandOutput extends PutCoreNetworkPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, PutCoreNetworkPolicyCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, PutCoreNetworkPolicyCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // PutCoreNetworkPolicyRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   LatestVersionId: Number("int"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new PutCoreNetworkPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutCoreNetworkPolicyResponse
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
 * @param PutCoreNetworkPolicyCommandInput - {@link PutCoreNetworkPolicyCommandInput}
 * @returns {@link PutCoreNetworkPolicyCommandOutput}
 * @see {@link PutCoreNetworkPolicyCommandInput} for command's `input` shape.
 * @see {@link PutCoreNetworkPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link CoreNetworkPolicyException} (client fault)
 *  <p>Describes a core network policy exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class PutCoreNetworkPolicyCommand extends $Command
  .classBuilder<
    PutCoreNetworkPolicyCommandInput,
    PutCoreNetworkPolicyCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "PutCoreNetworkPolicy", {})
  .n("NetworkManagerClient", "PutCoreNetworkPolicyCommand")
  .sc(PutCoreNetworkPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutCoreNetworkPolicyRequest;
      output: PutCoreNetworkPolicyResponse;
    };
    sdk: {
      input: PutCoreNetworkPolicyCommandInput;
      output: PutCoreNetworkPolicyCommandOutput;
    };
  };
}
