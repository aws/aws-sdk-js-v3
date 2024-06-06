// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetModelManifestRequest, GetModelManifestResponse } from "../models/models_0";
import { de_GetModelManifestCommand, se_GetModelManifestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelManifestCommand}.
 */
export interface GetModelManifestCommandInput extends GetModelManifestRequest {}
/**
 * @public
 *
 * The output of {@link GetModelManifestCommand}.
 */
export interface GetModelManifestCommandOutput extends GetModelManifestResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about a vehicle model (model manifest). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetModelManifestRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetModelManifestCommand(input);
 * const response = await client.send(command);
 * // { // GetModelManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   signalCatalogArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DRAFT" || "INVALID" || "VALIDATING",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetModelManifestCommandInput - {@link GetModelManifestCommandInput}
 * @returns {@link GetModelManifestCommandOutput}
 * @see {@link GetModelManifestCommandInput} for command's `input` shape.
 * @see {@link GetModelManifestCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetModelManifestCommand extends $Command
  .classBuilder<
    GetModelManifestCommandInput,
    GetModelManifestCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "GetModelManifest", {})
  .n("IoTFleetWiseClient", "GetModelManifestCommand")
  .f(void 0, void 0)
  .ser(se_GetModelManifestCommand)
  .de(de_GetModelManifestCommand)
  .build() {}
