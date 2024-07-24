// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceScanResourcesInput, ListResourceScanResourcesOutput } from "../models/models_0";
import { de_ListResourceScanResourcesCommand, se_ListResourceScanResourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceScanResourcesCommand}.
 */
export interface ListResourceScanResourcesCommandInput extends ListResourceScanResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListResourceScanResourcesCommand}.
 */
export interface ListResourceScanResourcesCommandOutput extends ListResourceScanResourcesOutput, __MetadataBearer {}

/**
 * <p>Lists the resources from a resource scan. The results can be filtered by resource identifier, resource type
 *    prefix, tag key, and tag value. Only resources that match all specified filters are returned. The response indicates
 *    whether each returned resource is already managed by CloudFormation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListResourceScanResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListResourceScanResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListResourceScanResourcesInput
 *   ResourceScanId: "STRING_VALUE", // required
 *   ResourceIdentifier: "STRING_VALUE",
 *   ResourceTypePrefix: "STRING_VALUE",
 *   TagKey: "STRING_VALUE",
 *   TagValue: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourceScanResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceScanResourcesOutput
 * //   Resources: [ // ScannedResources
 * //     { // ScannedResource
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceIdentifier: { // JazzResourceIdentifierProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ManagedByStack: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceScanResourcesCommandInput - {@link ListResourceScanResourcesCommandInput}
 * @returns {@link ListResourceScanResourcesCommandOutput}
 * @see {@link ListResourceScanResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourceScanResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ResourceScanInProgressException} (client fault)
 *  <p>A resource scan is currently in progress. Only one can be run at a time for an account in a Region.</p>
 *
 * @throws {@link ResourceScanNotFoundException} (client fault)
 *  <p>The resource scan was not found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class ListResourceScanResourcesCommand extends $Command
  .classBuilder<
    ListResourceScanResourcesCommandInput,
    ListResourceScanResourcesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListResourceScanResources", {})
  .n("CloudFormationClient", "ListResourceScanResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceScanResourcesCommand)
  .de(de_ListResourceScanResourcesCommand)
  .build() {}
