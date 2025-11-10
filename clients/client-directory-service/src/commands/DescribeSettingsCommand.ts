// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSettingsRequest, DescribeSettingsResult } from "../models/models_0";
import { DescribeSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves information about the configurable settings for the specified directory.</p>
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
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
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
export class DescribeSettingsCommand extends $Command
  .classBuilder<
    DescribeSettingsCommandInput,
    DescribeSettingsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeSettings", {})
  .n("DirectoryServiceClient", "DescribeSettingsCommand")
  .sc(DescribeSettings)
  .build() {
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
