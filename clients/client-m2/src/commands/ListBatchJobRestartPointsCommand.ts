// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListBatchJobRestartPointsRequest, ListBatchJobRestartPointsResponse } from "../models/models_0";
import { de_ListBatchJobRestartPointsCommand, se_ListBatchJobRestartPointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBatchJobRestartPointsCommand}.
 */
export interface ListBatchJobRestartPointsCommandInput extends ListBatchJobRestartPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchJobRestartPointsCommand}.
 */
export interface ListBatchJobRestartPointsCommandOutput extends ListBatchJobRestartPointsResponse, __MetadataBearer {}

/**
 * <p>Lists all the job steps for a JCL file to restart a batch job. This is only applicable for Micro Focus engine with versions 8.0.6 and above.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListBatchJobRestartPointsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListBatchJobRestartPointsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // ListBatchJobRestartPointsRequest
 *   applicationId: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   authSecretsManagerArn: "STRING_VALUE",
 * };
 * const command = new ListBatchJobRestartPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchJobRestartPointsResponse
 * //   batchJobSteps: [ // BatchJobStepList
 * //     { // JobStep
 * //       stepNumber: Number("int"),
 * //       stepName: "STRING_VALUE",
 * //       procStepNumber: Number("int"),
 * //       procStepName: "STRING_VALUE",
 * //       stepCondCode: "STRING_VALUE",
 * //       stepRestartable: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBatchJobRestartPointsCommandInput - {@link ListBatchJobRestartPointsCommandInput}
 * @returns {@link ListBatchJobRestartPointsCommandOutput}
 * @see {@link ListBatchJobRestartPointsCommandInput} for command's `input` shape.
 * @see {@link ListBatchJobRestartPointsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class ListBatchJobRestartPointsCommand extends $Command
  .classBuilder<
    ListBatchJobRestartPointsCommandInput,
    ListBatchJobRestartPointsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "ListBatchJobRestartPoints", {})
  .n("M2Client", "ListBatchJobRestartPointsCommand")
  .f(void 0, void 0)
  .ser(se_ListBatchJobRestartPointsCommand)
  .de(de_ListBatchJobRestartPointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchJobRestartPointsRequest;
      output: ListBatchJobRestartPointsResponse;
    };
    sdk: {
      input: ListBatchJobRestartPointsCommandInput;
      output: ListBatchJobRestartPointsCommandOutput;
    };
  };
}
