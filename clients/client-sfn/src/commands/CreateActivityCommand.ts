// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateActivityInput, CreateActivityOutput } from "../models/models_0";
import { CreateActivity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the `GetActivityTask` API action and respond using `SendTask*` API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.
 *
 * > **Note:** `CreateActivity` is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. `CreateActivity`'s idempotency check is based on the activity `name`. If a following request has different `tags` values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, `tags` will not be updated, even if they are different.
 *
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
 *
 * Activity already exists. `EncryptionConfiguration` may not be updated.
 *
 * @throws {@link ActivityLimitExceeded} (client fault)
 *
 * The maximum number of activities has been reached. Existing activities must be deleted before a new activity can be created.
 *
 * @throws {@link InvalidEncryptionConfiguration} (client fault)
 *
 * Received when `encryptionConfiguration` is specified but various conditions exist which make the configuration invalid. For example, if `type` is set to `CUSTOMER_MANAGED_KMS_KEY`, but `kmsKeyId` is null, or `kmsDataKeyReusePeriodSeconds` is not between 60 and 900, or the KMS key is not symmetric or inactive.
 *
 * @throws {@link InvalidName} (client fault)
 *
 * The provided name is not valid.
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *
 * Either your KMS key policy or API caller does not have the required permissions.
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *
 * Received when KMS returns `ThrottlingException` for a KMS call that Step Functions makes on behalf of the caller.
 *
 * @throws {@link TooManyTags} (client fault)
 *
 * You've exceeded the number of tags allowed for a resource. See the [Limits Topic](https://docs.aws.amazon.com/step-functions/latest/dg/limits.html) in the Step Functions Developer Guide.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class CreateActivityCommand extends command<CreateActivityCommandInput, CreateActivityCommandOutput>(
  _ep0,
  _mw0,
  "CreateActivity",
  CreateActivity$
) {
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
