// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetFlowTemplateRevisionsRequest, GetFlowTemplateRevisionsResponse } from "../models/models_0";
import { de_GetFlowTemplateRevisionsCommand, se_GetFlowTemplateRevisionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowTemplateRevisionsCommand}.
 */
export interface GetFlowTemplateRevisionsCommandInput extends GetFlowTemplateRevisionsRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowTemplateRevisionsCommand}.
 */
export interface GetFlowTemplateRevisionsCommandOutput extends GetFlowTemplateRevisionsResponse, __MetadataBearer {}

/**
 * <p>Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated,
 *       this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetFlowTemplateRevisionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetFlowTemplateRevisionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetFlowTemplateRevisionsRequest
 *   id: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetFlowTemplateRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowTemplateRevisionsResponse
 * //   summaries: [ // FlowTemplateSummaries
 * //     { // FlowTemplateSummary
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
 * @param GetFlowTemplateRevisionsCommandInput - {@link GetFlowTemplateRevisionsCommandInput}
 * @returns {@link GetFlowTemplateRevisionsCommandOutput}
 * @see {@link GetFlowTemplateRevisionsCommandInput} for command's `input` shape.
 * @see {@link GetFlowTemplateRevisionsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetFlowTemplateRevisionsCommand extends $Command
  .classBuilder<
    GetFlowTemplateRevisionsCommandInput,
    GetFlowTemplateRevisionsCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "GetFlowTemplateRevisions", {})
  .n("IoTThingsGraphClient", "GetFlowTemplateRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_GetFlowTemplateRevisionsCommand)
  .de(de_GetFlowTemplateRevisionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFlowTemplateRevisionsRequest;
      output: GetFlowTemplateRevisionsResponse;
    };
    sdk: {
      input: GetFlowTemplateRevisionsCommandInput;
      output: GetFlowTemplateRevisionsCommandOutput;
    };
  };
}
