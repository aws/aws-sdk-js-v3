// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListSbomValidationResultsRequest, ListSbomValidationResultsResponse } from "../models/models_2";
import { de_ListSbomValidationResultsCommand, se_ListSbomValidationResultsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSbomValidationResultsCommand}.
 */
export interface ListSbomValidationResultsCommandInput extends ListSbomValidationResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListSbomValidationResultsCommand}.
 */
export interface ListSbomValidationResultsCommandOutput extends ListSbomValidationResultsResponse, __MetadataBearer {}

/**
 * <p>The validation results for all software bill of materials (SBOM) attached to a specific software package version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSbomValidationResults</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSbomValidationResultsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSbomValidationResultsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListSbomValidationResultsRequest
 *   packageName: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   validationResult: "FAILED" || "SUCCEEDED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSbomValidationResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListSbomValidationResultsResponse
 * //   validationResultSummaries: [ // SbomValidationResultSummaryList
 * //     { // SbomValidationResultSummary
 * //       fileName: "STRING_VALUE",
 * //       validationResult: "FAILED" || "SUCCEEDED",
 * //       errorCode: "INCOMPATIBLE_FORMAT" || "FILE_SIZE_LIMIT_EXCEEDED",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSbomValidationResultsCommandInput - {@link ListSbomValidationResultsCommandInput}
 * @returns {@link ListSbomValidationResultsCommandOutput}
 * @see {@link ListSbomValidationResultsCommandInput} for command's `input` shape.
 * @see {@link ListSbomValidationResultsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListSbomValidationResultsCommand extends $Command
  .classBuilder<
    ListSbomValidationResultsCommandInput,
    ListSbomValidationResultsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListSbomValidationResults", {})
  .n("IoTClient", "ListSbomValidationResultsCommand")
  .f(void 0, void 0)
  .ser(se_ListSbomValidationResultsCommand)
  .de(de_ListSbomValidationResultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSbomValidationResultsRequest;
      output: ListSbomValidationResultsResponse;
    };
    sdk: {
      input: ListSbomValidationResultsCommandInput;
      output: ListSbomValidationResultsCommandOutput;
    };
  };
}
