// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput } from "../models/models_0";
import { AcknowledgeThirdPartyJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcknowledgeThirdPartyJobCommand}.
 */
export interface AcknowledgeThirdPartyJobCommandInput extends AcknowledgeThirdPartyJobInput {}
/**
 * @public
 *
 * The output of {@link AcknowledgeThirdPartyJobCommand}.
 */
export interface AcknowledgeThirdPartyJobCommandOutput extends AcknowledgeThirdPartyJobOutput, __MetadataBearer {}

/**
 * Confirms a job worker has received the specified job. Used for partner actions only.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeThirdPartyJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeThirdPartyJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // AcknowledgeThirdPartyJobInput
 *   jobId: "STRING_VALUE", // required
 *   nonce: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new AcknowledgeThirdPartyJobCommand(input);
 * const response = await client.send(command);
 * // { // AcknowledgeThirdPartyJobOutput
 * //   status: "Created" || "Queued" || "Dispatched" || "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * // };
 *
 * ```
 *
 * @param AcknowledgeThirdPartyJobCommandInput - {@link AcknowledgeThirdPartyJobCommandInput}
 * @returns {@link AcknowledgeThirdPartyJobCommandOutput}
 * @see {@link AcknowledgeThirdPartyJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeThirdPartyJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *
 * The client token was specified in an invalid format
 *
 * @throws {@link InvalidNonceException} (client fault)
 *
 * The nonce was specified in an invalid format.
 *
 * @throws {@link JobNotFoundException} (client fault)
 *
 * The job was specified in an invalid format or cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The validation was specified in an invalid format.
 *
 * @throws {@link CodePipelineServiceException}
 *
 * Base exception class for all service exceptions from CodePipeline service.
 *
 * @public
 */
export class AcknowledgeThirdPartyJobCommand extends command<AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput>(
  _ep0,
  _mw0,
  "AcknowledgeThirdPartyJob",
  AcknowledgeThirdPartyJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcknowledgeThirdPartyJobInput;
      output: AcknowledgeThirdPartyJobOutput;
    };
    sdk: {
      input: AcknowledgeThirdPartyJobCommandInput;
      output: AcknowledgeThirdPartyJobCommandOutput;
    };
  };
}
