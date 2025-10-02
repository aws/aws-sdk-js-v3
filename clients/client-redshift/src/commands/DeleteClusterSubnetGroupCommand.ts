// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClusterSubnetGroupMessage } from "../models/models_0";
import { de_DeleteClusterSubnetGroupCommand, se_DeleteClusterSubnetGroupCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClusterSubnetGroupCommand}.
 */
export interface DeleteClusterSubnetGroupCommandInput extends DeleteClusterSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteClusterSubnetGroupCommand}.
 */
export interface DeleteClusterSubnetGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified cluster subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteClusterSubnetGroupMessage
 *   ClusterSubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClusterSubnetGroupCommandInput - {@link DeleteClusterSubnetGroupCommandInput}
 * @returns {@link DeleteClusterSubnetGroupCommandOutput}
 * @see {@link DeleteClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *  <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 *
 * @throws {@link InvalidClusterSubnetGroupStateFault} (client fault)
 *  <p>The cluster subnet group cannot be deleted because it is in use.</p>
 *
 * @throws {@link InvalidClusterSubnetStateFault} (client fault)
 *  <p>The state of the subnet is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteClusterSubnetGroupCommand extends $Command
  .classBuilder<
    DeleteClusterSubnetGroupCommandInput,
    DeleteClusterSubnetGroupCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DeleteClusterSubnetGroup", {})
  .n("RedshiftClient", "DeleteClusterSubnetGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteClusterSubnetGroupCommand)
  .de(de_DeleteClusterSubnetGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterSubnetGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteClusterSubnetGroupCommandInput;
      output: DeleteClusterSubnetGroupCommandOutput;
    };
  };
}
