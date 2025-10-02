// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConditionalForwardersRequest, DescribeConditionalForwardersResult } from "../models/models_0";
import {
  de_DescribeConditionalForwardersCommand,
  se_DescribeConditionalForwardersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConditionalForwardersCommand}.
 */
export interface DescribeConditionalForwardersCommandInput extends DescribeConditionalForwardersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConditionalForwardersCommand}.
 */
export interface DescribeConditionalForwardersCommandOutput
  extends DescribeConditionalForwardersResult,
    __MetadataBearer {}

/**
 * <p>Obtains information about the conditional forwarders for this account.</p>
 *          <p>If no input parameters are provided for RemoteDomainNames, this request describes all
 *       conditional forwarders for the specified directory ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeConditionalForwardersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeConditionalForwardersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeConditionalForwardersRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RemoteDomainNames: [ // RemoteDomainNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConditionalForwardersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConditionalForwardersResult
 * //   ConditionalForwarders: [ // ConditionalForwarders
 * //     { // ConditionalForwarder
 * //       RemoteDomainName: "STRING_VALUE",
 * //       DnsIpAddrs: [ // DnsIpAddrs
 * //         "STRING_VALUE",
 * //       ],
 * //       DnsIpv6Addrs: [ // DnsIpv6Addrs
 * //         "STRING_VALUE",
 * //       ],
 * //       ReplicationScope: "Domain",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConditionalForwardersCommandInput - {@link DescribeConditionalForwardersCommandInput}
 * @returns {@link DescribeConditionalForwardersCommandOutput}
 * @see {@link DescribeConditionalForwardersCommandInput} for command's `input` shape.
 * @see {@link DescribeConditionalForwardersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To describe conditional forwarders
 * ```javascript
 * // The following example obtains information about the conditional forwarders for a specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   RemoteDomainNames: [
 *     "sales.example.com"
 *   ]
 * };
 * const command = new DescribeConditionalForwardersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConditionalForwarders:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeConditionalForwardersCommand extends $Command
  .classBuilder<
    DescribeConditionalForwardersCommandInput,
    DescribeConditionalForwardersCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "DescribeConditionalForwarders", {})
  .n("DirectoryServiceClient", "DescribeConditionalForwardersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConditionalForwardersCommand)
  .de(de_DescribeConditionalForwardersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConditionalForwardersRequest;
      output: DescribeConditionalForwardersResult;
    };
    sdk: {
      input: DescribeConditionalForwardersCommandInput;
      output: DescribeConditionalForwardersCommandOutput;
    };
  };
}
