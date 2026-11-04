// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeHsmRequest, DescribeHsmResponse } from "../models/models_0";
import { DescribeHsm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeHsmCommand}.
 */
export interface DescribeHsmCommandInput extends DescribeHsmRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHsmCommand}.
 */
export interface DescribeHsmCommandOutput extends DescribeHsmResponse, __MetadataBearer {}

/**
 * This is documentation for **AWS CloudHSM Classic**. For more information, see [AWS CloudHSM Classic FAQs](http://aws.amazon.com/cloudhsm/faqs-classic/), the [AWS CloudHSM Classic User Guide](https://docs.aws.amazon.com/cloudhsm/classic/userguide/), and the [AWS CloudHSM Classic API Reference](https://docs.aws.amazon.com/cloudhsm/classic/APIReference/).
 *
 * **For information about the current version of AWS CloudHSM**, see [AWS CloudHSM](http://aws.amazon.com/cloudhsm/), the [AWS CloudHSM User Guide](https://docs.aws.amazon.com/cloudhsm/latest/userguide/), and the [AWS CloudHSM API Reference](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/).
 *
 * Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DescribeHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DescribeHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // DescribeHsmRequest
 *   HsmArn: "STRING_VALUE",
 *   HsmSerialNumber: "STRING_VALUE",
 * };
 * const command = new DescribeHsmCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHsmResponse
 * //   HsmArn: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "UPDATING" || "SUSPENDED" || "TERMINATING" || "TERMINATED" || "DEGRADED",
 * //   StatusDetails: "STRING_VALUE",
 * //   AvailabilityZone: "STRING_VALUE",
 * //   EniId: "STRING_VALUE",
 * //   EniIp: "STRING_VALUE",
 * //   SubscriptionType: "PRODUCTION",
 * //   SubscriptionStartDate: "STRING_VALUE",
 * //   SubscriptionEndDate: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   SubnetId: "STRING_VALUE",
 * //   IamRoleArn: "STRING_VALUE",
 * //   SerialNumber: "STRING_VALUE",
 * //   VendorName: "STRING_VALUE",
 * //   HsmType: "STRING_VALUE",
 * //   SoftwareVersion: "STRING_VALUE",
 * //   SshPublicKey: "STRING_VALUE",
 * //   SshKeyLastUpdated: "STRING_VALUE",
 * //   ServerCertUri: "STRING_VALUE",
 * //   ServerCertLastUpdated: "STRING_VALUE",
 * //   Partitions: [ // PartitionList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeHsmCommandInput - {@link DescribeHsmCommandInput}
 * @returns {@link DescribeHsmCommandOutput}
 * @see {@link DescribeHsmCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmCommandOutput} for command's `response` shape.
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
export class DescribeHsmCommand extends command<DescribeHsmCommandInput, DescribeHsmCommandOutput>(
  _ep0,
  _mw0,
  "DescribeHsm",
  DescribeHsm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHsmRequest;
      output: DescribeHsmResponse;
    };
    sdk: {
      input: DescribeHsmCommandInput;
      output: DescribeHsmCommandOutput;
    };
  };
}
