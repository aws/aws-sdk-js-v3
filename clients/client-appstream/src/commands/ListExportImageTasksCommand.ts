// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListExportImageTasksRequest, ListExportImageTasksResult } from "../models/models_0";
import { ListExportImageTasks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExportImageTasksCommand}.
 */
export interface ListExportImageTasksCommandInput extends ListExportImageTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListExportImageTasksCommand}.
 */
export interface ListExportImageTasksCommandOutput extends ListExportImageTasksResult, __MetadataBearer {}

/**
 * <p>Lists export image tasks, with optional filtering and pagination. Use this operation to monitor the status of multiple export operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListExportImageTasksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListExportImageTasksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // ListExportImageTasksRequest
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExportImageTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListExportImageTasksResult
 * //   ExportImageTasks: [ // ExportImageTasks
 * //     { // ExportImageTask
 * //       TaskId: "STRING_VALUE", // required
 * //       ImageArn: "STRING_VALUE", // required
 * //       AmiName: "STRING_VALUE", // required
 * //       CreatedDate: new Date("TIMESTAMP"), // required
 * //       AmiDescription: "STRING_VALUE",
 * //       State: "EXPORTING" || "COMPLETED" || "FAILED",
 * //       AmiId: "STRING_VALUE",
 * //       TagSpecifications: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ErrorDetails: [ // ErrorDetailsList
 * //         { // ErrorDetails
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportImageTasksCommandInput - {@link ListExportImageTasksCommandInput}
 * @returns {@link ListExportImageTasksCommandOutput}
 * @see {@link ListExportImageTasksCommandInput} for command's `input` shape.
 * @see {@link ListExportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class ListExportImageTasksCommand extends $Command
  .classBuilder<
    ListExportImageTasksCommandInput,
    ListExportImageTasksCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "ListExportImageTasks", {})
  .n("AppStreamClient", "ListExportImageTasksCommand")
  .sc(ListExportImageTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportImageTasksRequest;
      output: ListExportImageTasksResult;
    };
    sdk: {
      input: ListExportImageTasksCommandInput;
      output: ListExportImageTasksCommandOutput;
    };
  };
}
