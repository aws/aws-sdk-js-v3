// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStreamForSegmentsRequest, GetStreamForSegmentsResponse } from "../models/models_0";
import { GetStreamForSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStreamForSegmentsCommand}.
 */
export interface GetStreamForSegmentsCommandInput extends GetStreamForSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamForSegmentsCommand}.
 */
export interface GetStreamForSegmentsCommandOutput extends GetStreamForSegmentsResponse, __MetadataBearer {}

/**
 * <p>Returns information about the segment membership event stream configured for a specific
 *          domain, including the stream state and associated segments. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetStreamForSegmentsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetStreamForSegmentsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetStreamForSegmentsRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetStreamForSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamForSegmentsResponse
 * //   AssociatedAt: new Date("TIMESTAMP"),
 * //   AssociatedSegments: [ // AssociatedSegmentsList
 * //     { // AssociatedSegment
 * //       SegmentName: "STRING_VALUE",
 * //       Status: "STARTING" || "RUNNING" || "STOPPED" || "FAILED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   DomainName: "STRING_VALUE",
 * //   DestinationArn: "STRING_VALUE",
 * //   DestinationRoleArn: "STRING_VALUE",
 * //   State: "RUNNING" || "UNHEALTHY" || "STOPPED",
 * //   DisassociatedAt: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStreamForSegmentsCommandInput - {@link GetStreamForSegmentsCommandInput}
 * @returns {@link GetStreamForSegmentsCommandOutput}
 * @see {@link GetStreamForSegmentsCommandInput} for command's `input` shape.
 * @see {@link GetStreamForSegmentsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class GetStreamForSegmentsCommand extends command<GetStreamForSegmentsCommandInput, GetStreamForSegmentsCommandOutput>(
  _ep0,
  _mw0,
  "GetStreamForSegments",
  GetStreamForSegments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamForSegmentsRequest;
      output: GetStreamForSegmentsResponse;
    };
    sdk: {
      input: GetStreamForSegmentsCommandInput;
      output: GetStreamForSegmentsCommandOutput;
    };
  };
}
