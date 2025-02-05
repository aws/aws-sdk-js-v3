// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetResourceRequestStatusInput,
  GetResourceRequestStatusOutput,
  GetResourceRequestStatusOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetResourceRequestStatusCommand, se_GetResourceRequestStatusCommand } from "../protocols/Aws_json1_0";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudApiService", "GetResourceRequestStatus", {})
  .n("CloudControlClient", "GetResourceRequestStatusCommand")
  .f(void 0, GetResourceRequestStatusOutputFilterSensitiveLog)
  .ser(se_GetResourceRequestStatusCommand)
  .de(de_GetResourceRequestStatusCommand)
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
