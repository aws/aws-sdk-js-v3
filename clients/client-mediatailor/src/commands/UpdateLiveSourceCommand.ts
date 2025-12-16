// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import type { UpdateLiveSourceRequest, UpdateLiveSourceResponse } from "../models/models_0";
import { UpdateLiveSource$ } from "../schemas/schemas_0";

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
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "UpdateLiveSource", {})
  .n("MediaTailorClient", "UpdateLiveSourceCommand")
  .sc(UpdateLiveSource$)
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
