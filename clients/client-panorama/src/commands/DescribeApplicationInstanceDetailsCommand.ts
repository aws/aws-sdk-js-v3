// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeApplicationInstanceDetailsRequest,
  DescribeApplicationInstanceDetailsResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  de_DescribeApplicationInstanceDetailsCommand,
  se_DescribeApplicationInstanceDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationInstanceDetailsCommand}.
 */
export interface DescribeApplicationInstanceDetailsCommandInput extends DescribeApplicationInstanceDetailsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationInstanceDetailsCommand}.
 */
export interface DescribeApplicationInstanceDetailsCommandOutput
  extends DescribeApplicationInstanceDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about an application instance's configuration manifest.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeApplicationInstanceDetailsCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeApplicationInstanceDetailsCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribeApplicationInstanceDetailsRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationInstanceDetailsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationInstanceDetailsResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DefaultRuntimeContextDevice: "STRING_VALUE",
 * //   ManifestPayload: { // ManifestPayload Union: only one key present
 * //     PayloadData: "STRING_VALUE",
 * //   },
 * //   ManifestOverridesPayload: { // ManifestOverridesPayload Union: only one key present
 * //     PayloadData: "STRING_VALUE",
 * //   },
 * //   ApplicationInstanceIdToReplace: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   ApplicationInstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationInstanceDetailsCommandInput - {@link DescribeApplicationInstanceDetailsCommandInput}
 * @returns {@link DescribeApplicationInstanceDetailsCommandOutput}
 * @see {@link DescribeApplicationInstanceDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationInstanceDetailsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeApplicationInstanceDetailsCommand extends $Command
  .classBuilder<
    DescribeApplicationInstanceDetailsCommandInput,
    DescribeApplicationInstanceDetailsCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "DescribeApplicationInstanceDetails", {})
  .n("PanoramaClient", "DescribeApplicationInstanceDetailsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApplicationInstanceDetailsCommand)
  .de(de_DescribeApplicationInstanceDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationInstanceDetailsRequest;
      output: DescribeApplicationInstanceDetailsResponse;
    };
    sdk: {
      input: DescribeApplicationInstanceDetailsCommandInput;
      output: DescribeApplicationInstanceDetailsCommandOutput;
    };
  };
}
