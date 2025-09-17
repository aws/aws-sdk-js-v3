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
 * <p>Lists the resources from a resource scan. The results can be filtered by resource
 *       identifier, resource type prefix, tag key, and tag value. Only resources that match all
 *       specified filters are returned. The response indicates whether each returned resource is
 *       already managed by CloudFormation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListResourceScanResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListResourceScanResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
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
 *
 * @example To list the resources in your resource scan
 * ```javascript
 * // This example lists the resources in your resource scan
 * const input = {
 *   ResourceScanId: "arn:aws:cloudformation:us-east-1:123456789012:resourceScan/c19304f6-c4f1-4ff8-8e1f-35162e41d7e1"
 * };
 * const command = new ListResourceScanResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "AQICAHjOiFofVZCZ0aEN1VnF1m9jq/xxpTY7MyPexz72BHuAkgETVS8c+PVCFpE6uGVJDxCFAAACbjCCAmoGCSqGSIb3DQEHBqCCAlswggJXAgEAMIICUAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAwJ9QJAYeDzUoBeimECARCAggIh8brcL6H6uMvcZafRTB79hUkdJlOoFavrhYA2U7qdlPUwyvaVqN2DvFMxsl2XC1SaWmr5esMKxg1fLjbOEF32lVQn0Jp8QuoFUvREnqEsR32ZQmiI/Oc9HmwIr/BS3rzljki2Kr8Y0nriS7aFDLUCYsdsRdQ9iL5/iCc6oW7IisCzq1VKcHijlXvuiEipZAinsxEbmYBjmWgT7UYZdrrb6Hq3COEgPzS490ucndtwPjyvuCIMiAfTLMuBgjkzEfp4U97aLwPWaiKw94dMXj/3K67uuH9BjWZO+j6d3nnyZ14FOgI7SQvvVBnxARbTmINttHWjXPrIuE9YuuSWgn6GmuzEEDqkuglOS/OeTHYSPvLPRrFieUiawblljLVoVY9/HDjL/EErSTWiCnytGXIRoMI9Ozp2Yjfm3MBwSDXvMIrscw6QAa3bUA6uJSV2skCBnDoqV8EXd8umh788OgEtDxQ7d/NlUYEhN6AJ0K9TVz/2rZgOlzLCmtvmbIy7loAZCmf/uPNkyu6WuoLWTzQz78SnA8jWPKnxrzhNyPuaIgUH23U3mExhfMRDczitpOo5JM81oHVPECslGoqktLhP55BQqMbJy4w16SZJfr993TXhF5jOZenRN1zDsK3J5cLdJgPK1Ds1Z9DnRKMfXOqoAyme2l94/h0kLIxgAtxOeJFP/g/9hUtt1qGkZeV3Xqw1nkFQnafGIg4fJoWg74Sr7yo=",
 *   Resources: [
 *     {
 *       ManagedByStack: false,
 *       ResourceIdentifier: {
 *         Arn: "arn:aws:amplify:us-east-1:123456789012:apps/12345678"
 *       },
 *       ResourceType: "AWS::Amplify::App"
 *     },
 *     {
 *       ManagedByStack: true,
 *       ResourceIdentifier: {
 *         DeploymentId: "1234567",
 *         RestApiId: "abcdefgh"
 *       },
 *       ResourceType: "AWS::ApiGateway::Deployment"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list the resources in your resource scan for specific resource type
 * ```javascript
 * // This example lists the resources in your resource scan filtering only the resources that start with the passed in prefix
 * const input = {
 *   ResourceScanId: "arn:aws:cloudformation:us-east-1:123456789012:resourceScan/c19304f6-c4f1-4ff8-8e1f-35162e41d7e1",
 *   ResourceTypePrefix: "AWS::S3"
 * };
 * const command = new ListResourceScanResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "AQICAHjOiFofVZCZ0aEN1VnF1m9jq/xxpTY7MyPexz72BHuAkgETVS8c+PVCFpE6uGVJDxCFAAACbjCCAmoGCSqGSIb3DQEHBqCCAlswggJXAgEAMIICUAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAwJ9QJAYeDzUoBeimECARCAggIh8brcL6H6uMvcZafRTB79hUkdJlOoFavrhYA2U7qdlPUwyvaVqN2DvFMxsl2XC1SaWmr5esMKxg1fLjbOEF32lVQn0Jp8QuoFUvREnqEsR32ZQmiI/Oc9HmwIr/BS3rzljki2Kr8Y0nriS7aFDLUCYsdsRdQ9iL5/iCc6oW7IisCzq1VKcHijlXvuiEipZAinsxEbmYBjmWgT7UYZdrrb6Hq3COEgPzS490ucndtwPjyvuCIMiAfTLMuBgjkzEfp4U97aLwPWaiKw94dMXj/3K67uuH9BjWZO+j6d3nnyZ14FOgI7SQvvVBnxARbTmINttHWjXPrIuE9YuuSWgn6GmuzEEDqkuglOS/OeTHYSPvLPRrFieUiawblljLVoVY9/HDjL/EErSTWiCnytGXIRoMI9Ozp2Yjfm3MBwSDXvMIrscw6QAa3bUA6uJSV2skCBnDoqV8EXd8umh788OgEtDxQ7d/NlUYEhN6AJ0K9TVz/2rZgOlzLCmtvmbIy7loAZCmf/uPNkyu6WuoLWTzQz78SnA8jWPKnxrzhNyPuaIgUH23U3mExhfMRDczitpOo5JM81oHVPECslGoqktLhP55BQqMbJy4w16SZJfr993TXhF5jOZenRN1zDsK3J5cLdJgPK1Ds1Z9DnRKMfXOqoAyme2l94/h0kLIxgAtxOeJFP/g/9hUtt1qGkZeV3Xqw1nkFQnafGIg4fJoWg74Sr7yo=",
 *   Resources: [
 *     {
 *       ManagedByStack: true,
 *       ResourceIdentifier: {
 *         Name: "test-access-point"
 *       },
 *       ResourceType: "AWS::S3::AccessPoint"
 *     },
 *     {
 *       ManagedByStack: false,
 *       ResourceIdentifier: {
 *         Bucket: "a-random-bucket"
 *       },
 *       ResourceType: "AWS::S3::BucketPolicy"
 *     }
 *   ]
 * }
 * *\/
 * ```
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
  .ep(commonParams)
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
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceScanResourcesInput;
      output: ListResourceScanResourcesOutput;
    };
    sdk: {
      input: ListResourceScanResourcesCommandInput;
      output: ListResourceScanResourcesCommandOutput;
    };
  };
}
