// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResourceRequestStatusInput, GetResourceRequestStatusOutput } from "../models/models_0";
import { GetResourceRequestStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceRequestStatusCommand}.
 */
export interface GetResourceRequestStatusCommandInput extends GetResourceRequestStatusInput {}
/**
 * @public
 *
 * The output of {@link GetResourceRequestStatusCommand}.
 */
export interface GetResourceRequestStatusCommandOutput extends GetResourceRequestStatusOutput, __MetadataBearer {}

/**
 * <p>Returns the current status of a resource operation request. For more information, see
 *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-track">Tracking the progress of resource operation requests</a> in the
 *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, GetResourceRequestStatusCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, GetResourceRequestStatusCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * // import type { CloudControlClientConfig } from "@aws-sdk/client-cloudcontrol";
 * const config = {}; // type is CloudControlClientConfig
 * const client = new CloudControlClient(config);
 * const input = { // GetResourceRequestStatusInput
 *   RequestToken: "STRING_VALUE", // required
 * };
 * const command = new GetResourceRequestStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceRequestStatusOutput
 * //   ProgressEvent: { // ProgressEvent
 * //     TypeName: "STRING_VALUE",
 * //     Identifier: "STRING_VALUE",
 * //     RequestToken: "STRING_VALUE",
 * //     HooksRequestToken: "STRING_VALUE",
 * //     Operation: "STRING_VALUE",
 * //     OperationStatus: "STRING_VALUE",
 * //     EventTime: new Date("TIMESTAMP"),
 * //     ResourceModel: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     ErrorCode: "STRING_VALUE",
 * //     RetryAfter: new Date("TIMESTAMP"),
 * //   },
 * //   HooksProgressEvent: [ // HooksProgressEvent
 * //     { // HookProgressEvent
 * //       HookTypeName: "STRING_VALUE",
 * //       HookTypeVersionId: "STRING_VALUE",
 * //       HookTypeArn: "STRING_VALUE",
 * //       InvocationPoint: "STRING_VALUE",
 * //       HookStatus: "STRING_VALUE",
 * //       HookEventTime: new Date("TIMESTAMP"),
 * //       HookStatusMessage: "STRING_VALUE",
 * //       FailureMode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetResourceRequestStatusCommandInput - {@link GetResourceRequestStatusCommandInput}
 * @returns {@link GetResourceRequestStatusCommandOutput}
 * @see {@link GetResourceRequestStatusCommandInput} for command's `input` shape.
 * @see {@link GetResourceRequestStatusCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link RequestTokenNotFoundException} (client fault)
 *  <p>A resource operation with the specified request token can't be found.</p>
 *
 * @throws {@link CloudControlServiceException}
 * <p>Base exception class for all service exceptions from CloudControl service.</p>
 *
 *
 * @public
 */
export class GetResourceRequestStatusCommand extends $Command
  .classBuilder<
    GetResourceRequestStatusCommandInput,
    GetResourceRequestStatusCommandOutput,
    CloudControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudApiService", "GetResourceRequestStatus", {})
  .n("CloudControlClient", "GetResourceRequestStatusCommand")
  .sc(GetResourceRequestStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceRequestStatusInput;
      output: GetResourceRequestStatusOutput;
    };
    sdk: {
      input: GetResourceRequestStatusCommandInput;
      output: GetResourceRequestStatusCommandOutput;
    };
  };
}
