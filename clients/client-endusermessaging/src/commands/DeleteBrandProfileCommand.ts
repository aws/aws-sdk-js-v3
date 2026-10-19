// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBrandProfileInput, DeleteBrandProfileOutput } from "../models/models_0";
import { DeleteBrandProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBrandProfileCommand}.
 */
export interface DeleteBrandProfileCommandInput extends DeleteBrandProfileInput {}
/**
 * @public
 *
 * The output of {@link DeleteBrandProfileCommand}.
 */
export interface DeleteBrandProfileCommandOutput extends DeleteBrandProfileOutput, __MetadataBearer {}

/**
 * <p>Deletes a brand profile. This operation also deletes the attributes of the profile and any associated media. The request fails if deletion protection is enabled for the profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, DeleteBrandProfileCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, DeleteBrandProfileCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // DeleteBrandProfileInput
 *   brandProfileId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrandProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBrandProfileOutput
 * //   brandProfileId: "STRING_VALUE", // required
 * //   brandProfileArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteBrandProfileCommandInput - {@link DeleteBrandProfileCommandInput}
 * @returns {@link DeleteBrandProfileCommandOutput}
 * @see {@link DeleteBrandProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteBrandProfileCommandOutput} for command's `response` shape.
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
 * @example Delete a brand profile
 * ```javascript
 * //
 * const input = {
 *   brandProfileId: "bp-abc12345678901234"
 * };
 * const command = new DeleteBrandProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   brandProfileArn: "arn:aws:end-user-messaging:us-east-1:123456789012:brand-profile/bp-abc12345678901234",
 *   brandProfileId: "bp-abc12345678901234"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteBrandProfileCommand extends command<DeleteBrandProfileCommandInput, DeleteBrandProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBrandProfile",
  DeleteBrandProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrandProfileInput;
      output: DeleteBrandProfileOutput;
    };
    sdk: {
      input: DeleteBrandProfileCommandInput;
      output: DeleteBrandProfileCommandOutput;
    };
  };
}
