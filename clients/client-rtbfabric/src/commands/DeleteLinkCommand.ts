// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLinkRequest, DeleteLinkResponse } from "../models/models_0";
import { de_DeleteLinkCommand, se_DeleteLinkCommand } from "../protocols/Aws_restJson1";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLinkCommand}.
 */
export interface DeleteLinkCommandInput extends DeleteLinkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLinkCommand}.
 */
export interface DeleteLinkCommandOutput extends DeleteLinkResponse, __MetadataBearer {}

/**
 * <p>Deletes a link between gateways.</p> <p>Permanently removes the connection between gateways. This action cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, DeleteLinkCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, DeleteLinkCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // DeleteLinkRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLinkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLinkResponse
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param DeleteLinkCommandInput - {@link DeleteLinkCommandInput}
 * @returns {@link DeleteLinkCommandOutput}
 * @see {@link DeleteLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteLinkCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed because of a conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Delete a link
 * ```javascript
 * // Deletes an existing link
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321"
 * };
 * const command = new DeleteLinkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   linkId: "link-87654321",
 *   status: "PENDING_DELETION"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLinkCommand extends $Command
  .classBuilder<
    DeleteLinkCommandInput,
    DeleteLinkCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RTBFabric", "DeleteLink", {})
  .n("RTBFabricClient", "DeleteLinkCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLinkCommand)
  .de(de_DeleteLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLinkRequest;
      output: DeleteLinkResponse;
    };
    sdk: {
      input: DeleteLinkCommandInput;
      output: DeleteLinkCommandOutput;
    };
  };
}
