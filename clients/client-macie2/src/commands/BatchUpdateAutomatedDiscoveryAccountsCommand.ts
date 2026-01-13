// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type {
  BatchUpdateAutomatedDiscoveryAccountsRequest,
  BatchUpdateAutomatedDiscoveryAccountsResponse,
} from "../models/models_0";
import { BatchUpdateAutomatedDiscoveryAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateAutomatedDiscoveryAccountsCommand}.
 */
export interface BatchUpdateAutomatedDiscoveryAccountsCommandInput extends BatchUpdateAutomatedDiscoveryAccountsRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateAutomatedDiscoveryAccountsCommand}.
 */
export interface BatchUpdateAutomatedDiscoveryAccountsCommandOutput extends BatchUpdateAutomatedDiscoveryAccountsResponse, __MetadataBearer {}

/**
 * <p>Changes the status of automated sensitive data discovery for one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, BatchUpdateAutomatedDiscoveryAccountsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, BatchUpdateAutomatedDiscoveryAccountsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // BatchUpdateAutomatedDiscoveryAccountsRequest
 *   accounts: [ // __listOfAutomatedDiscoveryAccountUpdate
 *     { // AutomatedDiscoveryAccountUpdate
 *       accountId: "STRING_VALUE",
 *       status: "ENABLED" || "DISABLED",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateAutomatedDiscoveryAccountsCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateAutomatedDiscoveryAccountsResponse
 * //   errors: [ // __listOfAutomatedDiscoveryAccountUpdateError
 * //     { // AutomatedDiscoveryAccountUpdateError
 * //       accountId: "STRING_VALUE",
 * //       errorCode: "ACCOUNT_PAUSED" || "ACCOUNT_NOT_FOUND",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateAutomatedDiscoveryAccountsCommandInput - {@link BatchUpdateAutomatedDiscoveryAccountsCommandInput}
 * @returns {@link BatchUpdateAutomatedDiscoveryAccountsCommandOutput}
 * @see {@link BatchUpdateAutomatedDiscoveryAccountsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateAutomatedDiscoveryAccountsCommandOutput} for command's `response` shape.
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
export class BatchUpdateAutomatedDiscoveryAccountsCommand extends $Command
  .classBuilder<
    BatchUpdateAutomatedDiscoveryAccountsCommandInput,
    BatchUpdateAutomatedDiscoveryAccountsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "BatchUpdateAutomatedDiscoveryAccounts", {})
  .n("Macie2Client", "BatchUpdateAutomatedDiscoveryAccountsCommand")
  .sc(BatchUpdateAutomatedDiscoveryAccounts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateAutomatedDiscoveryAccountsRequest;
      output: BatchUpdateAutomatedDiscoveryAccountsResponse;
    };
    sdk: {
      input: BatchUpdateAutomatedDiscoveryAccountsCommandInput;
      output: BatchUpdateAutomatedDiscoveryAccountsCommandOutput;
    };
  };
}
