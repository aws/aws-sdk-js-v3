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
 * DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query.
 *
 * Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, *it is not recommended that you use this API unless*:
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
 * import { TimestreamQueryClient, DescribeEndpointsCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, DescribeEndpointsCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
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
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to excessive requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid or malformed request.
 *
 * @throws {@link TimestreamQueryServiceException}
 *
 * Base exception class for all service exceptions from TimestreamQuery service.
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
