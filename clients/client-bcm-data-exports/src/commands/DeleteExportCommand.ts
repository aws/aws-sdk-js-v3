// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BCMDataExportsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDataExportsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteExportRequest, DeleteExportResponse } from "../models/models_0";
import { de_DeleteExportCommand, se_DeleteExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExportCommand}.
 */
export interface DeleteExportCommandInput extends DeleteExportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExportCommand}.
 */
export interface DeleteExportCommandOutput extends DeleteExportResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing data export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, DeleteExportCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, DeleteExportCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BCMDataExportsClient(config);
 * const input = { // DeleteExportRequest
 *   ExportArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteExportCommand(input);
 * const response = await client.send(command);
 * // { // DeleteExportResponse
 * //   ExportArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteExportCommandInput - {@link DeleteExportCommandInput}
 * @returns {@link DeleteExportCommandOutput}
 * @see {@link DeleteExportCommandInput} for command's `input` shape.
 * @see {@link DeleteExportCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link BCMDataExportsServiceException}
 * <p>Base exception class for all service exceptions from BCMDataExports service.</p>
 *
 * @public
 */
export class DeleteExportCommand extends $Command
  .classBuilder<
    DeleteExportCommandInput,
    DeleteExportCommandOutput,
    BCMDataExportsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDataExportsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingAndCostManagementDataExports", "DeleteExport", {})
  .n("BCMDataExportsClient", "DeleteExportCommand")
  .f(void 0, void 0)
  .ser(se_DeleteExportCommand)
  .de(de_DeleteExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExportRequest;
      output: DeleteExportResponse;
    };
    sdk: {
      input: DeleteExportCommandInput;
      output: DeleteExportCommandOutput;
    };
  };
}
