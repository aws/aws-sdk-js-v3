// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLunaClientRequest, DescribeLunaClientResponse } from "../models/models_0";
import { DescribeLunaClient$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLunaClientCommand}.
 */
export interface DescribeLunaClientCommandInput extends DescribeLunaClientRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLunaClientCommand}.
 */
export interface DescribeLunaClientCommandOutput extends DescribeLunaClientResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Retrieves information about an HSM client.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DescribeLunaClientCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DescribeLunaClientCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // DescribeLunaClientRequest
 *   ClientArn: "STRING_VALUE",
 *   CertificateFingerprint: "STRING_VALUE",
 * };
 * const command = new DescribeLunaClientCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLunaClientResponse
 * //   ClientArn: "STRING_VALUE",
 * //   Certificate: "STRING_VALUE",
 * //   CertificateFingerprint: "STRING_VALUE",
 * //   LastModifiedTimestamp: "STRING_VALUE",
 * //   Label: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLunaClientCommandInput - {@link DescribeLunaClientCommandInput}
 * @returns {@link DescribeLunaClientCommandOutput}
 * @see {@link DescribeLunaClientCommandInput} for command's `input` shape.
 * @see {@link DescribeLunaClientCommandOutput} for command's `response` shape.
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
export class DescribeLunaClientCommand extends command<DescribeLunaClientCommandInput, DescribeLunaClientCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLunaClient",
  DescribeLunaClient$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLunaClientRequest;
      output: DescribeLunaClientResponse;
    };
    sdk: {
      input: DescribeLunaClientCommandInput;
      output: DescribeLunaClientCommandOutput;
    };
  };
}
