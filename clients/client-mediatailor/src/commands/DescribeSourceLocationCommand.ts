// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DescribeSourceLocationRequest, DescribeSourceLocationResponse } from "../models/models_0";
import { DescribeSourceLocation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSourceLocationCommand}.
 */
export interface DescribeSourceLocationCommandInput extends DescribeSourceLocationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSourceLocationCommand}.
 */
export interface DescribeSourceLocationCommandOutput extends DescribeSourceLocationResponse, __MetadataBearer {}

/**
 * <p>Describes a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DescribeSourceLocationRequest
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new DescribeSourceLocationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSourceLocationResponse
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
 * @param DescribeSourceLocationCommandInput - {@link DescribeSourceLocationCommandInput}
 * @returns {@link DescribeSourceLocationCommandOutput}
 * @see {@link DescribeSourceLocationCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DescribeSourceLocationCommand extends $Command
  .classBuilder<
    DescribeSourceLocationCommandInput,
    DescribeSourceLocationCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "DescribeSourceLocation", {})
  .n("MediaTailorClient", "DescribeSourceLocationCommand")
  .sc(DescribeSourceLocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSourceLocationRequest;
      output: DescribeSourceLocationResponse;
    };
    sdk: {
      input: DescribeSourceLocationCommandInput;
      output: DescribeSourceLocationCommandOutput;
    };
  };
}
