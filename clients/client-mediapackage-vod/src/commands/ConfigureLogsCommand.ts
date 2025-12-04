// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MediaPackageVodClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MediaPackageVodClient";
import type { ConfigureLogsRequest, ConfigureLogsResponse } from "../models/models_0";
import { ConfigureLogs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfigureLogsCommand}.
 */
export interface ConfigureLogsCommandInput extends ConfigureLogsRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureLogsCommand}.
 */
export interface ConfigureLogsCommandOutput extends ConfigureLogsResponse, __MetadataBearer {}

/**
 * Changes the packaging group's properities to configure log subscription
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ConfigureLogsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ConfigureLogsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * // import type { MediaPackageVodClientConfig } from "@aws-sdk/client-mediapackage-vod";
 * const config = {}; // type is MediaPackageVodClientConfig
 * const client = new MediaPackageVodClient(config);
 * const input = { // ConfigureLogsRequest
 *   EgressAccessLogs: { // EgressAccessLogs
 *     LogGroupName: "STRING_VALUE",
 *   },
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new ConfigureLogsCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureLogsResponse
 * //   Arn: "STRING_VALUE",
 * //   Authorization: { // Authorization
 * //     CdnIdentifierSecret: "STRING_VALUE", // required
 * //     SecretsRoleArn: "STRING_VALUE", // required
 * //   },
 * //   CreatedAt: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   EgressAccessLogs: { // EgressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ConfigureLogsCommandInput - {@link ConfigureLogsCommandInput}
 * @returns {@link ConfigureLogsCommandOutput}
 * @see {@link ConfigureLogsCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 *
 * @public
 */
export class ConfigureLogsCommand extends $Command
  .classBuilder<
    ConfigureLogsCommandInput,
    ConfigureLogsCommandOutput,
    MediaPackageVodClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageVodClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaPackageVod", "ConfigureLogs", {})
  .n("MediaPackageVodClient", "ConfigureLogsCommand")
  .sc(ConfigureLogs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfigureLogsRequest;
      output: ConfigureLogsResponse;
    };
    sdk: {
      input: ConfigureLogsCommandInput;
      output: ConfigureLogsCommandOutput;
    };
  };
}
