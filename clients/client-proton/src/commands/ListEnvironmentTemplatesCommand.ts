// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnvironmentTemplatesInput, ListEnvironmentTemplatesOutput } from "../models/models_0";
import { ListEnvironmentTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentTemplatesCommand}.
 */
export interface ListEnvironmentTemplatesCommandInput extends ListEnvironmentTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentTemplatesCommand}.
 */
export interface ListEnvironmentTemplatesCommandOutput extends ListEnvironmentTemplatesOutput, __MetadataBearer {}

/**
 * List environment templates.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentTemplatesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentTemplatesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentTemplatesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   templates: [ // EnvironmentTemplateSummaryList // required
 * //     { // EnvironmentTemplateSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendedVersion: "STRING_VALUE",
 * //       provisioning: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentTemplatesCommandInput - {@link ListEnvironmentTemplatesCommandInput}
 * @returns {@link ListEnvironmentTemplatesCommandOutput}
 * @see {@link ListEnvironmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentTemplatesCommandOutput} for command's `response` shape.
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
export class ListEnvironmentTemplatesCommand extends command<ListEnvironmentTemplatesCommandInput, ListEnvironmentTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironmentTemplates",
  ListEnvironmentTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentTemplatesInput;
      output: ListEnvironmentTemplatesOutput;
    };
    sdk: {
      input: ListEnvironmentTemplatesCommandInput;
      output: ListEnvironmentTemplatesCommandOutput;
    };
  };
}
