// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSendQuotaResponse } from "../models/models_0";
import { GetSendQuota$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSendQuotaCommand}.
 */
export interface GetSendQuotaCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSendQuotaCommand}.
 */
export interface GetSendQuotaCommandOutput extends GetSendQuotaResponse, __MetadataBearer {}

/**
 * <p>Provides the sending limits for the Amazon SES account. </p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetSendQuotaCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetSendQuotaCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = {};
 * const command = new GetSendQuotaCommand(input);
 * const response = await client.send(command);
 * // { // GetSendQuotaResponse
 * //   Max24HourSend: Number("double"),
 * //   MaxSendRate: Number("double"),
 * //   SentLast24Hours: Number("double"),
 * // };
 *
 * ```
 *
 * @param GetSendQuotaCommandInput - {@link GetSendQuotaCommandInput}
 * @returns {@link GetSendQuotaCommandOutput}
 * @see {@link GetSendQuotaCommandInput} for command's `input` shape.
 * @see {@link GetSendQuotaCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example GetSendQuota
 * ```javascript
 * // The following example returns the Amazon SES sending limits for an AWS account:
 * const input = { /* empty *\/ };
 * const command = new GetSendQuotaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Max24HourSend: 200,
 *   MaxSendRate: 1,
 *   SentLast24Hours: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSendQuotaCommand extends command<GetSendQuotaCommandInput, GetSendQuotaCommandOutput>(
  _ep0,
  _mw0,
  "GetSendQuota",
  GetSendQuota$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetSendQuotaResponse;
    };
    sdk: {
      input: GetSendQuotaCommandInput;
      output: GetSendQuotaCommandOutput;
    };
  };
}
