// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLocationEfsRequest, CreateLocationEfsResponse } from "../models/models_0";
import { CreateLocationEfs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a transfer *location* for an Amazon EFS file system. DataSync can use this location as a source or destination for transferring data.
 *
 * Before you begin, make sure that you understand how DataSync [accesses Amazon EFS file systems](https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html#create-efs-location-access).
 *
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
 *
 * This exception is thrown when an error occurs in the DataSync service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link DataSyncServiceException}
 *
 * Base exception class for all service exceptions from DataSync service.
 *
 * @public
 */
export class CreateLocationEfsCommand extends command<CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput>(
  _ep0,
  _mw0,
  "CreateLocationEfs",
  CreateLocationEfs$
) {
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
