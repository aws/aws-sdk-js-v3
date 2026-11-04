// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateWorkspaceRequest, AssociateWorkspaceResponse } from "../models/models_0";
import { AssociateWorkspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateWorkspaceCommand}.
 */
export interface AssociateWorkspaceCommandInput extends AssociateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateWorkspaceCommand}.
 */
export interface AssociateWorkspaceCommandOutput extends AssociateWorkspaceResponse, __MetadataBearer {}

/**
 * Associates a workspace with one or more users or routing profiles, allowing them to access the workspace's configured views and pages.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateWorkspaceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateWorkspaceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateWorkspaceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   ResourceArns: [ // WorkspaceResourceArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // AssociateWorkspaceResponse
 * //   SuccessfulList: [ // SuccessfulBatchAssociationSummaryList
 * //     { // SuccessfulBatchAssociationSummary
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedList: [ // FailedBatchAssociationSummaryList
 * //     { // FailedBatchAssociationSummary
 * //       ResourceArn: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateWorkspaceCommandInput - {@link AssociateWorkspaceCommandInput}
 * @returns {@link AssociateWorkspaceCommandOutput}
 * @see {@link AssociateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link AssociateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class AssociateWorkspaceCommand extends command<AssociateWorkspaceCommandInput, AssociateWorkspaceCommandOutput>(
  _ep0,
  _mw0,
  "AssociateWorkspace",
  AssociateWorkspace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateWorkspaceRequest;
      output: AssociateWorkspaceResponse;
    };
    sdk: {
      input: AssociateWorkspaceCommandInput;
      output: AssociateWorkspaceCommandOutput;
    };
  };
}
