// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReviewTemplatesInput, ListReviewTemplatesOutput } from "../models/models_0";
import { ListReviewTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReviewTemplatesCommand}.
 */
export interface ListReviewTemplatesCommandInput extends ListReviewTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListReviewTemplatesCommand}.
 */
export interface ListReviewTemplatesCommandOutput extends ListReviewTemplatesOutput, __MetadataBearer {}

/**
 * List review templates.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListReviewTemplatesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListReviewTemplatesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListReviewTemplatesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListReviewTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListReviewTemplatesOutput
 * //   ReviewTemplates: [ // ReviewTemplates
 * //     { // ReviewTemplateSummary
 * //       Description: "STRING_VALUE",
 * //       Lenses: [ // ReviewTemplateLenses
 * //         "STRING_VALUE",
 * //       ],
 * //       Owner: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       TemplateArn: "STRING_VALUE",
 * //       TemplateName: "STRING_VALUE",
 * //       UpdateStatus: "CURRENT" || "LENS_NOT_CURRENT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReviewTemplatesCommandInput - {@link ListReviewTemplatesCommandInput}
 * @returns {@link ListReviewTemplatesCommandOutput}
 * @see {@link ListReviewTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListReviewTemplatesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class ListReviewTemplatesCommand extends command<ListReviewTemplatesCommandInput, ListReviewTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListReviewTemplates",
  ListReviewTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReviewTemplatesInput;
      output: ListReviewTemplatesOutput;
    };
    sdk: {
      input: ListReviewTemplatesCommandInput;
      output: ListReviewTemplatesCommandOutput;
    };
  };
}
