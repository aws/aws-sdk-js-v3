// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateRegistrationsFromBrandProfileInput,
  CreateRegistrationsFromBrandProfileOutput,
} from "../models/models_0";
import { CreateRegistrationsFromBrandProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRegistrationsFromBrandProfileCommand}.
 */
export interface CreateRegistrationsFromBrandProfileCommandInput extends CreateRegistrationsFromBrandProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateRegistrationsFromBrandProfileCommand}.
 */
export interface CreateRegistrationsFromBrandProfileCommandOutput extends CreateRegistrationsFromBrandProfileOutput, __MetadataBearer {}

/**
 * <p>Creates one or more registrations in the DRAFT state and prefills their fields from the attributes of a brand profile. This operation runs asynchronously. Use the GetJob operation to track its progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, CreateRegistrationsFromBrandProfileCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, CreateRegistrationsFromBrandProfileCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // CreateRegistrationsFromBrandProfileInput
 *   brandProfileId: "STRING_VALUE", // required
 *   registrationTypes: [ // RegistrationTypeList // required
 *     "STRING_VALUE",
 *   ],
 *   smartMatch: true || false,
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateRegistrationsFromBrandProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateRegistrationsFromBrandProfileOutput
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
 * @param CreateRegistrationsFromBrandProfileCommandInput - {@link CreateRegistrationsFromBrandProfileCommandInput}
 * @returns {@link CreateRegistrationsFromBrandProfileCommandOutput}
 * @see {@link CreateRegistrationsFromBrandProfileCommandInput} for command's `input` shape.
 * @see {@link CreateRegistrationsFromBrandProfileCommandOutput} for command's `response` shape.
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
 * @example Create draft registrations from a brand profile
 * ```javascript
 * //
 * const input = {
 *   brandProfileId: "bp-abc12345678901234",
 *   registrationTypes: [
 *     "US_TOLL_FREE_REGISTRATION"
 *   ],
 *   smartMatch: true
 * };
 * const command = new CreateRegistrationsFromBrandProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   results: [
 *     {
 *       jobId: "job-abc12345678901234",
 *       resourceIdentifier: "US_TOLL_FREE_REGISTRATION"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRegistrationsFromBrandProfileCommand extends command<CreateRegistrationsFromBrandProfileCommandInput, CreateRegistrationsFromBrandProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateRegistrationsFromBrandProfile",
  CreateRegistrationsFromBrandProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRegistrationsFromBrandProfileInput;
      output: CreateRegistrationsFromBrandProfileOutput;
    };
    sdk: {
      input: CreateRegistrationsFromBrandProfileCommandInput;
      output: CreateRegistrationsFromBrandProfileCommandOutput;
    };
  };
}
