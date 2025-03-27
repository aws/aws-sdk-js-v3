// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProtectionsRequest, ListProtectionsResponse } from "../models/models_0";
import { de_ListProtectionsCommand, se_ListProtectionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProtectionsCommand}.
 */
export interface ListProtectionsCommandInput extends ListProtectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListProtectionsCommand}.
 */
export interface ListProtectionsCommandOutput extends ListProtectionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide
 *        filtering criteria and retrieve just the subset of protections that match the criteria. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // ListProtectionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InclusionFilters: { // InclusionProtectionFilters
 *     ResourceArns: [ // ResourceArnFilters
 *       "STRING_VALUE",
 *     ],
 *     ProtectionNames: [ // ProtectionNameFilters
 *       "STRING_VALUE",
 *     ],
 *     ResourceTypes: [ // ProtectedResourceTypeFilters
 *       "CLOUDFRONT_DISTRIBUTION" || "ROUTE_53_HOSTED_ZONE" || "ELASTIC_IP_ALLOCATION" || "CLASSIC_LOAD_BALANCER" || "APPLICATION_LOAD_BALANCER" || "GLOBAL_ACCELERATOR",
 *     ],
 *   },
 * };
 * const command = new ListProtectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectionsResponse
 * //   Protections: [ // Protections
 * //     { // Protection
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       HealthCheckIds: [ // HealthCheckIds
 * //         "STRING_VALUE",
 * //       ],
 * //       ProtectionArn: "STRING_VALUE",
 * //       ApplicationLayerAutomaticResponseConfiguration: { // ApplicationLayerAutomaticResponseConfiguration
 * //         Status: "ENABLED" || "DISABLED", // required
 * //         Action: { // ResponseAction
 * //           Block: {},
 * //           Count: {},
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProtectionsCommandInput - {@link ListProtectionsCommandInput}
 * @returns {@link ListProtectionsCommandOutput}
 * @see {@link ListProtectionsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Exception that indicates that the <code>NextToken</code> specified in the request is invalid. Submit the request using the <code>NextToken</code> value that was returned in the prior response.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class ListProtectionsCommand extends $Command
  .classBuilder<
    ListProtectionsCommandInput,
    ListProtectionsCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "ListProtections", {})
  .n("ShieldClient", "ListProtectionsCommand")
  .f(void 0, void 0)
  .ser(se_ListProtectionsCommand)
  .de(de_ListProtectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtectionsRequest;
      output: ListProtectionsResponse;
    };
    sdk: {
      input: ListProtectionsCommandInput;
      output: ListProtectionsCommandOutput;
    };
  };
}
