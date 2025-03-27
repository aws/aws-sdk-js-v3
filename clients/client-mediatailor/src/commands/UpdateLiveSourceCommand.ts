// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateLiveSourceRequest, UpdateLiveSourceResponse } from "../models/models_0";
import { de_UpdateLiveSourceCommand, se_UpdateLiveSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLiveSourceCommand}.
 */
export interface UpdateLiveSourceCommandInput extends UpdateLiveSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLiveSourceCommand}.
 */
export interface UpdateLiveSourceCommandOutput extends UpdateLiveSourceResponse, __MetadataBearer {}

/**
 * <p>Updates a live source's configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateLiveSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateLiveSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // UpdateLiveSourceRequest
 *   HttpPackageConfigurations: [ // HttpPackageConfigurations // required
 *     { // HttpPackageConfiguration
 *       Path: "STRING_VALUE", // required
 *       SourceGroup: "STRING_VALUE", // required
 *       Type: "DASH" || "HLS", // required
 *     },
 *   ],
 *   LiveSourceName: "STRING_VALUE", // required
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new UpdateLiveSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLiveSourceResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   HttpPackageConfigurations: [ // HttpPackageConfigurations
 * //     { // HttpPackageConfiguration
 * //       Path: "STRING_VALUE", // required
 * //       SourceGroup: "STRING_VALUE", // required
 * //       Type: "DASH" || "HLS", // required
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LiveSourceName: "STRING_VALUE",
 * //   SourceLocationName: "STRING_VALUE",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLiveSourceCommandInput - {@link UpdateLiveSourceCommandInput}
 * @returns {@link UpdateLiveSourceCommandOutput}
 * @see {@link UpdateLiveSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateLiveSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class UpdateLiveSourceCommand extends $Command
  .classBuilder<
    UpdateLiveSourceCommandInput,
    UpdateLiveSourceCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "UpdateLiveSource", {})
  .n("MediaTailorClient", "UpdateLiveSourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLiveSourceCommand)
  .de(de_UpdateLiveSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLiveSourceRequest;
      output: UpdateLiveSourceResponse;
    };
    sdk: {
      input: UpdateLiveSourceCommandInput;
      output: UpdateLiveSourceCommandOutput;
    };
  };
}
