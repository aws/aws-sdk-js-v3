// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRegistrationVersionRequest, CreateRegistrationVersionResult } from "../models/models_0";
import { CreateRegistrationVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRegistrationVersionCommand}.
 */
export interface CreateRegistrationVersionCommandInput extends CreateRegistrationVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRegistrationVersionCommand}.
 */
export interface CreateRegistrationVersionCommandOutput extends CreateRegistrationVersionResult, __MetadataBearer {}

/**
 * Create a new version of the registration and increase the **VersionNumber**. The previous version of the registration becomes read-only.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateRegistrationVersionCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateRegistrationVersionCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CreateRegistrationVersionRequest
 *   RegistrationId: "STRING_VALUE", // required
 * };
 * const command = new CreateRegistrationVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRegistrationVersionResult
 * //   RegistrationArn: "STRING_VALUE", // required
 * //   RegistrationId: "STRING_VALUE", // required
 * //   VersionNumber: Number("long"), // required
 * //   RegistrationVersionStatus: "STRING_VALUE", // required
 * //   RegistrationVersionStatusHistory: { // RegistrationVersionStatusHistory
 * //     DraftTimestamp: new Date("TIMESTAMP"), // required
 * //     SubmittedTimestamp: new Date("TIMESTAMP"),
 * //     AwsReviewingTimestamp: new Date("TIMESTAMP"),
 * //     ReviewingTimestamp: new Date("TIMESTAMP"),
 * //     RequiresAuthenticationTimestamp: new Date("TIMESTAMP"),
 * //     ApprovedTimestamp: new Date("TIMESTAMP"),
 * //     DiscardedTimestamp: new Date("TIMESTAMP"),
 * //     DeniedTimestamp: new Date("TIMESTAMP"),
 * //     RevokedTimestamp: new Date("TIMESTAMP"),
 * //     ArchivedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRegistrationVersionCommandInput - {@link CreateRegistrationVersionCommandInput}
 * @returns {@link CreateRegistrationVersionCommandOutput}
 * @see {@link CreateRegistrationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateRegistrationVersionCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource couldn't be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation exception for a field.
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 *
 * Base exception class for all service exceptions from PinpointSMSVoiceV2 service.
 *
 * @public
 */
export class CreateRegistrationVersionCommand extends command<CreateRegistrationVersionCommandInput, CreateRegistrationVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateRegistrationVersion",
  CreateRegistrationVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRegistrationVersionRequest;
      output: CreateRegistrationVersionResult;
    };
    sdk: {
      input: CreateRegistrationVersionCommandInput;
      output: CreateRegistrationVersionCommandOutput;
    };
  };
}
