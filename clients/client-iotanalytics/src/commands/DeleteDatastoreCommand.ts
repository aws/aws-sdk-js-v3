// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { DeleteDatastoreRequest } from "../models/models_0";
import { de_DeleteDatastoreCommand, se_DeleteDatastoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatastoreCommand}.
 */
export interface DeleteDatastoreCommandInput extends DeleteDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatastoreCommand}.
 */
export interface DeleteDatastoreCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DeleteDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DeleteDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // DeleteDatastoreRequest
 *   datastoreName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatastoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatastoreCommandInput - {@link DeleteDatastoreCommandInput}
 * @returns {@link DeleteDatastoreCommandOutput}
 * @see {@link DeleteDatastoreCommandInput} for command's `input` shape.
 * @see {@link DeleteDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 * @public
 */
export class DeleteDatastoreCommand extends $Command
  .classBuilder<
    DeleteDatastoreCommandInput,
    DeleteDatastoreCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTAnalytics", "DeleteDatastore", {})
  .n("IoTAnalyticsClient", "DeleteDatastoreCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDatastoreCommand)
  .de(de_DeleteDatastoreCommand)
  .build() {}
