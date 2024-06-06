// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBParameterGroupMessage } from "../models/models_0";
import { de_DeleteDBParameterGroupCommand, se_DeleteDBParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBParameterGroupCommand}.
 */
export interface DeleteDBParameterGroupCommandInput extends DeleteDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBParameterGroupCommand}.
 */
export interface DeleteDBParameterGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBParameterGroupMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBParameterGroupCommandInput - {@link DeleteDBParameterGroupCommandInput}
 * @returns {@link DeleteDBParameterGroupCommandOutput}
 * @see {@link DeleteDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *  <p>The DB parameter group is in use or is in an invalid state. If you are attempting
 *             to delete the parameter group, you can't delete it when the parameter group is in
 *             this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To delete a DB parameter group
 * ```javascript
 * // The following example deletes a DB parameter group.
 * const input = {
 *   "DBParameterGroupName": "mydbparametergroup"
 * };
 * const command = new DeleteDBParameterGroupCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-db-parameter-group-1679963369020
 * ```
 *
 */
export class DeleteDBParameterGroupCommand extends $Command
  .classBuilder<
    DeleteDBParameterGroupCommandInput,
    DeleteDBParameterGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DeleteDBParameterGroup", {})
  .n("RDSClient", "DeleteDBParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBParameterGroupCommand)
  .de(de_DeleteDBParameterGroupCommand)
  .build() {}
