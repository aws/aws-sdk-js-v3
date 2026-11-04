// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcesSummaryInput, GetResourcesSummaryOutput } from "../models/models_0";
import { GetResourcesSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get counts of Proton resources.
 *
 * For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.
 *
 * The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the `components`, `environments`, and `serviceTemplates` field descriptions.
 *
 * For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.
 *
 * For more information, see [Proton dashboard](https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html) in the *Proton User Guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
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
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class GetResourcesSummaryCommand extends command<GetResourcesSummaryCommandInput, GetResourcesSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetResourcesSummary",
  GetResourcesSummary$
) {
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
