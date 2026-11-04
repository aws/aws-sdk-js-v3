// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartResourceScanRequest } from "../models/models_0";
import { StartResourceScan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartResourceScanCommand}.
 */
export interface StartResourceScanCommandInput extends StartResourceScanRequest {}
/**
 * @public
 *
 * The output of {@link StartResourceScanCommand}.
 */
export interface StartResourceScanCommandOutput extends __MetadataBearer {}

/**
 * Immediately starts a scan of the policies applied to the specified resource.
 *
 * > **Note:** This action is supported only for external access analyzers.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartResourceScanCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartResourceScanCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // StartResourceScanRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   resourceArn: "STRING_VALUE", // required
 *   resourceOwnerAccount: "STRING_VALUE",
 * };
 * const command = new StartResourceScanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartResourceScanCommandInput - {@link StartResourceScanCommandInput}
 * @returns {@link StartResourceScanCommandOutput}
 * @see {@link StartResourceScanCommandInput} for command's `input` shape.
 * @see {@link StartResourceScanCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Throttling limit exceeded error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation exception error.
 *
 * @throws {@link AccessAnalyzerServiceException}
 *
 * Base exception class for all service exceptions from AccessAnalyzer service.
 *
 * @public
 */
export class StartResourceScanCommand extends command<StartResourceScanCommandInput, StartResourceScanCommandOutput>(
  _ep0,
  _mw0,
  "StartResourceScan",
  StartResourceScan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartResourceScanRequest;
      output: {};
    };
    sdk: {
      input: StartResourceScanCommandInput;
      output: StartResourceScanCommandOutput;
    };
  };
}
