// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutAttachmentRoutingPolicyLabelRequest,
  PutAttachmentRoutingPolicyLabelResponse,
} from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { PutAttachmentRoutingPolicyLabel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAttachmentRoutingPolicyLabelCommand}.
 */
export interface PutAttachmentRoutingPolicyLabelCommandInput extends PutAttachmentRoutingPolicyLabelRequest {}
/**
 * @public
 *
 * The output of {@link PutAttachmentRoutingPolicyLabelCommand}.
 */
export interface PutAttachmentRoutingPolicyLabelCommandOutput
  extends PutAttachmentRoutingPolicyLabelResponse,
    __MetadataBearer {}

/**
 * <p>Applies a routing policy label to an attachment for traffic routing decisions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, PutAttachmentRoutingPolicyLabelCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, PutAttachmentRoutingPolicyLabelCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // PutAttachmentRoutingPolicyLabelRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   AttachmentId: "STRING_VALUE", // required
 *   RoutingPolicyLabel: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new PutAttachmentRoutingPolicyLabelCommand(input);
 * const response = await client.send(command);
 * // { // PutAttachmentRoutingPolicyLabelResponse
 * //   CoreNetworkId: "STRING_VALUE",
 * //   AttachmentId: "STRING_VALUE",
 * //   RoutingPolicyLabel: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutAttachmentRoutingPolicyLabelCommandInput - {@link PutAttachmentRoutingPolicyLabelCommandInput}
 * @returns {@link PutAttachmentRoutingPolicyLabelCommandOutput}
 * @see {@link PutAttachmentRoutingPolicyLabelCommandInput} for command's `input` shape.
 * @see {@link PutAttachmentRoutingPolicyLabelCommandOutput} for command's `response` shape.
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
export class PutAttachmentRoutingPolicyLabelCommand extends $Command
  .classBuilder<
    PutAttachmentRoutingPolicyLabelCommandInput,
    PutAttachmentRoutingPolicyLabelCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "PutAttachmentRoutingPolicyLabel", {})
  .n("NetworkManagerClient", "PutAttachmentRoutingPolicyLabelCommand")
  .sc(PutAttachmentRoutingPolicyLabel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAttachmentRoutingPolicyLabelRequest;
      output: PutAttachmentRoutingPolicyLabelResponse;
    };
    sdk: {
      input: PutAttachmentRoutingPolicyLabelCommandInput;
      output: PutAttachmentRoutingPolicyLabelCommandOutput;
    };
  };
}
