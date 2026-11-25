// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProxyConfigurationContentsRequest, GetProxyConfigurationContentsResponse } from "../models/models_0";
import { GetProxyConfigurationContents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProxyConfigurationContentsCommand}.
 */
export interface GetProxyConfigurationContentsCommandInput extends GetProxyConfigurationContentsRequest {}
/**
 * @public
 *
 * The output of {@link GetProxyConfigurationContentsCommand}.
 */
export interface GetProxyConfigurationContentsCommandOutput extends GetProxyConfigurationContentsResponse, __MetadataBearer {}

/**
 * Retrieves the configuration file, the configuration archive, or both for the
 * specified proxy. This operation is separate from GetProxy so that you can
 * grant access to proxy metadata without granting access to the configuration
 * content.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, GetProxyConfigurationContentsCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, GetProxyConfigurationContentsCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // GetProxyConfigurationContentsRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   includeConfigFile: true || false,
 *   includeConfigArchive: true || false,
 * };
 * const command = new GetProxyConfigurationContentsCommand(input);
 * const response = await client.send(command);
 * // { // GetProxyConfigurationContentsResponse
 * //   configurationFileContents: new Uint8Array(),
 * //   configurationArchiveContents: new Uint8Array(),
 * //   configurationMetadata: { // ConfigurationMetadata
 * //     configFileHash: "STRING_VALUE",
 * //     configArchiveHash: "STRING_VALUE",
 * //     configFileLastUpdatedAt: new Date("TIMESTAMP"),
 * //     configArchiveLastUpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * //   customerKmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProxyConfigurationContentsCommandInput - {@link GetProxyConfigurationContentsCommandInput}
 * @returns {@link GetProxyConfigurationContentsCommandOutput}
 * @see {@link GetProxyConfigurationContentsCommandInput} for command's `input` shape.
 * @see {@link GetProxyConfigurationContentsCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The user does not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The request references a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ELBProxyServiceException}
 * <p>Base exception class for all service exceptions from ELBProxy service.</p>
 *
 *
 * @example To get the configuration for a proxy
 * ```javascript
 * // The following example gets the configuration file for the specified proxy. The configuration archive isn't included.
 * const input = {
 *   includeConfigArchive: false,
 *   includeConfigFile: true,
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new GetProxyConfigurationContentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configurationFileContents: "c3RhdGljX3Jlc291cmNlczoKICBsaXN0ZW5lcnM6IFtdCg==",
 *   configurationMetadata: {
 *     configFileHash: "29a5eb3bdf714ff29cc52e1a3723894b9f746416e1e541fddfad0a3963aed98c",
 *     configFileLastUpdatedAt: 1795197600
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetProxyConfigurationContentsCommand extends command<GetProxyConfigurationContentsCommandInput, GetProxyConfigurationContentsCommandOutput>(
  _ep0,
  _mw0,
  "GetProxyConfigurationContents",
  GetProxyConfigurationContents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProxyConfigurationContentsRequest;
      output: GetProxyConfigurationContentsResponse;
    };
    sdk: {
      input: GetProxyConfigurationContentsCommandInput;
      output: GetProxyConfigurationContentsCommandOutput;
    };
  };
}
