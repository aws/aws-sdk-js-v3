// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLocationRequest, DeleteLocationResponse } from "../models/models_0";
import { de_DeleteLocationCommand, se_DeleteLocationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocationCommand}.
 */
export interface DeleteLocationCommandInput extends DeleteLocationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocationCommand}.
 */
export interface DeleteLocationCommandOutput extends DeleteLocationResponse, __MetadataBearer {}

/**
 * <p>Deletes a transfer location resource from DataSync. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteLocationCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteLocationCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DeleteLocationRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLocationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLocationCommandInput - {@link DeleteLocationCommandInput}
 * @returns {@link DeleteLocationCommandOutput}
 * @see {@link DeleteLocationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocationCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 * @public
 */
export class DeleteLocationCommand extends $Command
  .classBuilder<
    DeleteLocationCommandInput,
    DeleteLocationCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "DeleteLocation", {})
  .n("DataSyncClient", "DeleteLocationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLocationCommand)
  .de(de_DeleteLocationCommand)
  .build() {}
