// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateBrandProfileFromRegistrationInput,
  UpdateBrandProfileFromRegistrationOutput,
} from "../models/models_0";
import { UpdateBrandProfileFromRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBrandProfileFromRegistrationCommand}.
 */
export interface UpdateBrandProfileFromRegistrationCommandInput extends UpdateBrandProfileFromRegistrationInput {}
/**
 * @public
 *
 * The output of {@link UpdateBrandProfileFromRegistrationCommand}.
 */
export interface UpdateBrandProfileFromRegistrationCommandOutput extends UpdateBrandProfileFromRegistrationOutput, __MetadataBearer {}

/**
 * <p>Imports or refreshes the attributes of an existing brand profile from an existing registration. This operation runs asynchronously. Use the GetJob operation to track its progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, UpdateBrandProfileFromRegistrationCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, UpdateBrandProfileFromRegistrationCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // UpdateBrandProfileFromRegistrationInput
 *   brandProfileId: "STRING_VALUE", // required
 *   registrationId: "STRING_VALUE", // required
 *   smartMatch: true || false,
 *   onAttributeConflict: "REPLACE" || "PRESERVE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateBrandProfileFromRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrandProfileFromRegistrationOutput
 * //   results: [ // JobResults // required
 * //     { // JobResult
 * //       jobId: "STRING_VALUE", // required
 * //       resourceIdentifier: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateBrandProfileFromRegistrationCommandInput - {@link UpdateBrandProfileFromRegistrationCommandInput}
 * @returns {@link UpdateBrandProfileFromRegistrationCommandOutput}
 * @see {@link UpdateBrandProfileFromRegistrationCommandInput} for command's `input` shape.
 * @see {@link UpdateBrandProfileFromRegistrationCommandOutput} for command's `response` shape.
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
 * @example Update a brand profile from a registration
 * ```javascript
 * //
 * const input = {
 *   brandProfileId: "bp-abc12345678901234",
 *   onAttributeConflict: "REPLACE",
 *   registrationId: "reg-abc12345678901234",
 *   smartMatch: true
 * };
 * const command = new UpdateBrandProfileFromRegistrationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   results: [
 *     {
 *       jobId: "job-abc12345678901234",
 *       resourceIdentifier: "reg-abc12345678901234"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateBrandProfileFromRegistrationCommand extends command<UpdateBrandProfileFromRegistrationCommandInput, UpdateBrandProfileFromRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBrandProfileFromRegistration",
  UpdateBrandProfileFromRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrandProfileFromRegistrationInput;
      output: UpdateBrandProfileFromRegistrationOutput;
    };
    sdk: {
      input: UpdateBrandProfileFromRegistrationCommandInput;
      output: UpdateBrandProfileFromRegistrationCommandOutput;
    };
  };
}
