// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateLinkRequest, AssociateLinkResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { AssociateLink } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateLinkCommand}.
 */
export interface AssociateLinkCommandInput extends AssociateLinkRequest {}
/**
 * @public
 *
 * The output of {@link AssociateLinkCommand}.
 */
export interface AssociateLinkCommandOutput extends AssociateLinkResponse, __MetadataBearer {}

/**
 * <p>Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateLinkRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE", // required
 * };
 * const command = new AssociateLinkCommand(input);
 * const response = await client.send(command);
 * // { // AssociateLinkResponse
 * //   LinkAssociation: { // LinkAssociation
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     LinkAssociationState: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateLinkCommandInput - {@link AssociateLinkCommandInput}
 * @returns {@link AssociateLinkCommandOutput}
 * @see {@link AssociateLinkCommandInput} for command's `input` shape.
 * @see {@link AssociateLinkCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
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
export class AssociateLinkCommand extends $Command
  .classBuilder<
    AssociateLinkCommandInput,
    AssociateLinkCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "AssociateLink", {})
  .n("NetworkManagerClient", "AssociateLinkCommand")
  .sc(AssociateLink)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateLinkRequest;
      output: AssociateLinkResponse;
    };
    sdk: {
      input: AssociateLinkCommandInput;
      output: AssociateLinkCommandOutput;
    };
  };
}
