// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConfiguredModelAlgorithmRequest } from "../models/models_0";
import { DeleteConfiguredModelAlgorithm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredModelAlgorithmCommand}.
 */
export interface DeleteConfiguredModelAlgorithmCommandInput extends DeleteConfiguredModelAlgorithmRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredModelAlgorithmCommand}.
 */
export interface DeleteConfiguredModelAlgorithmCommandOutput extends __MetadataBearer {}

/**
 * Deletes a configured model algorithm.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteConfiguredModelAlgorithmCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteConfiguredModelAlgorithmCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteConfiguredModelAlgorithmRequest
 *   configuredModelAlgorithmArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredModelAlgorithmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredModelAlgorithmCommandInput - {@link DeleteConfiguredModelAlgorithmCommandInput}
 * @returns {@link DeleteConfiguredModelAlgorithmCommandOutput}
 * @see {@link DeleteConfiguredModelAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredModelAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can't complete this action because another resource depends on this resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you are requesting does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters for this request are incorrect.
 *
 * @throws {@link CleanRoomsMLServiceException}
 *
 * Base exception class for all service exceptions from CleanRoomsML service.
 *
 * @public
 */
export class DeleteConfiguredModelAlgorithmCommand extends command<DeleteConfiguredModelAlgorithmCommandInput, DeleteConfiguredModelAlgorithmCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfiguredModelAlgorithm",
  DeleteConfiguredModelAlgorithm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredModelAlgorithmRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredModelAlgorithmCommandInput;
      output: DeleteConfiguredModelAlgorithmCommandOutput;
    };
  };
}
