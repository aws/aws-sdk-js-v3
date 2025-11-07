// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateLabelRequest, CreateLabelResponse } from "../models/models_0";
import { CreateLabel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLabelCommand}.
 */
export interface CreateLabelCommandInput extends CreateLabelRequest {}
/**
 * @public
 *
 * The output of {@link CreateLabelCommand}.
 */
export interface CreateLabelCommandOutput extends CreateLabelResponse, __MetadataBearer {}

/**
 * <p> Creates a label for an event. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateLabelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateLabelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // CreateLabelRequest
 *   LabelGroupName: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Rating: "ANOMALY" || "NO_ANOMALY" || "NEUTRAL", // required
 *   FaultCode: "STRING_VALUE",
 *   Notes: "STRING_VALUE",
 *   Equipment: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLabelCommand(input);
 * const response = await client.send(command);
 * // { // CreateLabelResponse
 * //   LabelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLabelCommandInput - {@link CreateLabelCommandInput}
 * @returns {@link CreateLabelCommandOutput}
 * @see {@link CreateLabelCommandInput} for command's `input` shape.
 * @see {@link CreateLabelCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateLabelCommand extends $Command
  .classBuilder<
    CreateLabelCommandInput,
    CreateLabelCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "CreateLabel", {})
  .n("LookoutEquipmentClient", "CreateLabelCommand")
  .sc(CreateLabel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLabelRequest;
      output: CreateLabelResponse;
    };
    sdk: {
      input: CreateLabelCommandInput;
      output: CreateLabelCommandOutput;
    };
  };
}
