// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDevEndpointsRequest, GetDevEndpointsResponse } from "../models/models_2";
import { de_GetDevEndpointsCommand, se_GetDevEndpointsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDevEndpointsCommand}.
 */
export interface GetDevEndpointsCommandInput extends GetDevEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link GetDevEndpointsCommand}.
 */
export interface GetDevEndpointsCommandOutput extends GetDevEndpointsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all the development endpoints in this Amazon Web Services account.</p>
 *          <note>
 *             <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address
 *       and the public IP address field is not populated. When you create a non-VPC development
 *       endpoint, Glue returns only a public IP address.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDevEndpointsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetDevEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // GetDevEndpointsResponse
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
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDevEndpointsCommandInput - {@link GetDevEndpointsCommandInput}
 * @returns {@link GetDevEndpointsCommandOutput}
 * @see {@link GetDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link GetDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @public
 */
export class GetDevEndpointsCommand extends $Command
  .classBuilder<
    GetDevEndpointsCommandInput,
    GetDevEndpointsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetDevEndpoints", {})
  .n("GlueClient", "GetDevEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_GetDevEndpointsCommand)
  .de(de_GetDevEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDevEndpointsRequest;
      output: GetDevEndpointsResponse;
    };
    sdk: {
      input: GetDevEndpointsCommandInput;
      output: GetDevEndpointsCommandOutput;
    };
  };
}
