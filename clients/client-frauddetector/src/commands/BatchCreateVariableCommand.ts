// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { BatchCreateVariableRequest, BatchCreateVariableResult } from "../models/models_0";
import { de_BatchCreateVariableCommand, se_BatchCreateVariableCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateVariableCommand}.
 */
export interface BatchCreateVariableCommandInput extends BatchCreateVariableRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateVariableCommand}.
 */
export interface BatchCreateVariableCommandOutput extends BatchCreateVariableResult, __MetadataBearer {}

/**
 * <p>Creates a batch of variables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, BatchCreateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, BatchCreateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // BatchCreateVariableRequest
 *   variableEntries: [ // VariableEntryList // required
 *     { // VariableEntry
 *       name: "STRING_VALUE",
 *       dataType: "STRING_VALUE",
 *       dataSource: "STRING_VALUE",
 *       defaultValue: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       variableType: "STRING_VALUE",
 *     },
 *   ],
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchCreateVariableCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateVariableResult
 * //   errors: [ // BatchCreateVariableErrorList
 * //     { // BatchCreateVariableError
 * //       name: "STRING_VALUE",
 * //       code: Number("int"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateVariableCommandInput - {@link BatchCreateVariableCommandInput}
 * @returns {@link BatchCreateVariableCommandOutput}
 * @see {@link BatchCreateVariableCommandInput} for command's `input` shape.
 * @see {@link BatchCreateVariableCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchCreateVariableCommand extends $Command
  .classBuilder<
    BatchCreateVariableCommandInput,
    BatchCreateVariableCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "BatchCreateVariable", {})
  .n("FraudDetectorClient", "BatchCreateVariableCommand")
  .f(void 0, void 0)
  .ser(se_BatchCreateVariableCommand)
  .de(de_BatchCreateVariableCommand)
  .build() {}
