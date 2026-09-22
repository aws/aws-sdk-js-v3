// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccessProfileInput, CreateAccessProfileOutput } from "../models/models_0";
import { CreateAccessProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccessProfileCommand}.
 */
export interface CreateAccessProfileCommandInput extends CreateAccessProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateAccessProfileCommand}.
 */
export interface CreateAccessProfileCommandOutput extends CreateAccessProfileOutput, __MetadataBearer {}

/**
 * Creates an access profile in a space.
 *
 * Use GetAccessProfile and ListAccessProfiles to retrieve profiles,
 * and UpdateAccessProfile to modify one.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, CreateAccessProfileCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, CreateAccessProfileCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // CreateAccessProfileInput
 *   spaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAccessProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessProfileOutput
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
 * @param CreateAccessProfileCommandInput - {@link CreateAccessProfileCommandInput}
 * @returns {@link CreateAccessProfileCommandOutput}
 * @see {@link CreateAccessProfileCommandInput} for command's `input` shape.
 * @see {@link CreateAccessProfileCommandOutput} for command's `response` shape.
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
 * @example Create an access profile
 * ```javascript
 * // The following example creates a customer-managed access profile in a space. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   clientToken: "3f2a9c1e-7b04-4d8a-9e15-6c2b8d0f4a73",
 *   description: "Read-only access for analysts.",
 *   name: "Analyst read-only profile",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *   tags: {
 *     Team: "observability"
 *   }
 * };
 * const command = new CreateAccessProfileCommand(input);
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
export class CreateAccessProfileCommand extends command<CreateAccessProfileCommandInput, CreateAccessProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccessProfile",
  CreateAccessProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessProfileInput;
      output: CreateAccessProfileOutput;
    };
    sdk: {
      input: CreateAccessProfileCommandInput;
      output: CreateAccessProfileCommandOutput;
    };
  };
}
