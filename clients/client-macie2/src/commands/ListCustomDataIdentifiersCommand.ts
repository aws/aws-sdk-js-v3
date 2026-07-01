// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomDataIdentifiersRequest, ListCustomDataIdentifiersResponse } from "../models/models_0";
import { ListCustomDataIdentifiers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomDataIdentifiersCommand}.
 */
export interface ListCustomDataIdentifiersCommandInput extends ListCustomDataIdentifiersRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomDataIdentifiersCommand}.
 */
export interface ListCustomDataIdentifiersCommandOutput extends ListCustomDataIdentifiersResponse, __MetadataBearer {}

/**
 * <p>Retrieves a subset of information about the custom data identifiers for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListCustomDataIdentifiersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListCustomDataIdentifiersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // ListCustomDataIdentifiersRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomDataIdentifiersCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomDataIdentifiersResponse
 * //   items: [ // __listOfCustomDataIdentifierSummary
 * //     { // CustomDataIdentifierSummary
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomDataIdentifiersCommandInput - {@link ListCustomDataIdentifiersCommandInput}
 * @returns {@link ListCustomDataIdentifiersCommandOutput}
 * @see {@link ListCustomDataIdentifiersCommandInput} for command's `input` shape.
 * @see {@link ListCustomDataIdentifiersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class ListCustomDataIdentifiersCommand extends command<ListCustomDataIdentifiersCommandInput, ListCustomDataIdentifiersCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomDataIdentifiers",
  ListCustomDataIdentifiers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomDataIdentifiersRequest;
      output: ListCustomDataIdentifiersResponse;
    };
    sdk: {
      input: ListCustomDataIdentifiersCommandInput;
      output: ListCustomDataIdentifiersCommandOutput;
    };
  };
}
