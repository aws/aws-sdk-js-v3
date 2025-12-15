// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateClusterInput, CreateClusterOutput } from "../models/models_0";
import { CreateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterInput {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterOutput, __MetadataBearer {}

/**
 * <p>The CreateCluster API allows you to create both single-Region clusters and multi-Region clusters. With the addition of the <i>multiRegionProperties</i> parameter, you can create a cluster with witness Region support and establish peer relationships with clusters in other Regions during creation.</p> <note> <p>Creating multi-Region clusters requires additional IAM permissions beyond those needed for single-Region clusters, as detailed in the <b>Required permissions</b> section below.</p> </note> <p> <b>Required permissions</b> </p> <dl> <dt>dsql:CreateCluster</dt> <dd> <p>Required to create a cluster.</p> <p>Resources: <code>arn:aws:dsql:region:account-id:cluster/*</code> </p> </dd> <dt>dsql:TagResource</dt> <dd> <p>Permission to add tags to a resource.</p> <p>Resources: <code>arn:aws:dsql:region:account-id:cluster/*</code> </p> </dd> <dt>dsql:PutMultiRegionProperties</dt> <dd> <p>Permission to configure multi-Region properties for a cluster.</p> <p>Resources: <code>arn:aws:dsql:region:account-id:cluster/*</code> </p> </dd> <dt>dsql:AddPeerCluster</dt> <dd> <p>When specifying <code>multiRegionProperties.clusters</code>, permission to add peer clusters.</p> <p>Resources:</p> <ul> <li> <p>Local cluster: <code>arn:aws:dsql:region:account-id:cluster/*</code> </p> </li> <li> <p>Each peer cluster: exact ARN of each specified peer cluster</p> </li> </ul> </dd> <dt>dsql:PutWitnessRegion</dt> <dd> <p>When specifying <code>multiRegionProperties.witnessRegion</code>, permission to set a witness Region. This permission is checked both in the cluster Region and in the witness Region.</p> <p>Resources: <code>arn:aws:dsql:region:account-id:cluster/*</code> </p> <p>Condition Keys: <code>dsql:WitnessRegion</code> (matching the specified witness region)</p> </dd> </dl> <important> <ul> <li> <p>The witness Region specified in <code>multiRegionProperties.witnessRegion</code> cannot be the same as the cluster's Region.</p> </li> </ul> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, CreateClusterCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, CreateClusterCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // CreateClusterInput
 *   deletionProtectionEnabled: true || false,
 *   kmsEncryptionKey: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   multiRegionProperties: { // MultiRegionProperties
 *     witnessRegion: "STRING_VALUE",
 *     clusters: [ // ClusterArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   policy: "STRING_VALUE",
 *   bypassPolicyLockoutSafetyCheck: true || false,
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterOutput
 * //   identifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "IDLE" || "INACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED" || "PENDING_SETUP" || "PENDING_DELETE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   multiRegionProperties: { // MultiRegionProperties
 * //     witnessRegion: "STRING_VALUE",
 * //     clusters: [ // ClusterArnList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   encryptionDetails: { // EncryptionDetails
 * //     encryptionType: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KMS_KEY", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //     encryptionStatus: "ENABLED" || "UPDATING" || "KMS_KEY_INACCESSIBLE" || "ENABLING", // required
 * //   },
 * //   deletionProtectionEnabled: true || false, // required
 * //   endpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service limit was exceeded.</p>
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
 * @example Create Cluster
 * ```javascript
 * //
 * const input = {
 *   deletionProtectionEnabled: false,
 *   tags: {
 *     MyKey: "MyValue"
 *   }
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateClusterCommand extends $Command
  .classBuilder<
    CreateClusterCommandInput,
    CreateClusterCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DSQL", "CreateCluster", {})
  .n("DSQLClient", "CreateClusterCommand")
  .sc(CreateCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterInput;
      output: CreateClusterOutput;
    };
    sdk: {
      input: CreateClusterCommandInput;
      output: CreateClusterCommandOutput;
    };
  };
}
