// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateMatchIdInput, GenerateMatchIdOutput } from "../models/models_0";
import { GenerateMatchId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateMatchIdCommand}.
 */
export interface GenerateMatchIdCommandInput extends GenerateMatchIdInput {}
/**
 * @public
 *
 * The output of {@link GenerateMatchIdCommand}.
 */
export interface GenerateMatchIdCommandOutput extends GenerateMatchIdOutput, __MetadataBearer {}

/**
 * Generates or retrieves Match IDs for records using a rule-based matching workflow. When you call this operation, it processes your records against the workflow's matching rules to identify potential matches. For existing records, it retrieves their Match IDs and associated rules. For records without matches, it generates new Match IDs. The operation saves results to Amazon S3.
 *
 * The processing type (`processingType`) you choose affects both the accuracy and response time of the operation. Additional charges apply for each API call, whether made through the Entity Resolution console or directly via the API. The rule-based matching workflow must exist and be active before calling this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GenerateMatchIdCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GenerateMatchIdCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GenerateMatchIdInput
 *   workflowName: "STRING_VALUE", // required
 *   records: [ // RecordList // required
 *     { // Record
 *       inputSourceARN: "STRING_VALUE", // required
 *       uniqueId: "STRING_VALUE", // required
 *       recordAttributeMap: { // RecordAttributeMapString255 // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   processingType: "CONSISTENT" || "EVENTUAL" || "EVENTUAL_NO_LOOKUP",
 * };
 * const command = new GenerateMatchIdCommand(input);
 * const response = await client.send(command);
 * // { // GenerateMatchIdOutput
 * //   matchGroups: [ // MatchGroupsList // required
 * //     { // MatchGroup
 * //       records: [ // MatchedRecordsList // required
 * //         { // MatchedRecord
 * //           inputSourceARN: "STRING_VALUE", // required
 * //           recordId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       matchId: "STRING_VALUE", // required
 * //       matchRule: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   failedRecords: [ // FailedRecordsList // required
 * //     { // FailedRecord
 * //       inputSourceARN: "STRING_VALUE", // required
 * //       uniqueId: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GenerateMatchIdCommandInput - {@link GenerateMatchIdCommandInput}
 * @returns {@link GenerateMatchIdCommandOutput}
 * @see {@link GenerateMatchIdCommandInput} for command's `input` shape.
 * @see {@link GenerateMatchIdCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class GenerateMatchIdCommand extends command<GenerateMatchIdCommandInput, GenerateMatchIdCommandOutput>(
  _ep0,
  _mw0,
  "GenerateMatchId",
  GenerateMatchId$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateMatchIdInput;
      output: GenerateMatchIdOutput;
    };
    sdk: {
      input: GenerateMatchIdCommandInput;
      output: GenerateMatchIdCommandOutput;
    };
  };
}
