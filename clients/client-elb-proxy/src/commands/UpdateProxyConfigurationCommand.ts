// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProxyConfigurationRequest, UpdateProxyConfigurationResponse } from "../models/models_0";
import { UpdateProxyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProxyConfigurationCommand}.
 */
export interface UpdateProxyConfigurationCommandInput extends UpdateProxyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProxyConfigurationCommand}.
 */
export interface UpdateProxyConfigurationCommandOutput extends UpdateProxyConfigurationResponse, __MetadataBearer {}

/**
 * Updates the configuration for the specified proxy. You can update the
 * configuration file, the configuration archive, or both.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, UpdateProxyConfigurationCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, UpdateProxyConfigurationCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // UpdateProxyConfigurationRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   configurationFile: { // ConfigurationFile
 *     configurationBytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *   },
 *   configurationArchive: { // ConfigurationArchive
 *     configurationBytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *   },
 *   resetConfigurationArchive: true || false,
 *   customerKmsKeyArn: "STRING_VALUE",
 *   resetCustomerKmsKeyArn: true || false,
 * };
 * const command = new UpdateProxyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProxyConfigurationResponse
 * //   configurationMetadata: { // ConfigurationMetadata
 * //     configFileHash: "STRING_VALUE",
 * //     configArchiveHash: "STRING_VALUE",
 * //     configFileLastUpdatedAt: new Date("TIMESTAMP"),
 * //     configArchiveLastUpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * //   updateId: "STRING_VALUE",
 * //   customerKmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateProxyConfigurationCommandInput - {@link UpdateProxyConfigurationCommandInput}
 * @returns {@link UpdateProxyConfigurationCommandOutput}
 * @see {@link UpdateProxyConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateProxyConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The user does not have sufficient access to perform this action.
 *
 * @throws {@link PriorRequestNotCompletedException} (client fault)
 *  The request could not be completed because a prior request has not yet completed.
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
 * @example To update the configuration for a proxy
 * ```javascript
 * // The following example replaces the configuration file for the specified proxy. You can use the update ID in the output to track the progress of the update.
 * const input = {
 *   configurationFile: {
 *     configurationBytes: "c3RhdGljX3Jlc291cmNlczoKICBsaXN0ZW5lcnM6IFtdCg=="
 *   },
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new UpdateProxyConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configurationMetadata: {
 *     configFileHash: "29a5eb3bdf714ff29cc52e1a3723894b9f746416e1e541fddfad0a3963aed98c",
 *     configFileLastUpdatedAt: 1795197600
 *   },
 *   updateId: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateProxyConfigurationCommand extends command<UpdateProxyConfigurationCommandInput, UpdateProxyConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProxyConfiguration",
  UpdateProxyConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProxyConfigurationRequest;
      output: UpdateProxyConfigurationResponse;
    };
    sdk: {
      input: UpdateProxyConfigurationCommandInput;
      output: UpdateProxyConfigurationCommandOutput;
    };
  };
}
