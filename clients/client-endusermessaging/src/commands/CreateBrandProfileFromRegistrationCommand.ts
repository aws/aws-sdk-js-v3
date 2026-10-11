// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateBrandProfileFromRegistrationInput,
  CreateBrandProfileFromRegistrationOutput,
} from "../models/models_0";
import { CreateBrandProfileFromRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBrandProfileFromRegistrationCommand}.
 */
export interface CreateBrandProfileFromRegistrationCommandInput extends CreateBrandProfileFromRegistrationInput {}
/**
 * @public
 *
 * The output of {@link CreateBrandProfileFromRegistrationCommand}.
 */
export interface CreateBrandProfileFromRegistrationCommandOutput extends CreateBrandProfileFromRegistrationOutput, __MetadataBearer {}

/**
 * <p>Creates a brand profile and populates its attributes from an existing registration. This operation runs asynchronously. Use the GetJob operation to track its progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, CreateBrandProfileFromRegistrationCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, CreateBrandProfileFromRegistrationCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // CreateBrandProfileFromRegistrationInput
 *   registrationId: "STRING_VALUE", // required
 *   brandProfileName: "STRING_VALUE", // required
 *   smartMatch: true || false,
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateBrandProfileFromRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateBrandProfileFromRegistrationOutput
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
 * @param CreateBrandProfileFromRegistrationCommandInput - {@link CreateBrandProfileFromRegistrationCommandInput}
 * @returns {@link CreateBrandProfileFromRegistrationCommandOutput}
 * @see {@link CreateBrandProfileFromRegistrationCommandInput} for command's `input` shape.
 * @see {@link CreateBrandProfileFromRegistrationCommandOutput} for command's `response` shape.
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
 * @example Create a brand profile from a registration
 * ```javascript
 * //
 * const input = {
 *   brandProfileName: "AcmeCorp",
 *   registrationId: "reg-abc12345678901234",
 *   smartMatch: true
 * };
 * const command = new CreateBrandProfileFromRegistrationCommand(input);
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
export class CreateBrandProfileFromRegistrationCommand extends command<CreateBrandProfileFromRegistrationCommandInput, CreateBrandProfileFromRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "CreateBrandProfileFromRegistration",
  CreateBrandProfileFromRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBrandProfileFromRegistrationInput;
      output: CreateBrandProfileFromRegistrationOutput;
    };
    sdk: {
      input: CreateBrandProfileFromRegistrationCommandInput;
      output: CreateBrandProfileFromRegistrationCommandOutput;
    };
  };
}
