// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetDecoderManifestRequest, GetDecoderManifestResponse } from "../models/models_0";
import { de_GetDecoderManifestCommand, se_GetDecoderManifestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDecoderManifestCommand}.
 */
export interface GetDecoderManifestCommandInput extends GetDecoderManifestRequest {}
/**
 * @public
 *
 * The output of {@link GetDecoderManifestCommand}.
 */
export interface GetDecoderManifestCommandOutput extends GetDecoderManifestResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about a created decoder manifest. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetDecoderManifestRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetDecoderManifestCommand(input);
 * const response = await client.send(command);
 * // { // GetDecoderManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   modelManifestArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DRAFT" || "INVALID" || "VALIDATING",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDecoderManifestCommandInput - {@link GetDecoderManifestCommandInput}
 * @returns {@link GetDecoderManifestCommandOutput}
 * @see {@link GetDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link GetDecoderManifestCommandOutput} for command's `response` shape.
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
export class GetDecoderManifestCommand extends $Command
  .classBuilder<
    GetDecoderManifestCommandInput,
    GetDecoderManifestCommandOutput,
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
  .s("IoTAutobahnControlPlane", "GetDecoderManifest", {})
  .n("IoTFleetWiseClient", "GetDecoderManifestCommand")
  .f(void 0, void 0)
  .ser(se_GetDecoderManifestCommand)
  .de(de_GetDecoderManifestCommand)
  .build() {}
