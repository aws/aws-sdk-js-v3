// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableDirectoryDataAccessRequest, EnableDirectoryDataAccessResult } from "../models/models_0";
import { de_EnableDirectoryDataAccessCommand, se_EnableDirectoryDataAccessCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableDirectoryDataAccessCommand}.
 */
export interface EnableDirectoryDataAccessCommandInput extends EnableDirectoryDataAccessRequest {}
/**
 * @public
 *
 * The output of {@link EnableDirectoryDataAccessCommand}.
 */
export interface EnableDirectoryDataAccessCommandOutput extends EnableDirectoryDataAccessResult, __MetadataBearer {}

/**
 * <p>Enables access to directory data via the Directory Service Data API for the specified directory. For
 *       more information, see <a href="https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/Welcome.html">Directory Service Data API Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableDirectoryDataAccessCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableDirectoryDataAccessCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // EnableDirectoryDataAccessRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new EnableDirectoryDataAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableDirectoryDataAccessCommandInput - {@link EnableDirectoryDataAccessCommandInput}
 * @returns {@link EnableDirectoryDataAccessCommandOutput}
 * @see {@link EnableDirectoryDataAccessCommandInput} for command's `input` shape.
 * @see {@link EnableDirectoryDataAccessCommandOutput} for command's `response` shape.
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
 * @throws {@link DirectoryInDesiredStateException} (client fault)
 *  <p> The directory is already updated to desired update type settings. </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
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
export class EnableDirectoryDataAccessCommand extends $Command
  .classBuilder<
    EnableDirectoryDataAccessCommandInput,
    EnableDirectoryDataAccessCommandOutput,
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
  .s("DirectoryService_20150416", "EnableDirectoryDataAccess", {})
  .n("DirectoryServiceClient", "EnableDirectoryDataAccessCommand")
  .f(void 0, void 0)
  .ser(se_EnableDirectoryDataAccessCommand)
  .de(de_EnableDirectoryDataAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableDirectoryDataAccessRequest;
      output: {};
    };
    sdk: {
      input: EnableDirectoryDataAccessCommandInput;
      output: EnableDirectoryDataAccessCommandOutput;
    };
  };
}
