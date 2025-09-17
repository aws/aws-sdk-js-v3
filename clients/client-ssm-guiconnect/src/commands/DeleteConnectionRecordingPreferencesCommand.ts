// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteConnectionRecordingPreferencesRequest,
  DeleteConnectionRecordingPreferencesResponse,
} from "../models/models_0";
import {
  de_DeleteConnectionRecordingPreferencesCommand,
  se_DeleteConnectionRecordingPreferencesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMGuiConnectClientResolvedConfig } from "../SSMGuiConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionRecordingPreferencesCommand}.
 */
export interface DeleteConnectionRecordingPreferencesCommandInput extends DeleteConnectionRecordingPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionRecordingPreferencesCommand}.
 */
export interface DeleteConnectionRecordingPreferencesCommandOutput
  extends DeleteConnectionRecordingPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the preferences for recording RDP connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMGuiConnectClient, DeleteConnectionRecordingPreferencesCommand } from "@aws-sdk/client-ssm-guiconnect"; // ES Modules import
 * // const { SSMGuiConnectClient, DeleteConnectionRecordingPreferencesCommand } = require("@aws-sdk/client-ssm-guiconnect"); // CommonJS import
 * // import type { SSMGuiConnectClientConfig } from "@aws-sdk/client-ssm-guiconnect";
 * const config = {}; // type is SSMGuiConnectClientConfig
 * const client = new SSMGuiConnectClient(config);
 * const input = { // DeleteConnectionRecordingPreferencesRequest
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteConnectionRecordingPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConnectionRecordingPreferencesResponse
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteConnectionRecordingPreferencesCommandInput - {@link DeleteConnectionRecordingPreferencesCommandInput}
 * @returns {@link DeleteConnectionRecordingPreferencesCommandOutput}
 * @see {@link DeleteConnectionRecordingPreferencesCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionRecordingPreferencesCommandOutput} for command's `response` shape.
 * @see {@link SSMGuiConnectClientResolvedConfig | config} for SSMGuiConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred due to a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link SSMGuiConnectServiceException}
 * <p>Base exception class for all service exceptions from SSMGuiConnect service.</p>
 *
 *
 * @example Delete the connection recording preferences for the account
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new DeleteConnectionRecordingPreferencesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ClientToken: "sample_uuid"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteConnectionRecordingPreferencesCommand extends $Command
  .classBuilder<
    DeleteConnectionRecordingPreferencesCommandInput,
    DeleteConnectionRecordingPreferencesCommandOutput,
    SSMGuiConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMGuiConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMGuiConnect", "DeleteConnectionRecordingPreferences", {})
  .n("SSMGuiConnectClient", "DeleteConnectionRecordingPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConnectionRecordingPreferencesCommand)
  .de(de_DeleteConnectionRecordingPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionRecordingPreferencesRequest;
      output: DeleteConnectionRecordingPreferencesResponse;
    };
    sdk: {
      input: DeleteConnectionRecordingPreferencesCommandInput;
      output: DeleteConnectionRecordingPreferencesCommandOutput;
    };
  };
}
