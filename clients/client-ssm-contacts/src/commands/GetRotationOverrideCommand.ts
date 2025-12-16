// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRotationOverrideRequest, GetRotationOverrideResult } from "../models/models_0";
import { GetRotationOverride$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

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
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "GetRotationOverride", {})
  .n("SSMContactsClient", "GetRotationOverrideCommand")
  .sc(GetRotationOverride$)
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
