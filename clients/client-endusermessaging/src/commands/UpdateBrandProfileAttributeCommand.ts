// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBrandProfileAttributeInput, UpdateBrandProfileAttributeOutput } from "../models/models_0";
import { UpdateBrandProfileAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBrandProfileAttributeCommand}.
 */
export interface UpdateBrandProfileAttributeCommandInput extends UpdateBrandProfileAttributeInput {}
/**
 * @public
 *
 * The output of {@link UpdateBrandProfileAttributeCommand}.
 */
export interface UpdateBrandProfileAttributeCommandOutput extends UpdateBrandProfileAttributeOutput, __MetadataBearer {}

/**
 * <p>Updates the value, description, or category of an existing brand profile attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, UpdateBrandProfileAttributeCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, UpdateBrandProfileAttributeCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // UpdateBrandProfileAttributeInput
 *   brandProfileId: "STRING_VALUE", // required
 *   attributeName: "STRING_VALUE", // required
 *   attributeValue: "STRING_VALUE",
 *   attachmentBody: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   description: "STRING_VALUE",
 *   category: "STRING_VALUE",
 * };
 * const command = new UpdateBrandProfileAttributeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrandProfileAttributeOutput
 * //   attributeName: "STRING_VALUE", // required
 * //   attributeType: "TEXT" || "IMAGE" || "DOCUMENT", // required
 * //   attributeValue: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * //   mediaContentType: "STRING_VALUE",
 * //   mediaSizeBytes: Number("long"),
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateBrandProfileAttributeCommandInput - {@link UpdateBrandProfileAttributeCommandInput}
 * @returns {@link UpdateBrandProfileAttributeCommandOutput}
 * @see {@link UpdateBrandProfileAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdateBrandProfileAttributeCommandOutput} for command's `response` shape.
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
 * @example Update a brand profile attribute value
 * ```javascript
 * //
 * const input = {
 *   attributeName: "SupportEmail",
 *   attributeValue: "help@example.com",
 *   brandProfileId: "bp-abc12345678901234",
 *   category: "CONTACT"
 * };
 * const command = new UpdateBrandProfileAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attributeName: "SupportEmail",
 *   attributeType: "TEXT",
 *   attributeValue: "help@example.com",
 *   category: "CONTACT",
 *   createdAt: 1727130000,
 *   updatedAt: 1727216400
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateBrandProfileAttributeCommand extends command<UpdateBrandProfileAttributeCommandInput, UpdateBrandProfileAttributeCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBrandProfileAttribute",
  UpdateBrandProfileAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrandProfileAttributeInput;
      output: UpdateBrandProfileAttributeOutput;
    };
    sdk: {
      input: UpdateBrandProfileAttributeCommandInput;
      output: UpdateBrandProfileAttributeCommandOutput;
    };
  };
}
