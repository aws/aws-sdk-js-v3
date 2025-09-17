// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateVariableRequest, CreateVariableResult } from "../models/models_0";
import { de_CreateVariableCommand, se_CreateVariableCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVariableCommand}.
 */
export interface CreateVariableCommandInput extends CreateVariableRequest {}
/**
 * @public
 *
 * The output of {@link CreateVariableCommand}.
 */
export interface CreateVariableCommandOutput extends CreateVariableResult, __MetadataBearer {}

/**
 * <p>Creates a variable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateVariableRequest
 *   name: "STRING_VALUE", // required
 *   dataType: "STRING" || "INTEGER" || "FLOAT" || "BOOLEAN" || "DATETIME", // required
 *   dataSource: "EVENT" || "MODEL_SCORE" || "EXTERNAL_MODEL_SCORE", // required
 *   defaultValue: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   variableType: "STRING_VALUE",
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateVariableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateVariableCommandInput - {@link CreateVariableCommandInput}
 * @returns {@link CreateVariableCommandOutput}
 * @see {@link CreateVariableCommandInput} for command's `input` shape.
 * @see {@link CreateVariableCommandOutput} for command's `response` shape.
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
export class CreateVariableCommand extends $Command
  .classBuilder<
    CreateVariableCommandInput,
    CreateVariableCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "CreateVariable", {})
  .n("FraudDetectorClient", "CreateVariableCommand")
  .f(void 0, void 0)
  .ser(se_CreateVariableCommand)
  .de(de_CreateVariableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVariableRequest;
      output: {};
    };
    sdk: {
      input: CreateVariableCommandInput;
      output: CreateVariableCommandOutput;
    };
  };
}
