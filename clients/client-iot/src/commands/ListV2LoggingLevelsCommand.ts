// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListV2LoggingLevelsRequest, ListV2LoggingLevelsResponse } from "../models/models_2";
import { ListV2LoggingLevels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListV2LoggingLevelsCommand}.
 */
export interface ListV2LoggingLevelsCommandInput extends ListV2LoggingLevelsRequest {}
/**
 * @public
 *
 * The output of {@link ListV2LoggingLevelsCommand}.
 */
export interface ListV2LoggingLevelsCommandOutput extends ListV2LoggingLevelsResponse, __MetadataBearer {}

/**
 * <p>Lists logging levels.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListV2LoggingLevelsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListV2LoggingLevelsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListV2LoggingLevelsRequest
 *   targetType: "DEFAULT" || "THING_GROUP" || "CLIENT_ID" || "SOURCE_IP" || "PRINCIPAL_ID",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListV2LoggingLevelsCommand(input);
 * const response = await client.send(command);
 * // { // ListV2LoggingLevelsResponse
 * //   logTargetConfigurations: [ // LogTargetConfigurations
 * //     { // LogTargetConfiguration
 * //       logTarget: { // LogTarget
 * //         targetType: "DEFAULT" || "THING_GROUP" || "CLIENT_ID" || "SOURCE_IP" || "PRINCIPAL_ID", // required
 * //         targetName: "STRING_VALUE",
 * //       },
 * //       logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListV2LoggingLevelsCommandInput - {@link ListV2LoggingLevelsCommandInput}
 * @returns {@link ListV2LoggingLevelsCommandOutput}
 * @see {@link ListV2LoggingLevelsCommandInput} for command's `input` shape.
 * @see {@link ListV2LoggingLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link NotConfiguredException} (client fault)
 *  <p>The resource is not configured.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListV2LoggingLevelsCommand extends command<ListV2LoggingLevelsCommandInput, ListV2LoggingLevelsCommandOutput>(
  _ep0,
  _mw0,
  "ListV2LoggingLevels",
  ListV2LoggingLevels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListV2LoggingLevelsRequest;
      output: ListV2LoggingLevelsResponse;
    };
    sdk: {
      input: ListV2LoggingLevelsCommandInput;
      output: ListV2LoggingLevelsCommandOutput;
    };
  };
}
