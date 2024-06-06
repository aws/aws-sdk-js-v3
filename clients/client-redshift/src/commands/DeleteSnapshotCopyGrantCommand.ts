// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSnapshotCopyGrantMessage } from "../models/models_0";
import { de_DeleteSnapshotCopyGrantCommand, se_DeleteSnapshotCopyGrantCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotCopyGrantCommand}.
 */
export interface DeleteSnapshotCopyGrantCommandInput extends DeleteSnapshotCopyGrantMessage {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotCopyGrantCommand}.
 */
export interface DeleteSnapshotCopyGrantCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified snapshot copy grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteSnapshotCopyGrantCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteSnapshotCopyGrantCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DeleteSnapshotCopyGrantMessage
 *   SnapshotCopyGrantName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapshotCopyGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSnapshotCopyGrantCommandInput - {@link DeleteSnapshotCopyGrantCommandInput}
 * @returns {@link DeleteSnapshotCopyGrantCommandOutput}
 * @see {@link DeleteSnapshotCopyGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCopyGrantCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidSnapshotCopyGrantStateFault} (client fault)
 *  <p>The snapshot copy grant can't be deleted because it is used by one or more
 *             clusters.</p>
 *
 * @throws {@link SnapshotCopyGrantNotFoundFault} (client fault)
 *  <p>The specified snapshot copy grant can't be found. Make sure that the name is typed
 *             correctly and that the grant exists in the destination region.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DeleteSnapshotCopyGrantCommand extends $Command
  .classBuilder<
    DeleteSnapshotCopyGrantCommandInput,
    DeleteSnapshotCopyGrantCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DeleteSnapshotCopyGrant", {})
  .n("RedshiftClient", "DeleteSnapshotCopyGrantCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSnapshotCopyGrantCommand)
  .de(de_DeleteSnapshotCopyGrantCommand)
  .build() {}
