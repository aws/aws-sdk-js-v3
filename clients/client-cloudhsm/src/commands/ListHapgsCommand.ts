// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListHapgsRequest, ListHapgsResponse } from "../models/models_0";
import { ListHapgs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListHapgsCommand}.
 */
export interface ListHapgsCommandInput extends ListHapgsRequest {}
/**
 * @public
 *
 * The output of {@link ListHapgsCommand}.
 */
export interface ListHapgsCommandOutput extends ListHapgsResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Lists the high-availability partition groups for the account.
 *
 * This operation supports pagination with the use of the `NextToken` member. If more results are available, the `NextToken` member of the response contains a token that you pass in the next call to `ListHapgs` to retrieve the next set of items.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ListHapgsCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ListHapgsCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // ListHapgsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHapgsCommand(input);
 * const response = await client.send(command);
 * // { // ListHapgsResponse
 * //   HapgList: [ // HapgList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHapgsCommandInput - {@link ListHapgsCommandInput}
 * @returns {@link ListHapgsCommandOutput}
 * @see {@link ListHapgsCommandInput} for command's `input` shape.
 * @see {@link ListHapgsCommandOutput} for command's `response` shape.
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
export class ListHapgsCommand extends command<ListHapgsCommandInput, ListHapgsCommandOutput>(
  _ep0,
  _mw0,
  "ListHapgs",
  ListHapgs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHapgsRequest;
      output: ListHapgsResponse;
    };
    sdk: {
      input: ListHapgsCommandInput;
      output: ListHapgsCommandOutput;
    };
  };
}
