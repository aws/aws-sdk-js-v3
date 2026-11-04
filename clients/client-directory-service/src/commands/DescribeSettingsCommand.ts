// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSettingsRequest, DescribeSettingsResult } from "../models/models_0";
import { DescribeSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSettingsCommand}.
 */
export interface DescribeSettingsCommandInput extends DescribeSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSettingsCommand}.
 */
export interface DescribeSettingsCommandOutput extends DescribeSettingsResult, __MetadataBearer {}

/**
 * Retrieves information about the configurable settings for the specified directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSettingsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSettingsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeSettingsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Status: "Requested" || "Updating" || "Updated" || "Failed" || "Default",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSettingsResult
 * //   DirectoryId: "STRING_VALUE",
 * //   SettingEntries: [ // SettingEntries
 * //     { // SettingEntry
 * //       Type: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       AppliedValue: "STRING_VALUE",
 * //       RequestedValue: "STRING_VALUE",
 * //       RequestStatus: "Requested" || "Updating" || "Updated" || "Failed" || "Default",
 * //       RequestDetailedStatus: { // DirectoryConfigurationSettingRequestDetailedStatus
 * //         "<keys>": "Requested" || "Updating" || "Updated" || "Failed" || "Default",
 * //       },
 * //       RequestStatusMessage: "STRING_VALUE",
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       LastRequestedDateTime: new Date("TIMESTAMP"),
 * //       DataType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSettingsCommandInput - {@link DescribeSettingsCommandInput}
 * @returns {@link DescribeSettingsCommandOutput}
 * @see {@link DescribeSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeSettingsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value is not valid.
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
export class DescribeSettingsCommand extends command<DescribeSettingsCommandInput, DescribeSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSettings",
  DescribeSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSettingsRequest;
      output: DescribeSettingsResult;
    };
    sdk: {
      input: DescribeSettingsCommandInput;
      output: DescribeSettingsCommandOutput;
    };
  };
}
