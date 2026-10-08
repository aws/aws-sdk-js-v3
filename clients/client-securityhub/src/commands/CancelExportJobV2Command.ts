// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelExportJobV2Request, CancelExportJobV2Response } from "../models/models_2";
import { CancelExportJobV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelExportJobV2Command}.
 */
export interface CancelExportJobV2CommandInput extends CancelExportJobV2Request {}
/**
 * @public
 *
 * The output of {@link CancelExportJobV2Command}.
 */
export interface CancelExportJobV2CommandOutput extends CancelExportJobV2Response, __MetadataBearer {}

/**
 * <p>Cancels a findings export job that is in progress. Security Hub transitions a running job to the <code>CANCELLED</code> state and returns the <code>ExportJobId</code> and its new <code>Status</code>. Canceling a job that is already in the <code>CANCELLED</code> state succeeds and returns the same result, so you can safely retry a cancel request.</p>
 *          <p>You can't cancel an export job that has already reached a terminal <code>SUCCEEDED</code> or <code>FAILED</code> state; in that case, this operation returns a <code>ConflictException</code>. If no export job matches the <code>ExportJobId</code> that you provide, this operation returns a <code>ResourceNotFoundException</code>.</p>
 *          <p>The <code>Status</code> value returned by this operation reflects the cancellation immediately, even though the job can take a short time to stop completely.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CancelExportJobV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CancelExportJobV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // CancelExportJobV2Request
 *   ExportJobId: "STRING_VALUE", // required
 * };
 * const command = new CancelExportJobV2Command(input);
 * const response = await client.send(command);
 * // { // CancelExportJobV2Response
 * //   ExportJobId: "STRING_VALUE", // required
 * //   Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED", // required
 * // };
 *
 * ```
 *
 * @param CancelExportJobV2CommandInput - {@link CancelExportJobV2CommandInput}
 * @returns {@link CancelExportJobV2CommandOutput}
 * @see {@link CancelExportJobV2CommandInput} for command's `input` shape.
 * @see {@link CancelExportJobV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example Example – Canceling a running export job
 * ```javascript
 * // The following example cancels an export job that is in progress. Security Hub transitions the job to the CANCELLED state and returns its new status.
 * const input = {
 *   ExportJobId: "a1b2c3d4e5f6"
 * };
 * const command = new CancelExportJobV2Command(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ExportJobId: "a1b2c3d4e5f6",
 *   Status: "CANCELLED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelExportJobV2Command extends command<CancelExportJobV2CommandInput, CancelExportJobV2CommandOutput>(
  _ep0,
  _mw0,
  "CancelExportJobV2",
  CancelExportJobV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelExportJobV2Request;
      output: CancelExportJobV2Response;
    };
    sdk: {
      input: CancelExportJobV2CommandInput;
      output: CancelExportJobV2CommandOutput;
    };
  };
}
