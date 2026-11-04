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
 * Cancels a findings export job that is in progress. Security Hub transitions a running job to the `CANCELLED` state and returns the `ExportJobId` and its new `Status`. Canceling a job that is already in the `CANCELLED` state succeeds and returns the same result, so you can safely retry a cancel request.
 *
 * You can't cancel an export job that has already reached a terminal `SUCCEEDED` or `FAILED` state; in that case, this operation returns a `ConflictException`. If no export job matches the `ExportJobId` that you provide, this operation returns a `ResourceNotFoundException`.
 *
 * The `Status` value returned by this operation reflects the cancellation immediately, even though the job can take a short time to stop completely.
 *
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
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request causes conflict with the current state of the service resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it's missing required fields or has invalid inputs.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
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
