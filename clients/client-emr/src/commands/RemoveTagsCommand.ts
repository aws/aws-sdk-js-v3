// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveTagsInput, RemoveTagsOutput } from "../models/models_0";
import { RemoveTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveTagsCommand}.
 */
export interface RemoveTagsCommandInput extends RemoveTagsInput {}
/**
 * @public
 *
 * The output of {@link RemoveTagsCommand}.
 */
export interface RemoveTagsCommandOutput extends RemoveTagsOutput, __MetadataBearer {}

/**
 * <p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping
 *          clusters to track your Amazon EMR resource allocation costs. For more information,
 *          see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag
 *             Clusters</a>. </p>
 *          <p>The following example removes the stack tag with value Prod from a cluster:</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveTagsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveTagsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // RemoveTagsInput
 *   ResourceId: "STRING_VALUE", // required
 *   TagKeys: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   ClusterId: "STRING_VALUE",
 * };
 * const command = new RemoveTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsCommandInput - {@link RemoveTagsCommandInput}
 * @returns {@link RemoveTagsCommandOutput}
 * @see {@link RemoveTagsCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class RemoveTagsCommand extends command<RemoveTagsCommandInput, RemoveTagsCommandOutput>(
  _ep0,
  _mw0,
  "RemoveTags",
  RemoveTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTagsInput;
      output: {};
    };
    sdk: {
      input: RemoveTagsCommandInput;
      output: RemoveTagsCommandOutput;
    };
  };
}
