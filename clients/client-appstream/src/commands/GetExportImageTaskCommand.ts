// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetExportImageTaskRequest, GetExportImageTaskResult } from "../models/models_0";
import { GetExportImageTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportImageTaskCommand}.
 */
export interface GetExportImageTaskCommandInput extends GetExportImageTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetExportImageTaskCommand}.
 */
export interface GetExportImageTaskCommandOutput extends GetExportImageTaskResult, __MetadataBearer {}

/**
 * <p>Retrieves information about an export image task, including its current state, progress, and any error details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, GetExportImageTaskCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, GetExportImageTaskCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // GetExportImageTaskRequest
 *   TaskId: "STRING_VALUE",
 * };
 * const command = new GetExportImageTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetExportImageTaskResult
 * //   ExportImageTask: { // ExportImageTask
 * //     TaskId: "STRING_VALUE", // required
 * //     ImageArn: "STRING_VALUE", // required
 * //     AmiName: "STRING_VALUE", // required
 * //     CreatedDate: new Date("TIMESTAMP"), // required
 * //     AmiDescription: "STRING_VALUE",
 * //     State: "EXPORTING" || "COMPLETED" || "FAILED",
 * //     AmiId: "STRING_VALUE",
 * //     TagSpecifications: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ErrorDetails: [ // ErrorDetailsList
 * //       { // ErrorDetails
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExportImageTaskCommandInput - {@link GetExportImageTaskCommandInput}
 * @returns {@link GetExportImageTaskCommandOutput}
 * @see {@link GetExportImageTaskCommandInput} for command's `input` shape.
 * @see {@link GetExportImageTaskCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class GetExportImageTaskCommand extends $Command
  .classBuilder<
    GetExportImageTaskCommandInput,
    GetExportImageTaskCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "GetExportImageTask", {})
  .n("AppStreamClient", "GetExportImageTaskCommand")
  .sc(GetExportImageTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportImageTaskRequest;
      output: GetExportImageTaskResult;
    };
    sdk: {
      input: GetExportImageTaskCommandInput;
      output: GetExportImageTaskCommandOutput;
    };
  };
}
