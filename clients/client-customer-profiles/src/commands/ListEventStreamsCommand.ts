// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventStreamsRequest, ListEventStreamsResponse } from "../models/models_0";
import { de_ListEventStreamsCommand, se_ListEventStreamsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventStreamsCommand}.
 */
export interface ListEventStreamsCommandInput extends ListEventStreamsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventStreamsCommand}.
 */
export interface ListEventStreamsCommandOutput extends ListEventStreamsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the event streams in a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListEventStreamsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListEventStreamsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListEventStreamsRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventStreamsResponse
 * //   Items: [ // EventStreamSummaryList
 * //     { // EventStreamSummary
 * //       DomainName: "STRING_VALUE", // required
 * //       EventStreamName: "STRING_VALUE", // required
 * //       EventStreamArn: "STRING_VALUE", // required
 * //       State: "RUNNING" || "STOPPED", // required
 * //       StoppedSince: new Date("TIMESTAMP"),
 * //       DestinationSummary: { // DestinationSummary
 * //         Uri: "STRING_VALUE", // required
 * //         Status: "HEALTHY" || "UNHEALTHY", // required
 * //         UnhealthySince: new Date("TIMESTAMP"),
 * //       },
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventStreamsCommandInput - {@link ListEventStreamsCommandInput}
 * @returns {@link ListEventStreamsCommandOutput}
 * @see {@link ListEventStreamsCommandInput} for command's `input` shape.
 * @see {@link ListEventStreamsCommandOutput} for command's `response` shape.
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
export class ListEventStreamsCommand extends $Command
  .classBuilder<
    ListEventStreamsCommandInput,
    ListEventStreamsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "ListEventStreams", {})
  .n("CustomerProfilesClient", "ListEventStreamsCommand")
  .f(void 0, void 0)
  .ser(se_ListEventStreamsCommand)
  .de(de_ListEventStreamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventStreamsRequest;
      output: ListEventStreamsResponse;
    };
    sdk: {
      input: ListEventStreamsCommandInput;
      output: ListEventStreamsCommandOutput;
    };
  };
}
