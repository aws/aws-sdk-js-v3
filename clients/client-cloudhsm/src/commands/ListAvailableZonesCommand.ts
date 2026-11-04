// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAvailableZonesRequest, ListAvailableZonesResponse } from "../models/models_0";
import { ListAvailableZones$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAvailableZonesCommand}.
 */
export interface ListAvailableZonesCommandInput extends ListAvailableZonesRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableZonesCommand}.
 */
export interface ListAvailableZonesCommandOutput extends ListAvailableZonesResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Lists the Availability Zones that have available AWS CloudHSM capacity.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ListAvailableZonesCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ListAvailableZonesCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = {};
 * const command = new ListAvailableZonesCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableZonesResponse
 * //   AZList: [ // AZList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAvailableZonesCommandInput - {@link ListAvailableZonesCommandInput}
 * @returns {@link ListAvailableZonesCommandOutput}
 * @see {@link ListAvailableZonesCommandInput} for command's `input` shape.
 * @see {@link ListAvailableZonesCommandOutput} for command's `response` shape.
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
export class ListAvailableZonesCommand extends command<ListAvailableZonesCommandInput, ListAvailableZonesCommandOutput>(
  _ep0,
  _mw0,
  "ListAvailableZones",
  ListAvailableZones$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListAvailableZonesResponse;
    };
    sdk: {
      input: ListAvailableZonesCommandInput;
      output: ListAvailableZonesCommandOutput;
    };
  };
}
