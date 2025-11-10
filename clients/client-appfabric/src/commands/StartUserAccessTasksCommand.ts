// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartUserAccessTasksRequest, StartUserAccessTasksResponse } from "../models/models_0";
import { StartUserAccessTasks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartUserAccessTasksCommand}.
 */
export interface StartUserAccessTasksCommandInput extends StartUserAccessTasksRequest {}
/**
 * @public
 *
 * The output of {@link StartUserAccessTasksCommand}.
 */
export interface StartUserAccessTasksCommandOutput extends StartUserAccessTasksResponse, __MetadataBearer {}

/**
 * <p>Starts the tasks to search user access status for a specific email address.</p>
 *          <p>The tasks are stopped when the user access status data is found. The tasks are
 *          terminated when the API calls to the application time out.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, StartUserAccessTasksCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, StartUserAccessTasksCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // StartUserAccessTasksRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   email: "STRING_VALUE", // required
 * };
 * const command = new StartUserAccessTasksCommand(input);
 * const response = await client.send(command);
 * // { // StartUserAccessTasksResponse
 * //   userAccessTasksList: [ // UserAccessTasksList
 * //     { // UserAccessTaskItem
 * //       app: "STRING_VALUE", // required
 * //       tenantId: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE",
 * //       error: { // TaskError
 * //         errorCode: "STRING_VALUE",
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param StartUserAccessTasksCommandInput - {@link StartUserAccessTasksCommandInput}
 * @returns {@link StartUserAccessTasksCommandOutput}
 * @see {@link StartUserAccessTasksCommandInput} for command's `input` shape.
 * @see {@link StartUserAccessTasksCommandOutput} for command's `response` shape.
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
export class StartUserAccessTasksCommand extends $Command
  .classBuilder<
    StartUserAccessTasksCommandInput,
    StartUserAccessTasksCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FabricFrontEndService", "StartUserAccessTasks", {})
  .n("AppFabricClient", "StartUserAccessTasksCommand")
  .sc(StartUserAccessTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartUserAccessTasksRequest;
      output: StartUserAccessTasksResponse;
    };
    sdk: {
      input: StartUserAccessTasksCommandInput;
      output: StartUserAccessTasksCommandOutput;
    };
  };
}
