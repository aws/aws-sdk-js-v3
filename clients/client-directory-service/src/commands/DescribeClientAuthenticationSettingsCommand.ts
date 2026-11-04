// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeClientAuthenticationSettingsRequest,
  DescribeClientAuthenticationSettingsResult,
} from "../models/models_0";
import { DescribeClientAuthenticationSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only `SmartCard` is supported.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
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
 * @public
 */
export class DescribeClientAuthenticationSettingsCommand extends command<DescribeClientAuthenticationSettingsCommandInput, DescribeClientAuthenticationSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeClientAuthenticationSettings",
  DescribeClientAuthenticationSettings$
) {
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
