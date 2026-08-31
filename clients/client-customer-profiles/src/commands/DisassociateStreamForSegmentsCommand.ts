// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateStreamForSegmentsRequest, DisassociateStreamForSegmentsResponse } from "../models/models_0";
import { DisassociateStreamForSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateStreamForSegmentsCommand}.
 */
export interface DisassociateStreamForSegmentsCommandInput extends DisassociateStreamForSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateStreamForSegmentsCommand}.
 */
export interface DisassociateStreamForSegmentsCommandOutput extends DisassociateStreamForSegmentsResponse, __MetadataBearer {}

/**
 * <p>Disassociates the Amazon Kinesis data stream configured for segment membership events. All
 *          active segment subscriptions delivering events to this stream are eventually stopped. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DisassociateStreamForSegmentsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DisassociateStreamForSegmentsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DisassociateStreamForSegmentsRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateStreamForSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateStreamForSegmentsResponse
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateStreamForSegmentsCommandInput - {@link DisassociateStreamForSegmentsCommandInput}
 * @returns {@link DisassociateStreamForSegmentsCommandOutput}
 * @see {@link DisassociateStreamForSegmentsCommandInput} for command's `input` shape.
 * @see {@link DisassociateStreamForSegmentsCommandOutput} for command's `response` shape.
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
export class DisassociateStreamForSegmentsCommand extends command<DisassociateStreamForSegmentsCommandInput, DisassociateStreamForSegmentsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateStreamForSegments",
  DisassociateStreamForSegments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateStreamForSegmentsRequest;
      output: DisassociateStreamForSegmentsResponse;
    };
    sdk: {
      input: DisassociateStreamForSegmentsCommandInput;
      output: DisassociateStreamForSegmentsCommandOutput;
    };
  };
}
