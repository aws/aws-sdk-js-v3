// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DescribeLiveSourceRequest, DescribeLiveSourceResponse } from "../models/models_0";
import { de_DescribeLiveSourceCommand, se_DescribeLiveSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLiveSourceCommand}.
 */
export interface DescribeLiveSourceCommandInput extends DescribeLiveSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLiveSourceCommand}.
 */
export interface DescribeLiveSourceCommandOutput extends DescribeLiveSourceResponse, __MetadataBearer {}

/**
 * <p>The live source to describe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeLiveSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeLiveSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DescribeLiveSourceRequest
 *   LiveSourceName: "STRING_VALUE", // required
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new DescribeLiveSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLiveSourceResponse
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
 * @param DescribeLiveSourceCommandInput - {@link DescribeLiveSourceCommandInput}
 * @returns {@link DescribeLiveSourceCommandOutput}
 * @see {@link DescribeLiveSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeLiveSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DescribeLiveSourceCommand extends $Command
  .classBuilder<
    DescribeLiveSourceCommandInput,
    DescribeLiveSourceCommandOutput,
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
  .s("MediaTailor", "DescribeLiveSource", {})
  .n("MediaTailorClient", "DescribeLiveSourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLiveSourceCommand)
  .de(de_DescribeLiveSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLiveSourceRequest;
      output: DescribeLiveSourceResponse;
    };
    sdk: {
      input: DescribeLiveSourceCommandInput;
      output: DescribeLiveSourceCommandOutput;
    };
  };
}
