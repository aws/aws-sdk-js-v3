// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetUserAccessTasksRequest,
  BatchGetUserAccessTasksResponse,
  BatchGetUserAccessTasksResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchGetUserAccessTasksCommand, se_BatchGetUserAccessTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetUserAccessTasksCommand}.
 */
export interface BatchGetUserAccessTasksCommandInput extends BatchGetUserAccessTasksRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetUserAccessTasksCommand}.
 */
export interface BatchGetUserAccessTasksCommandOutput extends BatchGetUserAccessTasksResponse, __MetadataBearer {}

/**
 * <p>Gets user access details in a batch request.</p>
 *          <p>This action polls data from the tasks that are kicked off by the
 *             <code>StartUserAccessTasks</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, BatchGetUserAccessTasksCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, BatchGetUserAccessTasksCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // BatchGetUserAccessTasksRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   taskIdList: [ // TaskIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetUserAccessTasksCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetUserAccessTasksResponse
 * //   userAccessResultsList: [ // UserAccessResultsList
 * //     { // UserAccessResultItem
 * //       app: "STRING_VALUE",
 * //       tenantId: "STRING_VALUE",
 * //       tenantDisplayName: "STRING_VALUE",
 * //       taskId: "STRING_VALUE",
 * //       resultStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "EXPIRED",
 * //       email: "STRING_VALUE",
 * //       userId: "STRING_VALUE",
 * //       userFullName: "STRING_VALUE",
 * //       userFirstName: "STRING_VALUE",
 * //       userLastName: "STRING_VALUE",
 * //       userStatus: "STRING_VALUE",
 * //       taskError: { // TaskError
 * //         errorCode: "STRING_VALUE",
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetUserAccessTasksCommandInput - {@link BatchGetUserAccessTasksCommandInput}
 * @returns {@link BatchGetUserAccessTasksCommandOutput}
 * @see {@link BatchGetUserAccessTasksCommandInput} for command's `input` shape.
 * @see {@link BatchGetUserAccessTasksCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 *
 * @public
 */
export class BatchGetUserAccessTasksCommand extends $Command
  .classBuilder<
    BatchGetUserAccessTasksCommandInput,
    BatchGetUserAccessTasksCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "BatchGetUserAccessTasks", {})
  .n("AppFabricClient", "BatchGetUserAccessTasksCommand")
  .f(void 0, BatchGetUserAccessTasksResponseFilterSensitiveLog)
  .ser(se_BatchGetUserAccessTasksCommand)
  .de(de_BatchGetUserAccessTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetUserAccessTasksRequest;
      output: BatchGetUserAccessTasksResponse;
    };
    sdk: {
      input: BatchGetUserAccessTasksCommandInput;
      output: BatchGetUserAccessTasksCommandOutput;
    };
  };
}
