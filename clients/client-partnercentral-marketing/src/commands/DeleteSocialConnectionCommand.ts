// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSocialConnectionRequest } from "../models/models_0";
import { DeleteSocialConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSocialConnectionCommand}.
 */
export interface DeleteSocialConnectionCommandInput extends DeleteSocialConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSocialConnectionCommand}.
 */
export interface DeleteSocialConnectionCommandOutput extends __MetadataBearer {}

/**
 * Revokes and deletes one social connection; other connections on the same
 * platform are untouched. Idempotent: deleting an unknown or already-deleted
 * connection succeeds rather than returning a not-found error.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, DeleteSocialConnectionCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, DeleteSocialConnectionCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // DeleteSocialConnectionRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   Identifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteSocialConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSocialConnectionCommandInput - {@link DeleteSocialConnectionCommandInput}
 * @returns {@link DeleteSocialConnectionCommandOutput}
 * @see {@link DeleteSocialConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteSocialConnectionCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * An IAM denial carries no `Reason`. A refusal for the caller's Partner Central state carries one, so a client tells
 * the two apart by its presence.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by the service.
 *
 * A caller branches on `Reason`, and where the rejection is attributable to particular fields it reads
 * `FieldList` rather than parsing `Message`, which is prose and may change.
 *
 * @throws {@link PartnerCentralMarketingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralMarketing service.</p>
 *
 *
 * @public
 */
export class DeleteSocialConnectionCommand extends command<DeleteSocialConnectionCommandInput, DeleteSocialConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSocialConnection",
  DeleteSocialConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSocialConnectionRequest;
      output: {};
    };
    sdk: {
      input: DeleteSocialConnectionCommandInput;
      output: DeleteSocialConnectionCommandOutput;
    };
  };
}
