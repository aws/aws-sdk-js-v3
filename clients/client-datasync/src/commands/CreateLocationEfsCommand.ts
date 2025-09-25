// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocationEfsRequest, CreateLocationEfsResponse } from "../models/models_0";
import { CreateLocationEfs } from "../schemas/schemas_2_Task";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationEfsCommand}.
 */
export interface CreateLocationEfsCommandInput extends CreateLocationEfsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationEfsCommand}.
 */
export interface CreateLocationEfsCommandOutput extends CreateLocationEfsResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for an Amazon EFS file system.
 *         DataSync can use this location as a source or destination for transferring
 *       data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html#create-efs-location-access">accesses
 *           Amazon EFS file systems</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationEfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationEfsRequest
 *   Subdirectory: "STRING_VALUE",
 *   EfsFilesystemArn: "STRING_VALUE", // required
 *   Ec2Config: { // Ec2Config
 *     SubnetArn: "STRING_VALUE", // required
 *     SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   AccessPointArn: "STRING_VALUE",
 *   FileSystemAccessRoleArn: "STRING_VALUE",
 *   InTransitEncryption: "NONE" || "TLS1_2",
 * };
 * const command = new CreateLocationEfsCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationEfsResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationEfsCommandInput - {@link CreateLocationEfsCommandInput}
 * @returns {@link CreateLocationEfsCommandOutput}
 * @see {@link CreateLocationEfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationEfsCommandOutput} for command's `response` shape.
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
export class CreateLocationEfsCommand extends $Command
  .classBuilder<
    CreateLocationEfsCommandInput,
    CreateLocationEfsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "CreateLocationEfs", {})
  .n("DataSyncClient", "CreateLocationEfsCommand")
  .sc(CreateLocationEfs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationEfsRequest;
      output: CreateLocationEfsResponse;
    };
    sdk: {
      input: CreateLocationEfsCommandInput;
      output: CreateLocationEfsCommandOutput;
    };
  };
}
