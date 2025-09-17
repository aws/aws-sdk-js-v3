// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourcesRequest, ListResourcesResponse } from "../models/models_0";
import { de_ListResourcesCommand, se_ListResourcesCommand } from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandInput extends ListResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandOutput extends ListResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the resources that you added to a resource share or the resources that are shared with
 *             you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourcesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListResourcesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ListResourcesRequest
 *   resourceOwner: "SELF" || "OTHER-ACCOUNTS", // required
 *   principal: "STRING_VALUE",
 *   resourceType: "STRING_VALUE",
 *   resourceArns: [ // ResourceArnList
 *     "STRING_VALUE",
 *   ],
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   resourceRegionScope: "ALL" || "REGIONAL" || "GLOBAL",
 * };
 * const command = new ListResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesResponse
 * //   resources: [ // ResourceList
 * //     { // Resource
 * //       arn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       resourceGroupArn: "STRING_VALUE",
 * //       status: "AVAILABLE" || "ZONAL_RESOURCE_INACCESSIBLE" || "LIMIT_EXCEEDED" || "UNAVAILABLE" || "PENDING",
 * //       statusMessage: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       resourceRegionScope: "REGIONAL" || "GLOBAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesCommandInput - {@link ListResourcesCommandInput}
 * @returns {@link ListResourcesCommandOutput}
 * @see {@link ListResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourcesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link InvalidResourceTypeException} (client fault)
 *  <p>The operation failed because the specified resource type isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class ListResourcesCommand extends $Command
  .classBuilder<
    ListResourcesCommandInput,
    ListResourcesCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "ListResources", {})
  .n("RAMClient", "ListResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListResourcesCommand)
  .de(de_ListResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesRequest;
      output: ListResourcesResponse;
    };
    sdk: {
      input: ListResourcesCommandInput;
      output: ListResourcesCommandOutput;
    };
  };
}
