// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelStepsInput, CancelStepsOutput } from "../models/models_0";
import { de_CancelStepsCommand, se_CancelStepsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelStepsCommand}.
 */
export interface CancelStepsCommandInput extends CancelStepsInput {}
/**
 * @public
 *
 * The output of {@link CancelStepsCommand}.
 */
export interface CancelStepsCommandOutput extends CancelStepsOutput, __MetadataBearer {}

/**
 * <p>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in
 *          each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee
 *          that a step will be canceled, even if the request is successfully submitted. When you use
 *             Amazon EMR releases 5.28.0 and later, you can cancel steps that are in a
 *             <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CancelStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CancelStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // CancelStepsInput
 *   ClusterId: "STRING_VALUE", // required
 *   StepIds: [ // StepIdsList // required
 *     "STRING_VALUE",
 *   ],
 *   StepCancellationOption: "SEND_INTERRUPT" || "TERMINATE_PROCESS",
 * };
 * const command = new CancelStepsCommand(input);
 * const response = await client.send(command);
 * // { // CancelStepsOutput
 * //   CancelStepsInfoList: [ // CancelStepsInfoList
 * //     { // CancelStepsInfo
 * //       StepId: "STRING_VALUE",
 * //       Status: "SUBMITTED" || "FAILED",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelStepsCommandInput - {@link CancelStepsCommandInput}
 * @returns {@link CancelStepsCommandOutput}
 * @see {@link CancelStepsCommandInput} for command's `input` shape.
 * @see {@link CancelStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class CancelStepsCommand extends $Command
  .classBuilder<
    CancelStepsCommandInput,
    CancelStepsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "CancelSteps", {})
  .n("EMRClient", "CancelStepsCommand")
  .f(void 0, void 0)
  .ser(se_CancelStepsCommand)
  .de(de_CancelStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelStepsInput;
      output: CancelStepsOutput;
    };
    sdk: {
      input: CancelStepsCommandInput;
      output: CancelStepsCommandOutput;
    };
  };
}
