// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkspacePageRequest, CreateWorkspacePageResponse } from "../models/models_1";
import { CreateWorkspacePage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkspacePageCommand}.
 */
export interface CreateWorkspacePageCommandInput extends CreateWorkspacePageRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspacePageCommand}.
 */
export interface CreateWorkspacePageCommandOutput extends CreateWorkspacePageResponse, __MetadataBearer {}

/**
 * Associates a view with a page in a workspace, defining what users see when they navigate to that page.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateWorkspacePageCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateWorkspacePageCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateWorkspacePageRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   Page: "STRING_VALUE", // required
 *   Slug: "STRING_VALUE",
 *   InputData: "STRING_VALUE",
 * };
 * const command = new CreateWorkspacePageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateWorkspacePageCommandInput - {@link CreateWorkspacePageCommandInput}
 * @returns {@link CreateWorkspacePageCommandOutput}
 * @see {@link CreateWorkspacePageCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspacePageCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
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
export class CreateWorkspacePageCommand extends command<CreateWorkspacePageCommandInput, CreateWorkspacePageCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkspacePage",
  CreateWorkspacePage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspacePageRequest;
      output: {};
    };
    sdk: {
      input: CreateWorkspacePageCommandInput;
      output: CreateWorkspacePageCommandOutput;
    };
  };
}
