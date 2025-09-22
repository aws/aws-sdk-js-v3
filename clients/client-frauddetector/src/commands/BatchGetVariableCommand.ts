// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { BatchGetVariableRequest, BatchGetVariableResult } from "../models/models_0";
import { BatchGetVariable } from "../schemas/schemas_33_Variable";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetVariableCommand}.
 */
export interface BatchGetVariableCommandInput extends BatchGetVariableRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetVariableCommand}.
 */
export interface BatchGetVariableCommandOutput extends BatchGetVariableResult, __MetadataBearer {}

/**
 * <p>Gets a batch of variables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, BatchGetVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, BatchGetVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // BatchGetVariableRequest
 *   names: [ // NameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetVariableCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetVariableResult
 * //   variables: [ // VariableList
 * //     { // Variable
 * //       name: "STRING_VALUE",
 * //       dataType: "STRING" || "INTEGER" || "FLOAT" || "BOOLEAN" || "DATETIME",
 * //       dataSource: "EVENT" || "MODEL_SCORE" || "EXTERNAL_MODEL_SCORE",
 * //       defaultValue: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       variableType: "STRING_VALUE",
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchGetVariableErrorList
 * //     { // BatchGetVariableError
 * //       name: "STRING_VALUE",
 * //       code: Number("int"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetVariableCommandInput - {@link BatchGetVariableCommandInput}
 * @returns {@link BatchGetVariableCommandOutput}
 * @see {@link BatchGetVariableCommandInput} for command's `input` shape.
 * @see {@link BatchGetVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class BatchGetVariableCommand extends $Command
  .classBuilder<
    BatchGetVariableCommandInput,
    BatchGetVariableCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "BatchGetVariable", {})
  .n("FraudDetectorClient", "BatchGetVariableCommand")
  .sc(BatchGetVariable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetVariableRequest;
      output: BatchGetVariableResult;
    };
    sdk: {
      input: BatchGetVariableCommandInput;
      output: BatchGetVariableCommandOutput;
    };
  };
}
