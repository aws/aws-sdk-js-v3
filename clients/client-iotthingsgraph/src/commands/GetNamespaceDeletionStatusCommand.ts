// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetNamespaceDeletionStatusRequest, GetNamespaceDeletionStatusResponse } from "../models/models_0";
import { GetNamespaceDeletionStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNamespaceDeletionStatusCommand}.
 */
export interface GetNamespaceDeletionStatusCommandInput extends GetNamespaceDeletionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetNamespaceDeletionStatusCommand}.
 */
export interface GetNamespaceDeletionStatusCommandOutput extends GetNamespaceDeletionStatusResponse, __MetadataBearer {}

/**
 * <p>Gets the status of a namespace deletion task.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetNamespaceDeletionStatusCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetNamespaceDeletionStatusCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = {};
 * const command = new GetNamespaceDeletionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetNamespaceDeletionStatusResponse
 * //   namespaceArn: "STRING_VALUE",
 * //   namespaceName: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   errorCode: "VALIDATION_FAILED",
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNamespaceDeletionStatusCommandInput - {@link GetNamespaceDeletionStatusCommandInput}
 * @returns {@link GetNamespaceDeletionStatusCommandOutput}
 * @see {@link GetNamespaceDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
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
export class GetNamespaceDeletionStatusCommand extends $Command
  .classBuilder<
    GetNamespaceDeletionStatusCommandInput,
    GetNamespaceDeletionStatusCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "GetNamespaceDeletionStatus", {})
  .n("IoTThingsGraphClient", "GetNamespaceDeletionStatusCommand")
  .sc(GetNamespaceDeletionStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetNamespaceDeletionStatusResponse;
    };
    sdk: {
      input: GetNamespaceDeletionStatusCommandInput;
      output: GetNamespaceDeletionStatusCommandOutput;
    };
  };
}
