// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestGridSessionsRequest, ListTestGridSessionsResult } from "../models/models_0";
import { ListTestGridSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestGridSessionsCommand}.
 */
export interface ListTestGridSessionsCommandInput extends ListTestGridSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestGridSessionsCommand}.
 */
export interface ListTestGridSessionsCommandOutput extends ListTestGridSessionsResult, __MetadataBearer {}

/**
 * Retrieves a list of sessions for a TestGridProject.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListTestGridSessionsRequest
 *   projectArn: "STRING_VALUE", // required
 *   status: "ACTIVE" || "CLOSED" || "ERRORED",
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   endTimeAfter: new Date("TIMESTAMP"),
 *   endTimeBefore: new Date("TIMESTAMP"),
 *   maxResult: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestGridSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestGridSessionsResult
 * //   testGridSessions: [ // TestGridSessions
 * //     { // TestGridSession
 * //       arn: "STRING_VALUE",
 * //       status: "ACTIVE" || "CLOSED" || "ERRORED",
 * //       created: new Date("TIMESTAMP"),
 * //       ended: new Date("TIMESTAMP"),
 * //       billingMinutes: Number("double"),
 * //       seleniumProperties: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestGridSessionsCommandInput - {@link ListTestGridSessionsCommandInput}
 * @returns {@link ListTestGridSessionsCommandOutput}
 * @see {@link ListTestGridSessionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *
 * An invalid argument was specified.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal exception was raised in the service. Contact [aws-devicefarm-support@amazon.com](mailto:aws-devicefarm-support@amazon.com) if you see this error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified entity was not found.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
 *
 * @public
 */
export class ListTestGridSessionsCommand extends command<ListTestGridSessionsCommandInput, ListTestGridSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListTestGridSessions",
  ListTestGridSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestGridSessionsRequest;
      output: ListTestGridSessionsResult;
    };
    sdk: {
      input: ListTestGridSessionsCommandInput;
      output: ListTestGridSessionsCommandOutput;
    };
  };
}
