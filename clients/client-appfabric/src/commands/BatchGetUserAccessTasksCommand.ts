// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetUserAccessTasksRequest, BatchGetUserAccessTasksResponse } from "../models/models_0";
import { BatchGetUserAccessTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets user access details in a batch request.
 *
 * This action polls data from the tasks that are kicked off by the `StartUserAccessTasks` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, BatchGetUserAccessTasksCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, BatchGetUserAccessTasksCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
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
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppFabricServiceException}
 *
 * Base exception class for all service exceptions from AppFabric service.
 *
 * @public
 */
export class BatchGetUserAccessTasksCommand extends command<BatchGetUserAccessTasksCommandInput, BatchGetUserAccessTasksCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetUserAccessTasks",
  BatchGetUserAccessTasks$
) {
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
