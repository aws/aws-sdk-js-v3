// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateEventStreamRequest, CreateEventStreamResponse } from "../models/models_0";
import { CreateEventStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventStreamCommand}.
 */
export interface CreateEventStreamCommandInput extends CreateEventStreamRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventStreamCommand}.
 */
export interface CreateEventStreamCommandOutput extends CreateEventStreamResponse, __MetadataBearer {}

/**
 * <p>Creates an event stream, which is a subscription to real-time events, such as when
 *          profiles are created and updated through Amazon Connect Customer Profiles.</p>
 *          <p>Each event stream can be associated with only one Kinesis Data Stream destination in the
 *          same region and Amazon Web Services account as the customer profiles domain</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateEventStreamCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateEventStreamCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateEventStreamRequest
 *   DomainName: "STRING_VALUE", // required
 *   Uri: "STRING_VALUE", // required
 *   EventStreamName: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEventStreamCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventStreamResponse
 * //   EventStreamArn: "STRING_VALUE", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventStreamCommandInput - {@link CreateEventStreamCommandInput}
 * @returns {@link CreateEventStreamCommandOutput}
 * @see {@link CreateEventStreamCommandInput} for command's `input` shape.
 * @see {@link CreateEventStreamCommandOutput} for command's `response` shape.
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
export class CreateEventStreamCommand extends $Command
  .classBuilder<
    CreateEventStreamCommandInput,
    CreateEventStreamCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateEventStream", {})
  .n("CustomerProfilesClient", "CreateEventStreamCommand")
  .sc(CreateEventStream$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventStreamRequest;
      output: CreateEventStreamResponse;
    };
    sdk: {
      input: CreateEventStreamCommandInput;
      output: CreateEventStreamCommandOutput;
    };
  };
}
