// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRoutingProfileNameRequest } from "../models/models_3";
import { UpdateRoutingProfileName } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoutingProfileNameCommand}.
 */
export interface UpdateRoutingProfileNameCommandInput extends UpdateRoutingProfileNameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingProfileNameCommand}.
 */
export interface UpdateRoutingProfileNameCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateRoutingProfileNameRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateRoutingProfileNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRoutingProfileNameCommandInput - {@link UpdateRoutingProfileNameCommandInput}
 * @returns {@link UpdateRoutingProfileNameCommandOutput}
 * @see {@link UpdateRoutingProfileNameCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateRoutingProfileNameCommand extends $Command
  .classBuilder<
    UpdateRoutingProfileNameCommandInput,
    UpdateRoutingProfileNameCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateRoutingProfileName", {})
  .n("ConnectClient", "UpdateRoutingProfileNameCommand")
  .sc(UpdateRoutingProfileName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoutingProfileNameRequest;
      output: {};
    };
    sdk: {
      input: UpdateRoutingProfileNameCommandInput;
      output: UpdateRoutingProfileNameCommandOutput;
    };
  };
}
