// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCodeScanInput, CreateCodeScanOutput } from "../models/models_0";
import { CreateCodeScan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCodeScanCommand}.
 */
export interface CreateCodeScanCommandInput extends CreateCodeScanInput {}
/**
 * @public
 *
 * The output of {@link CreateCodeScanCommand}.
 */
export interface CreateCodeScanCommandOutput extends CreateCodeScanOutput, __MetadataBearer {}

/**
 * Creates an explicit scan request for one environment. CP creates durable work before
 * any queue delivery occurs.
 *
 * Retrying a request that succeeded, with the same clientToken on the same environment,
 * returns the original scan instead of starting another one. Token handling is not yet
 * atomic: requests with the same token that run at the same time, or a retry after a
 * request that failed partway through, can leave an additional scan, which may end in
 * the FAILED state with a message that it was superseded. Deleting the environment
 * makes its tokens unusable; a later request with one of them returns
 * ResourceNotFoundException.
 *
 * Each environment can have a limited number of scans in progress at the same time.
 * Once that limit is enforced, a request that would exceed it returns
 * ServiceQuotaExceededException; wait for a scan to finish (ListCodeScans shows each
 * scan's status), then retry.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, CreateCodeScanCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, CreateCodeScanCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // CreateCodeScanInput
 *   environmentId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateCodeScanCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeScanOutput
 * //   scan: { // CodeScanSummary
 * //     scanRunId: "STRING_VALUE", // required
 * //     status: "SUBMITTED" || "WAITING_FOR_BUILD" || "BUILDING" || "WAITING_FOR_SCAN" || "SCANNING" || "SUCCEEDED" || "FAILED", // required
 * //     origin: "MANUAL" || "SCHEDULED", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     completedAt: new Date("TIMESTAMP"),
 * //     failureMessage: "STRING_VALUE",
 * //     failureStage: "SUBMITTED" || "WAITING_FOR_BUILD" || "BUILDING" || "WAITING_FOR_SCAN" || "SCANNING",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCodeScanCommandInput - {@link CreateCodeScanCommandInput}
 * @returns {@link CreateCodeScanCommandOutput}
 * @see {@link CreateCodeScanCommandInput} for command's `input` shape.
 * @see {@link CreateCodeScanCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed a service quota. Review your quota and request an increase if needed.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class CreateCodeScanCommand extends command<CreateCodeScanCommandInput, CreateCodeScanCommandOutput>(
  _ep0,
  _mw0,
  "CreateCodeScan",
  CreateCodeScan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCodeScanInput;
      output: CreateCodeScanOutput;
    };
    sdk: {
      input: CreateCodeScanCommandInput;
      output: CreateCodeScanCommandOutput;
    };
  };
}
