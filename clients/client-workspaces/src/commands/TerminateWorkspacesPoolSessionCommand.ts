// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateWorkspacesPoolSessionRequest, TerminateWorkspacesPoolSessionResult } from "../models/models_1";
import {
  de_TerminateWorkspacesPoolSessionCommand,
  se_TerminateWorkspacesPoolSessionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateWorkspacesPoolSessionCommand}.
 */
export interface TerminateWorkspacesPoolSessionCommandInput extends TerminateWorkspacesPoolSessionRequest {}
/**
 * @public
 *
 * The output of {@link TerminateWorkspacesPoolSessionCommand}.
 */
export interface TerminateWorkspacesPoolSessionCommandOutput
  extends TerminateWorkspacesPoolSessionResult,
    __MetadataBearer {}

/**
 * <p>Terminates the pool session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, TerminateWorkspacesPoolSessionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, TerminateWorkspacesPoolSessionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // TerminateWorkspacesPoolSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new TerminateWorkspacesPoolSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateWorkspacesPoolSessionCommandInput - {@link TerminateWorkspacesPoolSessionCommandInput}
 * @returns {@link TerminateWorkspacesPoolSessionCommandOutput}
 * @see {@link TerminateWorkspacesPoolSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkspacesPoolSessionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class TerminateWorkspacesPoolSessionCommand extends $Command
  .classBuilder<
    TerminateWorkspacesPoolSessionCommandInput,
    TerminateWorkspacesPoolSessionCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "TerminateWorkspacesPoolSession", {})
  .n("WorkSpacesClient", "TerminateWorkspacesPoolSessionCommand")
  .f(void 0, void 0)
  .ser(se_TerminateWorkspacesPoolSessionCommand)
  .de(de_TerminateWorkspacesPoolSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateWorkspacesPoolSessionRequest;
      output: {};
    };
    sdk: {
      input: TerminateWorkspacesPoolSessionCommandInput;
      output: TerminateWorkspacesPoolSessionCommandOutput;
    };
  };
}
