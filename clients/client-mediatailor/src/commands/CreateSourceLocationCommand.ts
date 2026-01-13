// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import type { CreateSourceLocationRequest, CreateSourceLocationResponse } from "../models/models_0";
import { CreateSourceLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSourceLocationCommand}.
 */
export interface CreateSourceLocationCommandInput extends CreateSourceLocationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSourceLocationCommand}.
 */
export interface CreateSourceLocationCommandOutput extends CreateSourceLocationResponse, __MetadataBearer {}

/**
 * <p>Creates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // CreateSourceLocationRequest
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
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSourceLocationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSourceLocationResponse
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
 * @param CreateSourceLocationCommandInput - {@link CreateSourceLocationCommandInput}
 * @returns {@link CreateSourceLocationCommandOutput}
 * @see {@link CreateSourceLocationCommandInput} for command's `input` shape.
 * @see {@link CreateSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class CreateSourceLocationCommand extends $Command
  .classBuilder<
    CreateSourceLocationCommandInput,
    CreateSourceLocationCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "CreateSourceLocation", {})
  .n("MediaTailorClient", "CreateSourceLocationCommand")
  .sc(CreateSourceLocation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSourceLocationRequest;
      output: CreateSourceLocationResponse;
    };
    sdk: {
      input: CreateSourceLocationCommandInput;
      output: CreateSourceLocationCommandOutput;
    };
  };
}
