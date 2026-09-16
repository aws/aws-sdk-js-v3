// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDependencyInsightsRequest, StartDependencyInsightsResponse } from "../models/models_0";
import { StartDependencyInsights$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDependencyInsightsCommand}.
 */
export interface StartDependencyInsightsCommandInput extends StartDependencyInsightsRequest {}
/**
 * @public
 *
 * The output of {@link StartDependencyInsightsCommand}.
 */
export interface StartDependencyInsightsCommandOutput extends StartDependencyInsightsResponse, __MetadataBearer {}

/**
 * <p>Starts generating dependency insights for a service. Generation runs asynchronously; the response returns the initial status, and you retrieve the results with GetDependencyInsights. To use this operation, you must have the <code>resiliencehub:StartDependencyInsights</code> permission on the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, StartDependencyInsightsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, StartDependencyInsightsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // StartDependencyInsightsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartDependencyInsightsCommand(input);
 * const response = await client.send(command);
 * // { // StartDependencyInsightsResponse
 * //   status: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param StartDependencyInsightsCommandInput - {@link StartDependencyInsightsCommandInput}
 * @returns {@link StartDependencyInsightsCommandOutput}
 * @see {@link StartDependencyInsightsCommandInput} for command's `input` shape.
 * @see {@link StartDependencyInsightsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests — rate limit exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class StartDependencyInsightsCommand extends command<StartDependencyInsightsCommandInput, StartDependencyInsightsCommandOutput>(
  _ep0,
  _mw0,
  "StartDependencyInsights",
  StartDependencyInsights$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDependencyInsightsRequest;
      output: StartDependencyInsightsResponse;
    };
    sdk: {
      input: StartDependencyInsightsCommandInput;
      output: StartDependencyInsightsCommandOutput;
    };
  };
}
