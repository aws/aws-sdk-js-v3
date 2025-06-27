// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRotationOverrideRequest, CreateRotationOverrideResult } from "../models/models_0";
import { de_CreateRotationOverrideCommand, se_CreateRotationOverrideCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRotationOverrideCommand}.
 */
export interface CreateRotationOverrideCommandInput extends CreateRotationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link CreateRotationOverrideCommand}.
 */
export interface CreateRotationOverrideCommandOutput extends CreateRotationOverrideResult, __MetadataBearer {}

/**
 * <p>Creates an override for a rotation in an on-call schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateRotationOverrideCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateRotationOverrideCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // CreateRotationOverrideRequest
 *   RotationId: "STRING_VALUE", // required
 *   NewContactIds: [ // RotationOverrideContactsArnList // required
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateRotationOverrideCommand(input);
 * const response = await client.send(command);
 * // { // CreateRotationOverrideResult
 * //   RotationOverrideId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRotationOverrideCommandInput - {@link CreateRotationOverrideCommandInput}
 * @returns {@link CreateRotationOverrideCommandOutput}
 * @see {@link CreateRotationOverrideCommandInput} for command's `input` shape.
 * @see {@link CreateRotationOverrideCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
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
export class CreateRotationOverrideCommand extends $Command
  .classBuilder<
    CreateRotationOverrideCommandInput,
    CreateRotationOverrideCommandOutput,
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
  .s("SSMContacts", "CreateRotationOverride", {})
  .n("SSMContactsClient", "CreateRotationOverrideCommand")
  .f(void 0, void 0)
  .ser(se_CreateRotationOverrideCommand)
  .de(de_CreateRotationOverrideCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRotationOverrideRequest;
      output: CreateRotationOverrideResult;
    };
    sdk: {
      input: CreateRotationOverrideCommandInput;
      output: CreateRotationOverrideCommandOutput;
    };
  };
}
