// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLocationObjectStorageRequest, UpdateLocationObjectStorageResponse } from "../models/models_0";
import { UpdateLocationObjectStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateLocationObjectStorageCommandOutput extends UpdateLocationObjectStorageResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the object storage transfer location
 *       that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Configuring DataSync
 *         transfers with an object storage system</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationObjectStorageRequest
 *   LocationArn: "STRING_VALUE", // required
 *   ServerPort: Number("int"),
 *   ServerProtocol: "HTTPS" || "HTTP",
 *   Subdirectory: "STRING_VALUE",
 *   ServerHostname: "STRING_VALUE",
 *   AccessKey: "STRING_VALUE",
 *   SecretKey: "STRING_VALUE",
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   ServerCertificate: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   CmkSecretConfig: { // CmkSecretConfig
 *     SecretArn: "STRING_VALUE",
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   CustomSecretConfig: { // CustomSecretConfig
 *     SecretArn: "STRING_VALUE",
 *     SecretAccessRoleArn: "STRING_VALUE",
 *   },
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
 *
 * @public
 */
export class UpdateLocationObjectStorageCommand extends command<UpdateLocationObjectStorageCommandInput, UpdateLocationObjectStorageCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLocationObjectStorage",
  UpdateLocationObjectStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationObjectStorageRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationObjectStorageCommandInput;
      output: UpdateLocationObjectStorageCommandOutput;
    };
  };
}
