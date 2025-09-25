// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLunaClientRequest, DescribeLunaClientResponse } from "../models/models_0";
import { DescribeLunaClient } from "../schemas/schemas_3_Luna";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *          <p>Retrieves information about an HSM client.</p>
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
export class DescribeLunaClientCommand extends $Command
  .classBuilder<
    DescribeLunaClientCommandInput,
    DescribeLunaClientCommandOutput,
    CloudHSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudHsmFrontendService", "DescribeLunaClient", {})
  .n("CloudHSMClient", "DescribeLunaClientCommand")
  .sc(DescribeLunaClient)
  .build() {
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
