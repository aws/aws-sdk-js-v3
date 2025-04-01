// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListScheduledAuditsRequest, ListScheduledAuditsResponse } from "../models/models_2";
import { de_ListScheduledAuditsCommand, se_ListScheduledAuditsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScheduledAuditsCommand}.
 */
export interface ListScheduledAuditsCommandInput extends ListScheduledAuditsRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledAuditsCommand}.
 */
export interface ListScheduledAuditsCommandOutput extends ListScheduledAuditsResponse, __MetadataBearer {}

/**
 * <p>Lists all of your scheduled audits.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListScheduledAuditsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListScheduledAuditsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListScheduledAuditsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListScheduledAuditsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledAuditsResponse
 * //   scheduledAudits: [ // ScheduledAuditMetadataList
 * //     { // ScheduledAuditMetadata
 * //       scheduledAuditName: "STRING_VALUE",
 * //       scheduledAuditArn: "STRING_VALUE",
 * //       frequency: "DAILY" || "WEEKLY" || "BIWEEKLY" || "MONTHLY",
 * //       dayOfMonth: "STRING_VALUE",
 * //       dayOfWeek: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScheduledAuditsCommandInput - {@link ListScheduledAuditsCommandInput}
 * @returns {@link ListScheduledAuditsCommandOutput}
 * @see {@link ListScheduledAuditsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledAuditsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListScheduledAuditsCommand extends $Command
  .classBuilder<
    ListScheduledAuditsCommandInput,
    ListScheduledAuditsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListScheduledAudits", {})
  .n("IoTClient", "ListScheduledAuditsCommand")
  .f(void 0, void 0)
  .ser(se_ListScheduledAuditsCommand)
  .de(de_ListScheduledAuditsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduledAuditsRequest;
      output: ListScheduledAuditsResponse;
    };
    sdk: {
      input: ListScheduledAuditsCommandInput;
      output: ListScheduledAuditsCommandOutput;
    };
  };
}
