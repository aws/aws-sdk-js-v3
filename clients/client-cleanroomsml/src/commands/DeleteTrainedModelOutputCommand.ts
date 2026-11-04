// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrainedModelOutputRequest } from "../models/models_0";
import { DeleteTrainedModelOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTrainedModelOutputCommand}.
 */
export interface DeleteTrainedModelOutputCommandInput extends DeleteTrainedModelOutputRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrainedModelOutputCommand}.
 */
export interface DeleteTrainedModelOutputCommandOutput extends __MetadataBearer {}

/**
 * Deletes the model artifacts stored by the service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteTrainedModelOutputCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteTrainedModelOutputCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteTrainedModelOutputRequest
 *   trainedModelArn: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   versionIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteTrainedModelOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrainedModelOutputCommandInput - {@link DeleteTrainedModelOutputCommandInput}
 * @returns {@link DeleteTrainedModelOutputCommandOutput}
 * @see {@link DeleteTrainedModelOutputCommandInput} for command's `input` shape.
 * @see {@link DeleteTrainedModelOutputCommandOutput} for command's `response` shape.
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
export class DeleteTrainedModelOutputCommand extends command<DeleteTrainedModelOutputCommandInput, DeleteTrainedModelOutputCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrainedModelOutput",
  DeleteTrainedModelOutput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrainedModelOutputRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrainedModelOutputCommandInput;
      output: DeleteTrainedModelOutputCommandOutput;
    };
  };
}
