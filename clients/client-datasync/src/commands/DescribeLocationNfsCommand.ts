// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeLocationNfsRequest, DescribeLocationNfsResponse } from "../models/models_0";
import { DescribeLocationNfs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationNfsCommand}.
 */
export interface DescribeLocationNfsCommandInput extends DescribeLocationNfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationNfsCommand}.
 */
export interface DescribeLocationNfsCommandOutput extends DescribeLocationNfsResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for a Network
 *       File System (NFS) file server is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationNfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationNfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationNfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   OnPremConfig: { // OnPremConfig
 * //     AgentArns: [ // AgentArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   MountOptions: { // NfsMountOptions
 * //     Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLocationNfsCommandInput - {@link DescribeLocationNfsCommandInput}
 * @returns {@link DescribeLocationNfsCommandOutput}
 * @see {@link DescribeLocationNfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationNfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationNfsCommand extends $Command
  .classBuilder<
    DescribeLocationNfsCommandInput,
    DescribeLocationNfsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "DescribeLocationNfs", {})
  .n("DataSyncClient", "DescribeLocationNfsCommand")
  .sc(DescribeLocationNfs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationNfsRequest;
      output: DescribeLocationNfsResponse;
    };
    sdk: {
      input: DescribeLocationNfsCommandInput;
      output: DescribeLocationNfsCommandOutput;
    };
  };
}
