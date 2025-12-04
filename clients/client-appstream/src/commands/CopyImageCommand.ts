// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CopyImageRequest, CopyImageResponse } from "../models/models_0";
import { CopyImage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyImageCommand}.
 */
export interface CopyImageCommandInput extends CopyImageRequest {}
/**
 * @public
 *
 * The output of {@link CopyImageCommand}.
 */
export interface CopyImageCommandOutput extends CopyImageResponse, __MetadataBearer {}

/**
 * <p>Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CopyImageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CopyImageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CopyImageRequest
 *   SourceImageName: "STRING_VALUE", // required
 *   DestinationImageName: "STRING_VALUE", // required
 *   DestinationRegion: "STRING_VALUE", // required
 *   DestinationImageDescription: "STRING_VALUE",
 * };
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * // { // CopyImageResponse
 * //   DestinationImageName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyImageCommandInput - {@link CopyImageCommandInput}
 * @returns {@link CopyImageCommandOutput}
 * @see {@link CopyImageCommandInput} for command's `input` shape.
 * @see {@link CopyImageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *  <p>The specified resource exists and is not in use, but isn't available.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class CopyImageCommand extends $Command
  .classBuilder<
    CopyImageCommandInput,
    CopyImageCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CopyImage", {})
  .n("AppStreamClient", "CopyImageCommand")
  .sc(CopyImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyImageRequest;
      output: CopyImageResponse;
    };
    sdk: {
      input: CopyImageCommandInput;
      output: CopyImageCommandOutput;
    };
  };
}
