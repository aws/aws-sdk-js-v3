// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeReplicationConfigurationsRequest,
  DescribeReplicationConfigurationsResponse,
} from "../models/models_0";
import {
  de_DescribeReplicationConfigurationsCommand,
  se_DescribeReplicationConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationConfigurationsCommand}.
 */
export interface DescribeReplicationConfigurationsCommandInput extends DescribeReplicationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationConfigurationsCommand}.
 */
export interface DescribeReplicationConfigurationsCommandOutput
  extends DescribeReplicationConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the replication configuration for a specific file system. If a file system is
 *       not specified, all of the replication configurations for the Amazon Web Services account in an
 *         Amazon Web Services Region are retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeReplicationConfigurationsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeReplicationConfigurationsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeReplicationConfigurationsRequest
 *   FileSystemId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeReplicationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationConfigurationsResponse
 * //   Replications: [ // ReplicationConfigurationDescriptions
 * //     { // ReplicationConfigurationDescription
 * //       SourceFileSystemId: "STRING_VALUE", // required
 * //       SourceFileSystemRegion: "STRING_VALUE", // required
 * //       SourceFileSystemArn: "STRING_VALUE", // required
 * //       OriginalSourceFileSystemArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       Destinations: [ // Destinations // required
 * //         { // Destination
 * //           Status: "ENABLED" || "ENABLING" || "DELETING" || "ERROR" || "PAUSED" || "PAUSING", // required
 * //           FileSystemId: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE", // required
 * //           LastReplicatedTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReplicationConfigurationsCommandInput - {@link DescribeReplicationConfigurationsCommandInput}
 * @returns {@link DescribeReplicationConfigurationsCommandOutput}
 * @see {@link DescribeReplicationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link ReplicationNotFound} (client fault)
 *  <p>Returned if the specified file system does not have a replication
 *             configuration.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Returned if the Backup service is not available in the Amazon Web Services Region in which the request was made.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 * @public
 */
export class DescribeReplicationConfigurationsCommand extends $Command
  .classBuilder<
    DescribeReplicationConfigurationsCommandInput,
    DescribeReplicationConfigurationsCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "DescribeReplicationConfigurations", {})
  .n("EFSClient", "DescribeReplicationConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReplicationConfigurationsCommand)
  .de(de_DescribeReplicationConfigurationsCommand)
  .build() {}
