// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTargetsRequest, DescribeAssessmentTargetsResponse } from "../models/models_0";
import { de_DescribeAssessmentTargetsCommand, se_DescribeAssessmentTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssessmentTargetsCommand}.
 */
export interface DescribeAssessmentTargetsCommandInput extends DescribeAssessmentTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentTargetsCommand}.
 */
export interface DescribeAssessmentTargetsCommandOutput extends DescribeAssessmentTargetsResponse, __MetadataBearer {}

/**
 * <p>Describes the assessment targets that are specified by the ARNs of the assessment
 *          targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // DescribeAssessmentTargetsRequest
 *   assessmentTargetArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentTargetsResponse
 * //   assessmentTargets: [ // AssessmentTargetList // required
 * //     { // AssessmentTarget
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       resourceGroupArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAssessmentTargetsCommandInput - {@link DescribeAssessmentTargetsCommandInput}
 * @returns {@link DescribeAssessmentTargetsCommandOutput}
 * @see {@link DescribeAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentTargetsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @public
 */
export class DescribeAssessmentTargetsCommand extends $Command
  .classBuilder<
    DescribeAssessmentTargetsCommandInput,
    DescribeAssessmentTargetsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "DescribeAssessmentTargets", {})
  .n("InspectorClient", "DescribeAssessmentTargetsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAssessmentTargetsCommand)
  .de(de_DescribeAssessmentTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssessmentTargetsRequest;
      output: DescribeAssessmentTargetsResponse;
    };
    sdk: {
      input: DescribeAssessmentTargetsCommandInput;
      output: DescribeAssessmentTargetsCommandOutput;
    };
  };
}
