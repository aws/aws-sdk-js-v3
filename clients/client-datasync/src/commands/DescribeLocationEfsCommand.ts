// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLocationEfsRequest, DescribeLocationEfsResponse } from "../models/models_0";
import { DescribeLocationEfs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLocationEfsCommand}.
 */
export interface DescribeLocationEfsCommandInput extends DescribeLocationEfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationEfsCommand}.
 */
export interface DescribeLocationEfsCommandOutput extends DescribeLocationEfsResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for an Amazon EFS file system is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationEfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationEfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationEfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationEfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   Ec2Config: { // Ec2Config
 * //     SubnetArn: "STRING_VALUE", // required
 * //     SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   AccessPointArn: "STRING_VALUE",
 * //   FileSystemAccessRoleArn: "STRING_VALUE",
 * //   InTransitEncryption: "NONE" || "TLS1_2",
 * // };
 *
 * ```
 *
 * @param DescribeLocationEfsCommandInput - {@link DescribeLocationEfsCommandInput}
 * @returns {@link DescribeLocationEfsCommandOutput}
 * @see {@link DescribeLocationEfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationEfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationEfsCommand extends command<DescribeLocationEfsCommandInput, DescribeLocationEfsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLocationEfs",
  DescribeLocationEfs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationEfsRequest;
      output: DescribeLocationEfsResponse;
    };
    sdk: {
      input: DescribeLocationEfsCommandInput;
      output: DescribeLocationEfsCommandOutput;
    };
  };
}
