// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNodeRequest, DescribeNodeResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DescribeNodeCommand, se_DescribeNodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNodeCommand}.
 */
export interface DescribeNodeCommandInput extends DescribeNodeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNodeCommand}.
 */
export interface DescribeNodeCommandOutput extends DescribeNodeResponse, __MetadataBearer {}

/**
 * <p>Returns information about a node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeNodeCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeNodeCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribeNodeRequest
 *   NodeId: "STRING_VALUE", // required
 *   OwnerAccount: "STRING_VALUE",
 * };
 * const command = new DescribeNodeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNodeResponse
 * //   NodeId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Category: "STRING_VALUE", // required
 * //   OwnerAccount: "STRING_VALUE", // required
 * //   PackageName: "STRING_VALUE", // required
 * //   PackageId: "STRING_VALUE", // required
 * //   PackageArn: "STRING_VALUE",
 * //   PackageVersion: "STRING_VALUE", // required
 * //   PatchVersion: "STRING_VALUE", // required
 * //   NodeInterface: { // NodeInterface
 * //     Inputs: [ // InputPortList // required
 * //       { // NodeInputPort
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         DefaultValue: "STRING_VALUE",
 * //         MaxConnections: Number("int"),
 * //       },
 * //     ],
 * //     Outputs: [ // OutputPortList // required
 * //       { // NodeOutputPort
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   AssetName: "STRING_VALUE",
 * //   Description: "STRING_VALUE", // required
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   LastUpdatedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeNodeCommandInput - {@link DescribeNodeCommandInput}
 * @returns {@link DescribeNodeCommandOutput}
 * @see {@link DescribeNodeCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 * @public
 */
export class DescribeNodeCommand extends $Command
  .classBuilder<
    DescribeNodeCommandInput,
    DescribeNodeCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "DescribeNode", {})
  .n("PanoramaClient", "DescribeNodeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNodeCommand)
  .de(de_DescribeNodeCommand)
  .build() {}
