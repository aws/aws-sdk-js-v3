// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBrandPublishedVersionRequest, UpdateBrandPublishedVersionResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateBrandPublishedVersion } from "../schemas/schemas_16_Brand";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrandPublishedVersionCommand}.
 */
export interface UpdateBrandPublishedVersionCommandInput extends UpdateBrandPublishedVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrandPublishedVersionCommand}.
 */
export interface UpdateBrandPublishedVersionCommandOutput
  extends UpdateBrandPublishedVersionResponse,
    __MetadataBearer {}

/**
 * <p>Updates the published version of a brand.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateBrandPublishedVersionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateBrandPublishedVersionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateBrandPublishedVersionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   BrandId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateBrandPublishedVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrandPublishedVersionResponse
 * //   RequestId: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBrandPublishedVersionCommandInput - {@link UpdateBrandPublishedVersionCommandInput}
 * @returns {@link UpdateBrandPublishedVersionCommandOutput}
 * @see {@link UpdateBrandPublishedVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateBrandPublishedVersionCommandOutput} for command's `response` shape.
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
export class UpdateBrandPublishedVersionCommand extends $Command
  .classBuilder<
    UpdateBrandPublishedVersionCommandInput,
    UpdateBrandPublishedVersionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateBrandPublishedVersion", {})
  .n("QuickSightClient", "UpdateBrandPublishedVersionCommand")
  .sc(UpdateBrandPublishedVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrandPublishedVersionRequest;
      output: UpdateBrandPublishedVersionResponse;
    };
    sdk: {
      input: UpdateBrandPublishedVersionCommandInput;
      output: UpdateBrandPublishedVersionCommandOutput;
    };
  };
}
