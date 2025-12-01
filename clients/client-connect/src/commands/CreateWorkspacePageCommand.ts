// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWorkspacePageRequest, CreateWorkspacePageResponse } from "../models/models_0";
import { CreateWorkspacePage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates a view with a page in a workspace, defining what users see when they navigate to that page.</p>
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreateWorkspacePageCommand extends $Command
  .classBuilder<
    CreateWorkspacePageCommandInput,
    CreateWorkspacePageCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateWorkspacePage", {})
  .n("ConnectClient", "CreateWorkspacePageCommand")
  .sc(CreateWorkspacePage)
  .build() {
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
