// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResolveCaseRequest, ResolveCaseResponse } from "../models/models_0";
import { ResolveCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResolveCaseCommand}.
 */
export interface ResolveCaseCommandInput extends ResolveCaseRequest {}
/**
 * @public
 *
 * The output of {@link ResolveCaseCommand}.
 */
export interface ResolveCaseCommandOutput extends ResolveCaseResponse, __MetadataBearer {}

/**
 * Resolves a support case. This operation takes a `caseId` and returns the initial and final state of the case.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, ResolveCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, ResolveCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // ResolveCaseRequest
 *   caseId: "STRING_VALUE",
 *   dryRun: true || false,
 * };
 * const command = new ResolveCaseCommand(input);
 * const response = await client.send(command);
 * // { // ResolveCaseResponse
 * //   initialCaseStatus: "STRING_VALUE",
 * //   finalCaseStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResolveCaseCommandInput - {@link ResolveCaseCommandInput}
 * @returns {@link ResolveCaseCommandOutput}
 * @see {@link ResolveCaseCommandInput} for command's `input` shape.
 * @see {@link ResolveCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link CaseIdNotFound} (client fault)
 *
 * The requested `caseId` couldn't be located.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was valid, but the operation wasn't performed because `dryRun` was set to `true`.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An internal server error occurred.
 *
 * @throws {@link SupportServiceException}
 *
 * Base exception class for all service exceptions from Support service.
 *
 * @public
 */
export class ResolveCaseCommand extends command<ResolveCaseCommandInput, ResolveCaseCommandOutput>(
  _ep0,
  _mw0,
  "ResolveCase",
  ResolveCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResolveCaseRequest;
      output: ResolveCaseResponse;
    };
    sdk: {
      input: ResolveCaseCommandInput;
      output: ResolveCaseCommandOutput;
    };
  };
}
