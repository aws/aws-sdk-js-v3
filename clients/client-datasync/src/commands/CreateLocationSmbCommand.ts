// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateLocationSmbRequest,
  CreateLocationSmbRequestFilterSensitiveLog,
  CreateLocationSmbResponse,
} from "../models/models_0";
import { de_CreateLocationSmbCommand, se_CreateLocationSmbCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationSmbCommand}.
 */
export interface CreateLocationSmbCommandInput extends CreateLocationSmbRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationSmbCommand}.
 */
export interface CreateLocationSmbCommandOutput extends CreateLocationSmbResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for a Server Message Block (SMB) file
 *       server. DataSync can use this location as a source or destination for
 *       transferring data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb">accesses
 *         SMB file servers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationSmbRequest
 *   Subdirectory: "STRING_VALUE", // required
 *   ServerHostname: "STRING_VALUE", // required
 *   User: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
 *   Password: "STRING_VALUE", // required
 *   AgentArns: [ // AgentArnList // required
 *     "STRING_VALUE",
 *   ],
 *   MountOptions: { // SmbMountOptions
 *     Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 *   },
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationSmbCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationSmbResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationSmbCommandInput - {@link CreateLocationSmbCommandInput}
 * @returns {@link CreateLocationSmbCommandOutput}
 * @see {@link CreateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link CreateLocationSmbCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateLocationSmbCommand extends $Command
  .classBuilder<
    CreateLocationSmbCommandInput,
    CreateLocationSmbCommandOutput,
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
  .s("FmrsService", "CreateLocationSmb", {})
  .n("DataSyncClient", "CreateLocationSmbCommand")
  .f(CreateLocationSmbRequestFilterSensitiveLog, void 0)
  .ser(se_CreateLocationSmbCommand)
  .de(de_CreateLocationSmbCommand)
  .build() {}
