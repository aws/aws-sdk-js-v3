// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInvestigationRequest, GetInvestigationResponse } from "../models/models_0";
import { GetInvestigation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInvestigationCommand}.
 */
export interface GetInvestigationCommandInput extends GetInvestigationRequest {}
/**
 * @public
 *
 * The output of {@link GetInvestigationCommand}.
 */
export interface GetInvestigationCommandOutput extends GetInvestigationResponse, __MetadataBearer {}

/**
 * Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. `GetInvestigation` returns the investigation results of an investigation for a behavior graph.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, GetInvestigationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, GetInvestigationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // GetInvestigationRequest
 *   GraphArn: "STRING_VALUE", // required
 *   InvestigationId: "STRING_VALUE", // required
 * };
 * const command = new GetInvestigationCommand(input);
 * const response = await client.send(command);
 * // { // GetInvestigationResponse
 * //   GraphArn: "STRING_VALUE",
 * //   InvestigationId: "STRING_VALUE",
 * //   EntityArn: "STRING_VALUE",
 * //   EntityType: "IAM_ROLE" || "IAM_USER",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   ScopeStartTime: new Date("TIMESTAMP"),
 * //   ScopeEndTime: new Date("TIMESTAMP"),
 * //   Status: "RUNNING" || "FAILED" || "SUCCESSFUL",
 * //   Severity: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //   State: "ACTIVE" || "ARCHIVED",
 * // };
 *
 * ```
 *
 * @param GetInvestigationCommandInput - {@link GetInvestigationCommandInput}
 * @returns {@link GetInvestigationCommandOutput}
 * @see {@link GetInvestigationCommandInput} for command's `input` shape.
 * @see {@link GetInvestigationCommandOutput} for command's `response` shape.
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
export class GetInvestigationCommand extends command<GetInvestigationCommandInput, GetInvestigationCommandOutput>(
  _ep0,
  _mw0,
  "GetInvestigation",
  GetInvestigation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInvestigationRequest;
      output: GetInvestigationResponse;
    };
    sdk: {
      input: GetInvestigationCommandInput;
      output: GetInvestigationCommandOutput;
    };
  };
}
