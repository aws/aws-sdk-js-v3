// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssetInstancesInput, ListAssetInstancesOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_ListAssetInstancesCommand, se_ListAssetInstancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssetInstancesCommand}.
 */
export interface ListAssetInstancesCommandInput extends ListAssetInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListAssetInstancesCommand}.
 */
export interface ListAssetInstancesCommandOutput extends ListAssetInstancesOutput, __MetadataBearer {}

/**
 * <p>A list of Amazon EC2 instances, belonging to all accounts, running on the specified Outpost.
 *       Does not include Amazon EBS or Amazon S3 instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListAssetInstancesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListAssetInstancesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // ListAssetInstancesInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   AssetIdFilter: [ // AssetIdList
 *     "STRING_VALUE",
 *   ],
 *   InstanceTypeFilter: [ // OutpostInstanceTypeList
 *     "STRING_VALUE",
 *   ],
 *   AccountIdFilter: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   AwsServiceFilter: [ // AWSServiceNameList
 *     "AWS" || "EC2" || "ELASTICACHE" || "ELB" || "RDS" || "ROUTE53",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssetInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetInstancesOutput
 * //   AssetInstances: [ // AssetInstanceList
 * //     { // AssetInstance
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       AssetId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       AwsServiceName: "AWS" || "EC2" || "ELASTICACHE" || "ELB" || "RDS" || "ROUTE53",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetInstancesCommandInput - {@link ListAssetInstancesCommandInput}
 * @returns {@link ListAssetInstancesCommandOutput}
 * @see {@link ListAssetInstancesCommandInput} for command's `input` shape.
 * @see {@link ListAssetInstancesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 * @public
 */
export class ListAssetInstancesCommand extends $Command
  .classBuilder<
    ListAssetInstancesCommandInput,
    ListAssetInstancesCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "ListAssetInstances", {})
  .n("OutpostsClient", "ListAssetInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListAssetInstancesCommand)
  .de(de_ListAssetInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetInstancesInput;
      output: ListAssetInstancesOutput;
    };
    sdk: {
      input: ListAssetInstancesCommandInput;
      output: ListAssetInstancesCommandOutput;
    };
  };
}
