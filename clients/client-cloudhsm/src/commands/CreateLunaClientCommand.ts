// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLunaClientRequest, CreateLunaClientResponse } from "../models/models_0";
import { CreateLunaClient$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLunaClientCommand}.
 */
export interface CreateLunaClientCommandInput extends CreateLunaClientRequest {}
/**
 * @public
 *
 * The output of {@link CreateLunaClientCommand}.
 */
export interface CreateLunaClientCommandOutput extends CreateLunaClientResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Creates an HSM client.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, CreateLunaClientCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, CreateLunaClientCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // CreateLunaClientRequest
 *   Label: "STRING_VALUE",
 *   Certificate: "STRING_VALUE", // required
 * };
 * const command = new CreateLunaClientCommand(input);
 * const response = await client.send(command);
 * // { // CreateLunaClientResponse
 * //   ClientArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLunaClientCommandInput - {@link CreateLunaClientCommandInput}
 * @returns {@link CreateLunaClientCommandOutput}
 * @see {@link CreateLunaClientCommandInput} for command's `input` shape.
 * @see {@link CreateLunaClientCommandOutput} for command's `response` shape.
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
export class CreateLunaClientCommand extends command<CreateLunaClientCommandInput, CreateLunaClientCommandOutput>(
  _ep0,
  _mw0,
  "CreateLunaClient",
  CreateLunaClient$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLunaClientRequest;
      output: CreateLunaClientResponse;
    };
    sdk: {
      input: CreateLunaClientCommandInput;
      output: CreateLunaClientCommandOutput;
    };
  };
}
