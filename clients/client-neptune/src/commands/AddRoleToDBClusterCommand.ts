// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AddRoleToDBClusterMessage } from "../models/models_0";
import type { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { AddRoleToDBCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddRoleToDBClusterCommand}.
 */
export interface AddRoleToDBClusterCommandInput extends AddRoleToDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link AddRoleToDBClusterCommand}.
 */
export interface AddRoleToDBClusterCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an Identity and Access Management (IAM) role with an
 *       Neptune DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, AddRoleToDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, AddRoleToDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // AddRoleToDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE",
 * };
 * const command = new AddRoleToDBClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddRoleToDBClusterCommandInput - {@link AddRoleToDBClusterCommandInput}
 * @returns {@link AddRoleToDBClusterCommandOutput}
 * @see {@link AddRoleToDBClusterCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterRoleAlreadyExistsFault} (client fault)
 *  <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 *
 * @throws {@link DBClusterRoleQuotaExceededFault} (client fault)
 *  <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class AddRoleToDBClusterCommand extends $Command
  .classBuilder<
    AddRoleToDBClusterCommandInput,
    AddRoleToDBClusterCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "AddRoleToDBCluster", {})
  .n("NeptuneClient", "AddRoleToDBClusterCommand")
  .sc(AddRoleToDBCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddRoleToDBClusterMessage;
      output: {};
    };
    sdk: {
      input: AddRoleToDBClusterCommandInput;
      output: AddRoleToDBClusterCommandOutput;
    };
  };
}
