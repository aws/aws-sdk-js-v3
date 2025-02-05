// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAttacksRequest, ListAttacksResponse } from "../models/models_0";
import { de_ListAttacksCommand, se_ListAttacksCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAttacksCommand}.
 */
export interface ListAttacksCommandInput extends ListAttacksRequest {}
/**
 * @public
 *
 * The output of {@link ListAttacksCommand}.
 */
export interface ListAttacksCommandOutput extends ListAttacksResponse, __MetadataBearer {}

/**
 * <p>Returns all ongoing DDoS attacks or all DDoS attacks during a specified time
 *          period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListAttacksCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListAttacksCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ShieldClient(config);
 * const input = { // ListAttacksRequest
 *   ResourceArns: [ // ResourceArnFilterList
 *     "STRING_VALUE",
 *   ],
 *   StartTime: { // TimeRange
 *     FromInclusive: new Date("TIMESTAMP"),
 *     ToExclusive: new Date("TIMESTAMP"),
 *   },
 *   EndTime: {
 *     FromInclusive: new Date("TIMESTAMP"),
 *     ToExclusive: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAttacksCommand(input);
 * const response = await client.send(command);
 * // { // ListAttacksResponse
 * //   AttackSummaries: [ // AttackSummaries
 * //     { // AttackSummary
 * //       AttackId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       AttackVectors: [ // AttackVectorDescriptionList
 * //         { // AttackVectorDescription
 * //           VectorType: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttacksCommandInput - {@link ListAttacksCommandInput}
 * @returns {@link ListAttacksCommandOutput}
 * @see {@link ListAttacksCommandInput} for command's `input` shape.
 * @see {@link ListAttacksCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>Exception that indicates that the operation would not cause any change to occur.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 * @public
 */
export class ListAttacksCommand extends $Command
  .classBuilder<
    ListAttacksCommandInput,
    ListAttacksCommandOutput,
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
  .s("AWSShield_20160616", "ListAttacks", {})
  .n("ShieldClient", "ListAttacksCommand")
  .f(void 0, void 0)
  .ser(se_ListAttacksCommand)
  .de(de_ListAttacksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttacksRequest;
      output: ListAttacksResponse;
    };
    sdk: {
      input: ListAttacksCommandInput;
      output: ListAttacksCommandOutput;
    };
  };
}
