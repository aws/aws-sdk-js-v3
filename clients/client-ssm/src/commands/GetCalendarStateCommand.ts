// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCalendarStateRequest, GetCalendarStateResponse } from "../models/models_0";
import { GetCalendarState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, `GetCalendarState` returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, `GetCalendarState` uses the current time. Change Calendar entries have two possible states: `OPEN` or `CLOSED`.
 *
 * If you specify more than one calendar in a request, the command returns the status of `OPEN` only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is `CLOSED`.
 *
 * For more information about Change Calendar, a tool in Amazon Web Services Systems Manager, see [Amazon Web Services Systems Manager Change Calendar](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCalendarStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCalendarStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidDocument} (client fault)
 *
 * The specified SSM document doesn't exist.
 *
 * @throws {@link InvalidDocumentType} (client fault)
 *
 * The SSM document type isn't valid. Valid document types are described in the `DocumentType` property.
 *
 * @throws {@link UnsupportedCalendarException} (client fault)
 *
 * The calendar entry contained in the specified SSM document isn't supported.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class GetCalendarStateCommand extends command<GetCalendarStateCommandInput, GetCalendarStateCommandOutput>(
  _ep0,
  _mw0,
  "GetCalendarState",
  GetCalendarState$
) {
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
