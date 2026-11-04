// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyHsmRequest, ModifyHsmResponse } from "../models/models_0";
import { ModifyHsm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyHsmCommand}.
 */
export interface ModifyHsmCommandInput extends ModifyHsmRequest {}
/**
 * @public
 *
 * The output of {@link ModifyHsmCommand}.
 */
export interface ModifyHsmCommandOutput extends ModifyHsmResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Modifies an HSM.
 *
 * > **Important:** This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ModifyHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ModifyHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // ModifyHsmRequest
 *   HsmArn: "STRING_VALUE", // required
 *   SubnetId: "STRING_VALUE",
 *   EniIp: "STRING_VALUE",
 *   IamRoleArn: "STRING_VALUE",
 *   ExternalId: "STRING_VALUE",
 *   SyslogIp: "STRING_VALUE",
 * };
 * const command = new ModifyHsmCommand(input);
 * const response = await client.send(command);
 * // { // ModifyHsmResponse
 * //   HsmArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyHsmCommandInput - {@link ModifyHsmCommandInput}
 * @returns {@link ModifyHsmCommandOutput}
 * @see {@link ModifyHsmCommandInput} for command's `input` shape.
 * @see {@link ModifyHsmCommandOutput} for command's `response` shape.
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
export class ModifyHsmCommand extends command<ModifyHsmCommandInput, ModifyHsmCommandOutput>(
  _ep0,
  _mw0,
  "ModifyHsm",
  ModifyHsm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyHsmRequest;
      output: ModifyHsmResponse;
    };
    sdk: {
      input: ModifyHsmCommandInput;
      output: ModifyHsmCommandOutput;
    };
  };
}
