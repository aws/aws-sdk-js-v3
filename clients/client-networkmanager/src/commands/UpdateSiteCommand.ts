// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateSiteRequest,
  UpdateSiteRequestFilterSensitiveLog,
  UpdateSiteResponse,
  UpdateSiteResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_UpdateSiteCommand, se_UpdateSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSiteCommand}.
 */
export interface UpdateSiteCommandInput extends UpdateSiteRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSiteCommand}.
 */
export interface UpdateSiteCommandOutput extends UpdateSiteResponse, __MetadataBearer {}

/**
 * <p>Updates the information for an existing site. To remove information for any of the
 *             parameters, specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateSiteCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateSiteCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateSiteRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   SiteId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Location: { // Location
 *     Address: "STRING_VALUE",
 *     Latitude: "STRING_VALUE",
 *     Longitude: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSiteCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSiteResponse
 * //   Site: { // Site
 * //     SiteId: "STRING_VALUE",
 * //     SiteArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Location: { // Location
 * //       Address: "STRING_VALUE",
 * //       Latitude: "STRING_VALUE",
 * //       Longitude: "STRING_VALUE",
 * //     },
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
 * @param UpdateSiteCommandInput - {@link UpdateSiteCommandInput}
 * @returns {@link UpdateSiteCommandOutput}
 * @see {@link UpdateSiteCommandInput} for command's `input` shape.
 * @see {@link UpdateSiteCommandOutput} for command's `response` shape.
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
export class UpdateSiteCommand extends $Command
  .classBuilder<
    UpdateSiteCommandInput,
    UpdateSiteCommandOutput,
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
  .s("NetworkManager", "UpdateSite", {})
  .n("NetworkManagerClient", "UpdateSiteCommand")
  .f(UpdateSiteRequestFilterSensitiveLog, UpdateSiteResponseFilterSensitiveLog)
  .ser(se_UpdateSiteCommand)
  .de(de_UpdateSiteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSiteRequest;
      output: UpdateSiteResponse;
    };
    sdk: {
      input: UpdateSiteCommandInput;
      output: UpdateSiteCommandOutput;
    };
  };
}
