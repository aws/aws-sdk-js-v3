// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateKeyRequest, CreateKeyResponse } from "../models/models_0";
import { CreateKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateKeyCommand}.
 */
export interface CreateKeyCommandInput extends CreateKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyCommand}.
 */
export interface CreateKeyCommandOutput extends CreateKeyResponse, __MetadataBearer {}

/**
 * Creates an API key resource in your Amazon Web Services account, which lets you grant actions for Amazon Location resources to the API key bearer.
 *
 * For more information, see [Use API keys to authenticate](https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html) in the *Amazon Location Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateKeyCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateKeyCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // CreateKeyRequest
 *   KeyName: "STRING_VALUE", // required
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
 *   Description: "STRING_VALUE",
 *   ExpireTime: new Date("TIMESTAMP"),
 *   NoExpiry: true || false,
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyResponse
 * //   Key: "STRING_VALUE", // required
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyName: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateKeyCommandInput - {@link CreateKeyCommandInput}
 * @returns {@link CreateKeyCommandOutput}
 * @see {@link CreateKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeyCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request was unsuccessful because of a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The operation was denied because the request would exceed the maximum [quota](https://docs.aws.amazon.com/location/previous/developerguide/location-quotas.html) set for Amazon Location Service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class CreateKeyCommand extends command<CreateKeyCommandInput, CreateKeyCommandOutput>(
  _ep0,
  _mw0,
  "CreateKey",
  CreateKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeyRequest;
      output: CreateKeyResponse;
    };
    sdk: {
      input: CreateKeyCommandInput;
      output: CreateKeyCommandOutput;
    };
  };
}
