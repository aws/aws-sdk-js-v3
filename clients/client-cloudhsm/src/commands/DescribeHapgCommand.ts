// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeHapgRequest, DescribeHapgResponse } from "../models/models_0";
import { DescribeHapg$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHapgCommand}.
 */
export interface DescribeHapgCommandInput extends DescribeHapgRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHapgCommand}.
 */
export interface DescribeHapgCommandOutput extends DescribeHapgResponse, __MetadataBearer {}

/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Retrieves information about a high-availability partition group.</p>
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DescribeHapgCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DescribeHapgCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // DescribeHapgRequest
 *   HapgArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeHapgCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHapgResponse
 * //   HapgArn: "STRING_VALUE",
 * //   HapgSerial: "STRING_VALUE",
 * //   HsmsLastActionFailed: [ // HsmList
 * //     "STRING_VALUE",
 * //   ],
 * //   HsmsPendingDeletion: [
 * //     "STRING_VALUE",
 * //   ],
 * //   HsmsPendingRegistration: [
 * //     "STRING_VALUE",
 * //   ],
 * //   Label: "STRING_VALUE",
 * //   LastModifiedTimestamp: "STRING_VALUE",
 * //   PartitionSerialList: [ // PartitionSerialList
 * //     "STRING_VALUE",
 * //   ],
 * //   State: "READY" || "UPDATING" || "DEGRADED",
 * // };
 *
 * ```
 *
 * @param DescribeHapgCommandInput - {@link DescribeHapgCommandInput}
 * @returns {@link DescribeHapgCommandOutput}
 * @see {@link DescribeHapgCommandInput} for command's `input` shape.
 * @see {@link DescribeHapgCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmInternalException} (server fault)
 *  <p>Indicates that an internal error occurred.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that one or more of the request parameters are not valid.</p>
 *
 * @throws {@link CloudHSMServiceException}
 * <p>Base exception class for all service exceptions from CloudHSM service.</p>
 *
 *
 * @public
 */
export class DescribeHapgCommand extends $Command
  .classBuilder<
    DescribeHapgCommandInput,
    DescribeHapgCommandOutput,
    CloudHSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudHsmFrontendService", "DescribeHapg", {})
  .n("CloudHSMClient", "DescribeHapgCommand")
  .sc(DescribeHapg$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHapgRequest;
      output: DescribeHapgResponse;
    };
    sdk: {
      input: DescribeHapgCommandInput;
      output: DescribeHapgCommandOutput;
    };
  };
}
