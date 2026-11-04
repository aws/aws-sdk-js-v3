// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBrandProfileAttributeInput, DeleteBrandProfileAttributeOutput } from "../models/models_0";
import { DeleteBrandProfileAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBrandProfileAttributeCommand}.
 */
export interface DeleteBrandProfileAttributeCommandInput extends DeleteBrandProfileAttributeInput {}
/**
 * @public
 *
 * The output of {@link DeleteBrandProfileAttributeCommand}.
 */
export interface DeleteBrandProfileAttributeCommandOutput extends DeleteBrandProfileAttributeOutput, __MetadataBearer {}

/**
 * Deletes a brand profile attribute. If the attribute stores media, this operation also deletes the associated media.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, DeleteBrandProfileAttributeCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, DeleteBrandProfileAttributeCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // DeleteBrandProfileAttributeInput
 *   brandProfileId: "STRING_VALUE", // required
 *   attributeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrandProfileAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBrandProfileAttributeOutput
 * //   brandProfileId: "STRING_VALUE", // required
 * //   attributeName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteBrandProfileAttributeCommandInput - {@link DeleteBrandProfileAttributeCommandInput}
 * @returns {@link DeleteBrandProfileAttributeCommandOutput}
 * @see {@link DeleteBrandProfileAttributeCommandInput} for command's `input` shape.
 * @see {@link DeleteBrandProfileAttributeCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist. Verify that the resource identifier is correct and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EndUserMessagingServiceException}
 *
 * Base exception class for all service exceptions from EndUserMessaging service.
 *
 * @example Delete a brand profile attribute
 * ```javascript
 * //
 * const input = {
 *   attributeName: "SupportEmail",
 *   brandProfileId: "bp-abc12345678901234"
 * };
 * const command = new DeleteBrandProfileAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attributeName: "SupportEmail",
 *   brandProfileId: "bp-abc12345678901234"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteBrandProfileAttributeCommand extends command<DeleteBrandProfileAttributeCommandInput, DeleteBrandProfileAttributeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBrandProfileAttribute",
  DeleteBrandProfileAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrandProfileAttributeInput;
      output: DeleteBrandProfileAttributeOutput;
    };
    sdk: {
      input: DeleteBrandProfileAttributeCommandInput;
      output: DeleteBrandProfileAttributeCommandOutput;
    };
  };
}
