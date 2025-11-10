// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DescribeNamespaceRequest, DescribeNamespaceResponse } from "../models/models_0";
import { DescribeNamespace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNamespaceCommand}.
 */
export interface DescribeNamespaceCommandInput extends DescribeNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNamespaceCommand}.
 */
export interface DescribeNamespaceCommandOutput extends DescribeNamespaceResponse, __MetadataBearer {}

/**
 * <p>Gets the latest version of the user's namespace and the public version that it is tracking.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DescribeNamespaceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DescribeNamespaceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // DescribeNamespaceRequest
 *   namespaceName: "STRING_VALUE",
 * };
 * const command = new DescribeNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNamespaceResponse
 * //   namespaceArn: "STRING_VALUE",
 * //   namespaceName: "STRING_VALUE",
 * //   trackingNamespaceName: "STRING_VALUE",
 * //   trackingNamespaceVersion: Number("long"),
 * //   namespaceVersion: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeNamespaceCommandInput - {@link DescribeNamespaceCommandInput}
 * @returns {@link DescribeNamespaceCommandOutput}
 * @see {@link DescribeNamespaceCommandInput} for command's `input` shape.
 * @see {@link DescribeNamespaceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class DescribeNamespaceCommand extends $Command
  .classBuilder<
    DescribeNamespaceCommandInput,
    DescribeNamespaceCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "DescribeNamespace", {})
  .n("IoTThingsGraphClient", "DescribeNamespaceCommand")
  .sc(DescribeNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNamespaceRequest;
      output: DescribeNamespaceResponse;
    };
    sdk: {
      input: DescribeNamespaceCommandInput;
      output: DescribeNamespaceCommandOutput;
    };
  };
}
