// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLinkRequest, UpdateLinkResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_UpdateLinkCommand, se_UpdateLinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLinkCommand}.
 */
export interface UpdateLinkCommandInput extends UpdateLinkRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLinkCommand}.
 */
export interface UpdateLinkCommandOutput extends UpdateLinkResponse, __MetadataBearer {}

/**
 * <p>Updates the details for an existing link. To remove information for any of the
 *             parameters, specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateLinkRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Type: "STRING_VALUE",
 *   Bandwidth: { // Bandwidth
 *     UploadSpeed: Number("int"),
 *     DownloadSpeed: Number("int"),
 *   },
 *   Provider: "STRING_VALUE",
 * };
 * const command = new UpdateLinkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLinkResponse
 * //   Link: { // Link
 * //     LinkId: "STRING_VALUE",
 * //     LinkArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     SiteId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Bandwidth: { // Bandwidth
 * //       UploadSpeed: Number("int"),
 * //       DownloadSpeed: Number("int"),
 * //     },
 * //     Provider: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLinkCommandInput - {@link UpdateLinkCommandInput}
 * @returns {@link UpdateLinkCommandOutput}
 * @see {@link UpdateLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateLinkCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateLinkCommand extends $Command
  .classBuilder<
    UpdateLinkCommandInput,
    UpdateLinkCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "UpdateLink", {})
  .n("NetworkManagerClient", "UpdateLinkCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLinkCommand)
  .de(de_UpdateLinkCommand)
  .build() {}
