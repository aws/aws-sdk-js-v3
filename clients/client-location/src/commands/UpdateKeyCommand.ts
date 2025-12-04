// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { UpdateKeyRequest, UpdateKeyResponse } from "../models/models_0";
import { UpdateKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeyCommand}.
 */
export interface UpdateKeyCommandInput extends UpdateKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyCommand}.
 */
export interface UpdateKeyCommandOutput extends UpdateKeyResponse, __MetadataBearer {}

/**
 * <p>Updates the specified properties of a given API key resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateKeyCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateKeyCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // UpdateKeyRequest
 *   KeyName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ExpireTime: new Date("TIMESTAMP"),
 *   NoExpiry: true || false,
 *   ForceUpdate: true || false,
 *   Restrictions: { // ApiKeyRestrictions
 *     AllowActions: [ // ApiKeyActionList // required
 *       "STRING_VALUE",
 *     ],
 *     AllowResources: [ // GeoArnList // required
 *       "STRING_VALUE",
 *     ],
 *     AllowReferers: [ // RefererPatternList
 *       "STRING_VALUE",
 *     ],
 *     AllowAndroidApps: [ // AndroidAppList
 *       { // AndroidApp
 *         Package: "STRING_VALUE", // required
 *         CertificateFingerprint: "STRING_VALUE", // required
 *       },
 *     ],
 *     AllowAppleApps: [ // AppleAppList
 *       { // AppleApp
 *         BundleId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateKeyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyResponse
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyName: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateKeyCommandInput - {@link UpdateKeyCommandInput}
 * @returns {@link UpdateKeyCommandOutput}
 * @see {@link UpdateKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyCommandOutput} for command's `response` shape.
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
export class UpdateKeyCommand extends $Command
  .classBuilder<
    UpdateKeyCommandInput,
    UpdateKeyCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "UpdateKey", {})
  .n("LocationClient", "UpdateKeyCommand")
  .sc(UpdateKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKeyRequest;
      output: UpdateKeyResponse;
    };
    sdk: {
      input: UpdateKeyCommandInput;
      output: UpdateKeyCommandOutput;
    };
  };
}
