// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelSessionRequest, CancelSessionResponse } from "../models/models_0";
import { CancelSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelSessionCommand}.
 */
export interface CancelSessionCommandInput extends CancelSessionRequest {}
/**
 * @public
 *
 * The output of {@link CancelSessionCommand}.
 */
export interface CancelSessionCommandOutput extends CancelSessionResponse, __MetadataBearer {}

/**
 * Cancels an approval session. For more information, see [Session](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html) in the *Multi-party approval User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, CancelSessionCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, CancelSessionCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // CancelSessionRequest
 *   SessionArn: "STRING_VALUE", // required
 * };
 * const command = new CancelSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelSessionCommandInput - {@link CancelSessionCommandInput}
 * @returns {@link CancelSessionCommandOutput}
 * @see {@link CancelSessionCommandInput} for command's `input` shape.
 * @see {@link CancelSessionCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action. Check your permissions, and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be completed because it conflicts with the current state of a resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist. Check the resource ID, and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link MPAServiceException}
 *
 * Base exception class for all service exceptions from MPA service.
 *
 * @public
 */
export class CancelSessionCommand extends command<CancelSessionCommandInput, CancelSessionCommandOutput>(
  _ep0,
  _mw0,
  "CancelSession",
  CancelSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSessionRequest;
      output: {};
    };
    sdk: {
      input: CancelSessionCommandInput;
      output: CancelSessionCommandOutput;
    };
  };
}
