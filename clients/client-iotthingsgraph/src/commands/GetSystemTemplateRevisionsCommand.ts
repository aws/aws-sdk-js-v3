// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemTemplateRevisionsRequest, GetSystemTemplateRevisionsResponse } from "../models/models_0";
import { de_GetSystemTemplateRevisionsCommand, se_GetSystemTemplateRevisionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSystemTemplateRevisionsCommand}.
 */
export interface GetSystemTemplateRevisionsCommandInput extends GetSystemTemplateRevisionsRequest {}
/**
 * @public
 *
 * The output of {@link GetSystemTemplateRevisionsCommand}.
 */
export interface GetSystemTemplateRevisionsCommandOutput extends GetSystemTemplateRevisionsResponse, __MetadataBearer {}

/**
 * <p>Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return
 *       the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemTemplateRevisionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemTemplateRevisionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetSystemTemplateRevisionsRequest
 *   id: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetSystemTemplateRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemTemplateRevisionsResponse
 * //   summaries: [ // SystemTemplateSummaries
 * //     { // SystemTemplateSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       revisionNumber: Number("long"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSystemTemplateRevisionsCommandInput - {@link GetSystemTemplateRevisionsCommandInput}
 * @returns {@link GetSystemTemplateRevisionsCommandOutput}
 * @see {@link GetSystemTemplateRevisionsCommandInput} for command's `input` shape.
 * @see {@link GetSystemTemplateRevisionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 * @public
 */
export class GetSystemTemplateRevisionsCommand extends $Command
  .classBuilder<
    GetSystemTemplateRevisionsCommandInput,
    GetSystemTemplateRevisionsCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "GetSystemTemplateRevisions", {})
  .n("IoTThingsGraphClient", "GetSystemTemplateRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_GetSystemTemplateRevisionsCommand)
  .de(de_GetSystemTemplateRevisionsCommand)
  .build() {}
