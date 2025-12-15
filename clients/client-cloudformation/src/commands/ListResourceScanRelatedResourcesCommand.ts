// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResourceScanRelatedResourcesInput, ListResourceScanRelatedResourcesOutput } from "../models/models_0";
import { ListResourceScanRelatedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceScanRelatedResourcesCommand}.
 */
export interface ListResourceScanRelatedResourcesCommandInput extends ListResourceScanRelatedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListResourceScanRelatedResourcesCommand}.
 */
export interface ListResourceScanRelatedResourcesCommandOutput
  extends ListResourceScanRelatedResourcesOutput,
    __MetadataBearer {}

/**
 * <p>Lists the related resources for a list of resources from a resource scan. The response
 *       indicates whether each returned resource is already managed by CloudFormation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListResourceScanRelatedResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListResourceScanRelatedResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListResourceScanRelatedResourcesInput
 *   ResourceScanId: "STRING_VALUE", // required
 *   Resources: [ // ScannedResourceIdentifiers // required
 *     { // ScannedResourceIdentifier
 *       ResourceType: "STRING_VALUE", // required
 *       ResourceIdentifier: { // JazzResourceIdentifierProperties // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourceScanRelatedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceScanRelatedResourcesOutput
 * //   RelatedResources: [ // RelatedResources
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
 * @param ListResourceScanRelatedResourcesCommandInput - {@link ListResourceScanRelatedResourcesCommandInput}
 * @returns {@link ListResourceScanRelatedResourcesCommandOutput}
 * @see {@link ListResourceScanRelatedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourceScanRelatedResourcesCommandOutput} for command's `response` shape.
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
 * @example To list resource scan related resources
 * ```javascript
 * // This example lists the resources related to the passed in resources
 * const input = {
 *   ResourceScanId: "arn:aws:cloudformation:us-east-1:123456789012:resourceScan/c19304f6-c4f1-4ff8-8e1f-35162e41d7e1",
 *   Resources: [
 *     {
 *       ResourceIdentifier: {
 *         BucketName: "jazz-bucket"
 *       },
 *       ResourceType: "AWS::S3::Bucket"
 *     },
 *     {
 *       ResourceIdentifier: {
 *         DhcpOptionsId: "random-id123"
 *       },
 *       ResourceType: "AWS::EC2::DHCPOptions"
 *     }
 *   ]
 * };
 * const command = new ListResourceScanRelatedResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RelatedResources: [
 *     {
 *       ManagedByStack: false,
 *       ResourceIdentifier: {
 *         DhcpOptionsId: "dopt-98765edcba",
 *         VpcId: "vpc-0123456abcdefg"
 *       },
 *       ResourceType: "AWS::EC2::VPCDHCPOptionsAssociation"
 *     },
 *     {
 *       ManagedByStack: false,
 *       ResourceIdentifier: {
 *         VpcId: "vpc-0123456abcdefgabc"
 *       },
 *       ResourceType: "AWS::EC2::VPC"
 *     },
 *     {
 *       ManagedByStack: false,
 *       ResourceIdentifier: {
 *         DhcpOptionsId: "dopt-98765edcba",
 *         VpcId: "vpc-123456abcdef"
 *       },
 *       ResourceType: "AWS::EC2::VPCDHCPOptionsAssociation"
 *     },
 *     {
 *       ManagedByStack: false,
 *       ResourceIdentifier: {
 *         VpcId: "vpc-12345678abcd"
 *       },
 *       ResourceType: "AWS::EC2::VPC"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListResourceScanRelatedResourcesCommand extends $Command
  .classBuilder<
    ListResourceScanRelatedResourcesCommandInput,
    ListResourceScanRelatedResourcesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ListResourceScanRelatedResources", {})
  .n("CloudFormationClient", "ListResourceScanRelatedResourcesCommand")
  .sc(ListResourceScanRelatedResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceScanRelatedResourcesInput;
      output: ListResourceScanRelatedResourcesOutput;
    };
    sdk: {
      input: ListResourceScanRelatedResourcesCommandInput;
      output: ListResourceScanRelatedResourcesCommandOutput;
    };
  };
}
