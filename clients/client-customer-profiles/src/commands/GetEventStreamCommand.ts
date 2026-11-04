// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventStreamRequest, GetEventStreamResponse } from "../models/models_0";
import { GetEventStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventStreamCommand}.
 */
export interface GetEventStreamCommandInput extends GetEventStreamRequest {}
/**
 * @public
 *
 * The output of {@link GetEventStreamCommand}.
 */
export interface GetEventStreamCommandOutput extends GetEventStreamResponse, __MetadataBearer {}

/**
 * Returns information about the specified event stream in a specific domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetEventStreamCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetEventStreamCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetEventStreamRequest
 *   DomainName: "STRING_VALUE", // required
 *   EventStreamName: "STRING_VALUE", // required
 * };
 * const command = new GetEventStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetEventStreamResponse
 * //   DomainName: "STRING_VALUE", // required
 * //   EventStreamArn: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   State: "RUNNING" || "STOPPED", // required
 * //   StoppedSince: new Date("TIMESTAMP"),
 * //   DestinationDetails: { // EventStreamDestinationDetails
 * //     Uri: "STRING_VALUE", // required
 * //     Status: "HEALTHY" || "UNHEALTHY", // required
 * //     UnhealthySince: new Date("TIMESTAMP"),
 * //     Message: "STRING_VALUE",
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventStreamCommandInput - {@link GetEventStreamCommandInput}
 * @returns {@link GetEventStreamCommandOutput}
 * @see {@link GetEventStreamCommandInput} for command's `input` shape.
 * @see {@link GetEventStreamCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class GetEventStreamCommand extends command<GetEventStreamCommandInput, GetEventStreamCommandOutput>(
  _ep0,
  _mw0,
  "GetEventStream",
  GetEventStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventStreamRequest;
      output: GetEventStreamResponse;
    };
    sdk: {
      input: GetEventStreamCommandInput;
      output: GetEventStreamCommandOutput;
    };
  };
}
