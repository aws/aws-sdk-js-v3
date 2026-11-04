// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceTemplateVersionsInput, ListServiceTemplateVersionsOutput } from "../models/models_0";
import { ListServiceTemplateVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceTemplateVersionsCommand}.
 */
export interface ListServiceTemplateVersionsCommandInput extends ListServiceTemplateVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListServiceTemplateVersionsCommand}.
 */
export interface ListServiceTemplateVersionsCommandOutput extends ListServiceTemplateVersionsOutput, __MetadataBearer {}

/**
 * List major or minor versions of a service template with detail data.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceTemplateVersionsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceTemplateVersionsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServiceTemplateVersionsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE",
 * };
 * const command = new ListServiceTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceTemplateVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   templateVersions: [ // ServiceTemplateVersionSummaryList // required
 * //     { // ServiceTemplateVersionSummary
 * //       templateName: "STRING_VALUE", // required
 * //       majorVersion: "STRING_VALUE", // required
 * //       minorVersion: "STRING_VALUE", // required
 * //       recommendedMinorVersion: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceTemplateVersionsCommandInput - {@link ListServiceTemplateVersionsCommandInput}
 * @returns {@link ListServiceTemplateVersionsCommandOutput}
 * @see {@link ListServiceTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListServiceTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class ListServiceTemplateVersionsCommand extends command<ListServiceTemplateVersionsCommandInput, ListServiceTemplateVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceTemplateVersions",
  ListServiceTemplateVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceTemplateVersionsInput;
      output: ListServiceTemplateVersionsOutput;
    };
    sdk: {
      input: ListServiceTemplateVersionsCommandInput;
      output: ListServiceTemplateVersionsCommandOutput;
    };
  };
}
