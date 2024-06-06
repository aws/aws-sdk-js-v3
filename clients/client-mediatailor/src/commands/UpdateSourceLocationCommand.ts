// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateSourceLocationRequest, UpdateSourceLocationResponse } from "../models/models_0";
import { de_UpdateSourceLocationCommand, se_UpdateSourceLocationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSourceLocationCommand}.
 */
export interface UpdateSourceLocationCommandInput extends UpdateSourceLocationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSourceLocationCommand}.
 */
export interface UpdateSourceLocationCommandOutput extends UpdateSourceLocationResponse, __MetadataBearer {}

/**
 * <p>Updates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // UpdateSourceLocationRequest
 *   AccessConfiguration: { // AccessConfiguration
 *     AccessType: "S3_SIGV4" || "SECRETS_MANAGER_ACCESS_TOKEN" || "AUTODETECT_SIGV4",
 *     SecretsManagerAccessTokenConfiguration: { // SecretsManagerAccessTokenConfiguration
 *       HeaderName: "STRING_VALUE",
 *       SecretArn: "STRING_VALUE",
 *       SecretStringKey: "STRING_VALUE",
 *     },
 *   },
 *   DefaultSegmentDeliveryConfiguration: { // DefaultSegmentDeliveryConfiguration
 *     BaseUrl: "STRING_VALUE",
 *   },
 *   HttpConfiguration: { // HttpConfiguration
 *     BaseUrl: "STRING_VALUE", // required
 *   },
 *   SegmentDeliveryConfigurations: [ // __listOfSegmentDeliveryConfiguration
 *     { // SegmentDeliveryConfiguration
 *       BaseUrl: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *   ],
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new UpdateSourceLocationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSourceLocationResponse
 * //   AccessConfiguration: { // AccessConfiguration
 * //     AccessType: "S3_SIGV4" || "SECRETS_MANAGER_ACCESS_TOKEN" || "AUTODETECT_SIGV4",
 * //     SecretsManagerAccessTokenConfiguration: { // SecretsManagerAccessTokenConfiguration
 * //       HeaderName: "STRING_VALUE",
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStringKey: "STRING_VALUE",
 * //     },
 * //   },
 * //   Arn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   DefaultSegmentDeliveryConfiguration: { // DefaultSegmentDeliveryConfiguration
 * //     BaseUrl: "STRING_VALUE",
 * //   },
 * //   HttpConfiguration: { // HttpConfiguration
 * //     BaseUrl: "STRING_VALUE", // required
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   SegmentDeliveryConfigurations: [ // __listOfSegmentDeliveryConfiguration
 * //     { // SegmentDeliveryConfiguration
 * //       BaseUrl: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SourceLocationName: "STRING_VALUE",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSourceLocationCommandInput - {@link UpdateSourceLocationCommandInput}
 * @returns {@link UpdateSourceLocationCommandOutput}
 * @see {@link UpdateSourceLocationCommandInput} for command's `input` shape.
 * @see {@link UpdateSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class UpdateSourceLocationCommand extends $Command
  .classBuilder<
    UpdateSourceLocationCommandInput,
    UpdateSourceLocationCommandOutput,
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
  .s("MediaTailor", "UpdateSourceLocation", {})
  .n("MediaTailorClient", "UpdateSourceLocationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSourceLocationCommand)
  .de(de_UpdateSourceLocationCommand)
  .build() {}
