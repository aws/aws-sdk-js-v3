// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsInput, ListTagsOutput } from "../models/models_0";
import { ListTags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsCommand}.
 */
export interface ListTagsCommandInput extends ListTagsInput {}
/**
 * @public
 *
 * The output of {@link ListTagsCommand}.
 */
export interface ListTagsCommandOutput extends ListTagsOutput, __MetadataBearer {}

/**
 * <p>Returns the tags assigned to the resource, such as a target recovery point, backup plan,
 *          or backup vault.</p>
 *          <p>This operation returns results depending on the resource type used in the value for
 *             <code>resourceArn</code>. For example, recovery points of Amazon DynamoDB with
 *          Advanced Settings have an ARN (Amazon Resource Name) that begins with
 *             <code>arn:aws:backup</code>. Recovery points (backups) of DynamoDB without
 *          Advanced Settings enabled have an ARN that begins with
 *          <code>arn:aws:dynamodb</code>.</p>
 *          <p>When this operation is called and when you include values of <code>resourceArn</code>
 *          that have an ARN other than <code>arn:aws:backup</code>, it may return one of the
 *          exceptions listed below. To prevent this exception, include only values representing
 *          resource types that are fully managed by Backup. These have an ARN that begins
 *             <code>arn:aws:backup</code> and they are noted in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature availability by resource</a> table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListTagsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListTagsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListTagsInput
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsOutput
 * //   NextToken: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsCommandInput - {@link ListTagsCommandInput}
 * @returns {@link ListTagsCommandOutput}
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class ListTagsCommand extends $Command
  .classBuilder<
    ListTagsCommandInput,
    ListTagsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListTags", {})
  .n("BackupClient", "ListTagsCommand")
  .sc(ListTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsInput;
      output: ListTagsOutput;
    };
    sdk: {
      input: ListTagsCommandInput;
      output: ListTagsCommandOutput;
    };
  };
}
