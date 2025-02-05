// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartImportJobRequest,
  StartImportJobResponse,
  StartImportJobResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_StartImportJobCommand, se_StartImportJobCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportJobCommand}.
 */
export interface StartImportJobCommandInput extends StartImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartImportJobCommand}.
 */
export interface StartImportJobCommandOutput extends StartImportJobResponse, __MetadataBearer {}

/**
 * <p>Start an asynchronous job to import Amazon Q in Connect resources from an uploaded source file.
 *       Before calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to
 *       upload an asset that contains the resource data.</p>
 *          <ul>
 *             <li>
 *                <p>For importing Amazon Q in Connect quick responses, you need to upload a csv file including the
 *           quick responses. For information about how to format the csv file for importing quick
 *           responses, see <a href="https://docs.aws.amazon.com/console/connect/quick-responses/add-data">Import quick responses</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, StartImportJobCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, StartImportJobCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QConnectClient(config);
 * const input = { // StartImportJobRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   importJobType: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   metadata: { // ContentMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   externalSourceConfiguration: { // ExternalSourceConfiguration
 *     source: "STRING_VALUE", // required
 *     configuration: { // Configuration Union: only one key present
 *       connectConfiguration: { // ConnectConfiguration
 *         instanceId: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new StartImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartImportJobResponse
 * //   importJob: { // ImportJobData
 * //     importJobId: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     uploadId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     importJobType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     url: "STRING_VALUE", // required
 * //     failedRecordReport: "STRING_VALUE",
 * //     urlExpiry: new Date("TIMESTAMP"), // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     metadata: { // ContentMetadata
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     externalSourceConfiguration: { // ExternalSourceConfiguration
 * //       source: "STRING_VALUE", // required
 * //       configuration: { // Configuration Union: only one key present
 * //         connectConfiguration: { // ConnectConfiguration
 * //           instanceId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartImportJobCommandInput - {@link StartImportJobCommandInput}
 * @returns {@link StartImportJobCommandOutput}
 * @see {@link StartImportJobCommandInput} for command's `input` shape.
 * @see {@link StartImportJobCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class StartImportJobCommand extends $Command
  .classBuilder<
    StartImportJobCommandInput,
    StartImportJobCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "StartImportJob", {})
  .n("QConnectClient", "StartImportJobCommand")
  .f(void 0, StartImportJobResponseFilterSensitiveLog)
  .ser(se_StartImportJobCommand)
  .de(de_StartImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportJobRequest;
      output: StartImportJobResponse;
    };
    sdk: {
      input: StartImportJobCommandInput;
      output: StartImportJobCommandOutput;
    };
  };
}
