// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeServiceLifecycleRequest, DescribeServiceLifecycleResponse } from "../models/models_0";
import { DescribeServiceLifecycle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeServiceLifecycleCommand}.
 */
export interface DescribeServiceLifecycleCommandInput extends DescribeServiceLifecycleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceLifecycleCommand}.
 */
export interface DescribeServiceLifecycleCommandOutput extends DescribeServiceLifecycleResponse, __MetadataBearer {}

/**
 * <p>Returns lifecycle information for Amazon Web Services services, including end-of-life dates, version recommendations, and lifecycle events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeServiceLifecycleCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeServiceLifecycleCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeServiceLifecycleRequest
 *   filter: { // ServiceLifecycleFilter
 *     service: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeServiceLifecycleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceLifecycleResponse
 * //   serviceLifecycles: [ // ServiceLifecycleList
 * //     { // ServiceLifecycle
 * //       service: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       recommendedVersion: "STRING_VALUE",
 * //       lifecycleEvents: [ // LifecycleEventList
 * //         { // LifecycleEvent
 * //           lifecycleEventType: "STRING_VALUE",
 * //           date: new Date("TIMESTAMP"),
 * //           regions: [ // regionList
 * //             "STRING_VALUE",
 * //           ],
 * //           impactRisks: [ // ImpactRiskList
 * //             "STRING_VALUE",
 * //           ],
 * //           description: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeServiceLifecycleCommandInput - {@link DescribeServiceLifecycleCommandInput}
 * @returns {@link DescribeServiceLifecycleCommandOutput}
 * @see {@link DescribeServiceLifecycleCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceLifecycleCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @example To retrieve service lifecycle information
 * ```javascript
 * // The following example returns service lifecycle information, including support milestones and lifecycle events for each service version.
 * const input = {
 *   maxResults: 5
 * };
 * const command = new DescribeServiceLifecycleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "AQICAHjDhCYeYPq-zXMzcdNOIWJQKCUN1s1J84fdK4ztGn9uoAExampleTokenExampleTokenExampleToken",
 *   serviceLifecycles: [
 *     {
 *       lifecycleEvents: [
 *         {
 *           date: "2026-05-26T00:00:00Z",
 *           description: "Model enters Legacy state — no longer actively maintained. Public extended access (pricing may increase) starts 2026-08-26",
 *           impactRisks: [
 *             "END_OF_SUPPORT"
 *           ],
 *           lifecycleEventType: "STANDARD_SUPPORT_END",
 *           regions: [
 *             "all"
 *           ]
 *         },
 *         {
 *           date: "2026-11-26T00:00:00Z",
 *           description: "Model is no longer available for inference",
 *           impactRisks: [
 *             "AVAILABILITY"
 *           ],
 *           lifecycleEventType: "EXTENDED_SUPPORT_END",
 *           regions: [
 *             "all"
 *           ]
 *         }
 *       ],
 *       service: "BEDROCK",
 *       title: "AI21 Labs Jamba 1.5 Large",
 *       version: "ai21.jamba-1-5-large-v1:0"
 *     },
 *     {
 *       lifecycleEvents: [
 *         {
 *           date: "2025-12-02T00:00:00Z",
 *           description: "Amazon Nova 2 Lite available on Amazon Bedrock",
 *           impactRisks:           [],
 *           lifecycleEventType: "SUPPORTED",
 *           regions: [
 *             "all"
 *           ]
 *         }
 *       ],
 *       service: "BEDROCK",
 *       title: "Amazon Nova 2 Lite",
 *       version: "amazon.nova-2-lite-v1:0"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeServiceLifecycleCommand extends command<DescribeServiceLifecycleCommandInput, DescribeServiceLifecycleCommandOutput>(
  _ep0,
  _mw0,
  "DescribeServiceLifecycle",
  DescribeServiceLifecycle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceLifecycleRequest;
      output: DescribeServiceLifecycleResponse;
    };
    sdk: {
      input: DescribeServiceLifecycleCommandInput;
      output: DescribeServiceLifecycleCommandOutput;
    };
  };
}
