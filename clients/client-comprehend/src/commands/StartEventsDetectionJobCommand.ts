// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartEventsDetectionJobRequest, StartEventsDetectionJobResponse } from "../models/models_0";
import { StartEventsDetectionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartEventsDetectionJobCommand}.
 */
export interface StartEventsDetectionJobCommandInput extends StartEventsDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartEventsDetectionJobCommand}.
 */
export interface StartEventsDetectionJobCommandOutput extends StartEventsDetectionJobResponse, __MetadataBearer {}

/**
 * Starts an asynchronous event detection job for a collection of documents.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartEventsDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartEventsDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StartEventsDetectionJobRequest
 *   InputDataConfig: { // InputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 *     DocumentReaderConfig: { // DocumentReaderConfig
 *       DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 *       DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 *       FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 *         "TABLES" || "FORMS",
 *       ],
 *     },
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE",
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   TargetEventTypes: [ // TargetEventTypes // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartEventsDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartEventsDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobArn: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StartEventsDetectionJobCommandInput - {@link StartEventsDetectionJobCommandInput}
 * @returns {@link StartEventsDetectionJobCommandOutput}
 * @see {@link StartEventsDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartEventsDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *
 * The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource name is already in use. Use a different name and try your request again.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class StartEventsDetectionJobCommand extends command<StartEventsDetectionJobCommandInput, StartEventsDetectionJobCommandOutput>(
  _ep0,
  _mw0,
  "StartEventsDetectionJob",
  StartEventsDetectionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartEventsDetectionJobRequest;
      output: StartEventsDetectionJobResponse;
    };
    sdk: {
      input: StartEventsDetectionJobCommandInput;
      output: StartEventsDetectionJobCommandOutput;
    };
  };
}
