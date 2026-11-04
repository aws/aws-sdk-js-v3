// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_0";
import { DescribeEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandInput extends DescribeEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandOutput extends DescribeEndpointsResponse, __MetadataBearer {}

/**
 * Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.
 *
 * Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, *we don't recommend that you use this API operation unless*:
 *
 * - You are using [VPC endpoints (Amazon Web Services PrivateLink) with Timestream](https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints)
 * - Your application uses a programming language that does not yet have SDK support
 * - You require better control over the client-side implementation
 *
 * For detailed information on how and when to use and implement DescribeEndpoints, see [The Endpoint Discovery Pattern](https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DescribeEndpointsCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DescribeEndpointsCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = {};
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointsResponse
 * //   Endpoints: [ // Endpoints // required
 * //     { // Endpoint
 * //       Address: "STRING_VALUE", // required
 * //       CachePeriodInMinutes: Number("long"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEndpointsCommandInput - {@link DescribeEndpointsCommandInput}
 * @returns {@link DescribeEndpointsCommandOutput}
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Timestream was unable to fully process this request because of an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests were made by a user and they exceeded the service quotas. The request was throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An invalid or malformed request.
 *
 * @throws {@link TimestreamWriteServiceException}
 *
 * Base exception class for all service exceptions from TimestreamWrite service.
 *
 * @public
 */
export class DescribeEndpointsCommand extends command<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput>(
  _ep0,
  _mw1,
  "DescribeEndpoints",
  DescribeEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeEndpointsResponse;
    };
    sdk: {
      input: DescribeEndpointsCommandInput;
      output: DescribeEndpointsCommandOutput;
    };
  };
}
