// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBrandProfileAttributeInput, GetBrandProfileAttributeOutput } from "../models/models_0";
import { GetBrandProfileAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBrandProfileAttributeCommand}.
 */
export interface GetBrandProfileAttributeCommandInput extends GetBrandProfileAttributeInput {}
/**
 * @public
 *
 * The output of {@link GetBrandProfileAttributeCommand}.
 */
export interface GetBrandProfileAttributeCommandOutput extends GetBrandProfileAttributeOutput, __MetadataBearer {}

/**
 * <p>Retrieves a single brand profile attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, GetBrandProfileAttributeCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, GetBrandProfileAttributeCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // GetBrandProfileAttributeInput
 *   brandProfileId: "STRING_VALUE", // required
 *   attributeName: "STRING_VALUE", // required
 * };
 * const command = new GetBrandProfileAttributeCommand(input);
 * const response = await client.send(command);
 * // { // GetBrandProfileAttributeOutput
 * //   attributeName: "STRING_VALUE", // required
 * //   attributeType: "TEXT" || "IMAGE" || "DOCUMENT", // required
 * //   attributeValue: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * //   mediaContentType: "STRING_VALUE",
 * //   mediaSizeBytes: Number("long"),
 * //   mediaDownloadUrl: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetBrandProfileAttributeCommandInput - {@link GetBrandProfileAttributeCommandInput}
 * @returns {@link GetBrandProfileAttributeCommandOutput}
 * @see {@link GetBrandProfileAttributeCommandInput} for command's `input` shape.
 * @see {@link GetBrandProfileAttributeCommandOutput} for command's `response` shape.
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
 * @example Get a brand profile attribute
 * ```javascript
 * //
 * const input = {
 *   attributeName: "SupportEmail",
 *   brandProfileId: "bp-abc12345678901234"
 * };
 * const command = new GetBrandProfileAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attributeName: "SupportEmail",
 *   attributeType: "TEXT",
 *   attributeValue: "support@example.com",
 *   category: "CONTACT",
 *   createdAt: 1727130000,
 *   updatedAt: 1727130000
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBrandProfileAttributeCommand extends command<GetBrandProfileAttributeCommandInput, GetBrandProfileAttributeCommandOutput>(
  _ep0,
  _mw0,
  "GetBrandProfileAttribute",
  GetBrandProfileAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBrandProfileAttributeInput;
      output: GetBrandProfileAttributeOutput;
    };
    sdk: {
      input: GetBrandProfileAttributeCommandInput;
      output: GetBrandProfileAttributeCommandOutput;
    };
  };
}
