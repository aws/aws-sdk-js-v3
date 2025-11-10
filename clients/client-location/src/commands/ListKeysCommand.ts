// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListKeysRequest, ListKeysResponse } from "../models/models_0";
import { ListKeys } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeysCommand}.
 */
export interface ListKeysCommandInput extends ListKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListKeysCommand}.
 */
export interface ListKeysCommandOutput extends ListKeysResponse, __MetadataBearer {}

/**
 * <p>Lists API key resources in your Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Use API keys to authenticate</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListKeysCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListKeysCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // ListKeysRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filter: { // ApiKeyFilter
 *     KeyStatus: "STRING_VALUE",
 *   },
 * };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListKeysResponse
 * //   Entries: [ // ListKeysResponseEntryList // required
 * //     { // ListKeysResponseEntry
 * //       KeyName: "STRING_VALUE", // required
 * //       ExpireTime: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       Restrictions: { // ApiKeyRestrictions
 * //         AllowActions: [ // ApiKeyActionList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowResources: [ // GeoArnList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowReferers: [ // RefererPatternList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowAndroidApps: [ // AndroidAppList
 * //           { // AndroidApp
 * //             Package: "STRING_VALUE", // required
 * //             CertificateFingerprint: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         AllowAppleApps: [ // AppleAppList
 * //           { // AppleApp
 * //             BundleId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKeysCommandInput - {@link ListKeysCommandInput}
 * @returns {@link ListKeysCommandOutput}
 * @see {@link ListKeysCommandInput} for command's `input` shape.
 * @see {@link ListKeysCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class ListKeysCommand extends $Command
  .classBuilder<
    ListKeysCommandInput,
    ListKeysCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "ListKeys", {})
  .n("LocationClient", "ListKeysCommand")
  .sc(ListKeys)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeysRequest;
      output: ListKeysResponse;
    };
    sdk: {
      input: ListKeysCommandInput;
      output: ListKeysCommandOutput;
    };
  };
}
