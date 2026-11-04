// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RemoveAttachmentRoutingPolicyLabelRequest,
  RemoveAttachmentRoutingPolicyLabelResponse,
} from "../models/models_0";
import { RemoveAttachmentRoutingPolicyLabel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveAttachmentRoutingPolicyLabelCommand}.
 */
export interface RemoveAttachmentRoutingPolicyLabelCommandInput extends RemoveAttachmentRoutingPolicyLabelRequest {}
/**
 * @public
 *
 * The output of {@link RemoveAttachmentRoutingPolicyLabelCommand}.
 */
export interface RemoveAttachmentRoutingPolicyLabelCommandOutput extends RemoveAttachmentRoutingPolicyLabelResponse, __MetadataBearer {}

/**
 * Removes a routing policy label from an attachment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, RemoveAttachmentRoutingPolicyLabelCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, RemoveAttachmentRoutingPolicyLabelCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // RemoveAttachmentRoutingPolicyLabelRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   AttachmentId: "STRING_VALUE", // required
 * };
 * const command = new RemoveAttachmentRoutingPolicyLabelCommand(input);
 * const response = await client.send(command);
 * // { // RemoveAttachmentRoutingPolicyLabelResponse
 * //   CoreNetworkId: "STRING_VALUE",
 * //   AttachmentId: "STRING_VALUE",
 * //   RoutingPolicyLabel: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveAttachmentRoutingPolicyLabelCommandInput - {@link RemoveAttachmentRoutingPolicyLabelCommandInput}
 * @returns {@link RemoveAttachmentRoutingPolicyLabelCommandOutput}
 * @see {@link RemoveAttachmentRoutingPolicyLabelCommandInput} for command's `input` shape.
 * @see {@link RemoveAttachmentRoutingPolicyLabelCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service limit was exceeded.
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
export class RemoveAttachmentRoutingPolicyLabelCommand extends command<RemoveAttachmentRoutingPolicyLabelCommandInput, RemoveAttachmentRoutingPolicyLabelCommandOutput>(
  _ep0,
  _mw0,
  "RemoveAttachmentRoutingPolicyLabel",
  RemoveAttachmentRoutingPolicyLabel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAttachmentRoutingPolicyLabelRequest;
      output: RemoveAttachmentRoutingPolicyLabelResponse;
    };
    sdk: {
      input: RemoveAttachmentRoutingPolicyLabelCommandInput;
      output: RemoveAttachmentRoutingPolicyLabelCommandOutput;
    };
  };
}
