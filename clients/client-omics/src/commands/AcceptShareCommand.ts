// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptShareRequest, AcceptShareResponse } from "../models/models_0";
import { AcceptShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptShareCommand}.
 */
export interface AcceptShareCommandInput extends AcceptShareRequest {}
/**
 * @public
 *
 * The output of {@link AcceptShareCommand}.
 */
export interface AcceptShareCommandOutput extends AcceptShareResponse, __MetadataBearer {}

/**
 * Accept a resource share request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, AcceptShareCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, AcceptShareCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // AcceptShareRequest
 *   shareId: "STRING_VALUE", // required
 * };
 * const command = new AcceptShareCommand(input);
 * const response = await client.send(command);
 * // { // AcceptShareResponse
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptShareCommandInput - {@link AcceptShareCommandInput}
 * @returns {@link AcceptShareCommandOutput}
 * @see {@link AcceptShareCommandInput} for command's `input` shape.
 * @see {@link AcceptShareCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class AcceptShareCommand extends command<AcceptShareCommandInput, AcceptShareCommandOutput>(
  _ep0,
  _mw0,
  "AcceptShare",
  AcceptShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptShareRequest;
      output: AcceptShareResponse;
    };
    sdk: {
      input: AcceptShareCommandInput;
      output: AcceptShareCommandOutput;
    };
  };
}
