// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceTemplatesInput, ListServiceTemplatesOutput } from "../models/models_0";
import { ListServiceTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceTemplatesCommand}.
 */
export interface ListServiceTemplatesCommandInput extends ListServiceTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceTemplatesCommand}.
 */
export interface ListServiceTemplatesCommandOutput extends ListServiceTemplatesOutput, __MetadataBearer {}

/**
 * List service templates with detail data.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceTemplatesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceTemplatesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServiceTemplatesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListServiceTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   templates: [ // ServiceTemplateSummaryList // required
 * //     { // ServiceTemplateSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendedVersion: "STRING_VALUE",
 * //       pipelineProvisioning: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceTemplatesCommandInput - {@link ListServiceTemplatesCommandInput}
 * @returns {@link ListServiceTemplatesCommandOutput}
 * @see {@link ListServiceTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListServiceTemplatesCommandOutput} for command's `response` shape.
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
export class ListServiceTemplatesCommand extends command<ListServiceTemplatesCommandInput, ListServiceTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceTemplates",
  ListServiceTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceTemplatesInput;
      output: ListServiceTemplatesOutput;
    };
    sdk: {
      input: ListServiceTemplatesCommandInput;
      output: ListServiceTemplatesCommandOutput;
    };
  };
}
