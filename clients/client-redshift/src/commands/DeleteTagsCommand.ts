// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTagsMessage } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteTags } from "../schemas/schemas_48_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandInput extends DeleteTagsMessage {}
/**
 * @public
 *
 * The output of {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes tags from a resource. You must provide the ARN of the resource
 *             from which you want to delete the tag or tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteTagsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteTagsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteTagsMessage
 *   ResourceName: "STRING_VALUE", // required
 *   TagKeys: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTagsCommandInput - {@link DeleteTagsCommandInput}
 * @returns {@link DeleteTagsCommandOutput}
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteTagsCommand extends $Command
  .classBuilder<
    DeleteTagsCommandInput,
    DeleteTagsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DeleteTags", {})
  .n("RedshiftClient", "DeleteTagsCommand")
  .sc(DeleteTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTagsMessage;
      output: {};
    };
    sdk: {
      input: DeleteTagsCommandInput;
      output: DeleteTagsCommandOutput;
    };
  };
}
