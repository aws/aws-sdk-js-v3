// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBrandProfileInput, UpdateBrandProfileOutput } from "../models/models_0";
import { UpdateBrandProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBrandProfileCommand}.
 */
export interface UpdateBrandProfileCommandInput extends UpdateBrandProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateBrandProfileCommand}.
 */
export interface UpdateBrandProfileCommandOutput extends UpdateBrandProfileOutput, __MetadataBearer {}

/**
 * <p>Updates the name or the deletion protection setting of a brand profile. To change the information that is stored in the profile, use the brand profile attribute operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, UpdateBrandProfileCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, UpdateBrandProfileCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // UpdateBrandProfileInput
 *   brandProfileId: "STRING_VALUE", // required
 *   brandProfileName: "STRING_VALUE",
 *   deletionProtectionEnabled: true || false,
 * };
 * const command = new UpdateBrandProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrandProfileOutput
 * //   brandProfileId: "STRING_VALUE", // required
 * //   brandProfileArn: "STRING_VALUE", // required
 * //   brandProfileName: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "BLOCKED" || "PAUSED" || "CANCELLED" || "FAILED", // required
 * //   deletionProtectionEnabled: true || false, // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateBrandProfileCommandInput - {@link UpdateBrandProfileCommandInput}
 * @returns {@link UpdateBrandProfileCommandOutput}
 * @see {@link UpdateBrandProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateBrandProfileCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. Verify that the resource identifier is correct and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EndUserMessagingServiceException}
 * <p>Base exception class for all service exceptions from EndUserMessaging service.</p>
 *
 *
 * @example Update a brand profile name
 * ```javascript
 * //
 * const input = {
 *   brandProfileId: "bp-abc12345678901234",
 *   brandProfileName: "AcmeCorpUpdated",
 *   deletionProtectionEnabled: false
 * };
 * const command = new UpdateBrandProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   brandProfileArn: "arn:aws:end-user-messaging:us-east-1:123456789012:brand-profile/bp-abc12345678901234",
 *   brandProfileId: "bp-abc12345678901234",
 *   brandProfileName: "AcmeCorpUpdated",
 *   createdAt: 1727130000,
 *   deletionProtectionEnabled: false,
 *   status: "ACTIVE",
 *   updatedAt: 1727216400
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateBrandProfileCommand extends command<UpdateBrandProfileCommandInput, UpdateBrandProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBrandProfile",
  UpdateBrandProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrandProfileInput;
      output: UpdateBrandProfileOutput;
    };
    sdk: {
      input: UpdateBrandProfileCommandInput;
      output: UpdateBrandProfileCommandOutput;
    };
  };
}
