// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListSourceLocationsRequest, ListSourceLocationsResponse } from "../models/models_0";
import { de_ListSourceLocationsCommand, se_ListSourceLocationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourceLocationsCommand}.
 */
export interface ListSourceLocationsCommandInput extends ListSourceLocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceLocationsCommand}.
 */
export interface ListSourceLocationsCommandOutput extends ListSourceLocationsResponse, __MetadataBearer {}

/**
 * <p>Lists the source locations for a channel. A source location defines the host server URL, and contains a list of sources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListSourceLocationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListSourceLocationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ListSourceLocationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSourceLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceLocationsResponse
 * //   Items: [ // __listOfSourceLocation
 * //     { // SourceLocation
 * //       AccessConfiguration: { // AccessConfiguration
 * //         AccessType: "S3_SIGV4" || "SECRETS_MANAGER_ACCESS_TOKEN" || "AUTODETECT_SIGV4",
 * //         SecretsManagerAccessTokenConfiguration: { // SecretsManagerAccessTokenConfiguration
 * //           HeaderName: "STRING_VALUE",
 * //           SecretArn: "STRING_VALUE",
 * //           SecretStringKey: "STRING_VALUE",
 * //         },
 * //       },
 * //       Arn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       DefaultSegmentDeliveryConfiguration: { // DefaultSegmentDeliveryConfiguration
 * //         BaseUrl: "STRING_VALUE",
 * //       },
 * //       HttpConfiguration: { // HttpConfiguration
 * //         BaseUrl: "STRING_VALUE", // required
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       SegmentDeliveryConfigurations: [ // __listOfSegmentDeliveryConfiguration
 * //         { // SegmentDeliveryConfiguration
 * //           BaseUrl: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SourceLocationName: "STRING_VALUE", // required
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourceLocationsCommandInput - {@link ListSourceLocationsCommandInput}
 * @returns {@link ListSourceLocationsCommandOutput}
 * @see {@link ListSourceLocationsCommandInput} for command's `input` shape.
 * @see {@link ListSourceLocationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class ListSourceLocationsCommand extends $Command
  .classBuilder<
    ListSourceLocationsCommandInput,
    ListSourceLocationsCommandOutput,
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
  .s("MediaTailor", "ListSourceLocations", {})
  .n("MediaTailorClient", "ListSourceLocationsCommand")
  .f(void 0, void 0)
  .ser(se_ListSourceLocationsCommand)
  .de(de_ListSourceLocationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourceLocationsRequest;
      output: ListSourceLocationsResponse;
    };
    sdk: {
      input: ListSourceLocationsCommandInput;
      output: ListSourceLocationsCommandOutput;
    };
  };
}
