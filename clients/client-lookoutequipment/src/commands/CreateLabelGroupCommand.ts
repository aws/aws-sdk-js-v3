// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateLabelGroupRequest, CreateLabelGroupResponse } from "../models/models_0";
import { de_CreateLabelGroupCommand, se_CreateLabelGroupCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLabelGroupCommand}.
 */
export interface CreateLabelGroupCommandInput extends CreateLabelGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateLabelGroupCommand}.
 */
export interface CreateLabelGroupCommandOutput extends CreateLabelGroupResponse, __MetadataBearer {}

/**
 * <p> Creates a group of labels. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateLabelGroupCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateLabelGroupCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LookoutEquipmentClient(config);
 * const input = { // CreateLabelGroupRequest
 *   LabelGroupName: "STRING_VALUE", // required
 *   FaultCodes: [ // FaultCodes
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateLabelGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateLabelGroupResponse
 * //   LabelGroupName: "STRING_VALUE",
 * //   LabelGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLabelGroupCommandInput - {@link CreateLabelGroupCommandInput}
 * @returns {@link CreateLabelGroupCommandOutput}
 * @see {@link CreateLabelGroupCommandInput} for command's `input` shape.
 * @see {@link CreateLabelGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> Resource limitations have been exceeded. </p>
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
 * @public
 */
export class CreateLabelGroupCommand extends $Command
  .classBuilder<
    CreateLabelGroupCommandInput,
    CreateLabelGroupCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLookoutEquipmentFrontendService", "CreateLabelGroup", {})
  .n("LookoutEquipmentClient", "CreateLabelGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateLabelGroupCommand)
  .de(de_CreateLabelGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLabelGroupRequest;
      output: CreateLabelGroupResponse;
    };
    sdk: {
      input: CreateLabelGroupCommandInput;
      output: CreateLabelGroupCommandOutput;
    };
  };
}
