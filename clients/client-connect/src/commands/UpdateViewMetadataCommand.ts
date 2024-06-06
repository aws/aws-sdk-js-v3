// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateViewMetadataRequest,
  UpdateViewMetadataRequestFilterSensitiveLog,
  UpdateViewMetadataResponse,
} from "../models/models_2";
import { de_UpdateViewMetadataCommand, se_UpdateViewMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateViewMetadataCommand}.
 */
export interface UpdateViewMetadataCommandInput extends UpdateViewMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateViewMetadataCommand}.
 */
export interface UpdateViewMetadataCommandOutput extends UpdateViewMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates the view metadata. Note that either <code>Name</code> or <code>Description</code>
 *    must be provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateViewMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateViewMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateViewMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateViewMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateViewMetadataCommandInput - {@link UpdateViewMetadataCommandInput}
 * @returns {@link UpdateViewMetadataCommandOutput}
 * @see {@link UpdateViewMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateViewMetadataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use. Please try another.</p>
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
 * @public
 */
export class UpdateViewMetadataCommand extends $Command
  .classBuilder<
    UpdateViewMetadataCommandInput,
    UpdateViewMetadataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateViewMetadata", {})
  .n("ConnectClient", "UpdateViewMetadataCommand")
  .f(UpdateViewMetadataRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateViewMetadataCommand)
  .de(de_UpdateViewMetadataCommand)
  .build() {}
