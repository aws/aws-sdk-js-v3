// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRotationOverrideRequest, CreateRotationOverrideResult } from "../models/models_0";
import { CreateRotationOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an override for a rotation in an on-call schedule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateRotationOverrideCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateRotationOverrideCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
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
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource that doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMContactsServiceException}
 *
 * Base exception class for all service exceptions from SSMContacts service.
 *
 * @public
 */
export class CreateRotationOverrideCommand extends command<CreateRotationOverrideCommandInput, CreateRotationOverrideCommandOutput>(
  _ep0,
  _mw0,
  "CreateRotationOverride",
  CreateRotationOverride$
) {
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
