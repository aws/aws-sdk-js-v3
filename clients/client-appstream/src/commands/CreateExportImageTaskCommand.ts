// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExportImageTaskRequest, CreateExportImageTaskResult } from "../models/models_0";
import { CreateExportImageTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a task to export a WorkSpaces Applications image to an EC2 AMI. This allows you to use your customized WorkSpaces Applications images with other AWS services or for backup purposes.
 *
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
 * //     State: "EXPORTING" || "COMPLETED" || "FAILED" || "TIMED_OUT",
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
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *
 * The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The specified role is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested limit exceeds the permitted limit for an account.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *
 * The specified resource exists and is not in use, but isn't available.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class CreateExportImageTaskCommand extends command<CreateExportImageTaskCommandInput, CreateExportImageTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateExportImageTask",
  CreateExportImageTask$
) {
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
