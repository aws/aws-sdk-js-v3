// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExpireSessionRequest, ExpireSessionResponse } from "../models/models_0";
import { ExpireSession } from "../schemas/schemas_34_Session";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExpireSessionCommand}.
 */
export interface ExpireSessionCommandInput extends ExpireSessionRequest {}
/**
 * @public
 *
 * The output of {@link ExpireSessionCommand}.
 */
export interface ExpireSessionCommandOutput extends ExpireSessionResponse, __MetadataBearer {}

/**
 * <p>Expires an active secure browser session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ExpireSessionCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ExpireSessionCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ExpireSessionRequest
 *   portalId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new ExpireSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExpireSessionCommandInput - {@link ExpireSessionCommandInput}
 * @returns {@link ExpireSessionCommandOutput}
 * @see {@link ExpireSessionCommandInput} for command's `input` shape.
 * @see {@link ExpireSessionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class ExpireSessionCommand extends $Command
  .classBuilder<
    ExpireSessionCommandInput,
    ExpireSessionCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "ExpireSession", {})
  .n("WorkSpacesWebClient", "ExpireSessionCommand")
  .sc(ExpireSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExpireSessionRequest;
      output: {};
    };
    sdk: {
      input: ExpireSessionCommandInput;
      output: ExpireSessionCommandOutput;
    };
  };
}
