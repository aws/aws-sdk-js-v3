// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourcesSummaryInput, GetResourcesSummaryOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { GetResourcesSummary } from "../schemas/schemas_22_GetResourcesSummary";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourcesSummaryCommand}.
 */
export interface GetResourcesSummaryCommandInput extends GetResourcesSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetResourcesSummaryCommand}.
 */
export interface GetResourcesSummaryCommandOutput extends GetResourcesSummaryOutput, __MetadataBearer {}

/**
 * <p>Get counts of Proton resources.</p>
 *          <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A
 *    resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p>
 *          <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor
 *    version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components,
 *    environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and
 *     <code>serviceTemplates</code> field descriptions.</p>
 *          <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the
 *     <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetResourcesSummaryCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetResourcesSummaryCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = {};
 * const command = new GetResourcesSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcesSummaryOutput
 * //   counts: { // CountsSummary
 * //     components: { // ResourceCountsSummary
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     environments: {
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     environmentTemplates: {
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     serviceInstances: {
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     services: {
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     serviceTemplates: "<ResourceCountsSummary>",
 * //     pipelines: "<ResourceCountsSummary>",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourcesSummaryCommandInput - {@link GetResourcesSummaryCommandInput}
 * @returns {@link GetResourcesSummaryCommandOutput}
 * @see {@link GetResourcesSummaryCommandInput} for command's `input` shape.
 * @see {@link GetResourcesSummaryCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class GetResourcesSummaryCommand extends $Command
  .classBuilder<
    GetResourcesSummaryCommandInput,
    GetResourcesSummaryCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "GetResourcesSummary", {})
  .n("ProtonClient", "GetResourcesSummaryCommand")
  .sc(GetResourcesSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetResourcesSummaryOutput;
    };
    sdk: {
      input: GetResourcesSummaryCommandInput;
      output: GetResourcesSummaryCommandOutput;
    };
  };
}
