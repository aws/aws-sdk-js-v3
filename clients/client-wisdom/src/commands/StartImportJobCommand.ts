// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartImportJobRequest, StartImportJobResponse } from "../models/models_0";
import { StartImportJob } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

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
 * <p>Start an asynchronous job to import Wisdom resources from an uploaded source file. Before calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to
 *       upload an asset that contains the resource data.</p>
 *          <ul>
 *             <li>
 *                <p>For importing Wisdom quick responses, you need to upload a csv file including the quick responses. For information about how to format the csv file for importing quick responses, see <a href="https://docs.aws.amazon.com/console/connect/quick-responses/add-data">Import quick responses</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, StartImportJobCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, StartImportJobCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
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
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
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
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class StartImportJobCommand extends $Command
  .classBuilder<
    StartImportJobCommandInput,
    StartImportJobCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "StartImportJob", {})
  .n("WisdomClient", "StartImportJobCommand")
  .sc(StartImportJob)
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
