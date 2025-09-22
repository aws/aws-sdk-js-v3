// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetDevEndpointsRequest, BatchGetDevEndpointsResponse } from "../models/models_0";
import { BatchGetDevEndpoints } from "../schemas/schemas_50_Dev";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetDevEndpointsCommand}.
 */
export interface BatchGetDevEndpointsCommandInput extends BatchGetDevEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetDevEndpointsCommand}.
 */
export interface BatchGetDevEndpointsCommandOutput extends BatchGetDevEndpointsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of resource metadata for a given list of development endpoint names. After
 *       calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the
 *       data to which you have been granted permissions. This operation supports all IAM permissions,
 *       including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchGetDevEndpointsRequest
 *   DevEndpointNames: [ // DevEndpointNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDevEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDevEndpointsResponse
 * //   DevEndpoints: [ // DevEndpointList
 * //     { // DevEndpoint
 * //       EndpointName: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       SecurityGroupIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetId: "STRING_VALUE",
 * //       YarnEndpointAddress: "STRING_VALUE",
 * //       PrivateAddress: "STRING_VALUE",
 * //       ZeppelinRemoteSparkInterpreterPort: Number("int"),
 * //       PublicAddress: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       GlueVersion: "STRING_VALUE",
 * //       NumberOfWorkers: Number("int"),
 * //       NumberOfNodes: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       ExtraPythonLibsS3Path: "STRING_VALUE",
 * //       ExtraJarsS3Path: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //       LastUpdateStatus: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       LastModifiedTimestamp: new Date("TIMESTAMP"),
 * //       PublicKey: "STRING_VALUE",
 * //       PublicKeys: [ // PublicKeysList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       Arguments: { // MapValue
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   DevEndpointsNotFound: [ // DevEndpointNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetDevEndpointsCommandInput - {@link BatchGetDevEndpointsCommandInput}
 * @returns {@link BatchGetDevEndpointsCommandOutput}
 * @see {@link BatchGetDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchGetDevEndpointsCommand extends $Command
  .classBuilder<
    BatchGetDevEndpointsCommandInput,
    BatchGetDevEndpointsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchGetDevEndpoints", {})
  .n("GlueClient", "BatchGetDevEndpointsCommand")
  .sc(BatchGetDevEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDevEndpointsRequest;
      output: BatchGetDevEndpointsResponse;
    };
    sdk: {
      input: BatchGetDevEndpointsCommandInput;
      output: BatchGetDevEndpointsCommandOutput;
    };
  };
}
