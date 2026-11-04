// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFleetMetricRequest } from "../models/models_0";
import { DeleteFleetMetric$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFleetMetricCommand}.
 */
export interface DeleteFleetMetricCommandInput extends DeleteFleetMetricRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetMetricCommand}.
 */
export interface DeleteFleetMetricCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.
 *
 * Requires permission to access the [DeleteFleetMetric](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteFleetMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteFleetMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteFleetMetricRequest
 *   metricName: "STRING_VALUE", // required
 *   expectedVersion: Number("long"),
 * };
 * const command = new DeleteFleetMetricCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFleetMetricCommandInput - {@link DeleteFleetMetricCommandInput}
 * @returns {@link DeleteFleetMetricCommandOutput}
 * @see {@link DeleteFleetMetricCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link VersionConflictException} (client fault)
 *
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DeleteFleetMetricCommand extends command<DeleteFleetMetricCommandInput, DeleteFleetMetricCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFleetMetric",
  DeleteFleetMetric$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFleetMetricRequest;
      output: {};
    };
    sdk: {
      input: DeleteFleetMetricCommandInput;
      output: DeleteFleetMetricCommandOutput;
    };
  };
}
