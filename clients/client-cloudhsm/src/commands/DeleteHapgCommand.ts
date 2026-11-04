// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHapgRequest, DeleteHapgResponse } from "../models/models_0";
import { DeleteHapg$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHapgCommand}.
 */
export interface DeleteHapgCommandInput extends DeleteHapgRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHapgCommand}.
 */
export interface DeleteHapgCommandOutput extends DeleteHapgResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Deletes a high-availability partition group.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DeleteHapgCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DeleteHapgCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // DeleteHapgRequest
 *   HapgArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteHapgCommand(input);
 * const response = await client.send(command);
 * // { // DeleteHapgResponse
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteHapgCommandInput - {@link DeleteHapgCommandInput}
 * @returns {@link DeleteHapgCommandOutput}
 * @see {@link DeleteHapgCommandInput} for command's `input` shape.
 * @see {@link DeleteHapgCommandOutput} for command's `response` shape.
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
export class DeleteHapgCommand extends command<DeleteHapgCommandInput, DeleteHapgCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHapg",
  DeleteHapg$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHapgRequest;
      output: DeleteHapgResponse;
    };
    sdk: {
      input: DeleteHapgCommandInput;
      output: DeleteHapgCommandOutput;
    };
  };
}
