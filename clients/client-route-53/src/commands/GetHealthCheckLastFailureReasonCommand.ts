// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type {
  GetHealthCheckLastFailureReasonRequest,
  GetHealthCheckLastFailureReasonResponse,
} from "../models/models_0";
import { GetHealthCheckLastFailureReason$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetHealthCheckLastFailureReasonCommand}.
 */
export interface GetHealthCheckLastFailureReasonCommandInput extends GetHealthCheckLastFailureReasonRequest {}
/**
 * @public
 *
 * The output of {@link GetHealthCheckLastFailureReasonCommand}.
 */
export interface GetHealthCheckLastFailureReasonCommandOutput extends GetHealthCheckLastFailureReasonResponse, __MetadataBearer {}

/**
 * <p>Gets the reason that a specified health check failed most recently.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckLastFailureReasonCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckLastFailureReasonCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetHealthCheckLastFailureReasonRequest
 *   HealthCheckId: "STRING_VALUE", // required
 * };
 * const command = new GetHealthCheckLastFailureReasonCommand(input);
 * const response = await client.send(command);
 * // { // GetHealthCheckLastFailureReasonResponse
 * //   HealthCheckObservations: [ // HealthCheckObservations // required
 * //     { // HealthCheckObservation
 * //       Region: "us-east-1" || "us-west-1" || "us-west-2" || "eu-west-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "sa-east-1",
 * //       IPAddress: "STRING_VALUE",
 * //       StatusReport: { // StatusReport
 * //         Status: "STRING_VALUE",
 * //         CheckedTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetHealthCheckLastFailureReasonCommandInput - {@link GetHealthCheckLastFailureReasonCommandInput}
 * @returns {@link GetHealthCheckLastFailureReasonCommandOutput}
 * @see {@link GetHealthCheckLastFailureReasonCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckLastFailureReasonCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *  <p>No health check exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetHealthCheckLastFailureReasonCommand extends command<GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput>(
  _ep0,
  _mw2,
  "GetHealthCheckLastFailureReason",
  GetHealthCheckLastFailureReason$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHealthCheckLastFailureReasonRequest;
      output: GetHealthCheckLastFailureReasonResponse;
    };
    sdk: {
      input: GetHealthCheckLastFailureReasonCommandInput;
      output: GetHealthCheckLastFailureReasonCommandOutput;
    };
  };
}
