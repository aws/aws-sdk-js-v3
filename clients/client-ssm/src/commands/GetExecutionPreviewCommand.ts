// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetExecutionPreviewRequest, GetExecutionPreviewResponse } from "../models/models_1";
import { GetExecutionPreview } from "../schemas/schemas_1_Item";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExecutionPreviewCommand}.
 */
export interface GetExecutionPreviewCommandInput extends GetExecutionPreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetExecutionPreviewCommand}.
 */
export interface GetExecutionPreviewCommandOutput extends GetExecutionPreviewResponse, __MetadataBearer {}

/**
 * <p>Initiates the process of retrieving an existing preview that shows the effects that running
 *    a specified Automation runbook would have on the targeted resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetExecutionPreviewCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetExecutionPreviewCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetExecutionPreviewRequest
 *   ExecutionPreviewId: "STRING_VALUE", // required
 * };
 * const command = new GetExecutionPreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetExecutionPreviewResponse
 * //   ExecutionPreviewId: "STRING_VALUE",
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   Status: "Pending" || "InProgress" || "Success" || "Failed",
 * //   StatusMessage: "STRING_VALUE",
 * //   ExecutionPreview: { // ExecutionPreview Union: only one key present
 * //     Automation: { // AutomationExecutionPreview
 * //       StepPreviews: { // StepPreviewMap
 * //         "<keys>": Number("int"),
 * //       },
 * //       Regions: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetPreviews: [ // TargetPreviewList
 * //         { // TargetPreview
 * //           Count: Number("int"),
 * //           TargetType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TotalAccounts: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExecutionPreviewCommandInput - {@link GetExecutionPreviewCommandInput}
 * @returns {@link GetExecutionPreviewCommandOutput}
 * @see {@link GetExecutionPreviewCommandInput} for command's `input` shape.
 * @see {@link GetExecutionPreviewCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified parameter to be shared could not be found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetExecutionPreviewCommand extends $Command
  .classBuilder<
    GetExecutionPreviewCommandInput,
    GetExecutionPreviewCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "GetExecutionPreview", {})
  .n("SSMClient", "GetExecutionPreviewCommand")
  .sc(GetExecutionPreview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExecutionPreviewRequest;
      output: GetExecutionPreviewResponse;
    };
    sdk: {
      input: GetExecutionPreviewCommandInput;
      output: GetExecutionPreviewCommandOutput;
    };
  };
}
