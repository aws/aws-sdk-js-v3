// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetActionInput, GetActionOutput } from "../models/models_0";
import { GetAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetActionCommand}.
 */
export interface GetActionCommandInput extends GetActionInput {}
/**
 * @public
 *
 * The output of {@link GetActionCommand}.
 */
export interface GetActionCommandOutput extends GetActionOutput, __MetadataBearer {}

/**
 * <p>Retrieves the description of a specific support action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, GetActionCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, GetActionCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // GetActionInput
 *   action: "STRING_VALUE", // required
 * };
 * const command = new GetActionCommand(input);
 * const response = await client.send(command);
 * // { // GetActionOutput
 * //   action: "STRING_VALUE", // required
 * //   service: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetActionCommandInput - {@link GetActionCommandInput}
 * @returns {@link GetActionCommandOutput}
 * @see {@link GetActionCommandInput} for command's `input` shape.
 * @see {@link GetActionCommandOutput} for command's `response` shape.
 * @see {@link SupportAuthZClientResolvedConfig | config} for SupportAuthZClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this operation.</p>
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
export class GetActionCommand extends command<GetActionCommandInput, GetActionCommandOutput>(
  _ep0,
  _mw0,
  "GetAction",
  GetAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetActionInput;
      output: GetActionOutput;
    };
    sdk: {
      input: GetActionCommandInput;
      output: GetActionCommandOutput;
    };
  };
}
