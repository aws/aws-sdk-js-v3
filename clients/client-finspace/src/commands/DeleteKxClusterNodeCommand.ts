// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { DeleteKxClusterNodeRequest, DeleteKxClusterNodeResponse } from "../models/models_0";
import { de_DeleteKxClusterNodeCommand, se_DeleteKxClusterNodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKxClusterNodeCommand}.
 */
export interface DeleteKxClusterNodeCommandInput extends DeleteKxClusterNodeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKxClusterNodeCommand}.
 */
export interface DeleteKxClusterNodeCommandOutput extends DeleteKxClusterNodeResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified nodes from a cluster.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, DeleteKxClusterNodeCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, DeleteKxClusterNodeCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // DeleteKxClusterNodeRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   nodeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteKxClusterNodeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKxClusterNodeCommandInput - {@link DeleteKxClusterNodeCommandInput}
 * @returns {@link DeleteKxClusterNodeCommandOutput}
 * @see {@link DeleteKxClusterNodeCommandInput} for command's `input` shape.
 * @see {@link DeleteKxClusterNodeCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class DeleteKxClusterNodeCommand extends $Command
  .classBuilder<
    DeleteKxClusterNodeCommandInput,
    DeleteKxClusterNodeCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "DeleteKxClusterNode", {})
  .n("FinspaceClient", "DeleteKxClusterNodeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKxClusterNodeCommand)
  .de(de_DeleteKxClusterNodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKxClusterNodeRequest;
      output: {};
    };
    sdk: {
      input: DeleteKxClusterNodeCommandInput;
      output: DeleteKxClusterNodeCommandOutput;
    };
  };
}
