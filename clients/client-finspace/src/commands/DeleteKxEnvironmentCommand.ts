// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { DeleteKxEnvironmentRequest, DeleteKxEnvironmentResponse } from "../models/models_0";
import { de_DeleteKxEnvironmentCommand, se_DeleteKxEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKxEnvironmentCommand}.
 */
export interface DeleteKxEnvironmentCommandInput extends DeleteKxEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKxEnvironmentCommand}.
 */
export interface DeleteKxEnvironmentCommandOutput extends DeleteKxEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Deletes the kdb environment. This action is irreversible. Deleting a kdb environment will remove all the associated data and any services running in it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, DeleteKxEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, DeleteKxEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // DeleteKxEnvironmentRequest
 *   environmentId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteKxEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKxEnvironmentCommandInput - {@link DeleteKxEnvironmentCommandInput}
 * @returns {@link DeleteKxEnvironmentCommandOutput}
 * @see {@link DeleteKxEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteKxEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class DeleteKxEnvironmentCommand extends $Command
  .classBuilder<
    DeleteKxEnvironmentCommandInput,
    DeleteKxEnvironmentCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "DeleteKxEnvironment", {})
  .n("FinspaceClient", "DeleteKxEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKxEnvironmentCommand)
  .de(de_DeleteKxEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKxEnvironmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteKxEnvironmentCommandInput;
      output: DeleteKxEnvironmentCommandOutput;
    };
  };
}
