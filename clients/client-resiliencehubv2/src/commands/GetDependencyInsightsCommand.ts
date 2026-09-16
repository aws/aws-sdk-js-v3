// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDependencyInsightsRequest, GetDependencyInsightsResponse } from "../models/models_0";
import { GetDependencyInsights$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDependencyInsightsCommand}.
 */
export interface GetDependencyInsightsCommandInput extends GetDependencyInsightsRequest {}
/**
 * @public
 *
 * The output of {@link GetDependencyInsightsCommand}.
 */
export interface GetDependencyInsightsCommandOutput extends GetDependencyInsightsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the dependency insights generated for a service. The response reports the current generation status; insights are populated once generation has completed. If generation failed, the response includes an error code, whose possible values are listed under the response's errorCode field, and a message describing the cause. To use this operation, you must have the <code>resiliencehub:GetDependencyInsights</code> permission on the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, GetDependencyInsightsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, GetDependencyInsightsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // GetDependencyInsightsRequest
 *   serviceArn: "STRING_VALUE", // required
 * };
 * const command = new GetDependencyInsightsCommand(input);
 * const response = await client.send(command);
 * // { // GetDependencyInsightsResponse
 * //   overview: "STRING_VALUE",
 * //   insights: [ // DependencyInsightsList
 * //     { // DependencyInsight
 * //       category: "CROSS_REGION" || "NEW_DEPENDENCY" || "THIRD_PARTY" || "UNEVEN_USAGE" || "AWS_SERVICE", // required
 * //       description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   status: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   errorCode: "INSUFFICIENT_DATA" || "LLM_GENERATION_FAILED" || "INTERNAL_ERROR",
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDependencyInsightsCommandInput - {@link GetDependencyInsightsCommandInput}
 * @returns {@link GetDependencyInsightsCommandOutput}
 * @see {@link GetDependencyInsightsCommandInput} for command's `input` shape.
 * @see {@link GetDependencyInsightsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
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
export class GetDependencyInsightsCommand extends command<GetDependencyInsightsCommandInput, GetDependencyInsightsCommandOutput>(
  _ep0,
  _mw0,
  "GetDependencyInsights",
  GetDependencyInsights$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDependencyInsightsRequest;
      output: GetDependencyInsightsResponse;
    };
    sdk: {
      input: GetDependencyInsightsCommandInput;
      output: GetDependencyInsightsCommandOutput;
    };
  };
}
