// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCalendarStateRequest, GetCalendarStateResponse } from "../models/models_1";
import { de_GetCalendarStateCommand, se_GetCalendarStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCalendarStateCommand}.
 */
export interface GetCalendarStateCommandInput extends GetCalendarStateRequest {}
/**
 * @public
 *
 * The output of {@link GetCalendarStateCommand}.
 */
export interface GetCalendarStateCommandOutput extends GetCalendarStateResponse, __MetadataBearer {}

/**
 * <p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If
 *    you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that
 *    specific time, and returns the next time that the change calendar state will transition. If you
 *    don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar
 *    entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p>
 *          <p>If you specify more than one calendar in a request, the command returns the status of
 *     <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the
 *    request are closed, the status returned is <code>CLOSED</code>.</p>
 *          <p>For more information about Change Calendar, a tool in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCalendarStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCalendarStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetCalendarStateRequest
 *   CalendarNames: [ // CalendarNameOrARNList // required
 *     "STRING_VALUE",
 *   ],
 *   AtTime: "STRING_VALUE",
 * };
 * const command = new GetCalendarStateCommand(input);
 * const response = await client.send(command);
 * // { // GetCalendarStateResponse
 * //   State: "OPEN" || "CLOSED",
 * //   AtTime: "STRING_VALUE",
 * //   NextTransitionTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCalendarStateCommandInput - {@link GetCalendarStateCommandInput}
 * @returns {@link GetCalendarStateCommandOutput}
 * @see {@link GetCalendarStateCommandInput} for command's `input` shape.
 * @see {@link GetCalendarStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentType} (client fault)
 *  <p>The SSM document type isn't valid. Valid document types are described in the
 *     <code>DocumentType</code> property.</p>
 *
 * @throws {@link UnsupportedCalendarException} (client fault)
 *  <p>The calendar entry contained in the specified SSM document isn't supported.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetCalendarStateCommand extends $Command
  .classBuilder<
    GetCalendarStateCommandInput,
    GetCalendarStateCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetCalendarState", {})
  .n("SSMClient", "GetCalendarStateCommand")
  .f(void 0, void 0)
  .ser(se_GetCalendarStateCommand)
  .de(de_GetCalendarStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCalendarStateRequest;
      output: GetCalendarStateResponse;
    };
    sdk: {
      input: GetCalendarStateCommandInput;
      output: GetCalendarStateCommandOutput;
    };
  };
}
