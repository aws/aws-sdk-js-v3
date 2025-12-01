// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAccountLinkRequest, GetAccountLinkResult } from "../models/models_0";
import { GetAccountLink } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountLinkCommand}.
 */
export interface GetAccountLinkCommandInput extends GetAccountLinkRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountLinkCommand}.
 */
export interface GetAccountLinkCommandOutput extends GetAccountLinkResult, __MetadataBearer {}

/**
 * <p>Retrieves account link information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, GetAccountLinkCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, GetAccountLinkCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // GetAccountLinkRequest
 *   LinkId: "STRING_VALUE",
 *   LinkedAccountId: "STRING_VALUE",
 * };
 * const command = new GetAccountLinkCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountLinkResult
 * //   AccountLink: { // AccountLink
 * //     AccountLinkId: "STRING_VALUE",
 * //     AccountLinkStatus: "LINKED" || "LINKING_FAILED" || "LINK_NOT_FOUND" || "PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT" || "REJECTED",
 * //     SourceAccountId: "STRING_VALUE",
 * //     TargetAccountId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountLinkCommandInput - {@link GetAccountLinkCommandInput}
 * @returns {@link GetAccountLinkCommandOutput}
 * @see {@link GetAccountLinkCommandInput} for command's `input` shape.
 * @see {@link GetAccountLinkCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InternalServerException} (client fault)
 *  <p>Unexpected server error occured.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You either haven't provided a <code>TargetAccountId</code> or
 *          are using the same value for <code>TargetAccountId</code> and <code>SourceAccountId</code>.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class GetAccountLinkCommand extends $Command
  .classBuilder<
    GetAccountLinkCommandInput,
    GetAccountLinkCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "GetAccountLink", {})
  .n("WorkSpacesClient", "GetAccountLinkCommand")
  .sc(GetAccountLink)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountLinkRequest;
      output: GetAccountLinkResult;
    };
    sdk: {
      input: GetAccountLinkCommandInput;
      output: GetAccountLinkCommandOutput;
    };
  };
}
