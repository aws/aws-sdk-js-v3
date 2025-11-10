// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEndpointsRequest, ListEndpointsResponse } from "../models/models_0";
import { ListEndpoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandInput extends ListEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandOutput extends ListEndpointsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all existing endpoints that you've created.
 *       For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEndpointsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEndpointsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListEndpointsRequest
 *   Filter: { // EndpointFilter
 *     ModelArn: "STRING_VALUE",
 *     Status: "CREATING" || "DELETING" || "FAILED" || "IN_SERVICE" || "UPDATING",
 *     CreationTimeBefore: new Date("TIMESTAMP"),
 *     CreationTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointsResponse
 * //   EndpointPropertiesList: [ // EndpointPropertiesList
 * //     { // EndpointProperties
 * //       EndpointArn: "STRING_VALUE",
 * //       Status: "CREATING" || "DELETING" || "FAILED" || "IN_SERVICE" || "UPDATING",
 * //       Message: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       DesiredModelArn: "STRING_VALUE",
 * //       DesiredInferenceUnits: Number("int"),
 * //       CurrentInferenceUnits: Number("int"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       DesiredDataAccessRoleArn: "STRING_VALUE",
 * //       FlywheelArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointsCommandInput - {@link ListEndpointsCommandInput}
 * @returns {@link ListEndpointsCommandOutput}
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class ListEndpointsCommand extends $Command
  .classBuilder<
    ListEndpointsCommandInput,
    ListEndpointsCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ListEndpoints", {})
  .n("ComprehendClient", "ListEndpointsCommand")
  .sc(ListEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEndpointsRequest;
      output: ListEndpointsResponse;
    };
    sdk: {
      input: ListEndpointsCommandInput;
      output: ListEndpointsCommandOutput;
    };
  };
}
