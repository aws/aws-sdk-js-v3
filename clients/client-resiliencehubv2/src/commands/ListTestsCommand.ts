// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestsRequest, ListTestsResponse } from "../models/models_0";
import { ListTests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestsCommand}.
 */
export interface ListTestsCommandInput extends ListTestsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestsCommand}.
 */
export interface ListTestsCommandOutput extends ListTestsResponse, __MetadataBearer {}

/**
 * <p>Lists the tests configured for a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListTestsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListTestsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListTestsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestsResponse
 * //   tests: [ // TestSummaryList // required
 * //     { // TestSummary
 * //       testId: "STRING_VALUE", // required
 * //       testTemplateArn: "STRING_VALUE", // required
 * //       serviceArn: "STRING_VALUE", // required
 * //       totalTestRuns: Number("int"), // required
 * //       successfulTestRuns: Number("int"), // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestsCommandInput - {@link ListTestsCommandInput}
 * @returns {@link ListTestsCommandOutput}
 * @see {@link ListTestsCommandInput} for command's `input` shape.
 * @see {@link ListTestsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListTestsCommand extends command<ListTestsCommandInput, ListTestsCommandOutput>(
  _ep0,
  _mw0,
  "ListTests",
  ListTests$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestsRequest;
      output: ListTestsResponse;
    };
    sdk: {
      input: ListTestsCommandInput;
      output: ListTestsCommandOutput;
    };
  };
}
