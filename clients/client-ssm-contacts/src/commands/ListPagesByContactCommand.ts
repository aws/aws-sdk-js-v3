// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPagesByContactRequest, ListPagesByContactResult } from "../models/models_0";
import { ListPagesByContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPagesByContactCommand}.
 */
export interface ListPagesByContactCommandInput extends ListPagesByContactRequest {}
/**
 * @public
 *
 * The output of {@link ListPagesByContactCommand}.
 */
export interface ListPagesByContactCommandOutput extends ListPagesByContactResult, __MetadataBearer {}

/**
 * <p>Lists the engagements to a contact's contact channels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPagesByContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListPagesByContactRequest
 *   ContactId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPagesByContactCommand(input);
 * const response = await client.send(command);
 * // { // ListPagesByContactResult
 * //   NextToken: "STRING_VALUE",
 * //   Pages: [ // PagesList // required
 * //     { // Page
 * //       PageArn: "STRING_VALUE", // required
 * //       EngagementArn: "STRING_VALUE", // required
 * //       ContactArn: "STRING_VALUE", // required
 * //       Sender: "STRING_VALUE", // required
 * //       IncidentId: "STRING_VALUE",
 * //       SentTime: new Date("TIMESTAMP"),
 * //       DeliveryTime: new Date("TIMESTAMP"),
 * //       ReadTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPagesByContactCommandInput - {@link ListPagesByContactCommandInput}
 * @returns {@link ListPagesByContactCommandOutput}
 * @see {@link ListPagesByContactCommandInput} for command's `input` shape.
 * @see {@link ListPagesByContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
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
export class ListPagesByContactCommand extends command<ListPagesByContactCommandInput, ListPagesByContactCommandOutput>(
  _ep0,
  _mw0,
  "ListPagesByContact",
  ListPagesByContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPagesByContactRequest;
      output: ListPagesByContactResult;
    };
    sdk: {
      input: ListPagesByContactCommandInput;
      output: ListPagesByContactCommandOutput;
    };
  };
}
