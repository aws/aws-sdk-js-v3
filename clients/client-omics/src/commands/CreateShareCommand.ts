// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateShareRequest, CreateShareResponse } from "../models/models_0";
import { CreateShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateShareCommand}.
 */
export interface CreateShareCommandInput extends CreateShareRequest {}
/**
 * @public
 *
 * The output of {@link CreateShareCommand}.
 */
export interface CreateShareCommandOutput extends CreateShareResponse, __MetadataBearer {}

/**
 * Creates a cross-account shared resource. The resource owner makes an offer to share the resource with the principal subscriber (an Amazon Web Services user with a different account than the resource owner).
 *
 * The following resources support cross-account sharing:
 *
 * - HealthOmics variant stores
 * - HealthOmics annotation stores
 * - Private workflows
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateShareCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateShareCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateShareRequest
 *   resourceArn: "STRING_VALUE", // required
 *   principalSubscriber: "STRING_VALUE", // required
 *   shareName: "STRING_VALUE",
 * };
 * const command = new CreateShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateShareResponse
 * //   shareId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   shareName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateShareCommandInput - {@link CreateShareCommandInput}
 * @returns {@link CreateShareCommandOutput}
 * @see {@link CreateShareCommandInput} for command's `input` shape.
 * @see {@link CreateShareCommandOutput} for command's `response` shape.
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
export class CreateShareCommand extends command<CreateShareCommandInput, CreateShareCommandOutput>(
  _ep0,
  _mw0,
  "CreateShare",
  CreateShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateShareRequest;
      output: CreateShareResponse;
    };
    sdk: {
      input: CreateShareCommandInput;
      output: CreateShareCommandOutput;
    };
  };
}
