// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartDataSourceSyncJobRequest } from "../models/models_0";
import { StartDataSourceSyncJobResponse } from "../models/models_1";
import { de_StartDataSourceSyncJobCommand, se_StartDataSourceSyncJobCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDataSourceSyncJobCommand}.
 */
export interface StartDataSourceSyncJobCommandInput extends StartDataSourceSyncJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDataSourceSyncJobCommand}.
 */
export interface StartDataSourceSyncJobCommandOutput extends StartDataSourceSyncJobResponse, __MetadataBearer {}

/**
 * <p>Starts a data source connector synchronization job. If a synchronization job is
 *             already in progress, Amazon Q Business returns a <code>ConflictException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, StartDataSourceSyncJobCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, StartDataSourceSyncJobCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // StartDataSourceSyncJobRequest
 *   dataSourceId: "STRING_VALUE", // required
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 * };
 * const command = new StartDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDataSourceSyncJobResponse
 * //   executionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDataSourceSyncJobCommandInput - {@link StartDataSourceSyncJobCommandInput}
 * @returns {@link StartDataSourceSyncJobCommandOutput}
 * @see {@link StartDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class StartDataSourceSyncJobCommand extends $Command
  .classBuilder<
    StartDataSourceSyncJobCommandInput,
    StartDataSourceSyncJobCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "StartDataSourceSyncJob", {})
  .n("QBusinessClient", "StartDataSourceSyncJobCommand")
  .f(void 0, void 0)
  .ser(se_StartDataSourceSyncJobCommand)
  .de(de_StartDataSourceSyncJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataSourceSyncJobRequest;
      output: StartDataSourceSyncJobResponse;
    };
    sdk: {
      input: StartDataSourceSyncJobCommandInput;
      output: StartDataSourceSyncJobCommandOutput;
    };
  };
}
