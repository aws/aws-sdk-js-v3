// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfiguredTableInput, DeleteConfiguredTableOutput } from "../models/models_0";
import { de_DeleteConfiguredTableCommand, se_DeleteConfiguredTableCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredTableCommand}.
 */
export interface DeleteConfiguredTableCommandInput extends DeleteConfiguredTableInput {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredTableCommand}.
 */
export interface DeleteConfiguredTableCommandOutput extends DeleteConfiguredTableOutput, __MetadataBearer {}

/**
 * <p>Deletes a configured table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteConfiguredTableInput
 *   configuredTableIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredTableCommandInput - {@link DeleteConfiguredTableCommandInput}
 * @returns {@link DeleteConfiguredTableCommandOutput}
 * @see {@link DeleteConfiguredTableCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class DeleteConfiguredTableCommand extends $Command
  .classBuilder<
    DeleteConfiguredTableCommandInput,
    DeleteConfiguredTableCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteConfiguredTable", {})
  .n("CleanRoomsClient", "DeleteConfiguredTableCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfiguredTableCommand)
  .de(de_DeleteConfiguredTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredTableInput;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredTableCommandInput;
      output: DeleteConfiguredTableCommandOutput;
    };
  };
}
