// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSnapshotCopyGrantMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteSnapshotCopyGrant$ } from "../schemas/schemas_0";

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
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DeleteSnapshotCopyGrant", {})
  .n("RedshiftClient", "DeleteSnapshotCopyGrantCommand")
  .sc(DeleteSnapshotCopyGrant$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapshotCopyGrantMessage;
      output: {};
    };
    sdk: {
      input: DeleteSnapshotCopyGrantCommandInput;
      output: DeleteSnapshotCopyGrantCommandOutput;
    };
  };
}
