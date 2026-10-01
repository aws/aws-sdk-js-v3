// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBrandProfilesInput, ListBrandProfilesOutput } from "../models/models_0";
import { ListBrandProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBrandProfilesCommand}.
 */
export interface ListBrandProfilesCommandInput extends ListBrandProfilesInput {}
/**
 * @public
 *
 * The output of {@link ListBrandProfilesCommand}.
 */
export interface ListBrandProfilesCommandOutput extends ListBrandProfilesOutput, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of the brand profiles in your account. Use the nextToken parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, ListBrandProfilesCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, ListBrandProfilesCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // ListBrandProfilesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBrandProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListBrandProfilesOutput
 * //   brandProfiles: [ // BrandProfileInfoList // required
 * //     { // BrandProfileInfo
 * //       brandProfileId: "STRING_VALUE", // required
 * //       brandProfileArn: "STRING_VALUE", // required
 * //       brandProfileName: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "BLOCKED" || "PAUSED" || "CANCELLED" || "FAILED", // required
 * //       deletionProtectionEnabled: true || false, // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBrandProfilesCommandInput - {@link ListBrandProfilesCommandInput}
 * @returns {@link ListBrandProfilesCommandOutput}
 * @see {@link ListBrandProfilesCommandInput} for command's `input` shape.
 * @see {@link ListBrandProfilesCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
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
 * @example List brand profiles
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListBrandProfilesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   brandProfiles: [
 *     {
 *       brandProfileArn: "arn:aws:end-user-messaging:us-east-1:123456789012:brand-profile/bp-abc12345678901234",
 *       brandProfileId: "bp-abc12345678901234",
 *       brandProfileName: "AcmeCorp",
 *       createdAt: 1727130000,
 *       deletionProtectionEnabled: true,
 *       status: "ACTIVE",
 *       updatedAt: 1727130000
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListBrandProfilesCommand extends command<ListBrandProfilesCommandInput, ListBrandProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListBrandProfiles",
  ListBrandProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBrandProfilesInput;
      output: ListBrandProfilesOutput;
    };
    sdk: {
      input: ListBrandProfilesCommandInput;
      output: ListBrandProfilesCommandOutput;
    };
  };
}
