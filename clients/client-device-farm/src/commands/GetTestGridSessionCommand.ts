// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTestGridSessionRequest, GetTestGridSessionResult } from "../models/models_0";
import { GetTestGridSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTestGridSessionCommand}.
 */
export interface GetTestGridSessionCommandInput extends GetTestGridSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetTestGridSessionCommand}.
 */
export interface GetTestGridSessionCommandOutput extends GetTestGridSessionResult, __MetadataBearer {}

/**
 * A session is an instance of a browser created through a `RemoteWebDriver` with the URL from `CreateTestGridUrlResult`. You can use the following to look up sessions:
 *
 * - The session ARN.
 * - The project ARN and a session ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestGridSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestGridSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // GetTestGridSessionRequest
 *   projectArn: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 *   sessionArn: "STRING_VALUE",
 * };
 * const command = new GetTestGridSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetTestGridSessionResult
 * //   testGridSession: { // TestGridSession
 * //     arn: "STRING_VALUE",
 * //     status: "ACTIVE" || "CLOSED" || "ERRORED",
 * //     created: new Date("TIMESTAMP"),
 * //     ended: new Date("TIMESTAMP"),
 * //     billingMinutes: Number("double"),
 * //     seleniumProperties: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestGridSessionCommandInput - {@link GetTestGridSessionCommandInput}
 * @returns {@link GetTestGridSessionCommandOutput}
 * @see {@link GetTestGridSessionCommandInput} for command's `input` shape.
 * @see {@link GetTestGridSessionCommandOutput} for command's `response` shape.
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
export class GetTestGridSessionCommand extends command<GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput>(
  _ep0,
  _mw0,
  "GetTestGridSession",
  GetTestGridSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestGridSessionRequest;
      output: GetTestGridSessionResult;
    };
    sdk: {
      input: GetTestGridSessionCommandInput;
      output: GetTestGridSessionCommandOutput;
    };
  };
}
