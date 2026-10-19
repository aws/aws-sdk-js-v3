// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBrandProfileInput, CreateBrandProfileOutput } from "../models/models_0";
import { CreateBrandProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBrandProfileCommand}.
 */
export interface CreateBrandProfileCommandInput extends CreateBrandProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateBrandProfileCommand}.
 */
export interface CreateBrandProfileCommandOutput extends CreateBrandProfileOutput, __MetadataBearer {}

/**
 * <p>Creates a brand profile. A brand profile is a lightweight container that holds your brand identity information as flexible attributes. After you create a brand profile, use the CreateBrandProfileAttributes operation to add company information, addresses, compliance documents, and logos.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, CreateBrandProfileCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, CreateBrandProfileCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // CreateBrandProfileInput
 *   brandProfileName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   deletionProtectionEnabled: true || false,
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateBrandProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateBrandProfileOutput
 * //   brandProfileId: "STRING_VALUE", // required
 * //   brandProfileArn: "STRING_VALUE", // required
 * //   brandProfileName: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "BLOCKED" || "PAUSED" || "CANCELLED" || "FAILED", // required
 * //   deletionProtectionEnabled: true || false, // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   attributesCreated: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CreateBrandProfileCommandInput - {@link CreateBrandProfileCommandInput}
 * @returns {@link CreateBrandProfileCommandOutput}
 * @see {@link CreateBrandProfileCommandInput} for command's `input` shape.
 * @see {@link CreateBrandProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota for your account.</p>
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
 * @example Create a brand profile
 * ```javascript
 * //
 * const input = {
 *   brandProfileName: "AcmeCorp",
 *   deletionProtectionEnabled: true
 * };
 * const command = new CreateBrandProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attributesCreated: 0,
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
export class CreateBrandProfileCommand extends command<CreateBrandProfileCommandInput, CreateBrandProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateBrandProfile",
  CreateBrandProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBrandProfileInput;
      output: CreateBrandProfileOutput;
    };
    sdk: {
      input: CreateBrandProfileCommandInput;
      output: CreateBrandProfileCommandOutput;
    };
  };
}
