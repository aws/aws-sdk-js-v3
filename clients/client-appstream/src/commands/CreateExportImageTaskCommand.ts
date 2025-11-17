// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateExportImageTaskRequest, CreateExportImageTaskResult } from "../models/models_0";
import { CreateExportImageTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExportImageTaskCommand}.
 */
export interface CreateExportImageTaskCommandInput extends CreateExportImageTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateExportImageTaskCommand}.
 */
export interface CreateExportImageTaskCommandOutput extends CreateExportImageTaskResult, __MetadataBearer {}

/**
 * <p>Creates a task to export a WorkSpaces Applications image to an EC2 AMI. This allows you to use your customized WorkSpaces Applications images with other AWS services or for backup purposes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateExportImageTaskCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateExportImageTaskCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateExportImageTaskRequest
 *   ImageName: "STRING_VALUE", // required
 *   AmiName: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   TagSpecifications: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AmiDescription: "STRING_VALUE",
 * };
 * const command = new CreateExportImageTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateExportImageTaskResult
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
 * @param CreateExportImageTaskCommandInput - {@link CreateExportImageTaskCommandInput}
 * @returns {@link CreateExportImageTaskCommandOutput}
 * @see {@link CreateExportImageTaskCommandInput} for command's `input` shape.
 * @see {@link CreateExportImageTaskCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The specified role is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *  <p>The specified resource exists and is not in use, but isn't available.</p>
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
export class CreateExportImageTaskCommand extends $Command
  .classBuilder<
    CreateExportImageTaskCommandInput,
    CreateExportImageTaskCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateExportImageTask", {})
  .n("AppStreamClient", "CreateExportImageTaskCommand")
  .sc(CreateExportImageTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExportImageTaskRequest;
      output: CreateExportImageTaskResult;
    };
    sdk: {
      input: CreateExportImageTaskCommandInput;
      output: CreateExportImageTaskCommandOutput;
    };
  };
}
