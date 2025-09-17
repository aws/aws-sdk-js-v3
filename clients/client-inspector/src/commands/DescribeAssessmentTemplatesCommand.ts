// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTemplatesRequest, DescribeAssessmentTemplatesResponse } from "../models/models_0";
import { de_DescribeAssessmentTemplatesCommand, se_DescribeAssessmentTemplatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssessmentTemplatesCommand}.
 */
export interface DescribeAssessmentTemplatesCommandInput extends DescribeAssessmentTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentTemplatesCommand}.
 */
export interface DescribeAssessmentTemplatesCommandOutput
  extends DescribeAssessmentTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Describes the assessment templates that are specified by the ARNs of the assessment
 *          templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTemplatesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTemplatesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // DescribeAssessmentTemplatesRequest
 *   assessmentTemplateArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentTemplatesResponse
 * //   assessmentTemplates: [ // AssessmentTemplateList // required
 * //     { // AssessmentTemplate
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       assessmentTargetArn: "STRING_VALUE", // required
 * //       durationInSeconds: Number("int"), // required
 * //       rulesPackageArns: [ // AssessmentTemplateRulesPackageArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       userAttributesForFindings: [ // UserAttributeList // required
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       lastAssessmentRunArn: "STRING_VALUE",
 * //       assessmentRunCount: Number("int"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
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
 * @param DescribeAssessmentTemplatesCommandInput - {@link DescribeAssessmentTemplatesCommandInput}
 * @returns {@link DescribeAssessmentTemplatesCommandOutput}
 * @see {@link DescribeAssessmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentTemplatesCommandOutput} for command's `response` shape.
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
export class DescribeAssessmentTemplatesCommand extends $Command
  .classBuilder<
    DescribeAssessmentTemplatesCommandInput,
    DescribeAssessmentTemplatesCommandOutput,
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
  .s("InspectorService", "DescribeAssessmentTemplates", {})
  .n("InspectorClient", "DescribeAssessmentTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAssessmentTemplatesCommand)
  .de(de_DescribeAssessmentTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssessmentTemplatesRequest;
      output: DescribeAssessmentTemplatesResponse;
    };
    sdk: {
      input: DescribeAssessmentTemplatesCommandInput;
      output: DescribeAssessmentTemplatesCommandOutput;
    };
  };
}
