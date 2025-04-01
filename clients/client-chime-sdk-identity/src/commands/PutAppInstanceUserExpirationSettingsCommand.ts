// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutAppInstanceUserExpirationSettingsRequest,
  PutAppInstanceUserExpirationSettingsResponse,
} from "../models/models_0";
import {
  de_PutAppInstanceUserExpirationSettingsCommand,
  se_PutAppInstanceUserExpirationSettingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface PutAppInstanceUserExpirationSettingsCommandOutput
  extends PutAppInstanceUserExpirationSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Sets the number of days before the <code>AppInstanceUser</code> is automatically deleted.</p>
 *          <note>
 *             <p>A background process deletes expired <code>AppInstanceUsers</code> within 6 hours of expiration.
 *             Actual deletion times may vary.</p>
 *             <p>Expired <code>AppInstanceUsers</code> that have not yet been deleted appear as active, and you can update
 *             their expiration settings. The system honors the new settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, PutAppInstanceUserExpirationSettingsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, PutAppInstanceUserExpirationSettingsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 *
 * @public
 */
export class PutAppInstanceUserExpirationSettingsCommand extends $Command
  .classBuilder<
    PutAppInstanceUserExpirationSettingsCommandInput,
    PutAppInstanceUserExpirationSettingsCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeIdentityService", "PutAppInstanceUserExpirationSettings", {})
  .n("ChimeSDKIdentityClient", "PutAppInstanceUserExpirationSettingsCommand")
  .f(void 0, void 0)
  .ser(se_PutAppInstanceUserExpirationSettingsCommand)
  .de(de_PutAppInstanceUserExpirationSettingsCommand)
  .build() {
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
