// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteViewRequest, DeleteViewResponse } from "../models/models_1";
import { DeleteView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteViewCommand}.
 */
export interface DeleteViewCommandInput extends DeleteViewRequest {}
/**
 * @public
 *
 * The output of {@link DeleteViewCommand}.
 */
export interface DeleteViewCommandOutput extends DeleteViewResponse, __MetadataBearer {}

/**
 * <p>Deletes the view entirely. It deletes the view and all associated qualifiers (versions and aliases).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteViewCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteViewCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteViewRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 * };
 * const command = new DeleteViewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteViewCommandInput - {@link DeleteViewCommandInput}
 * @returns {@link DeleteViewCommandOutput}
 * @see {@link DeleteViewCommandInput} for command's `input` shape.
 * @see {@link DeleteViewCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use (for example, you're trying to add a record with the same name as an existing
 *    record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute),
 *    remove its reference from related resources and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Displayed when rate-related API limits are exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteViewCommand extends $Command
  .classBuilder<
    DeleteViewCommandInput,
    DeleteViewCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteView", {})
  .n("ConnectClient", "DeleteViewCommand")
  .sc(DeleteView$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteViewRequest;
      output: {};
    };
    sdk: {
      input: DeleteViewCommandInput;
      output: DeleteViewCommandOutput;
    };
  };
}
