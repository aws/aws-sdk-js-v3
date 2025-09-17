// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCoreNetworkPolicyVersionRequest, DeleteCoreNetworkPolicyVersionResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_DeleteCoreNetworkPolicyVersionCommand,
  se_DeleteCoreNetworkPolicyVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoreNetworkPolicyVersionCommand}.
 */
export interface DeleteCoreNetworkPolicyVersionCommandInput extends DeleteCoreNetworkPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoreNetworkPolicyVersionCommand}.
 */
export interface DeleteCoreNetworkPolicyVersionCommandOutput
  extends DeleteCoreNetworkPolicyVersionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a policy version from a core network. You can't delete the current LIVE policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteCoreNetworkPolicyVersionCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteCoreNetworkPolicyVersionCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteCoreNetworkPolicyVersionRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 * };
 * const command = new DeleteCoreNetworkPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoreNetworkPolicyVersionResponse
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
 * @param DeleteCoreNetworkPolicyVersionCommandInput - {@link DeleteCoreNetworkPolicyVersionCommandInput}
 * @returns {@link DeleteCoreNetworkPolicyVersionCommandOutput}
 * @see {@link DeleteCoreNetworkPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreNetworkPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
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
export class DeleteCoreNetworkPolicyVersionCommand extends $Command
  .classBuilder<
    DeleteCoreNetworkPolicyVersionCommandInput,
    DeleteCoreNetworkPolicyVersionCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "DeleteCoreNetworkPolicyVersion", {})
  .n("NetworkManagerClient", "DeleteCoreNetworkPolicyVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCoreNetworkPolicyVersionCommand)
  .de(de_DeleteCoreNetworkPolicyVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCoreNetworkPolicyVersionRequest;
      output: DeleteCoreNetworkPolicyVersionResponse;
    };
    sdk: {
      input: DeleteCoreNetworkPolicyVersionCommandInput;
      output: DeleteCoreNetworkPolicyVersionCommandOutput;
    };
  };
}
