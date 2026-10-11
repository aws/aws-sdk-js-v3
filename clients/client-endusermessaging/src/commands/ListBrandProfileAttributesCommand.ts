// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBrandProfileAttributesInput, ListBrandProfileAttributesOutput } from "../models/models_0";
import { ListBrandProfileAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBrandProfileAttributesCommand}.
 */
export interface ListBrandProfileAttributesCommandInput extends ListBrandProfileAttributesInput {}
/**
 * @public
 *
 * The output of {@link ListBrandProfileAttributesCommand}.
 */
export interface ListBrandProfileAttributesCommandOutput extends ListBrandProfileAttributesOutput, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of the attributes for a brand profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, ListBrandProfileAttributesCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, ListBrandProfileAttributesCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // ListBrandProfileAttributesInput
 *   brandProfileId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBrandProfileAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListBrandProfileAttributesOutput
 * //   brandProfileAttributes: [ // BrandProfileAttributeSummaryList // required
 * //     { // BrandProfileAttributeSummary
 * //       attributeName: "STRING_VALUE", // required
 * //       attributeType: "TEXT" || "IMAGE" || "DOCUMENT", // required
 * //       description: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBrandProfileAttributesCommandInput - {@link ListBrandProfileAttributesCommandInput}
 * @returns {@link ListBrandProfileAttributesCommandOutput}
 * @see {@link ListBrandProfileAttributesCommandInput} for command's `input` shape.
 * @see {@link ListBrandProfileAttributesCommandOutput} for command's `response` shape.
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
 * @example List brand profile attributes
 * ```javascript
 * //
 * const input = {
 *   brandProfileId: "bp-abc12345678901234",
 *   maxResults: 10
 * };
 * const command = new ListBrandProfileAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   brandProfileAttributes: [
 *     {
 *       attributeName: "SupportEmail",
 *       attributeType: "TEXT",
 *       category: "CONTACT",
 *       createdAt: 1727130000,
 *       updatedAt: 1727130000
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListBrandProfileAttributesCommand extends command<ListBrandProfileAttributesCommandInput, ListBrandProfileAttributesCommandOutput>(
  _ep0,
  _mw0,
  "ListBrandProfileAttributes",
  ListBrandProfileAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBrandProfileAttributesInput;
      output: ListBrandProfileAttributesOutput;
    };
    sdk: {
      input: ListBrandProfileAttributesCommandInput;
      output: ListBrandProfileAttributesCommandOutput;
    };
  };
}
