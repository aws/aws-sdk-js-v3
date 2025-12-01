// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDBSubnetGroupMessage } from "../models/models_0";
import type { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBSubnetGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBSubnetGroupCommand}.
 */
export interface DeleteDBSubnetGroupCommandInput extends DeleteDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBSubnetGroupCommand}.
 */
export interface DeleteDBSubnetGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a DB subnet group.</p>
 *          <note>
 *             <p>The specified database subnet group must not be associated with any DB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DeleteDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBSubnetGroupCommandInput - {@link DeleteDBSubnetGroupCommandInput}
 * @returns {@link DeleteDBSubnetGroupCommandOutput}
 * @see {@link DeleteDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *  <p>The DB subnet group cannot be deleted because it is in use.</p>
 *
 * @throws {@link InvalidDBSubnetStateFault} (client fault)
 *  <p>The DB subnet is not in the <i>available</i> state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DeleteDBSubnetGroupCommand extends $Command
  .classBuilder<
    DeleteDBSubnetGroupCommandInput,
    DeleteDBSubnetGroupCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteDBSubnetGroup", {})
  .n("NeptuneClient", "DeleteDBSubnetGroupCommand")
  .sc(DeleteDBSubnetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBSubnetGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteDBSubnetGroupCommandInput;
      output: DeleteDBSubnetGroupCommandOutput;
    };
  };
}
