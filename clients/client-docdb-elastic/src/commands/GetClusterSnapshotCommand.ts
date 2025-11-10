// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetClusterSnapshotInput, GetClusterSnapshotOutput } from "../models/models_0";
import { GetClusterSnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClusterSnapshotCommand}.
 */
export interface GetClusterSnapshotCommandInput extends GetClusterSnapshotInput {}
/**
 * @public
 *
 * The output of {@link GetClusterSnapshotCommand}.
 */
export interface GetClusterSnapshotCommandOutput extends GetClusterSnapshotOutput, __MetadataBearer {}

/**
 * <p>Returns information about a specific elastic cluster snapshot</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, GetClusterSnapshotCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, GetClusterSnapshotCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // GetClusterSnapshotInput
 *   snapshotArn: "STRING_VALUE", // required
 * };
 * const command = new GetClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // GetClusterSnapshotOutput
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
 * @param GetClusterSnapshotCommandInput - {@link GetClusterSnapshotCommandInput}
 * @returns {@link GetClusterSnapshotCommandOutput}
 * @see {@link GetClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be located.</p>
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
 *
 * @public
 */
export class GetClusterSnapshotCommand extends $Command
  .classBuilder<
    GetClusterSnapshotCommandInput,
    GetClusterSnapshotCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeraDbLionfishServiceLambda", "GetClusterSnapshot", {})
  .n("DocDBElasticClient", "GetClusterSnapshotCommand")
  .sc(GetClusterSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClusterSnapshotInput;
      output: GetClusterSnapshotOutput;
    };
    sdk: {
      input: GetClusterSnapshotCommandInput;
      output: GetClusterSnapshotCommandOutput;
    };
  };
}
