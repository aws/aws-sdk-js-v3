// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostAndUsageReportServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReportDefinitionRequest, DeleteReportDefinitionResponse } from "../models/models_0";
import { de_DeleteReportDefinitionCommand, se_DeleteReportDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReportDefinitionCommand}.
 */
export interface DeleteReportDefinitionCommandInput extends DeleteReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReportDefinitionCommand}.
 */
export interface DeleteReportDefinitionCommandOutput extends DeleteReportDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified report. Any tags associated with the report are also
 *       deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, DeleteReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, DeleteReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const input = { // DeleteReportDefinitionRequest
 *   ReportName: "STRING_VALUE", // required
 * };
 * const command = new DeleteReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReportDefinitionResponse
 * //   ResponseMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteReportDefinitionCommandInput - {@link DeleteReportDefinitionCommandInput}
 * @returns {@link DeleteReportDefinitionCommandOutput}
 * @see {@link DeleteReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for CostAndUsageReportServiceClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link CostAndUsageReportServiceServiceException}
 * <p>Base exception class for all service exceptions from CostAndUsageReportService service.</p>
 *
 *
 * @example To delete the AWS Cost and Usage report named ExampleReport.
 * ```javascript
 * // The following example deletes the AWS Cost and Usage report named ExampleReport.
 * const input = {
 *   ReportName: "ExampleReport"
 * };
 * const command = new DeleteReportDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteReportDefinitionCommand extends $Command
  .classBuilder<
    DeleteReportDefinitionCommandInput,
    DeleteReportDefinitionCommandOutput,
    CostAndUsageReportServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostAndUsageReportServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSOrigamiServiceGatewayService", "DeleteReportDefinition", {})
  .n("CostAndUsageReportServiceClient", "DeleteReportDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReportDefinitionCommand)
  .de(de_DeleteReportDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReportDefinitionRequest;
      output: DeleteReportDefinitionResponse;
    };
    sdk: {
      input: DeleteReportDefinitionCommandInput;
      output: DeleteReportDefinitionCommandOutput;
    };
  };
}
