// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import type { GetOutcomesRequest, GetOutcomesResult } from "../models/models_0";
import { GetOutcomes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOutcomesCommand}.
 */
export interface GetOutcomesCommandInput extends GetOutcomesRequest {}
/**
 * @public
 *
 * The output of {@link GetOutcomesCommand}.
 */
export interface GetOutcomesCommandOutput extends GetOutcomesResult, __MetadataBearer {}

/**
 * <p>Gets one or more outcomes. This is a paginated
 *          API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of
 *          100 records per page. If you provide a <code>maxResults</code>, the value must be
 *          between 50 and 100. To get the next page results, provide the pagination token from the
 *         <code>GetOutcomesResult</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetOutcomesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetOutcomesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetOutcomesRequest
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetOutcomesCommand(input);
 * const response = await client.send(command);
 * // { // GetOutcomesResult
 * //   outcomes: [ // OutcomeList
 * //     { // Outcome
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOutcomesCommandInput - {@link GetOutcomesCommandInput}
 * @returns {@link GetOutcomesCommandOutput}
 * @see {@link GetOutcomesCommandInput} for command's `input` shape.
 * @see {@link GetOutcomesCommandOutput} for command's `response` shape.
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
export class GetOutcomesCommand extends $Command
  .classBuilder<
    GetOutcomesCommandInput,
    GetOutcomesCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "GetOutcomes", {})
  .n("FraudDetectorClient", "GetOutcomesCommand")
  .sc(GetOutcomes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOutcomesRequest;
      output: GetOutcomesResult;
    };
    sdk: {
      input: GetOutcomesCommandInput;
      output: GetOutcomesCommandOutput;
    };
  };
}
