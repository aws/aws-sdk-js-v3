// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLunaClientsRequest, ListLunaClientsResponse } from "../models/models_0";
import { ListLunaClients$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLunaClientsCommand}.
 */
export interface ListLunaClientsCommandInput extends ListLunaClientsRequest {}
/**
 * @public
 *
 * The output of {@link ListLunaClientsCommand}.
 */
export interface ListLunaClientsCommandOutput extends ListLunaClientsResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Lists all of the clients.
 *
 * This operation supports pagination with the use of the `NextToken` member. If more results are available, the `NextToken` member of the response contains a token that you pass in the next call to `ListLunaClients` to retrieve the next set of items.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ListLunaClientsCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ListLunaClientsCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // ListLunaClientsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLunaClientsCommand(input);
 * const response = await client.send(command);
 * // { // ListLunaClientsResponse
 * //   ClientList: [ // ClientList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLunaClientsCommandInput - {@link ListLunaClientsCommandInput}
 * @returns {@link ListLunaClientsCommandOutput}
 * @see {@link ListLunaClientsCommandInput} for command's `input` shape.
 * @see {@link ListLunaClientsCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmInternalException} (server fault)
 *
 * Indicates that an internal error occurred.
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *
 * Indicates that an exception occurred in the AWS CloudHSM service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that one or more of the request parameters are not valid.
 *
 * @throws {@link CloudHSMServiceException}
 *
 * Base exception class for all service exceptions from CloudHSM service.
 *
 * @public
 */
export class ListLunaClientsCommand extends command<ListLunaClientsCommandInput, ListLunaClientsCommandOutput>(
  _ep0,
  _mw0,
  "ListLunaClients",
  ListLunaClients$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLunaClientsRequest;
      output: ListLunaClientsResponse;
    };
    sdk: {
      input: ListLunaClientsCommandInput;
      output: ListLunaClientsCommandOutput;
    };
  };
}
