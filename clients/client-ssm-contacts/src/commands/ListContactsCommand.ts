// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListContactsRequest, ListContactsResult } from "../models/models_0";
import { ListContacts$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactsCommand}.
 */
export interface ListContactsCommandInput extends ListContactsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactsCommand}.
 */
export interface ListContactsCommandOutput extends ListContactsResult, __MetadataBearer {}

/**
 * <p>Lists all contacts and escalation plans in Incident Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListContactsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListContactsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListContactsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AliasPrefix: "STRING_VALUE",
 *   Type: "PERSONAL" || "ESCALATION" || "ONCALL_SCHEDULE",
 * };
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactsResult
 * //   NextToken: "STRING_VALUE",
 * //   Contacts: [ // ContactsList
 * //     { // Contact
 * //       ContactArn: "STRING_VALUE", // required
 * //       Alias: "STRING_VALUE", // required
 * //       DisplayName: "STRING_VALUE",
 * //       Type: "PERSONAL" || "ESCALATION" || "ONCALL_SCHEDULE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListContactsCommandInput - {@link ListContactsCommandInput}
 * @returns {@link ListContactsCommandOutput}
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class ListContactsCommand extends $Command
  .classBuilder<
    ListContactsCommandInput,
    ListContactsCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "ListContacts", {})
  .n("SSMContactsClient", "ListContactsCommand")
  .sc(ListContacts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactsRequest;
      output: ListContactsResult;
    };
    sdk: {
      input: ListContactsCommandInput;
      output: ListContactsCommandOutput;
    };
  };
}
