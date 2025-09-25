// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListManagedDataIdentifiersRequest, ListManagedDataIdentifiersResponse } from "../models/models_1";
import { ListManagedDataIdentifiers } from "../schemas/schemas_2_";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedDataIdentifiersCommand}.
 */
export interface ListManagedDataIdentifiersCommandInput extends ListManagedDataIdentifiersRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedDataIdentifiersCommand}.
 */
export interface ListManagedDataIdentifiersCommandOutput extends ListManagedDataIdentifiersResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about all the managed data identifiers that Amazon Macie currently provides.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListManagedDataIdentifiersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListManagedDataIdentifiersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // ListManagedDataIdentifiersRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedDataIdentifiersCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedDataIdentifiersResponse
 * //   items: [ // __listOfManagedDataIdentifierSummary
 * //     { // ManagedDataIdentifierSummary
 * //       category: "FINANCIAL_INFORMATION" || "PERSONAL_INFORMATION" || "CREDENTIALS" || "CUSTOM_IDENTIFIER",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedDataIdentifiersCommandInput - {@link ListManagedDataIdentifiersCommandInput}
 * @returns {@link ListManagedDataIdentifiersCommandOutput}
 * @see {@link ListManagedDataIdentifiersCommandInput} for command's `input` shape.
 * @see {@link ListManagedDataIdentifiersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class ListManagedDataIdentifiersCommand extends $Command
  .classBuilder<
    ListManagedDataIdentifiersCommandInput,
    ListManagedDataIdentifiersCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "ListManagedDataIdentifiers", {})
  .n("Macie2Client", "ListManagedDataIdentifiersCommand")
  .sc(ListManagedDataIdentifiers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedDataIdentifiersRequest;
      output: ListManagedDataIdentifiersResponse;
    };
    sdk: {
      input: ListManagedDataIdentifiersCommandInput;
      output: ListManagedDataIdentifiersCommandOutput;
    };
  };
}
