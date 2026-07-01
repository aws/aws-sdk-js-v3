// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectSupportPermitRequestInput, RejectSupportPermitRequestOutput } from "../models/models_0";
import { RejectSupportPermitRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectSupportPermitRequestCommand}.
 */
export interface RejectSupportPermitRequestCommandInput extends RejectSupportPermitRequestInput {}
/**
 * @public
 *
 * The output of {@link RejectSupportPermitRequestCommand}.
 */
export interface RejectSupportPermitRequestCommandOutput extends RejectSupportPermitRequestOutput, __MetadataBearer {}

/**
 * <p>Rejects a permit request from an AWS support operator. The operator cannot proceed with the requested action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, RejectSupportPermitRequestCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, RejectSupportPermitRequestCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // RejectSupportPermitRequestInput
 *   requestArn: "STRING_VALUE", // required
 * };
 * const command = new RejectSupportPermitRequestCommand(input);
 * const response = await client.send(command);
 * // { // RejectSupportPermitRequestOutput
 * //   requestArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RejectSupportPermitRequestCommandInput - {@link RejectSupportPermitRequestCommandInput}
 * @returns {@link RejectSupportPermitRequestCommandOutput}
 * @see {@link RejectSupportPermitRequestCommandInput} for command's `input` shape.
 * @see {@link RejectSupportPermitRequestCommandOutput} for command's `response` shape.
 * @see {@link SupportAuthZClientResolvedConfig | config} for SupportAuthZClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeded the allowed limit. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SupportAuthZServiceException}
 * <p>Base exception class for all service exceptions from SupportAuthZ service.</p>
 *
 *
 * @public
 */
export class RejectSupportPermitRequestCommand extends command<RejectSupportPermitRequestCommandInput, RejectSupportPermitRequestCommandOutput>(
  _ep0,
  _mw0,
  "RejectSupportPermitRequest",
  RejectSupportPermitRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectSupportPermitRequestInput;
      output: RejectSupportPermitRequestOutput;
    };
    sdk: {
      input: RejectSupportPermitRequestCommandInput;
      output: RejectSupportPermitRequestCommandOutput;
    };
  };
}
