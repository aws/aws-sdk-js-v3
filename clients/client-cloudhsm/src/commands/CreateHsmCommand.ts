// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateHsmRequest, CreateHsmResponse } from "../models/models_0";
import { CreateHsm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateHsmCommand}.
 */
export interface CreateHsmCommandInput extends CreateHsmRequest {}
/**
 * @public
 *
 * The output of {@link CreateHsmCommand}.
 */
export interface CreateHsmCommandOutput extends CreateHsmResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Creates an uninitialized HSM instance.
 *
 * There is an upfront fee charged for each HSM instance that you create with the `CreateHsm` operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the DeleteHsm operation, go to the [AWS Support Center](https://console.aws.amazon.com/support/home), create a new case, and select **Account and Billing Support**.
 *
 * > **Important:** It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the DescribeHsm operation. The HSM is ready to be initialized when the status changes to `RUNNING`.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, CreateHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, CreateHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // CreateHsmRequest
 *   SubnetId: "STRING_VALUE", // required
 *   SshKey: "STRING_VALUE", // required
 *   EniIp: "STRING_VALUE",
 *   IamRoleArn: "STRING_VALUE", // required
 *   ExternalId: "STRING_VALUE",
 *   SubscriptionType: "PRODUCTION", // required
 *   ClientToken: "STRING_VALUE",
 *   SyslogIp: "STRING_VALUE",
 * };
 * const command = new CreateHsmCommand(input);
 * const response = await client.send(command);
 * // { // CreateHsmResponse
 * //   HsmArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHsmCommandInput - {@link CreateHsmCommandInput}
 * @returns {@link CreateHsmCommandOutput}
 * @see {@link CreateHsmCommandInput} for command's `input` shape.
 * @see {@link CreateHsmCommandOutput} for command's `response` shape.
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
export class CreateHsmCommand extends command<CreateHsmCommandInput, CreateHsmCommandOutput>(
  _ep0,
  _mw0,
  "CreateHsm",
  CreateHsm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHsmRequest;
      output: CreateHsmResponse;
    };
    sdk: {
      input: CreateHsmCommandInput;
      output: CreateHsmCommandOutput;
    };
  };
}
