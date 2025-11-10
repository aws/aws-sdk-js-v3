// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterInput, UpdateClusterOutput } from "../models/models_0";
import { de_UpdateClusterCommand, se_UpdateClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterInput {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterOutput, __MetadataBearer {}

/**
 * <p>The <i>UpdateCluster</i> API allows you to modify both single-Region and multi-Region cluster configurations. With the <i>multiRegionProperties</i> parameter, you can add or modify witness Region support and manage peer relationships with clusters in other Regions.</p> <note> <p>Note that updating multi-Region clusters requires additional IAM permissions beyond those needed for standard cluster updates, as detailed in the Permissions section.</p> </note> <p> <b>Required permissions</b> </p> <dl> <dt>dsql:UpdateCluster</dt> <dd> <p>Permission to update a DSQL cluster.</p> <p>Resources: <code>arn:aws:dsql:<i>region</i>:<i>account-id</i>:cluster/<i>cluster-id</i> </code> </p> </dd> </dl> <dl> <dt>dsql:PutMultiRegionProperties</dt> <dd> <p>Permission to configure multi-Region properties for a cluster.</p> <p>Resources: <code>arn:aws:dsql:<i>region</i>:<i>account-id</i>:cluster/<i>cluster-id</i> </code> </p> </dd> </dl> <dl> <dt>dsql:GetCluster</dt> <dd> <p>Permission to retrieve cluster information.</p> <p>Resources: <code>arn:aws:dsql:<i>region</i>:<i>account-id</i>:cluster/<i>cluster-id</i> </code> </p> </dd> <dt>dsql:AddPeerCluster</dt> <dd> <p>Permission to add peer clusters.</p> <p>Resources:</p> <ul> <li> <p>Local cluster: <code>arn:aws:dsql:<i>region</i>:<i>account-id</i>:cluster/<i>cluster-id</i> </code> </p> </li> <li> <p>Each peer cluster: exact ARN of each specified peer cluster</p> </li> </ul> </dd> <dt>dsql:RemovePeerCluster</dt> <dd> <p>Permission to remove peer clusters. The <i>dsql:RemovePeerCluster</i> permission uses a wildcard ARN pattern to simplify permission management during updates.</p> <p>Resources: <code>arn:aws:dsql:*:<i>account-id</i>:cluster/*</code> </p> </dd> </dl> <dl> <dt>dsql:PutWitnessRegion</dt> <dd> <p>Permission to set a witness Region.</p> <p>Resources: <code>arn:aws:dsql:<i>region</i>:<i>account-id</i>:cluster/<i>cluster-id</i> </code> </p> <p>Condition Keys: dsql:WitnessRegion (matching the specified witness Region)</p> <p> <b>This permission is checked both in the cluster Region and in the witness Region.</b> </p> </dd> </dl> <important> <ul> <li> <p>The witness region specified in <code>multiRegionProperties.witnessRegion</code> cannot be the same as the cluster's Region.</p> </li> <li> <p>When updating clusters with peer relationships, permissions are checked for both adding and removing peers.</p> </li> <li> <p>The <code>dsql:RemovePeerCluster</code> permission uses a wildcard ARN pattern to simplify permission management during updates.</p> </li> </ul> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, UpdateClusterCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, UpdateClusterCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // UpdateClusterInput
 *   identifier: "STRING_VALUE", // required
 *   deletionProtectionEnabled: true || false,
 *   kmsEncryptionKey: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   multiRegionProperties: { // MultiRegionProperties
 *     witnessRegion: "STRING_VALUE",
 *     clusters: [ // ClusterArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterOutput
 * //   identifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "IDLE" || "INACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED" || "PENDING_SETUP" || "PENDING_DELETE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 *
 * @example Update Cluster
 * ```javascript
 * //
 * const input = {
 *   deletionProtectionEnabled: false,
 *   identifier: "kiqenqglxyl2snyvkvnj2c3s2e"
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateClusterCommand extends $Command
  .classBuilder<
    UpdateClusterCommandInput,
    UpdateClusterCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DSQL", "UpdateCluster", {})
  .n("DSQLClient", "UpdateClusterCommand")
  .f(void 0, void 0)
  .ser(se_UpdateClusterCommand)
  .de(de_UpdateClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterInput;
      output: UpdateClusterOutput;
    };
    sdk: {
      input: UpdateClusterCommandInput;
      output: UpdateClusterCommandOutput;
    };
  };
}
