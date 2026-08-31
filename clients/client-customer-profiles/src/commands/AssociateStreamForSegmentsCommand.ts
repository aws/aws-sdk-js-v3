// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateStreamForSegmentsRequest, AssociateStreamForSegmentsResponse } from "../models/models_0";
import { AssociateStreamForSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateStreamForSegmentsCommand}.
 */
export interface AssociateStreamForSegmentsCommandInput extends AssociateStreamForSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateStreamForSegmentsCommand}.
 */
export interface AssociateStreamForSegmentsCommandOutput extends AssociateStreamForSegmentsResponse, __MetadataBearer {}

/**
 * <p>Associates an Amazon Kinesis data stream to receive segment membership events for a given
 *          domain. This is a domain-level configuration that applies to all segment
 *          subscriptions within the domain. A domain can have only one associated stream at a time.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, AssociateStreamForSegmentsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, AssociateStreamForSegmentsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // AssociateStreamForSegmentsRequest
 *   DomainName: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE", // required
 *   DestinationRoleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateStreamForSegmentsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateStreamForSegmentsCommandInput - {@link AssociateStreamForSegmentsCommandInput}
 * @returns {@link AssociateStreamForSegmentsCommandOutput}
 * @see {@link AssociateStreamForSegmentsCommandInput} for command's `input` shape.
 * @see {@link AssociateStreamForSegmentsCommandOutput} for command's `response` shape.
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
export class AssociateStreamForSegmentsCommand extends command<AssociateStreamForSegmentsCommandInput, AssociateStreamForSegmentsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateStreamForSegments",
  AssociateStreamForSegments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateStreamForSegmentsRequest;
      output: {};
    };
    sdk: {
      input: AssociateStreamForSegmentsCommandInput;
      output: AssociateStreamForSegmentsCommandOutput;
    };
  };
}
