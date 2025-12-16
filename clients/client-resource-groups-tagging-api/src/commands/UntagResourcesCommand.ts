// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UntagResourcesInput, UntagResourcesOutput } from "../models/models_0";
import type {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { UntagResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagResourcesCommand}.
 */
export interface UntagResourcesCommandInput extends UntagResourcesInput {}
/**
 * @public
 *
 * The output of {@link UntagResourcesCommand}.
 */
export interface UntagResourcesCommandOutput extends UntagResourcesOutput, __MetadataBearer {}

/**
 * <p>Removes the specified tags from the specified resources. When you specify a tag key,
 *             the action removes both that key and its associated value. The operation succeeds even
 *             if you attempt to remove tags from a resource that were already removed. Note the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>To remove tags from a resource, you need the necessary permissions for the
 *                     service that the resource belongs to as well as permissions for removing tags.
 *                     For more information, see the documentation for the service whose resource you
 *                     want to untag.</p>
 *             </li>
 *             <li>
 *                <p>You can only tag resources that are located in the specified Amazon Web Services Region for
 *                     the calling Amazon Web Services account.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>In addition to the <code>tag:UntagResources</code> permission required by this
 *             operation, you must also have the remove tags permission defined by the service that
 *             created the resource. For example, to remove the tags from an Amazon EC2 instance using the
 *                 <code>UntagResources</code> operation, you must have both of the following
 *             permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>tag:UntagResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:DeleteTags</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>In addition, some services might have specific requirements for untagging some
 *                 types of resources. For example, to untag Amazon Web Services Glue Connection, you must also have the
 *                     <code>glue:GetConnection</code> permission. If the expected minimum permissions
 *                 don't work, check the documentation for that service's tagging APIs for more
 *                 information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, UntagResourcesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, UntagResourcesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // UntagResourcesInput
 *   ResourceARNList: [ // ResourceARNListForTagUntag // required
 *     "STRING_VALUE",
 *   ],
 *   TagKeys: [ // TagKeyListForUntag // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagResourcesCommand(input);
 * const response = await client.send(command);
 * // { // UntagResourcesOutput
 * //   FailedResourcesMap: { // FailedResourcesMap
 * //     "<keys>": { // FailureInfo
 * //       StatusCode: Number("int"),
 * //       ErrorCode: "InternalServiceException" || "InvalidParameterException",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UntagResourcesCommandInput - {@link UntagResourcesCommandInput}
 * @returns {@link UntagResourcesCommandOutput}
 * @see {@link UntagResourcesCommandInput} for command's `input` shape.
 * @see {@link UntagResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request failed because of one of the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>A required parameter is missing.</p>
 *             </li>
 *             <li>
 *                <p>A provided string parameter is malformed.</p>
 *             </li>
 *             <li>
 *                <p>An provided parameter value is out of range.</p>
 *             </li>
 *             <li>
 *                <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You can't access the Amazon S3 bucket for report storage. For more information, see
 *                         <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy">Amazon S3 bucket policy for report storage</a> in the <i>Tagging Amazon Web Services resources and Tag Editor</i> user guide. </p>
 *             </li>
 *             <li>
 *                <p>The partition specified in an ARN parameter in the request doesn't match the
 *                     partition where you invoked the operation. The partition is specified by the
 *                     second field of the ARN.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request failed because it exceeded the allowed frequency of submitted
 *             requests.</p>
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.</p>
 *
 *
 * @public
 */
export class UntagResourcesCommand extends $Command
  .classBuilder<
    UntagResourcesCommandInput,
    UntagResourcesCommandOutput,
    ResourceGroupsTaggingAPIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsTaggingAPIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceGroupsTaggingAPI_20170126", "UntagResources", {})
  .n("ResourceGroupsTaggingAPIClient", "UntagResourcesCommand")
  .sc(UntagResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagResourcesInput;
      output: UntagResourcesOutput;
    };
    sdk: {
      input: UntagResourcesCommandInput;
      output: UntagResourcesCommandOutput;
    };
  };
}
