// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccessProfileInput, UpdateAccessProfileOutput } from "../models/models_0";
import { UpdateAccessProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccessProfileCommand}.
 */
export interface UpdateAccessProfileCommandInput extends UpdateAccessProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateAccessProfileCommand}.
 */
export interface UpdateAccessProfileCommandOutput extends UpdateAccessProfileOutput, __MetadataBearer {}

/**
 * Updates the name or description of an access profile.
 *
 * Only the provided fields are changed; omitted fields are left unchanged.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, UpdateAccessProfileCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, UpdateAccessProfileCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // UpdateAccessProfileInput
 *   spaceId: "STRING_VALUE", // required
 *   profileId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateAccessProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessProfileOutput
 * //   accessProfile: { // AccessProfile
 * //     profileId: "STRING_VALUE", // required
 * //     spaceId: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     assumeStatus: "ALLOWED" || "DENIED",
 * //     profileType: "SERVICE_MANAGED" || "CUSTOMER_MANAGED",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccessProfileCommandInput - {@link UpdateAccessProfileCommandInput}
 * @returns {@link UpdateAccessProfileCommandOutput}
 * @see {@link UpdateAccessProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  A service quota was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Update an access profile description
 * ```javascript
 * // The following example updates only the description of an access profile; the name is left unchanged. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   description: "Read-only access for analysts and on-call responders.",
 *   profileId: "analyst-readonly",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new UpdateAccessProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accessProfile: {
 *     arn: "arn:aws:cloudwatch:us-east-1:123456789012:access-profile/analyst-readonly",
 *     createdAt: "2026-09-16T14:22:31Z",
 *     description: "Read-only access for analysts and on-call responders.",
 *     name: "Analyst read-only profile",
 *     profileId: "analyst-readonly",
 *     profileType: "CUSTOMER_MANAGED",
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     updatedAt: "2026-09-17T09:11:52Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAccessProfileCommand extends command<UpdateAccessProfileCommandInput, UpdateAccessProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccessProfile",
  UpdateAccessProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessProfileInput;
      output: UpdateAccessProfileOutput;
    };
    sdk: {
      input: UpdateAccessProfileCommandInput;
      output: UpdateAccessProfileCommandOutput;
    };
  };
}
