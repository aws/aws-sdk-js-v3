// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateLocationObjectStorageRequest,
  UpdateLocationObjectStorageRequestFilterSensitiveLog,
  UpdateLocationObjectStorageResponse,
} from "../models/models_0";
import { de_UpdateLocationObjectStorageCommand, se_UpdateLocationObjectStorageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationObjectStorageCommand}.
 */
export interface UpdateLocationObjectStorageCommandInput extends UpdateLocationObjectStorageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationObjectStorageCommand}.
 */
export interface UpdateLocationObjectStorageCommandOutput
  extends UpdateLocationObjectStorageResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates some parameters of an existing object storage location that DataSync
 *       accesses for a transfer. For information about creating a self-managed object storage
 *       location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object
 *         storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationObjectStorageRequest
 *   LocationArn: "STRING_VALUE", // required
 *   ServerPort: Number("int"),
 *   ServerProtocol: "HTTPS" || "HTTP",
 *   Subdirectory: "STRING_VALUE",
 *   AccessKey: "STRING_VALUE",
 *   SecretKey: "STRING_VALUE",
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   ServerCertificate: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new UpdateLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationObjectStorageCommandInput - {@link UpdateLocationObjectStorageCommandInput}
 * @returns {@link UpdateLocationObjectStorageCommandOutput}
 * @see {@link UpdateLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationObjectStorageCommandOutput} for command's `response` shape.
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
 */
export class UpdateLocationObjectStorageCommand extends $Command
  .classBuilder<
    UpdateLocationObjectStorageCommandInput,
    UpdateLocationObjectStorageCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "UpdateLocationObjectStorage", {})
  .n("DataSyncClient", "UpdateLocationObjectStorageCommand")
  .f(UpdateLocationObjectStorageRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateLocationObjectStorageCommand)
  .de(de_UpdateLocationObjectStorageCommand)
  .build() {}
