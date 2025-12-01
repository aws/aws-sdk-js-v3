// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSessionLoggerRequest, DeleteSessionLoggerResponse } from "../models/models_0";
import { DeleteSessionLogger } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSessionLoggerCommand}.
 */
export interface DeleteSessionLoggerCommandInput extends DeleteSessionLoggerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSessionLoggerCommand}.
 */
export interface DeleteSessionLoggerCommandOutput extends DeleteSessionLoggerResponse, __MetadataBearer {}

/**
 * <p>Deletes a session logger resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteSessionLoggerCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteSessionLoggerCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteSessionLoggerRequest
 *   sessionLoggerArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSessionLoggerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSessionLoggerCommandInput - {@link DeleteSessionLoggerCommandInput}
 * @returns {@link DeleteSessionLoggerCommandOutput}
 * @see {@link DeleteSessionLoggerCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionLoggerCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
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
 * @example Delete Session Logger
 * ```javascript
 * // Deletes a session logger resource
 * const input = {
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/12345678-1234-1234-1234-123456789012"
 * };
 * const command = new DeleteSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSessionLoggerCommand extends $Command
  .classBuilder<
    DeleteSessionLoggerCommandInput,
    DeleteSessionLoggerCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "DeleteSessionLogger", {})
  .n("WorkSpacesWebClient", "DeleteSessionLoggerCommand")
  .sc(DeleteSessionLogger)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSessionLoggerRequest;
      output: {};
    };
    sdk: {
      input: DeleteSessionLoggerCommandInput;
      output: DeleteSessionLoggerCommandOutput;
    };
  };
}
