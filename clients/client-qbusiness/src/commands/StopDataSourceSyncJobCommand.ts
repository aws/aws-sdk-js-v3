// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StopDataSourceSyncJobRequest, StopDataSourceSyncJobResponse } from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { StopDataSourceSyncJob$ } from "../schemas/schemas_0";

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
export interface StopDataSourceSyncJobCommandOutput extends StopDataSourceSyncJobResponse, __MetadataBearer {}

/**
 * <p>Stops an Amazon Q Business data source connector synchronization job already in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, StopDataSourceSyncJobCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, StopDataSourceSyncJobCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // StopDataSourceSyncJobRequest
 *   dataSourceId: "STRING_VALUE", // required
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
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
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class StopDataSourceSyncJobCommand extends $Command
  .classBuilder<
    StopDataSourceSyncJobCommandInput,
    StopDataSourceSyncJobCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "StopDataSourceSyncJob", {})
  .n("QBusinessClient", "StopDataSourceSyncJobCommand")
  .sc(StopDataSourceSyncJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDataSourceSyncJobRequest;
      output: {};
    };
    sdk: {
      input: StopDataSourceSyncJobCommandInput;
      output: StopDataSourceSyncJobCommandOutput;
    };
  };
}
