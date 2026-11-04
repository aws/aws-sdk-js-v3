// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOutboundExternalLinkRequest, DeleteOutboundExternalLinkResponse } from "../models/models_0";
import { DeleteOutboundExternalLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOutboundExternalLinkCommand}.
 */
export interface DeleteOutboundExternalLinkCommandInput extends DeleteOutboundExternalLinkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOutboundExternalLinkCommand}.
 */
export interface DeleteOutboundExternalLinkCommandOutput extends DeleteOutboundExternalLinkResponse, __MetadataBearer {}

/**
 * Deletes an outbound external link.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, DeleteOutboundExternalLinkCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, DeleteOutboundExternalLinkCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // DeleteOutboundExternalLinkRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOutboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOutboundExternalLinkResponse
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param DeleteOutboundExternalLinkCommandInput - {@link DeleteOutboundExternalLinkCommandInput}
 * @returns {@link DeleteOutboundExternalLinkCommandOutput}
 * @see {@link DeleteOutboundExternalLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteOutboundExternalLinkCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed because of a conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request could not be completed because of an internal server error. Try your call again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request could not be completed because the resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request could not be completed because it fails satisfy the constraints specified by the service.
 *
 * @throws {@link RTBFabricServiceException}
 *
 * Base exception class for all service exceptions from RTBFabric service.
 *
 * @example Delete an outbound external link
 * ```javascript
 * // Delete an outbound external link
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321"
 * };
 * const command = new DeleteOutboundExternalLinkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   linkId: "link-87654321",
 *   status: "DELETED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteOutboundExternalLinkCommand extends command<DeleteOutboundExternalLinkCommandInput, DeleteOutboundExternalLinkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOutboundExternalLink",
  DeleteOutboundExternalLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOutboundExternalLinkRequest;
      output: DeleteOutboundExternalLinkResponse;
    };
    sdk: {
      input: DeleteOutboundExternalLinkCommandInput;
      output: DeleteOutboundExternalLinkCommandOutput;
    };
  };
}
