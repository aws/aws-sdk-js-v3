// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetHubClient";
import { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/models_0";
import { DescribeApplication } from "../schemas/schemas_1_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandInput extends DescribeApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandOutput extends DescribeApplicationResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Fleet Hub for IoT Device Management web application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetHubClient, DescribeApplicationCommand } from "@aws-sdk/client-iotfleethub"; // ES Modules import
 * // const { IoTFleetHubClient, DescribeApplicationCommand } = require("@aws-sdk/client-iotfleethub"); // CommonJS import
 * // import type { IoTFleetHubClientConfig } from "@aws-sdk/client-iotfleethub";
 * const config = {}; // type is IoTFleetHubClientConfig
 * const client = new IoTFleetHubClient(config);
 * const input = { // DescribeApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationResponse
 * //   applicationId: "STRING_VALUE", // required
 * //   applicationArn: "STRING_VALUE", // required
 * //   applicationName: "STRING_VALUE", // required
 * //   applicationDescription: "STRING_VALUE",
 * //   applicationUrl: "STRING_VALUE", // required
 * //   applicationState: "CREATING" || "DELETING" || "ACTIVE" || "CREATE_FAILED" || "DELETE_FAILED", // required
 * //   applicationCreationDate: Number("long"), // required
 * //   applicationLastUpdateDate: Number("long"), // required
 * //   roleArn: "STRING_VALUE", // required
 * //   ssoClientId: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeApplicationCommandInput - {@link DescribeApplicationCommandInput}
 * @returns {@link DescribeApplicationCommandOutput}
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetHubClientResolvedConfig | config} for IoTFleetHubClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTFleetHubServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetHub service.</p>
 *
 *
 * @public
 */
export class DescribeApplicationCommand extends $Command
  .classBuilder<
    DescribeApplicationCommandInput,
    DescribeApplicationCommandOutput,
    IoTFleetHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTFleetHub", "DescribeApplication", {})
  .n("IoTFleetHubClient", "DescribeApplicationCommand")
  .sc(DescribeApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationRequest;
      output: DescribeApplicationResponse;
    };
    sdk: {
      input: DescribeApplicationCommandInput;
      output: DescribeApplicationCommandOutput;
    };
  };
}
