// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccessProfilesInput, ListAccessProfilesOutput } from "../models/models_0";
import { ListAccessProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccessProfilesCommand}.
 */
export interface ListAccessProfilesCommandInput extends ListAccessProfilesInput {}
/**
 * @public
 *
 * The output of {@link ListAccessProfilesCommand}.
 */
export interface ListAccessProfilesCommandOutput extends ListAccessProfilesOutput, __MetadataBearer {}

/**
 * Returns the access profiles in a space.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListAccessProfilesCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListAccessProfilesCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListAccessProfilesInput
 *   spaceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccessProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessProfilesOutput
 * //   items: [ // AccessProfileSummaryList // required
 * //     { // AccessProfileSummary
 * //       profileId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       profileType: "SERVICE_MANAGED" || "CUSTOMER_MANAGED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessProfilesCommandInput - {@link ListAccessProfilesCommandInput}
 * @returns {@link ListAccessProfilesCommandOutput}
 * @see {@link ListAccessProfilesCommandInput} for command's `input` shape.
 * @see {@link ListAccessProfilesCommandOutput} for command's `response` shape.
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
 * @example List access profiles in a space
 * ```javascript
 * // The following example lists the first page of access profiles in a space and returns a nextToken to retrieve the next page. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   maxResults: 50,
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new ListAccessProfilesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       arn: "arn:aws:cloudwatch:us-east-1:123456789012:access-profile/analyst-readonly",
 *       description: "Read-only access for analysts.",
 *       name: "Analyst read-only profile",
 *       profileId: "analyst-readonly",
 *       profileType: "CUSTOMER_MANAGED"
 *     },
 *     {
 *       arn: "arn:aws:cloudwatch:us-east-1:123456789012:access-profile/oncall-admin",
 *       description: "Full access for on-call responders.",
 *       name: "On-call admin profile",
 *       profileId: "oncall-admin",
 *       profileType: "CUSTOMER_MANAGED"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjIwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAccessProfilesCommand extends command<ListAccessProfilesCommandInput, ListAccessProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListAccessProfiles",
  ListAccessProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessProfilesInput;
      output: ListAccessProfilesOutput;
    };
    sdk: {
      input: ListAccessProfilesCommandInput;
      output: ListAccessProfilesCommandOutput;
    };
  };
}
