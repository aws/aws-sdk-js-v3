// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyClusterSnapshotInput, CopyClusterSnapshotOutput } from "../models/models_0";
import { de_CopyClusterSnapshotCommand, se_CopyClusterSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyClusterSnapshotCommand}.
 */
export interface CopyClusterSnapshotCommandInput extends CopyClusterSnapshotInput {}
/**
 * @public
 *
 * The output of {@link CopyClusterSnapshotCommand}.
 */
export interface CopyClusterSnapshotCommandOutput extends CopyClusterSnapshotOutput, __MetadataBearer {}

/**
 * <p>Copies a snapshot of an elastic cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, CopyClusterSnapshotCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, CopyClusterSnapshotCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const input = { // CopyClusterSnapshotInput
 *   snapshotArn: "STRING_VALUE", // required
 *   targetSnapshotName: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE",
 *   copyTags: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CopyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopyClusterSnapshotOutput
 * //   snapshot: { // ClusterSnapshot
 * //     subnetIds: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     snapshotName: "STRING_VALUE", // required
 * //     snapshotArn: "STRING_VALUE", // required
 * //     snapshotCreationTime: "STRING_VALUE", // required
 * //     clusterArn: "STRING_VALUE", // required
 * //     clusterCreationTime: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     vpcSecurityGroupIds: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     adminUserName: "STRING_VALUE", // required
 * //     kmsKeyId: "STRING_VALUE", // required
 * //     snapshotType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyClusterSnapshotCommandInput - {@link CopyClusterSnapshotCommandInput}
 * @returns {@link CopyClusterSnapshotCommandOutput}
 * @see {@link CopyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was an access conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be located.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota for the action was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A structure defining a validation exception.</p>
 *
 * @throws {@link DocDBElasticServiceException}
 * <p>Base exception class for all service exceptions from DocDBElastic service.</p>
 *
 * @public
 */
export class CopyClusterSnapshotCommand extends $Command
  .classBuilder<
    CopyClusterSnapshotCommandInput,
    CopyClusterSnapshotCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeraDbLionfishServiceLambda", "CopyClusterSnapshot", {})
  .n("DocDBElasticClient", "CopyClusterSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CopyClusterSnapshotCommand)
  .de(de_CopyClusterSnapshotCommand)
  .build() {}
