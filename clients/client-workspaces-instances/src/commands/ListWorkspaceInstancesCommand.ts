// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListWorkspaceInstancesRequest,
  ListWorkspaceInstancesRequestFilterSensitiveLog,
  ListWorkspaceInstancesResponse,
  ListWorkspaceInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListWorkspaceInstancesCommand, se_ListWorkspaceInstancesCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkspacesInstancesClientResolvedConfig,
} from "../WorkspacesInstancesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkspaceInstancesCommand}.
 */
export interface ListWorkspaceInstancesCommandInput extends ListWorkspaceInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkspaceInstancesCommand}.
 */
export interface ListWorkspaceInstancesCommandOutput extends ListWorkspaceInstancesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a collection of WorkSpaces Instances based on specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, ListWorkspaceInstancesCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, ListWorkspaceInstancesCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // ListWorkspaceInstancesRequest
 *   ProvisionStates: [ // ProvisionStates
 *     "ALLOCATING" || "ALLOCATED" || "DEALLOCATING" || "DEALLOCATED" || "ERROR_ALLOCATING" || "ERROR_DEALLOCATING",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkspaceInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspaceInstancesResponse
 * //   WorkspaceInstances: [ // WorkspaceInstances // required
 * //     { // WorkspaceInstance
 * //       ProvisionState: "ALLOCATING" || "ALLOCATED" || "DEALLOCATING" || "DEALLOCATED" || "ERROR_ALLOCATING" || "ERROR_DEALLOCATING",
 * //       WorkspaceInstanceId: "STRING_VALUE",
 * //       EC2ManagedInstance: { // EC2ManagedInstance
 * //         InstanceId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkspaceInstancesCommandInput - {@link ListWorkspaceInstancesCommandInput}
 * @returns {@link ListWorkspaceInstancesCommandOutput}
 * @see {@link ListWorkspaceInstancesCommandInput} for command's `input` shape.
 * @see {@link ListWorkspaceInstancesCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Indicates insufficient permissions to perform the requested action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates an unexpected server-side error occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates the request rate has exceeded limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates invalid input parameters in the request.</p>
 *
 * @throws {@link WorkspacesInstancesServiceException}
 * <p>Base exception class for all service exceptions from WorkspacesInstances service.</p>
 *
 *
 * @public
 */
export class ListWorkspaceInstancesCommand extends $Command
  .classBuilder<
    ListWorkspaceInstancesCommandInput,
    ListWorkspaceInstancesCommandOutput,
    WorkspacesInstancesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkspacesInstancesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EUCMIFrontendAPIService", "ListWorkspaceInstances", {})
  .n("WorkspacesInstancesClient", "ListWorkspaceInstancesCommand")
  .f(ListWorkspaceInstancesRequestFilterSensitiveLog, ListWorkspaceInstancesResponseFilterSensitiveLog)
  .ser(se_ListWorkspaceInstancesCommand)
  .de(de_ListWorkspaceInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkspaceInstancesRequest;
      output: ListWorkspaceInstancesResponse;
    };
    sdk: {
      input: ListWorkspaceInstancesCommandInput;
      output: ListWorkspaceInstancesCommandOutput;
    };
  };
}
