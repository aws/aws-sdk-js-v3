// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateActivityInput, CreateActivityOutput } from "../models/models_0";
import { CreateActivity$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateActivityCommand}.
 */
export interface CreateActivityCommandInput extends CreateActivityInput {}
/**
 * @public
 *
 * The output of {@link CreateActivityCommand}.
 */
export interface CreateActivityCommandOutput extends CreateActivityOutput, __MetadataBearer {}

/**
 * <p>Creates an activity. An activity is a task that you write in any programming language and
 *       host on any machine that has access to Step Functions. Activities must poll Step Functions using the
 *         <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API
 *       actions. This function lets Step Functions know the existence of your activity and returns an
 *       identifier for use in a state machine and when polling from the activity.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a
 *         duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency
 *         check is based on the activity <code>name</code>. If a following request has different
 *           <code>tags</code> values, Step Functions will ignore these differences and treat it as an
 *         idempotent request of the previous. In this case, <code>tags</code> will not be updated,
 *         even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, CreateActivityCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, CreateActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // CreateActivityInput
 *   name: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE",
 *     kmsDataKeyReusePeriodSeconds: Number("int"),
 *     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY", // required
 *   },
 * };
 * const command = new CreateActivityCommand(input);
 * const response = await client.send(command);
 * // { // CreateActivityOutput
 * //   activityArn: "STRING_VALUE", // required
 * //   creationDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateActivityCommandInput - {@link CreateActivityCommandInput}
 * @returns {@link CreateActivityCommandOutput}
 * @see {@link CreateActivityCommandInput} for command's `input` shape.
 * @see {@link CreateActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ActivityAlreadyExists} (client fault)
 *  <p>Activity already exists. <code>EncryptionConfiguration</code> may not be updated.</p>
 *
 * @throws {@link ActivityLimitExceeded} (client fault)
 *  <p>The maximum number of activities has been reached. Existing activities must be deleted
 *       before a new activity can be created.</p>
 *
 * @throws {@link InvalidEncryptionConfiguration} (client fault)
 *  <p>Received when <code>encryptionConfiguration</code> is specified but various conditions exist which make the configuration invalid. For example, if <code>type</code> is set to <code>CUSTOMER_MANAGED_KMS_KEY</code>, but <code>kmsKeyId</code> is null, or <code>kmsDataKeyReusePeriodSeconds</code> is not between 60 and 900, or the KMS key is not symmetric or inactive.</p>
 *
 * @throws {@link InvalidName} (client fault)
 *  <p>The provided name is not valid.</p>
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *  <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *  <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
 *
 * @throws {@link TooManyTags} (client fault)
 *  <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the
 *       Step Functions Developer Guide.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class CreateActivityCommand extends $Command
  .classBuilder<
    CreateActivityCommandInput,
    CreateActivityCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "CreateActivity", {})
  .n("SFNClient", "CreateActivityCommand")
  .sc(CreateActivity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateActivityInput;
      output: CreateActivityOutput;
    };
    sdk: {
      input: CreateActivityCommandInput;
      output: CreateActivityCommandOutput;
    };
  };
}
