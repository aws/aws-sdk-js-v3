// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LookoutEquipmentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LookoutEquipmentClient";
import type { DeleteLabelGroupRequest } from "../models/models_0";
import { DeleteLabelGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Deletes a group of labels. </p>
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
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 *
 * @public
 */
export class DeleteLabelGroupCommand extends $Command
  .classBuilder<
    DeleteLabelGroupCommandInput,
    DeleteLabelGroupCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "DeleteLabelGroup", {})
  .n("LookoutEquipmentClient", "DeleteLabelGroupCommand")
  .sc(DeleteLabelGroup)
  .build() {
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
