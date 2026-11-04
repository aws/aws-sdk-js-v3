// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartInvestigationRequest, StartInvestigationResponse } from "../models/models_0";
import { StartInvestigation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartInvestigationCommand}.
 */
export interface StartInvestigationCommandInput extends StartInvestigationRequest {}
/**
 * @public
 *
 * The output of {@link StartInvestigationCommand}.
 */
export interface StartInvestigationCommandOutput extends StartInvestigationResponse, __MetadataBearer {}

/**
 * Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. `StartInvestigation` initiates an investigation on an entity in a behavior graph.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartInvestigationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartInvestigationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // StartInvestigationRequest
 *   GraphArn: "STRING_VALUE", // required
 *   EntityArn: "STRING_VALUE", // required
 *   ScopeStartTime: new Date("TIMESTAMP"), // required
 *   ScopeEndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new StartInvestigationCommand(input);
 * const response = await client.send(command);
 * // { // StartInvestigationResponse
 * //   InvestigationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartInvestigationCommandInput - {@link StartInvestigationCommandInput}
 * @returns {@link StartInvestigationCommandOutput}
 * @see {@link StartInvestigationCommandInput} for command's `input` shape.
 * @see {@link StartInvestigationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request issuer does not have permission to access this resource or perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request was valid but failed because of a problem with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request refers to a nonexistent resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request cannot be completed because too many other requests are occurring at the same time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters are invalid.
 *
 * @throws {@link DetectiveServiceException}
 *
 * Base exception class for all service exceptions from Detective service.
 *
 * @public
 */
export class StartInvestigationCommand extends command<StartInvestigationCommandInput, StartInvestigationCommandOutput>(
  _ep0,
  _mw0,
  "StartInvestigation",
  StartInvestigation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInvestigationRequest;
      output: StartInvestigationResponse;
    };
    sdk: {
      input: StartInvestigationCommandInput;
      output: StartInvestigationCommandOutput;
    };
  };
}
