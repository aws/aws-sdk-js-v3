// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConfigurationRequest } from "../models/models_0";
import { DeleteConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationCommand}.
 */
export interface DeleteConfigurationCommandInput extends DeleteConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationCommand}.
 */
export interface DeleteConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Delete an existing configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteConfigurationCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteConfigurationCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteConfigurationRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationCommandInput - {@link DeleteConfigurationCommandInput}
 * @returns {@link DeleteConfigurationCommandOutput}
 * @see {@link DeleteConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
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
export class DeleteConfigurationCommand extends command<DeleteConfigurationCommandInput, DeleteConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfiguration",
  DeleteConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfigurationCommandInput;
      output: DeleteConfigurationCommandOutput;
    };
  };
}
