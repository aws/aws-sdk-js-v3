// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLabelGroupRequest } from "../models/models_0";
import { DeleteLabelGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLabelGroupCommand}.
 */
export interface DeleteLabelGroupCommandInput extends DeleteLabelGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLabelGroupCommand}.
 */
export interface DeleteLabelGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes a group of labels.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DeleteLabelGroupCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DeleteLabelGroupCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DeleteLabelGroupRequest
 *   LabelGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLabelGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLabelGroupCommandInput - {@link DeleteLabelGroupCommandInput}
 * @returns {@link DeleteLabelGroupCommandOutput}
 * @see {@link DeleteLabelGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteLabelGroupCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have access to the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Processing of the request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource requested could not be found. Verify the resource ID and retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services service that's being utilized.
 *
 * @throws {@link LookoutEquipmentServiceException}
 *
 * Base exception class for all service exceptions from LookoutEquipment service.
 *
 * @public
 */
export class DeleteLabelGroupCommand extends command<DeleteLabelGroupCommandInput, DeleteLabelGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLabelGroup",
  DeleteLabelGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLabelGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteLabelGroupCommandInput;
      output: DeleteLabelGroupCommandOutput;
    };
  };
}
