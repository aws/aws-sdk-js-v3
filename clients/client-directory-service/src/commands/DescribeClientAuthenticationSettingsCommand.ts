// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeClientAuthenticationSettingsRequest,
  DescribeClientAuthenticationSettingsResult,
} from "../models/models_0";
import { DescribeClientAuthenticationSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientAuthenticationSettingsCommand}.
 */
export interface DescribeClientAuthenticationSettingsCommandInput extends DescribeClientAuthenticationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientAuthenticationSettingsCommand}.
 */
export interface DescribeClientAuthenticationSettingsCommandOutput extends DescribeClientAuthenticationSettingsResult, __MetadataBearer {}

/**
 * <p>Retrieves information about the type of client authentication for the specified directory,
 *       if the type is specified. If no type is specified, information about all client authentication
 *       types that are supported for the specified directory is retrieved. Currently, only
 *         <code>SmartCard</code> is supported. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeClientAuthenticationSettingsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeClientAuthenticationSettingsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeClientAuthenticationSettingsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Type: "SmartCard" || "SmartCardOrPassword",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeClientAuthenticationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientAuthenticationSettingsResult
 * //   ClientAuthenticationSettingsInfo: [ // ClientAuthenticationSettingsInfo
 * //     { // ClientAuthenticationSettingInfo
 * //       Type: "SmartCard" || "SmartCardOrPassword",
 * //       Status: "Enabled" || "Disabled",
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientAuthenticationSettingsCommandInput - {@link DescribeClientAuthenticationSettingsCommandInput}
 * @returns {@link DescribeClientAuthenticationSettingsCommandOutput}
 * @see {@link DescribeClientAuthenticationSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientAuthenticationSettingsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
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
 * @public
 */
export class DescribeClientAuthenticationSettingsCommand extends $Command
  .classBuilder<
    DescribeClientAuthenticationSettingsCommandInput,
    DescribeClientAuthenticationSettingsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeClientAuthenticationSettings", {})
  .n("DirectoryServiceClient", "DescribeClientAuthenticationSettingsCommand")
  .sc(DescribeClientAuthenticationSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClientAuthenticationSettingsRequest;
      output: DescribeClientAuthenticationSettingsResult;
    };
    sdk: {
      input: DescribeClientAuthenticationSettingsCommandInput;
      output: DescribeClientAuthenticationSettingsCommandOutput;
    };
  };
}
