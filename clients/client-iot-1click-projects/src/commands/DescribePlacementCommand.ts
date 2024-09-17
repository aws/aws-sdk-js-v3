// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { DescribePlacementRequest, DescribePlacementResponse } from "../models/models_0";
import { de_DescribePlacementCommand, se_DescribePlacementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePlacementCommand}.
 */
export interface DescribePlacementCommandInput extends DescribePlacementRequest {}
/**
 * @public
 *
 * The output of {@link DescribePlacementCommand}.
 */
export interface DescribePlacementCommandOutput extends DescribePlacementResponse, __MetadataBearer {}

/**
 * <p>Describes a placement in a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DescribePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DescribePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // DescribePlacementRequest
 *   placementName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 * };
 * const command = new DescribePlacementCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlacementResponse
 * //   placement: { // PlacementDescription
 * //     projectName: "STRING_VALUE", // required
 * //     placementName: "STRING_VALUE", // required
 * //     attributes: { // PlacementAttributeMap // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdDate: new Date("TIMESTAMP"), // required
 * //     updatedDate: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePlacementCommandInput - {@link DescribePlacementCommandInput}
 * @returns {@link DescribePlacementCommandOutput}
 * @see {@link DescribePlacementCommandInput} for command's `input` shape.
 * @see {@link DescribePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoT1ClickProjectsServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickProjects service.</p>
 *
 * @public
 */
export class DescribePlacementCommand extends $Command
  .classBuilder<
    DescribePlacementCommandInput,
    DescribePlacementCommandOutput,
    IoT1ClickProjectsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoT1ClickProjectsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoT1ClickProjects", "DescribePlacement", {})
  .n("IoT1ClickProjectsClient", "DescribePlacementCommand")
  .f(void 0, void 0)
  .ser(se_DescribePlacementCommand)
  .de(de_DescribePlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePlacementRequest;
      output: DescribePlacementResponse;
    };
    sdk: {
      input: DescribePlacementCommandInput;
      output: DescribePlacementCommandOutput;
    };
  };
}
