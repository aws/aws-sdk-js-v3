// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBrandRequest, DeleteBrandResponse } from "../models/models_3";
import { de_DeleteBrandCommand, se_DeleteBrandCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBrandCommand}.
 */
export interface DeleteBrandCommandInput extends DeleteBrandRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBrandCommand}.
 */
export interface DeleteBrandCommandOutput extends DeleteBrandResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>This API permanently deletes the specified QuickSight brand. When you delete a brand:</p>
 *             <ul>
 *                <li>
 *                   <p>The brand and all its associated branding elements are permanently removed</p>
 *                </li>
 *                <li>
 *                   <p>Any applications or dashboards using this brand will revert to default styling</p>
 *                </li>
 *                <li>
 *                   <p>This action cannot be undone through the API</p>
 *                </li>
 *             </ul>
 *             <p>
 *                <b>Before proceeding:</b> Verify that the brand is no longer needed and consider the impact on any applications currently using this brand.</p>
 *          </important>
 *          <p>Deletes an QuickSight brand.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteBrandCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteBrandCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteBrandRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   BrandId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrandCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBrandResponse
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBrandCommandInput - {@link DeleteBrandCommandInput}
 * @returns {@link DeleteBrandCommandOutput}
 * @see {@link DeleteBrandCommandInput} for command's `input` shape.
 * @see {@link DeleteBrandCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service exception.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteBrandCommand extends $Command
  .classBuilder<
    DeleteBrandCommandInput,
    DeleteBrandCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DeleteBrand", {})
  .n("QuickSightClient", "DeleteBrandCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBrandCommand)
  .de(de_DeleteBrandCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrandRequest;
      output: DeleteBrandResponse;
    };
    sdk: {
      input: DeleteBrandCommandInput;
      output: DeleteBrandCommandOutput;
    };
  };
}
