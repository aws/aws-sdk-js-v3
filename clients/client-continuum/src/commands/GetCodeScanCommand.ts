// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCodeScanInput, GetCodeScanOutput } from "../models/models_0";
import { GetCodeScan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCodeScanCommand}.
 */
export interface GetCodeScanCommandInput extends GetCodeScanInput {}
/**
 * @public
 *
 * The output of {@link GetCodeScanCommand}.
 */
export interface GetCodeScanCommandOutput extends GetCodeScanOutput, __MetadataBearer {}

/**
 * Retrieves one customer-visible environment scan.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, GetCodeScanCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, GetCodeScanCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // GetCodeScanInput
 *   environmentId: "STRING_VALUE", // required
 *   scanRunId: "STRING_VALUE", // required
 * };
 * const command = new GetCodeScanCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeScanOutput
 * //   scan: { // CodeScanData
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
 * @param GetCodeScanCommandInput - {@link GetCodeScanCommandInput}
 * @returns {@link GetCodeScanCommandOutput}
 * @see {@link GetCodeScanCommandInput} for command's `input` shape.
 * @see {@link GetCodeScanCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
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
export class GetCodeScanCommand extends command<GetCodeScanCommandInput, GetCodeScanCommandOutput>(
  _ep0,
  _mw0,
  "GetCodeScan",
  GetCodeScan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeScanInput;
      output: GetCodeScanOutput;
    };
    sdk: {
      input: GetCodeScanCommandInput;
      output: GetCodeScanCommandOutput;
    };
  };
}
