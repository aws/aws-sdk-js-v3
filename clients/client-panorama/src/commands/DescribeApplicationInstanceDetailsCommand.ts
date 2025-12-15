// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeApplicationInstanceDetailsRequest,
  DescribeApplicationInstanceDetailsResponse,
} from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { DescribeApplicationInstanceDetails$ } from "../schemas/schemas_0";

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
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "DescribeApplicationInstanceDetails", {})
  .n("PanoramaClient", "DescribeApplicationInstanceDetailsCommand")
  .sc(DescribeApplicationInstanceDetails$)
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
