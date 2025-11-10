// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { DeleteKxClusterRequest, DeleteKxClusterResponse } from "../models/models_0";
import { DeleteKxCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKxClusterCommand}.
 */
export interface DeleteKxClusterCommandInput extends DeleteKxClusterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKxClusterCommand}.
 */
export interface DeleteKxClusterCommandOutput extends DeleteKxClusterResponse, __MetadataBearer {}

/**
 * <p>Deletes a kdb cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, DeleteKxClusterCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, DeleteKxClusterCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // DeleteKxClusterRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteKxClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKxClusterCommandInput - {@link DeleteKxClusterCommandInput}
 * @returns {@link DeleteKxClusterCommandOutput}
 * @see {@link DeleteKxClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteKxClusterCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
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
export class DeleteKxClusterCommand extends $Command
  .classBuilder<
    DeleteKxClusterCommandInput,
    DeleteKxClusterCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "DeleteKxCluster", {})
  .n("FinspaceClient", "DeleteKxClusterCommand")
  .sc(DeleteKxCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKxClusterRequest;
      output: {};
    };
    sdk: {
      input: DeleteKxClusterCommandInput;
      output: DeleteKxClusterCommandOutput;
    };
  };
}
