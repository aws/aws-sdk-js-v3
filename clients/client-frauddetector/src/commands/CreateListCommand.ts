// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateListRequest, CreateListRequestFilterSensitiveLog, CreateListResult } from "../models/models_0";
import { de_CreateListCommand, se_CreateListCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateListCommand}.
 */
export interface CreateListCommandInput extends CreateListRequest {}
/**
 * @public
 *
 * The output of {@link CreateListCommand}.
 */
export interface CreateListCommandOutput extends CreateListResult, __MetadataBearer {}

/**
 * <p>
 *             Creates a list.
 *         </p>
 *          <p>List is a set of input data for a variable in your event dataset. You use the input data in a rule that's associated with your detector.
 *             For more information, see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/lists.html">Lists</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateListCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateListCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateListRequest
 *   name: "STRING_VALUE", // required
 *   elements: [ // ElementsList
 *     "STRING_VALUE",
 *   ],
 *   variableType: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateListCommandInput - {@link CreateListCommandInput}
 * @returns {@link CreateListCommandOutput}
 * @see {@link CreateListCommandInput} for command's `input` shape.
 * @see {@link CreateListCommandOutput} for command's `response` shape.
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
export class CreateListCommand extends $Command
  .classBuilder<
    CreateListCommandInput,
    CreateListCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "CreateList", {})
  .n("FraudDetectorClient", "CreateListCommand")
  .f(CreateListRequestFilterSensitiveLog, void 0)
  .ser(se_CreateListCommand)
  .de(de_CreateListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateListRequest;
      output: {};
    };
    sdk: {
      input: CreateListCommandInput;
      output: CreateListCommandOutput;
    };
  };
}
