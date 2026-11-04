// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWorkspaceInstanceRequest, GetWorkspaceInstanceResponse } from "../models/models_0";
import { GetWorkspaceInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves detailed information about a specific WorkSpace Instance.
 *
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
 * //   BillingConfiguration: { // BillingConfiguration
 * //     BillingMode: "MONTHLY" || "HOURLY", // required
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
 *
 * Indicates insufficient permissions to perform the requested action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates an unexpected server-side error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates the requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates the request rate has exceeded limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates invalid input parameters in the request.
 *
 * @throws {@link WorkspacesInstancesServiceException}
 *
 * Base exception class for all service exceptions from WorkspacesInstances service.
 *
 * @public
 */
export class GetWorkspaceInstanceCommand extends command<GetWorkspaceInstanceCommandInput, GetWorkspaceInstanceCommandOutput>(
  _ep0,
  _mw0,
  "GetWorkspaceInstance",
  GetWorkspaceInstance$
) {
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
