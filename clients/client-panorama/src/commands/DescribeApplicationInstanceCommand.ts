// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeApplicationInstanceRequest, DescribeApplicationInstanceResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { DescribeApplicationInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationInstanceCommand}.
 */
export interface DescribeApplicationInstanceCommandInput extends DescribeApplicationInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationInstanceCommand}.
 */
export interface DescribeApplicationInstanceCommandOutput
  extends DescribeApplicationInstanceResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about an application instance on a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeApplicationInstanceCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeApplicationInstanceCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // DescribeApplicationInstanceRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationInstanceResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DefaultRuntimeContextDevice: "STRING_VALUE",
 * //   DefaultRuntimeContextDeviceName: "STRING_VALUE",
 * //   ApplicationInstanceIdToReplace: "STRING_VALUE",
 * //   RuntimeRoleArn: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   HealthStatus: "STRING_VALUE",
 * //   StatusDescription: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   ApplicationInstanceId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RuntimeContextStates: [ // ReportedRuntimeContextStates
 * //     { // ReportedRuntimeContextState
 * //       DesiredState: "STRING_VALUE", // required
 * //       RuntimeContextName: "STRING_VALUE", // required
 * //       DeviceReportedStatus: "STRING_VALUE", // required
 * //       DeviceReportedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeApplicationInstanceCommandInput - {@link DescribeApplicationInstanceCommandInput}
 * @returns {@link DescribeApplicationInstanceCommandOutput}
 * @see {@link DescribeApplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationInstanceCommandOutput} for command's `response` shape.
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
export class DescribeApplicationInstanceCommand extends $Command
  .classBuilder<
    DescribeApplicationInstanceCommandInput,
    DescribeApplicationInstanceCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "DescribeApplicationInstance", {})
  .n("PanoramaClient", "DescribeApplicationInstanceCommand")
  .sc(DescribeApplicationInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationInstanceRequest;
      output: DescribeApplicationInstanceResponse;
    };
    sdk: {
      input: DescribeApplicationInstanceCommandInput;
      output: DescribeApplicationInstanceCommandOutput;
    };
  };
}
