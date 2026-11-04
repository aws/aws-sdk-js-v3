// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnvironmentTemplateVersionsInput, ListEnvironmentTemplateVersionsOutput } from "../models/models_0";
import { ListEnvironmentTemplateVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentTemplateVersionsCommand}.
 */
export interface ListEnvironmentTemplateVersionsCommandInput extends ListEnvironmentTemplateVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentTemplateVersionsCommand}.
 */
export interface ListEnvironmentTemplateVersionsCommandOutput extends ListEnvironmentTemplateVersionsOutput, __MetadataBearer {}

/**
 * List major or minor versions of an environment template with detail data.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentTemplateVersionsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentTemplateVersionsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentTemplateVersionsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentTemplateVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   templateVersions: [ // EnvironmentTemplateVersionSummaryList // required
 * //     { // EnvironmentTemplateVersionSummary
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
 * @param ListEnvironmentTemplateVersionsCommandInput - {@link ListEnvironmentTemplateVersionsCommandInput}
 * @returns {@link ListEnvironmentTemplateVersionsCommandOutput}
 * @see {@link ListEnvironmentTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentTemplateVersionsCommandOutput} for command's `response` shape.
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
export class ListEnvironmentTemplateVersionsCommand extends command<ListEnvironmentTemplateVersionsCommandInput, ListEnvironmentTemplateVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironmentTemplateVersions",
  ListEnvironmentTemplateVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentTemplateVersionsInput;
      output: ListEnvironmentTemplateVersionsOutput;
    };
    sdk: {
      input: ListEnvironmentTemplateVersionsCommandInput;
      output: ListEnvironmentTemplateVersionsCommandOutput;
    };
  };
}
