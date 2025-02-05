// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDirectoryDataAccessRequest, DescribeDirectoryDataAccessResult } from "../models/models_0";
import { de_DescribeDirectoryDataAccessCommand, se_DescribeDirectoryDataAccessCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectoryDataAccessCommand}.
 */
export interface DescribeDirectoryDataAccessCommandInput extends DescribeDirectoryDataAccessRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectoryDataAccessCommand}.
 */
export interface DescribeDirectoryDataAccessCommandOutput extends DescribeDirectoryDataAccessResult, __MetadataBearer {}

/**
 * <p>Obtains status of directory data access enablement through the Directory Service Data API for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeDirectoryDataAccessCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeDirectoryDataAccessCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeDirectoryDataAccessRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDirectoryDataAccessCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectoryDataAccessResult
 * //   DataAccessStatus: "Disabled" || "Disabling" || "Enabled" || "Enabling" || "Failed",
 * // };
 *
 * ```
 *
 * @param DescribeDirectoryDataAccessCommandInput - {@link DescribeDirectoryDataAccessCommandInput}
 * @returns {@link DescribeDirectoryDataAccessCommandOutput}
 * @see {@link DescribeDirectoryDataAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectoryDataAccessCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 * @public
 */
export class DescribeDirectoryDataAccessCommand extends $Command
  .classBuilder<
    DescribeDirectoryDataAccessCommandInput,
    DescribeDirectoryDataAccessCommandOutput,
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
  .s("DirectoryService_20150416", "DescribeDirectoryDataAccess", {})
  .n("DirectoryServiceClient", "DescribeDirectoryDataAccessCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDirectoryDataAccessCommand)
  .de(de_DescribeDirectoryDataAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDirectoryDataAccessRequest;
      output: DescribeDirectoryDataAccessResult;
    };
    sdk: {
      input: DescribeDirectoryDataAccessCommandInput;
      output: DescribeDirectoryDataAccessCommandOutput;
    };
  };
}
