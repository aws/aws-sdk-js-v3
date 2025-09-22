// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetClusterInput, GetClusterOutput } from "../models/models_0";
import { GetCluster } from "../schemas/schemas_1_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClusterCommand}.
 */
export interface GetClusterCommandInput extends GetClusterInput {}
/**
 * @public
 *
 * The output of {@link GetClusterCommand}.
 */
export interface GetClusterCommandOutput extends GetClusterOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, GetClusterCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, GetClusterCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // GetClusterInput
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetClusterCommand(input);
 * const response = await client.send(command);
 * // { // GetClusterOutput
 * //   identifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "IDLE" || "INACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED" || "PENDING_SETUP" || "PENDING_DELETE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   deletionProtectionEnabled: true || false, // required
 * //   multiRegionProperties: { // MultiRegionProperties
 * //     witnessRegion: "STRING_VALUE",
 * //     clusters: [ // ClusterArnList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   encryptionDetails: { // EncryptionDetails
 * //     encryptionType: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KMS_KEY", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //     encryptionStatus: "ENABLED" || "UPDATING" || "KMS_KEY_INACCESSIBLE" || "ENABLING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClusterCommandInput - {@link GetClusterCommandInput}
 * @returns {@link GetClusterCommandOutput}
 * @see {@link GetClusterCommandInput} for command's `input` shape.
 * @see {@link GetClusterCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 *
 * @example Get Cluster
 * ```javascript
 * //
 * const input = {
 *   identifier: "kiqenqglxyl2snyvkvnj2c3s2e"
 * };
 * const command = new GetClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetClusterCommand extends $Command
  .classBuilder<
    GetClusterCommandInput,
    GetClusterCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DSQL", "GetCluster", {})
  .n("DSQLClient", "GetClusterCommand")
  .sc(GetCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClusterInput;
      output: GetClusterOutput;
    };
    sdk: {
      input: GetClusterCommandInput;
      output: GetClusterCommandOutput;
    };
  };
}
