// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelExportJobRequest, CancelExportJobResponse } from "../models/models_0";
import { CancelExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelExportJobCommand}.
 */
export interface CancelExportJobCommandInput extends CancelExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelExportJobCommand}.
 */
export interface CancelExportJobCommandOutput extends CancelExportJobResponse, __MetadataBearer {}

/**
 * Cancels an export job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CancelExportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CancelExportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // CancelExportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new CancelExportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelExportJobCommandInput - {@link CancelExportJobCommandInput}
 * @returns {@link CancelExportJobCommandOutput}
 * @see {@link CancelExportJobCommandInput} for command's `input` shape.
 * @see {@link CancelExportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @example Cancel export job
 * ```javascript
 * // Cancels the export job with ID ef28cf62-9d8e-4b60-9283-b09816c99a99
 * const input = {
 *   JobId: "ef28cf62-9d8e-4b60-9283-b09816c99a99"
 * };
 * const command = new CancelExportJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelExportJobCommand extends command<CancelExportJobCommandInput, CancelExportJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelExportJob",
  CancelExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelExportJobRequest;
      output: {};
    };
    sdk: {
      input: CancelExportJobCommandInput;
      output: CancelExportJobCommandOutput;
    };
  };
}
