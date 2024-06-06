// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { StopDataSourceSyncJobRequest } from "../models/models_1";
import { de_StopDataSourceSyncJobCommand, se_StopDataSourceSyncJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDataSourceSyncJobCommand}.
 */
export interface StopDataSourceSyncJobCommandInput extends StopDataSourceSyncJobRequest {}
/**
 * @public
 *
 * The output of {@link StopDataSourceSyncJobCommand}.
 */
export interface StopDataSourceSyncJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a synchronization job that is currently running. You can't stop a scheduled
 *       synchronization job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, StopDataSourceSyncJobCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, StopDataSourceSyncJobCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // StopDataSourceSyncJobRequest
 *   Id: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 * };
 * const command = new StopDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopDataSourceSyncJobCommandInput - {@link StopDataSourceSyncJobCommandInput}
 * @returns {@link StopDataSourceSyncJobCommandOutput}
 * @see {@link StopDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StopDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class StopDataSourceSyncJobCommand extends $Command
  .classBuilder<
    StopDataSourceSyncJobCommandInput,
    StopDataSourceSyncJobCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "StopDataSourceSyncJob", {})
  .n("KendraClient", "StopDataSourceSyncJobCommand")
  .f(void 0, void 0)
  .ser(se_StopDataSourceSyncJobCommand)
  .de(de_StopDataSourceSyncJobCommand)
  .build() {}
