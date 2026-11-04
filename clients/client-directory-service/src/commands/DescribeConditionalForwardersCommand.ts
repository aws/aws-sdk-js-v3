// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeConditionalForwardersRequest, DescribeConditionalForwardersResult } from "../models/models_0";
import { DescribeConditionalForwarders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeConditionalForwardersCommandOutput extends DescribeConditionalForwardersResult, __MetadataBearer {}

/**
 * Obtains information about the conditional forwarders for this account.
 *
 * If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
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
export class DescribeConditionalForwardersCommand extends command<DescribeConditionalForwardersCommandInput, DescribeConditionalForwardersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConditionalForwarders",
  DescribeConditionalForwarders$
) {
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
