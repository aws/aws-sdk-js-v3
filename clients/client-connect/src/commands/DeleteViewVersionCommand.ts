// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteViewVersionRequest, DeleteViewVersionResponse } from "../models/models_1";
import { DeleteViewVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteViewVersionCommand}.
 */
export interface DeleteViewVersionCommandInput extends DeleteViewVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteViewVersionCommand}.
 */
export interface DeleteViewVersionCommandOutput extends DeleteViewVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes the particular version specified in <code>ViewVersion</code> identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteViewVersionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteViewVersionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteViewVersionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   ViewVersion: Number("int"), // required
 * };
 * const command = new DeleteViewVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteViewVersionCommandInput - {@link DeleteViewVersionCommandInput}
 * @returns {@link DeleteViewVersionCommandOutput}
 * @see {@link DeleteViewVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteViewVersionCommandOutput} for command's `response` shape.
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
 *  <p>That resource is already in use (for example, you're trying to add a record with the same
 *    name as an existing record). If you are trying to delete a resource (for example,
 *    DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources
 *    and then try again.</p>
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
export class DeleteViewVersionCommand extends $Command
  .classBuilder<
    DeleteViewVersionCommandInput,
    DeleteViewVersionCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteViewVersion", {})
  .n("ConnectClient", "DeleteViewVersionCommand")
  .sc(DeleteViewVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteViewVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteViewVersionCommandInput;
      output: DeleteViewVersionCommandOutput;
    };
  };
}
