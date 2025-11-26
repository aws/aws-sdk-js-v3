// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTagsRequest, DescribeTagsResponse } from "../models/models_0";
import { DescribeTags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTagsCommand}.
 */
export interface DescribeTagsCommandInput extends DescribeTagsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTagsCommand}.
 */
export interface DescribeTagsCommandOutput extends DescribeTagsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of configuration items that have tags as specified by the key-value
 *       pairs, name and value, passed to the optional parameter <code>filters</code>.</p>
 *          <p>There are three valid tag filter names:</p>
 *          <ul>
 *             <li>
 *                <p>tagKey</p>
 *             </li>
 *             <li>
 *                <p>tagValue</p>
 *             </li>
 *             <li>
 *                <p>configurationId</p>
 *             </li>
 *          </ul>
 *          <p>Also, all configuration items associated with your user that have tags can be
 *       listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeTagsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeTagsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeTagsRequest
 *   filters: [ // TagFilters
 *     { // TagFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagsResponse
 * //   tags: [ // ConfigurationTagSet
 * //     { // ConfigurationTag
 * //       configurationType: "SERVER" || "PROCESS" || "CONNECTION" || "APPLICATION",
 * //       configurationId: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       timeOfCreation: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTagsCommandInput - {@link DescribeTagsCommandInput}
 * @returns {@link DescribeTagsCommandOutput}
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 *
 * @public
 */
export class DescribeTagsCommand extends $Command
  .classBuilder<
    DescribeTagsCommandInput,
    DescribeTagsCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPoseidonService_V2015_11_01", "DescribeTags", {})
  .n("ApplicationDiscoveryServiceClient", "DescribeTagsCommand")
  .sc(DescribeTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTagsRequest;
      output: DescribeTagsResponse;
    };
    sdk: {
      input: DescribeTagsCommandInput;
      output: DescribeTagsCommandOutput;
    };
  };
}
