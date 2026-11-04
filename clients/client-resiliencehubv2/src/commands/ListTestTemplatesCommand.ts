// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestTemplatesRequest, ListTestTemplatesResponse } from "../models/models_0";
import { ListTestTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestTemplatesCommand}.
 */
export interface ListTestTemplatesCommandInput extends ListTestTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListTestTemplatesCommand}.
 */
export interface ListTestTemplatesCommandOutput extends ListTestTemplatesResponse, __MetadataBearer {}

/**
 * Lists the available resilience test templates. A test template is a pre-configured, AWS recommended test that defines which resilience capability to validate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListTestTemplatesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListTestTemplatesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = {};
 * const command = new ListTestTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListTestTemplatesResponse
 * //   testTemplates: [ // TestTemplateSummaryList // required
 * //     { // TestTemplateSummary
 * //       testTemplateArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTestTemplatesCommandInput - {@link ListTestTemplatesCommandInput}
 * @returns {@link ListTestTemplatesCommandOutput}
 * @see {@link ListTestTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListTestTemplatesCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class ListTestTemplatesCommand extends command<ListTestTemplatesCommandInput, ListTestTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListTestTemplates",
  ListTestTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListTestTemplatesResponse;
    };
    sdk: {
      input: ListTestTemplatesCommandInput;
      output: ListTestTemplatesCommandOutput;
    };
  };
}
