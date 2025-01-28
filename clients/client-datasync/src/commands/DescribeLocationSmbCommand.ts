// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocationSmbRequest, DescribeLocationSmbResponse } from "../models/models_0";
import { de_DescribeLocationSmbCommand, se_DescribeLocationSmbCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationSmbCommand}.
 */
export interface DescribeLocationSmbCommandInput extends DescribeLocationSmbRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationSmbCommand}.
 */
export interface DescribeLocationSmbCommandOutput extends DescribeLocationSmbResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for a Server
 *       Message Block (SMB) file server is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationSmbRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationSmbCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationSmbResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   AgentArns: [ // AgentArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   User: "STRING_VALUE",
 * //   Domain: "STRING_VALUE",
 * //   MountOptions: { // SmbMountOptions
 * //     Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   DnsIpAddresses: [ // DnsIpList
 * //     "STRING_VALUE",
 * //   ],
 * //   KerberosPrincipal: "STRING_VALUE",
 * //   AuthenticationType: "NTLM" || "KERBEROS",
 * // };
 *
 * ```
 *
 * @param DescribeLocationSmbCommandInput - {@link DescribeLocationSmbCommandInput}
 * @returns {@link DescribeLocationSmbCommandOutput}
 * @see {@link DescribeLocationSmbCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationSmbCommandOutput} for command's `response` shape.
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
export class DescribeLocationSmbCommand extends $Command
  .classBuilder<
    DescribeLocationSmbCommandInput,
    DescribeLocationSmbCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "DescribeLocationSmb", {})
  .n("DataSyncClient", "DescribeLocationSmbCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocationSmbCommand)
  .de(de_DescribeLocationSmbCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationSmbRequest;
      output: DescribeLocationSmbResponse;
    };
    sdk: {
      input: DescribeLocationSmbCommandInput;
      output: DescribeLocationSmbCommandOutput;
    };
  };
}
