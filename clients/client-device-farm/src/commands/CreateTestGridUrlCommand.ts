// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTestGridUrlRequest, CreateTestGridUrlResult } from "../models/models_0";
import { CreateTestGridUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTestGridUrlCommand}.
 */
export interface CreateTestGridUrlCommandInput extends CreateTestGridUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestGridUrlCommand}.
 */
export interface CreateTestGridUrlCommandOutput extends CreateTestGridUrlResult, __MetadataBearer {}

/**
 * Creates a signed, short-term URL that can be passed to a Selenium `RemoteWebDriver` constructor.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridUrlCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridUrlCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateTestGridUrlRequest
 *   projectArn: "STRING_VALUE", // required
 *   expiresInSeconds: Number("int"), // required
 * };
 * const command = new CreateTestGridUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestGridUrlResult
 * //   url: "STRING_VALUE",
 * //   expires: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateTestGridUrlCommandInput - {@link CreateTestGridUrlCommandInput}
 * @returns {@link CreateTestGridUrlCommandOutput}
 * @see {@link CreateTestGridUrlCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridUrlCommandOutput} for command's `response` shape.
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
export class CreateTestGridUrlCommand extends command<CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput>(
  _ep0,
  _mw0,
  "CreateTestGridUrl",
  CreateTestGridUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTestGridUrlRequest;
      output: CreateTestGridUrlResult;
    };
    sdk: {
      input: CreateTestGridUrlCommandInput;
      output: CreateTestGridUrlCommandOutput;
    };
  };
}
