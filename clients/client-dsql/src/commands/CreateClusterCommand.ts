// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterInput, CreateClusterOutput } from "../models/models_0";
import { CreateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * The CreateCluster API allows you to create both single-Region clusters and multi-Region clusters. With the addition of the *multiRegionProperties* parameter, you can create a cluster with witness Region support and establish peer relationships with clusters in other Regions during creation.
 *
 * > **Note:** Creating multi-Region clusters requires additional IAM permissions beyond those needed for single-Region clusters, as detailed in the **Required permissions** section below.
 *
 * **Required permissions**
 *
 * - **dsql:CreateCluster**
 *
 *   Required to create a cluster.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/*`
 *
 * - **dsql:TagResource**
 *
 *   Permission to add tags to a resource.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/*`
 *
 * - **dsql:PutMultiRegionProperties**
 *
 *   Permission to configure multi-Region properties for a cluster.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/*`
 *
 * - **dsql:AddPeerCluster**
 *
 *   When specifying `multiRegionProperties.clusters`, permission to add peer clusters.
 *
 *   Resources:
 *
 *   - Local cluster: `arn:aws:dsql:region:account-id:cluster/*`
 *   - Each peer cluster: exact ARN of each specified peer cluster
 *
 * - **dsql:PutWitnessRegion**
 *
 *   When specifying `multiRegionProperties.witnessRegion`, permission to set a witness Region. This permission is checked both in the cluster Region and in the witness Region.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/*`
 *
 *   Condition Keys: `dsql:WitnessRegion` (matching the specified witness region)
 *
 * > **Important:** - The witness Region specified in `multiRegionProperties.witnessRegion` cannot be the same as the cluster's Region.
 *
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
 *
 * The submitted action has conflicts.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link DSQLServiceException}
 *
 * Base exception class for all service exceptions from DSQL service.
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
export class CreateClusterCommand extends command<CreateClusterCommandInput, CreateClusterCommandOutput>(
  _ep0,
  _mw0,
  "CreateCluster",
  CreateCluster$
) {
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
