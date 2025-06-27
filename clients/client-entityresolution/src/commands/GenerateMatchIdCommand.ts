// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import {
  GenerateMatchIdInput,
  GenerateMatchIdInputFilterSensitiveLog,
  GenerateMatchIdOutput,
} from "../models/models_0";
import { de_GenerateMatchIdCommand, se_GenerateMatchIdCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Generates or retrieves Match IDs for records using a rule-based matching workflow. When you call this operation, it processes your records against the workflow's matching rules to identify potential matches. For existing records, it retrieves their Match IDs and associated rules. For records without matches, it generates new Match IDs. The operation saves results to Amazon S3. </p> <p>The processing type (<code>processingType</code>) you choose affects both the accuracy and response time of the operation. Additional charges apply for each API call, whether made through the Entity Resolution console or directly via the API. The rule-based matching workflow must exist and be active before calling this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GenerateMatchIdCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GenerateMatchIdCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class GenerateMatchIdCommand extends $Command
  .classBuilder<
    GenerateMatchIdCommandInput,
    GenerateMatchIdCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "GenerateMatchId", {})
  .n("EntityResolutionClient", "GenerateMatchIdCommand")
  .f(GenerateMatchIdInputFilterSensitiveLog, void 0)
  .ser(se_GenerateMatchIdCommand)
  .de(de_GenerateMatchIdCommand)
  .build() {
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
