// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { CreateVodSourceRequest, CreateVodSourceResponse } from "../models/models_0";
import { de_CreateVodSourceCommand, se_CreateVodSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVodSourceCommand}.
 */
export interface CreateVodSourceCommandInput extends CreateVodSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateVodSourceCommand}.
 */
export interface CreateVodSourceCommandOutput extends CreateVodSourceResponse, __MetadataBearer {}

/**
 * <p>The VOD source configuration parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // CreateVodSourceRequest
 *   HttpPackageConfigurations: [ // HttpPackageConfigurations // required
 *     { // HttpPackageConfiguration
 *       Path: "STRING_VALUE", // required
 *       SourceGroup: "STRING_VALUE", // required
 *       Type: "DASH" || "HLS", // required
 *     },
 *   ],
 *   SourceLocationName: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 *   VodSourceName: "STRING_VALUE", // required
 * };
 * const command = new CreateVodSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateVodSourceResponse
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
 * //   SourceLocationName: "STRING_VALUE",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   VodSourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVodSourceCommandInput - {@link CreateVodSourceCommandInput}
 * @returns {@link CreateVodSourceCommandOutput}
 * @see {@link CreateVodSourceCommandInput} for command's `input` shape.
 * @see {@link CreateVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class CreateVodSourceCommand extends $Command
  .classBuilder<
    CreateVodSourceCommandInput,
    CreateVodSourceCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "CreateVodSource", {})
  .n("MediaTailorClient", "CreateVodSourceCommand")
  .f(void 0, void 0)
  .ser(se_CreateVodSourceCommand)
  .de(de_CreateVodSourceCommand)
  .build() {}
