// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { StartDataSourceSyncJobRequest, StartDataSourceSyncJobResponse } from "../models/models_1";
import { de_StartDataSourceSyncJobCommand, se_StartDataSourceSyncJobCommand } from "../protocols/Aws_json1_1";

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
 * <p>Starts a synchronization job for a data source connector. If a synchronization job is
 *       already in progress, Amazon Kendra returns a <code>ResourceInUseException</code>
 *       exception.</p>
 *          <p>Re-syncing your data source with your index after modifying, adding, or deleting
 *       documents from your data source respository could take up to an hour or more, depending on
 *       the number of documents to sync.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, StartDataSourceSyncJobCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, StartDataSourceSyncJobCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // StartDataSourceSyncJobRequest
 *   Id: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 * };
 * const command = new StartDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDataSourceSyncJobResponse
 * //   ExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDataSourceSyncJobCommandInput - {@link StartDataSourceSyncJobCommandInput}
 * @returns {@link StartDataSourceSyncJobCommandOutput}
 * @see {@link StartDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource you want to use is currently in use. Please check you have provided the
 *             correct resource and try again.</p>
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
export class StartDataSourceSyncJobCommand extends $Command
  .classBuilder<
    StartDataSourceSyncJobCommandInput,
    StartDataSourceSyncJobCommandOutput,
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
  .s("AWSKendraFrontendService", "StartDataSourceSyncJob", {})
  .n("KendraClient", "StartDataSourceSyncJobCommand")
  .f(void 0, void 0)
  .ser(se_StartDataSourceSyncJobCommand)
  .de(de_StartDataSourceSyncJobCommand)
  .build() {}
