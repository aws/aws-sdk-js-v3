// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssertionsRequest, ListAssertionsResponse } from "../models/models_0";
import { ListAssertions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssertionsCommand}.
 */
export interface ListAssertionsCommandInput extends ListAssertionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssertionsCommand}.
 */
export interface ListAssertionsCommandOutput extends ListAssertionsResponse, __MetadataBearer {}

/**
 * <p>Lists resilience assertions for a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListAssertionsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListAssertionsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListAssertionsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   source: "AI_GENERATED" || "USER",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAssertionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssertionsResponse
 * //   assertions: [ // AssertionList // required
 * //     { // Assertion
 * //       serviceArn: "STRING_VALUE", // required
 * //       assertionId: "STRING_VALUE", // required
 * //       text: "STRING_VALUE", // required
 * //       source: "AI_GENERATED" || "USER", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssertionsCommandInput - {@link ListAssertionsCommandInput}
 * @returns {@link ListAssertionsCommandOutput}
 * @see {@link ListAssertionsCommandInput} for command's `input` shape.
 * @see {@link ListAssertionsCommandOutput} for command's `response` shape.
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
export class ListAssertionsCommand extends command<ListAssertionsCommandInput, ListAssertionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssertions",
  ListAssertions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssertionsRequest;
      output: ListAssertionsResponse;
    };
    sdk: {
      input: ListAssertionsCommandInput;
      output: ListAssertionsCommandOutput;
    };
  };
}
