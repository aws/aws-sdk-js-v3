// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateLocationEfsRequest, UpdateLocationEfsResponse } from "../models/models_0";
import { UpdateLocationEfs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationEfsCommand}.
 */
export interface UpdateLocationEfsCommandInput extends UpdateLocationEfsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationEfsCommand}.
 */
export interface UpdateLocationEfsCommandOutput extends UpdateLocationEfsResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Amazon EFS transfer
 *       location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Configuring DataSync
 *         transfers with Amazon EFS</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationEfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationEfsRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   AccessPointArn: "STRING_VALUE",
 *   FileSystemAccessRoleArn: "STRING_VALUE",
 *   InTransitEncryption: "NONE" || "TLS1_2",
 * };
 * const command = new UpdateLocationEfsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationEfsCommandInput - {@link UpdateLocationEfsCommandInput}
 * @returns {@link UpdateLocationEfsCommandOutput}
 * @see {@link UpdateLocationEfsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationEfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class UpdateLocationEfsCommand extends $Command
  .classBuilder<
    UpdateLocationEfsCommandInput,
    UpdateLocationEfsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "UpdateLocationEfs", {})
  .n("DataSyncClient", "UpdateLocationEfsCommand")
  .sc(UpdateLocationEfs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationEfsRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationEfsCommandInput;
      output: UpdateLocationEfsCommandOutput;
    };
  };
}
