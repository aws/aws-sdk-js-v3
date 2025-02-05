// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRotationOverrideRequest, GetRotationOverrideResult } from "../models/models_0";
import { de_GetRotationOverrideCommand, se_GetRotationOverrideCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRotationOverrideCommand}.
 */
export interface GetRotationOverrideCommandInput extends GetRotationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link GetRotationOverrideCommand}.
 */
export interface GetRotationOverrideCommandOutput extends GetRotationOverrideResult, __MetadataBearer {}

/**
 * <p>Retrieves information about an override to an on-call rotation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetRotationOverrideCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetRotationOverrideCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMContactsClient(config);
 * const input = { // GetRotationOverrideRequest
 *   RotationId: "STRING_VALUE", // required
 *   RotationOverrideId: "STRING_VALUE", // required
 * };
 * const command = new GetRotationOverrideCommand(input);
 * const response = await client.send(command);
 * // { // GetRotationOverrideResult
 * //   RotationOverrideId: "STRING_VALUE",
 * //   RotationArn: "STRING_VALUE",
 * //   NewContactIds: [ // SsmContactsArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   CreateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRotationOverrideCommandInput - {@link GetRotationOverrideCommandInput}
 * @returns {@link GetRotationOverrideCommandOutput}
 * @see {@link GetRotationOverrideCommandInput} for command's `input` shape.
 * @see {@link GetRotationOverrideCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 * @public
 */
export class GetRotationOverrideCommand extends $Command
  .classBuilder<
    GetRotationOverrideCommandInput,
    GetRotationOverrideCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "GetRotationOverride", {})
  .n("SSMContactsClient", "GetRotationOverrideCommand")
  .f(void 0, void 0)
  .ser(se_GetRotationOverrideCommand)
  .de(de_GetRotationOverrideCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRotationOverrideRequest;
      output: GetRotationOverrideResult;
    };
    sdk: {
      input: GetRotationOverrideCommandInput;
      output: GetRotationOverrideCommandOutput;
    };
  };
}
