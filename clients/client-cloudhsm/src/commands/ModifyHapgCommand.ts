// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyHapgRequest, ModifyHapgResponse } from "../models/models_0";
import { de_ModifyHapgCommand, se_ModifyHapgCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyHapgCommand}.
 */
export interface ModifyHapgCommandInput extends ModifyHapgRequest {}
/**
 * @public
 *
 * The output of {@link ModifyHapgCommand}.
 */
export interface ModifyHapgCommandOutput extends ModifyHapgResponse, __MetadataBearer {}

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
 *          <p>Modifies an existing high-availability partition group.</p>
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ModifyHapgCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ModifyHapgCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // ModifyHapgRequest
 *   HapgArn: "STRING_VALUE", // required
 *   Label: "STRING_VALUE",
 *   PartitionSerialList: [ // PartitionSerialList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyHapgCommand(input);
 * const response = await client.send(command);
 * // { // ModifyHapgResponse
 * //   HapgArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyHapgCommandInput - {@link ModifyHapgCommandInput}
 * @returns {@link ModifyHapgCommandOutput}
 * @see {@link ModifyHapgCommandInput} for command's `input` shape.
 * @see {@link ModifyHapgCommandOutput} for command's `response` shape.
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
export class ModifyHapgCommand extends $Command
  .classBuilder<
    ModifyHapgCommandInput,
    ModifyHapgCommandOutput,
    CloudHSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudHsmFrontendService", "ModifyHapg", {})
  .n("CloudHSMClient", "ModifyHapgCommand")
  .f(void 0, void 0)
  .ser(se_ModifyHapgCommand)
  .de(de_ModifyHapgCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyHapgRequest;
      output: ModifyHapgResponse;
    };
    sdk: {
      input: ModifyHapgCommandInput;
      output: ModifyHapgCommandOutput;
    };
  };
}
