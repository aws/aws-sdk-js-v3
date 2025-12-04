// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { DescribeKeyRequest, DescribeKeyResponse } from "../models/models_0";
import { DescribeKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeKeyCommand}.
 */
export interface DescribeKeyCommandInput extends DescribeKeyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyCommand}.
 */
export interface DescribeKeyCommandOutput extends DescribeKeyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the API key resource details.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Use API keys to authenticate</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeKeyCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeKeyCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DescribeKeyRequest
 *   KeyName: "STRING_VALUE", // required
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyResponse
 * //   Key: "STRING_VALUE", // required
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyName: "STRING_VALUE", // required
 * //   Restrictions: { // ApiKeyRestrictions
 * //     AllowActions: [ // ApiKeyActionList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowResources: [ // GeoArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowReferers: [ // RefererPatternList
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowAndroidApps: [ // AndroidAppList
 * //       { // AndroidApp
 * //         Package: "STRING_VALUE", // required
 * //         CertificateFingerprint: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     AllowAppleApps: [ // AppleAppList
 * //       { // AppleApp
 * //         BundleId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   ExpireTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeKeyCommandInput - {@link DescribeKeyCommandInput}
 * @returns {@link DescribeKeyCommandOutput}
 * @see {@link DescribeKeyCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
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
export class DescribeKeyCommand extends $Command
  .classBuilder<
    DescribeKeyCommandInput,
    DescribeKeyCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "DescribeKey", {})
  .n("LocationClient", "DescribeKeyCommand")
  .sc(DescribeKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKeyRequest;
      output: DescribeKeyResponse;
    };
    sdk: {
      input: DescribeKeyCommandInput;
      output: DescribeKeyCommandOutput;
    };
  };
}
