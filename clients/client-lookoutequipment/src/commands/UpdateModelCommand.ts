// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { UpdateModelRequest } from "../models/models_0";
import { UpdateModel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateModelCommand}.
 */
export interface UpdateModelCommandInput extends UpdateModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateModelCommand}.
 */
export interface UpdateModelCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a model in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateModelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateModelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // UpdateModelRequest
 *   ModelName: "STRING_VALUE", // required
 *   LabelsInputConfiguration: { // LabelsInputConfiguration
 *     S3InputConfiguration: { // LabelsS3InputConfiguration
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *     },
 *     LabelGroupName: "STRING_VALUE",
 *   },
 *   RoleArn: "STRING_VALUE",
 *   ModelDiagnosticsOutputConfiguration: { // ModelDiagnosticsOutputConfiguration
 *     S3OutputConfiguration: { // ModelDiagnosticsS3OutputConfiguration
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *     },
 *     KmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateModelCommandInput - {@link UpdateModelCommandInput}
 * @returns {@link UpdateModelCommandOutput}
 * @see {@link UpdateModelCommandInput} for command's `input` shape.
 * @see {@link UpdateModelCommandOutput} for command's `response` shape.
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
 * @example Updates a model
 * ```javascript
 * //
 * const input = {
 *   LabelsInputConfiguration: {
 *     LabelGroupName: "sample-label-group"
 *   },
 *   ModelName: "sample-model"
 * };
 * const command = new UpdateModelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateModelCommand extends $Command
  .classBuilder<
    UpdateModelCommandInput,
    UpdateModelCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "UpdateModel", {})
  .n("LookoutEquipmentClient", "UpdateModelCommand")
  .sc(UpdateModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateModelRequest;
      output: {};
    };
    sdk: {
      input: UpdateModelCommandInput;
      output: UpdateModelCommandOutput;
    };
  };
}
