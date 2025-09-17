// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorkspaceInstanceRequest, GetWorkspaceInstanceResponse } from "../models/models_0";
import { de_GetWorkspaceInstanceCommand, se_GetWorkspaceInstanceCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link GetWorkspaceInstanceCommand}.
 */
export interface GetWorkspaceInstanceCommandInput extends GetWorkspaceInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkspaceInstanceCommand}.
 */
export interface GetWorkspaceInstanceCommandOutput extends GetWorkspaceInstanceResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific WorkSpace Instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, GetWorkspaceInstanceCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, GetWorkspaceInstanceCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // GetWorkspaceInstanceRequest
 *   WorkspaceInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkspaceInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkspaceInstanceResponse
 * //   WorkspaceInstanceErrors: [ // WorkspaceInstanceErrors
 * //     { // WorkspaceInstanceError
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EC2InstanceErrors: [ // EC2InstanceErrors
 * //     { // EC2InstanceError
 * //       EC2ErrorCode: "STRING_VALUE",
 * //       EC2ExceptionType: "STRING_VALUE",
 * //       EC2ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProvisionState: "ALLOCATING" || "ALLOCATED" || "DEALLOCATING" || "DEALLOCATED" || "ERROR_ALLOCATING" || "ERROR_DEALLOCATING",
 * //   WorkspaceInstanceId: "STRING_VALUE",
 * //   EC2ManagedInstance: { // EC2ManagedInstance
 * //     InstanceId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkspaceInstanceCommandInput - {@link GetWorkspaceInstanceCommandInput}
 * @returns {@link GetWorkspaceInstanceCommandOutput}
 * @see {@link GetWorkspaceInstanceCommandInput} for command's `input` shape.
 * @see {@link GetWorkspaceInstanceCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Indicates insufficient permissions to perform the requested action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates an unexpected server-side error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates the requested resource could not be found.</p>
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
export class GetWorkspaceInstanceCommand extends $Command
  .classBuilder<
    GetWorkspaceInstanceCommandInput,
    GetWorkspaceInstanceCommandOutput,
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
  .s("EUCMIFrontendAPIService", "GetWorkspaceInstance", {})
  .n("WorkspacesInstancesClient", "GetWorkspaceInstanceCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkspaceInstanceCommand)
  .de(de_GetWorkspaceInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkspaceInstanceRequest;
      output: GetWorkspaceInstanceResponse;
    };
    sdk: {
      input: GetWorkspaceInstanceCommandInput;
      output: GetWorkspaceInstanceCommandOutput;
    };
  };
}
