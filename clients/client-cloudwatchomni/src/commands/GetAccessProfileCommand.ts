// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessProfileInput, GetAccessProfileOutput } from "../models/models_0";
import { GetAccessProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessProfileCommand}.
 */
export interface GetAccessProfileCommandInput extends GetAccessProfileInput {}
/**
 * @public
 *
 * The output of {@link GetAccessProfileCommand}.
 */
export interface GetAccessProfileCommandOutput extends GetAccessProfileOutput, __MetadataBearer {}

/**
 * Retrieves an access profile by ID.
 *
 * The response indicates whether the calling principal is currently allowed to
 * assume the profile.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetAccessProfileCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetAccessProfileCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetAccessProfileInput
 *   spaceId: "STRING_VALUE", // required
 *   profileId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessProfileOutput
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
 * @param GetAccessProfileCommandInput - {@link GetAccessProfileCommandInput}
 * @returns {@link GetAccessProfileCommandOutput}
 * @see {@link GetAccessProfileCommandInput} for command's `input` shape.
 * @see {@link GetAccessProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
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
 * @example Get an access profile
 * ```javascript
 * // The following example retrieves an access profile by ID, including whether the calling principal is currently allowed to assume it. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   profileId: "analyst-readonly",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new GetAccessProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accessProfile: {
 *     arn: "arn:aws:cloudwatch:us-east-1:123456789012:access-profile/analyst-readonly",
 *     assumeStatus: "ALLOWED",
 *     createdAt: "2026-09-16T14:22:31Z",
 *     description: "Read-only access for analysts.",
 *     name: "Analyst read-only profile",
 *     profileId: "analyst-readonly",
 *     profileType: "CUSTOMER_MANAGED",
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccessProfileCommand extends command<GetAccessProfileCommandInput, GetAccessProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessProfile",
  GetAccessProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessProfileInput;
      output: GetAccessProfileOutput;
    };
    sdk: {
      input: GetAccessProfileCommandInput;
      output: GetAccessProfileCommandOutput;
    };
  };
}
