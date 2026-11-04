// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRelationshipRequest, DeleteRelationshipResponse } from "../models/models_0";
import { DeleteRelationship$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRelationshipCommand}.
 */
export interface DeleteRelationshipCommandInput extends DeleteRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRelationshipCommand}.
 */
export interface DeleteRelationshipCommandOutput extends DeleteRelationshipResponse, __MetadataBearer {}

/**
 * Deletes a partner relationship.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, DeleteRelationshipCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, DeleteRelationshipCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // DeleteRelationshipRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   programManagementAccountIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteRelationshipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRelationshipCommandInput - {@link DeleteRelationshipCommandInput}
 * @returns {@link DeleteRelationshipCommandOutput}
 * @see {@link DeleteRelationshipCommandInput} for command's `input` shape.
 * @see {@link DeleteRelationshipCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests being sent in a short period.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation due to invalid input parameters.
 *
 * @throws {@link PartnerCentralChannelServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralChannel service.
 *
 * @example Example for DeleteRelationship
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   identifier: "rs-l9o4fj3b5zb91",
 *   programManagementAccountIdentifier: "pma-u8ic702rtzng8"
 * };
 * const command = new DeleteRelationshipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRelationshipCommand extends command<DeleteRelationshipCommandInput, DeleteRelationshipCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRelationship",
  DeleteRelationship$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRelationshipRequest;
      output: {};
    };
    sdk: {
      input: DeleteRelationshipCommandInput;
      output: DeleteRelationshipCommandOutput;
    };
  };
}
