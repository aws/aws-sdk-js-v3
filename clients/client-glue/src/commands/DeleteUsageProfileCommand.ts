// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUsageProfileRequest, DeleteUsageProfileResponse } from "../models/models_1";
import { DeleteUsageProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUsageProfileCommand}.
 */
export interface DeleteUsageProfileCommandInput extends DeleteUsageProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUsageProfileCommand}.
 */
export interface DeleteUsageProfileCommandOutput extends DeleteUsageProfileResponse, __MetadataBearer {}

/**
 * Deletes the Glue specified usage profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteUsageProfileCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteUsageProfileCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteUsageProfileRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteUsageProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUsageProfileCommandInput - {@link DeleteUsageProfileCommandInput}
 * @returns {@link DeleteUsageProfileCommandOutput}
 * @see {@link DeleteUsageProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteUsageProfileCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not available in the region.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class DeleteUsageProfileCommand extends command<DeleteUsageProfileCommandInput, DeleteUsageProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUsageProfile",
  DeleteUsageProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUsageProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteUsageProfileCommandInput;
      output: DeleteUsageProfileCommandOutput;
    };
  };
}
