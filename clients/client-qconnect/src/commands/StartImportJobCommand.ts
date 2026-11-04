// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartImportJobRequest, StartImportJobResponse } from "../models/models_1";
import { StartImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Start an asynchronous job to import Amazon Q in Connect resources from an uploaded source file. Before calling this API, use [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html) to upload an asset that contains the resource data.
 *
 * - For importing Amazon Q in Connect quick responses, you need to upload a csv file including the quick responses. For information about how to format the csv file for importing quick responses, see [Import quick responses](https://docs.aws.amazon.com/console/connect/quick-responses/add-data).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, StartImportJobCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, StartImportJobCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class StartImportJobCommand extends command<StartImportJobCommandInput, StartImportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartImportJob",
  StartImportJob$
) {
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
