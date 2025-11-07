// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { UpdateLabelGroupRequest } from "../models/models_0";
import { UpdateLabelGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLabelGroupCommand}.
 */
export interface UpdateLabelGroupCommandInput extends UpdateLabelGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLabelGroupCommand}.
 */
export interface UpdateLabelGroupCommandOutput extends __MetadataBearer {}

/**
 * <p> Updates the label group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateLabelGroupCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateLabelGroupCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // UpdateLabelGroupRequest
 *   LabelGroupName: "STRING_VALUE", // required
 *   FaultCodes: [ // FaultCodes
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateLabelGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLabelGroupCommandInput - {@link UpdateLabelGroupCommandInput}
 * @returns {@link UpdateLabelGroupCommandOutput}
 * @see {@link UpdateLabelGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateLabelGroupCommandOutput} for command's `response` shape.
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
export class UpdateLabelGroupCommand extends $Command
  .classBuilder<
    UpdateLabelGroupCommandInput,
    UpdateLabelGroupCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "UpdateLabelGroup", {})
  .n("LookoutEquipmentClient", "UpdateLabelGroupCommand")
  .sc(UpdateLabelGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLabelGroupRequest;
      output: {};
    };
    sdk: {
      input: UpdateLabelGroupCommandInput;
      output: UpdateLabelGroupCommandOutput;
    };
  };
}
