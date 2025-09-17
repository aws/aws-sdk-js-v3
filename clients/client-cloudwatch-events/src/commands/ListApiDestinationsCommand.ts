// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListApiDestinationsRequest, ListApiDestinationsResponse } from "../models/models_0";
import { de_ListApiDestinationsCommand, se_ListApiDestinationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApiDestinationsCommand}.
 */
export interface ListApiDestinationsCommandInput extends ListApiDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListApiDestinationsCommand}.
 */
export interface ListApiDestinationsCommandOutput extends ListApiDestinationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of API destination in the account in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListApiDestinationsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListApiDestinationsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListApiDestinationsRequest
 *   NamePrefix: "STRING_VALUE",
 *   ConnectionArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListApiDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApiDestinationsResponse
 * //   ApiDestinations: [ // ApiDestinationResponseList
 * //     { // ApiDestination
 * //       ApiDestinationArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ApiDestinationState: "ACTIVE" || "INACTIVE",
 * //       ConnectionArn: "STRING_VALUE",
 * //       InvocationEndpoint: "STRING_VALUE",
 * //       HttpMethod: "POST" || "GET" || "HEAD" || "OPTIONS" || "PUT" || "PATCH" || "DELETE",
 * //       InvocationRateLimitPerSecond: Number("int"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApiDestinationsCommandInput - {@link ListApiDestinationsCommandInput}
 * @returns {@link ListApiDestinationsCommandOutput}
 * @see {@link ListApiDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListApiDestinationsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class ListApiDestinationsCommand extends $Command
  .classBuilder<
    ListApiDestinationsCommandInput,
    ListApiDestinationsCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ListApiDestinations", {})
  .n("CloudWatchEventsClient", "ListApiDestinationsCommand")
  .f(void 0, void 0)
  .ser(se_ListApiDestinationsCommand)
  .de(de_ListApiDestinationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApiDestinationsRequest;
      output: ListApiDestinationsResponse;
    };
    sdk: {
      input: ListApiDestinationsCommandInput;
      output: ListApiDestinationsCommandOutput;
    };
  };
}
