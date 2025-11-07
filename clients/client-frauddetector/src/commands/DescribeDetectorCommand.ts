// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DescribeDetectorRequest, DescribeDetectorResult } from "../models/models_0";
import { DescribeDetector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDetectorCommand}.
 */
export interface DescribeDetectorCommandInput extends DescribeDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDetectorCommand}.
 */
export interface DescribeDetectorCommandOutput extends DescribeDetectorResult, __MetadataBearer {}

/**
 * <p>Gets all versions for a specified detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DescribeDetectorCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DescribeDetectorCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DescribeDetectorRequest
 *   detectorId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeDetectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDetectorResult
 * //   detectorId: "STRING_VALUE",
 * //   detectorVersionSummaries: [ // DetectorVersionSummaryList
 * //     { // DetectorVersionSummary
 * //       detectorVersionId: "STRING_VALUE",
 * //       status: "DRAFT" || "ACTIVE" || "INACTIVE",
 * //       description: "STRING_VALUE",
 * //       lastUpdatedTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDetectorCommandInput - {@link DescribeDetectorCommandInput}
 * @returns {@link DescribeDetectorCommandOutput}
 * @see {@link DescribeDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
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
export class DescribeDetectorCommand extends $Command
  .classBuilder<
    DescribeDetectorCommandInput,
    DescribeDetectorCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DescribeDetector", {})
  .n("FraudDetectorClient", "DescribeDetectorCommand")
  .sc(DescribeDetector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDetectorRequest;
      output: DescribeDetectorResult;
    };
    sdk: {
      input: DescribeDetectorCommandInput;
      output: DescribeDetectorCommandOutput;
    };
  };
}
