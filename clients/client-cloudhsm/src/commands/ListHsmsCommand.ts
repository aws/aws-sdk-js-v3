// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListHsmsRequest, ListHsmsResponse } from "../models/models_0";
import { ListHsms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListHsmsCommand}.
 */
export interface ListHsmsCommandInput extends ListHsmsRequest {}
/**
 * @public
 *
 * The output of {@link ListHsmsCommand}.
 */
export interface ListHsmsCommandOutput extends ListHsmsResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Retrieves the identifiers of all of the HSMs provisioned for the current customer.
 *
 * This operation supports pagination with the use of the `NextToken` member. If more results are available, the `NextToken` member of the response contains a token that you pass in the next call to `ListHsms` to retrieve the next set of items.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ListHsmsCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ListHsmsCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // ListHsmsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHsmsCommand(input);
 * const response = await client.send(command);
 * // { // ListHsmsResponse
 * //   HsmList: [ // HsmList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHsmsCommandInput - {@link ListHsmsCommandInput}
 * @returns {@link ListHsmsCommandOutput}
 * @see {@link ListHsmsCommandInput} for command's `input` shape.
 * @see {@link ListHsmsCommandOutput} for command's `response` shape.
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
export class ListHsmsCommand extends command<ListHsmsCommandInput, ListHsmsCommandOutput>(
  _ep0,
  _mw0,
  "ListHsms",
  ListHsms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHsmsRequest;
      output: ListHsmsResponse;
    };
    sdk: {
      input: ListHsmsCommandInput;
      output: ListHsmsCommandOutput;
    };
  };
}
