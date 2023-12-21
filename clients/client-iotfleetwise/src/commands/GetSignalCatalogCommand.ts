// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetSignalCatalogRequest, GetSignalCatalogResponse } from "../models/models_0";
import { de_GetSignalCatalogCommand, se_GetSignalCatalogCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSignalCatalogCommand}.
 */
export interface GetSignalCatalogCommandInput extends GetSignalCatalogRequest {}
/**
 * @public
 *
 * The output of {@link GetSignalCatalogCommand}.
 */
export interface GetSignalCatalogCommandOutput extends GetSignalCatalogResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves information about a signal catalog. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetSignalCatalogCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetSignalCatalogCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetSignalCatalogRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetSignalCatalogCommand(input);
 * const response = await client.send(command);
 * // { // GetSignalCatalogResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   nodeCounts: { // NodeCounts
 * //     totalNodes: Number("int"),
 * //     totalBranches: Number("int"),
 * //     totalSensors: Number("int"),
 * //     totalAttributes: Number("int"),
 * //     totalActuators: Number("int"),
 * //     totalStructs: Number("int"),
 * //     totalProperties: Number("int"),
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetSignalCatalogCommandInput - {@link GetSignalCatalogCommandInput}
 * @returns {@link GetSignalCatalogCommandOutput}
 * @see {@link GetSignalCatalogCommandInput} for command's `input` shape.
 * @see {@link GetSignalCatalogCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class GetSignalCatalogCommand extends $Command
  .classBuilder<
    GetSignalCatalogCommandInput,
    GetSignalCatalogCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: IoTFleetWiseClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "GetSignalCatalog", {})
  .n("IoTFleetWiseClient", "GetSignalCatalogCommand")
  .f(void 0, void 0)
  .ser(se_GetSignalCatalogCommand)
  .de(de_GetSignalCatalogCommand)
  .build() {}
