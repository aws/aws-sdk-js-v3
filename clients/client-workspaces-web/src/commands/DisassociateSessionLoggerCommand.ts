// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateSessionLoggerRequest, DisassociateSessionLoggerResponse } from "../models/models_0";
import { DisassociateSessionLogger } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSessionLoggerCommand}.
 */
export interface DisassociateSessionLoggerCommandInput extends DisassociateSessionLoggerRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSessionLoggerCommand}.
 */
export interface DisassociateSessionLoggerCommandOutput extends DisassociateSessionLoggerResponse, __MetadataBearer {}

/**
 * <p>Disassociates a session logger from a portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateSessionLoggerCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateSessionLoggerCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateSessionLoggerRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSessionLoggerCommandInput - {@link DisassociateSessionLoggerCommandInput}
 * @returns {@link DisassociateSessionLoggerCommandOutput}
 * @see {@link DisassociateSessionLoggerCommandInput} for command's `input` shape.
 * @see {@link DisassociateSessionLoggerCommandOutput} for command's `response` shape.
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
 * @example Disassociate Session Logger from Portal
 * ```javascript
 * // Removes the association between a session logger and a portal
 * const input = {
 *   portalArn: "arn:aws:workspaces-web:us-west-2:123456789012:portal/12345678-1234-1234-1234-123456789012"
 * };
 * const command = new DisassociateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateSessionLoggerCommand extends $Command
  .classBuilder<
    DisassociateSessionLoggerCommandInput,
    DisassociateSessionLoggerCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "DisassociateSessionLogger", {})
  .n("WorkSpacesWebClient", "DisassociateSessionLoggerCommand")
  .sc(DisassociateSessionLogger)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSessionLoggerRequest;
      output: {};
    };
    sdk: {
      input: DisassociateSessionLoggerCommandInput;
      output: DisassociateSessionLoggerCommandOutput;
    };
  };
}
