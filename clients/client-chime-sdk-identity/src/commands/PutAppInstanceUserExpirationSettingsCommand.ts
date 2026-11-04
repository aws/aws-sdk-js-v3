// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutAppInstanceUserExpirationSettingsRequest,
  PutAppInstanceUserExpirationSettingsResponse,
} from "../models/models_0";
import { PutAppInstanceUserExpirationSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAppInstanceUserExpirationSettingsCommand}.
 */
export interface PutAppInstanceUserExpirationSettingsCommandInput extends PutAppInstanceUserExpirationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutAppInstanceUserExpirationSettingsCommand}.
 */
export interface PutAppInstanceUserExpirationSettingsCommandOutput extends PutAppInstanceUserExpirationSettingsResponse, __MetadataBearer {}

/**
 * Sets the number of days before the `AppInstanceUser` is automatically deleted.
 *
 * > **Note:**
 * >
 * > A background process deletes expired `AppInstanceUsers` within 6 hours of expiration. Actual deletion times may vary.
 * >
 * > Expired `AppInstanceUsers` that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, PutAppInstanceUserExpirationSettingsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, PutAppInstanceUserExpirationSettingsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // PutAppInstanceUserExpirationSettingsRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   ExpirationSettings: { // ExpirationSettings
 *     ExpirationDays: Number("int"), // required
 *     ExpirationCriterion: "CREATED_TIMESTAMP", // required
 *   },
 * };
 * const command = new PutAppInstanceUserExpirationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutAppInstanceUserExpirationSettingsResponse
 * //   AppInstanceUserArn: "STRING_VALUE",
 * //   ExpirationSettings: { // ExpirationSettings
 * //     ExpirationDays: Number("int"), // required
 * //     ExpirationCriterion: "CREATED_TIMESTAMP", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAppInstanceUserExpirationSettingsCommandInput - {@link PutAppInstanceUserExpirationSettingsCommandInput}
 * @returns {@link PutAppInstanceUserExpirationSettingsCommandOutput}
 * @see {@link PutAppInstanceUserExpirationSettingsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceUserExpirationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKIdentity service.
 *
 * @public
 */
export class PutAppInstanceUserExpirationSettingsCommand extends command<PutAppInstanceUserExpirationSettingsCommandInput, PutAppInstanceUserExpirationSettingsCommandOutput>(
  _ep0,
  _mw0,
  "PutAppInstanceUserExpirationSettings",
  PutAppInstanceUserExpirationSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAppInstanceUserExpirationSettingsRequest;
      output: PutAppInstanceUserExpirationSettingsResponse;
    };
    sdk: {
      input: PutAppInstanceUserExpirationSettingsCommandInput;
      output: PutAppInstanceUserExpirationSettingsCommandOutput;
    };
  };
}
