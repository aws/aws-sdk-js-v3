// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateLocationObjectStorageRequest,
  CreateLocationObjectStorageRequestFilterSensitiveLog,
  CreateLocationObjectStorageResponse,
} from "../models/models_0";
import { de_CreateLocationObjectStorageCommand, se_CreateLocationObjectStorageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationObjectStorageCommand}.
 */
export interface CreateLocationObjectStorageCommandInput extends CreateLocationObjectStorageRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationObjectStorageCommand}.
 */
export interface CreateLocationObjectStorageCommandOutput
  extends CreateLocationObjectStorageResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an endpoint for an object storage system that DataSync can access
 *       for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object
 *         storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationObjectStorageRequest
 *   ServerHostname: "STRING_VALUE", // required
 *   ServerPort: Number("int"),
 *   ServerProtocol: "HTTPS" || "HTTP",
 *   Subdirectory: "STRING_VALUE",
 *   BucketName: "STRING_VALUE", // required
 *   AccessKey: "STRING_VALUE",
 *   SecretKey: "STRING_VALUE",
 *   AgentArns: [ // AgentArnList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ServerCertificate: "BLOB_VALUE",
 * };
 * const command = new CreateLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationObjectStorageResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationObjectStorageCommandInput - {@link CreateLocationObjectStorageCommandInput}
 * @returns {@link CreateLocationObjectStorageCommandOutput}
 * @see {@link CreateLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link CreateLocationObjectStorageCommandOutput} for command's `response` shape.
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
export class CreateLocationObjectStorageCommand extends $Command
  .classBuilder<
    CreateLocationObjectStorageCommandInput,
    CreateLocationObjectStorageCommandOutput,
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
  .s("FmrsService", "CreateLocationObjectStorage", {})
  .n("DataSyncClient", "CreateLocationObjectStorageCommand")
  .f(CreateLocationObjectStorageRequestFilterSensitiveLog, void 0)
  .ser(se_CreateLocationObjectStorageCommand)
  .de(de_CreateLocationObjectStorageCommand)
  .build() {}
