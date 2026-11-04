// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSegmentEstimateRequest, GetSegmentEstimateResponse } from "../models/models_0";
import { GetSegmentEstimate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSegmentEstimateCommand}.
 */
export interface GetSegmentEstimateCommandInput extends GetSegmentEstimateRequest {}
/**
 * @public
 *
 * The output of {@link GetSegmentEstimateCommand}.
 */
export interface GetSegmentEstimateCommandOutput extends GetSegmentEstimateResponse, __MetadataBearer {}

/**
 * Gets the result of a segment estimate query.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetSegmentEstimateCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetSegmentEstimateCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetSegmentEstimateRequest
 *   DomainName: "STRING_VALUE", // required
 *   EstimateId: "STRING_VALUE", // required
 * };
 * const command = new GetSegmentEstimateCommand(input);
 * const response = await client.send(command);
 * // { // GetSegmentEstimateResponse
 * //   DomainName: "STRING_VALUE",
 * //   EstimateId: "STRING_VALUE",
 * //   Status: "RUNNING" || "SUCCEEDED" || "FAILED",
 * //   Estimate: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   StatusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetSegmentEstimateCommandInput - {@link GetSegmentEstimateCommandInput}
 * @returns {@link GetSegmentEstimateCommandOutput}
 * @see {@link GetSegmentEstimateCommandInput} for command's `input` shape.
 * @see {@link GetSegmentEstimateCommandOutput} for command's `response` shape.
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
export class GetSegmentEstimateCommand extends command<GetSegmentEstimateCommandInput, GetSegmentEstimateCommandOutput>(
  _ep0,
  _mw0,
  "GetSegmentEstimate",
  GetSegmentEstimate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSegmentEstimateRequest;
      output: GetSegmentEstimateResponse;
    };
    sdk: {
      input: GetSegmentEstimateCommandInput;
      output: GetSegmentEstimateCommandOutput;
    };
  };
}
