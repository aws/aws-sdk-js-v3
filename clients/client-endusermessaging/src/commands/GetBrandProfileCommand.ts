// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBrandProfileInput, GetBrandProfileOutput } from "../models/models_0";
import { GetBrandProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBrandProfileCommand}.
 */
export interface GetBrandProfileCommandInput extends GetBrandProfileInput {}
/**
 * @public
 *
 * The output of {@link GetBrandProfileCommand}.
 */
export interface GetBrandProfileCommandOutput extends GetBrandProfileOutput, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for a brand profile, including its name, status, deletion protection setting, and timestamps. To retrieve the attributes of the profile, use the ListBrandProfileAttributes operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, GetBrandProfileCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, GetBrandProfileCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // GetBrandProfileInput
 *   brandProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetBrandProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetBrandProfileOutput
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
 * @param GetBrandProfileCommandInput - {@link GetBrandProfileCommandInput}
 * @returns {@link GetBrandProfileCommandOutput}
 * @see {@link GetBrandProfileCommandInput} for command's `input` shape.
 * @see {@link GetBrandProfileCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @example Get a brand profile
 * ```javascript
 * //
 * const input = {
 *   brandProfileId: "bp-abc12345678901234"
 * };
 * const command = new GetBrandProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   brandProfileArn: "arn:aws:end-user-messaging:us-east-1:123456789012:brand-profile/bp-abc12345678901234",
 *   brandProfileId: "bp-abc12345678901234",
 *   brandProfileName: "AcmeCorp",
 *   createdAt: 1727130000,
 *   deletionProtectionEnabled: true,
 *   status: "ACTIVE",
 *   updatedAt: 1727130000
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBrandProfileCommand extends command<GetBrandProfileCommandInput, GetBrandProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetBrandProfile",
  GetBrandProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBrandProfileInput;
      output: GetBrandProfileOutput;
    };
    sdk: {
      input: GetBrandProfileCommandInput;
      output: GetBrandProfileCommandOutput;
    };
  };
}
