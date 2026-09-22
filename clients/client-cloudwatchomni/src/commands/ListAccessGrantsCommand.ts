// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccessGrantsInput, ListAccessGrantsOutput } from "../models/models_0";
import { ListAccessGrants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccessGrantsCommand}.
 */
export interface ListAccessGrantsCommandInput extends ListAccessGrantsInput {}
/**
 * @public
 *
 * The output of {@link ListAccessGrantsCommand}.
 */
export interface ListAccessGrantsCommandOutput extends ListAccessGrantsOutput, __MetadataBearer {}

/**
 * Returns AccessGrants, with optional filtering by domain, space, principal, or
 * permission. A grant is returned only when it matches every filter supplied.
 * With no filters, returns the grants for the current account and Region.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListAccessGrantsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListAccessGrantsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListAccessGrantsInput
 *   domainId: "STRING_VALUE",
 *   spaceId: "STRING_VALUE",
 *   principalId: "STRING_VALUE",
 *   principalType: "IDC_USER" || "IDC_GROUP" || "IAM_USER" || "IAM_ROLE" || "IAM_ROOT" || "ACCESS_PROFILE" || "ALERT" || "AGENT",
 *   permission: "SPACE_ADMIN" || "READ" || "READ_WRITE_DELETE" || "CUSTOM",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccessGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessGrantsOutput
 * //   items: [ // AccessGrantSummaryList // required
 * //     { // AccessGrantSummary
 * //       grantId: "STRING_VALUE", // required
 * //       grantArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       domainId: "STRING_VALUE", // required
 * //       principal: { // AccessGrantPrincipal
 * //         principalType: "IDC_USER" || "IDC_GROUP" || "IAM_USER" || "IAM_ROLE" || "IAM_ROOT" || "ACCESS_PROFILE" || "ALERT" || "AGENT", // required
 * //         principalId: "STRING_VALUE",
 * //         principalAttributes: [ // AccessGrantPrincipalAttributeList
 * //           { // AccessGrantPrincipalAttribute
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       permission: "SPACE_ADMIN" || "READ" || "READ_WRITE_DELETE" || "CUSTOM", // required
 * //       grantType: "SERVICE_MANAGED" || "CUSTOMER_MANAGED", // required
 * //       spaceId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessGrantsCommandInput - {@link ListAccessGrantsCommandInput}
 * @returns {@link ListAccessGrantsCommandOutput}
 * @see {@link ListAccessGrantsCommandInput} for command's `input` shape.
 * @see {@link ListAccessGrantsCommandOutput} for command's `response` shape.
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
 * @example List access grants in a space
 * ```javascript
 * // The following example lists the first page of access grants in a space and returns a nextToken to retrieve the next page. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-1a2b3c4d5e",
 *   maxResults: 50,
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new ListAccessGrantsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       domainId: "d-1a2b3c4d5e",
 *       grantArn: "arn:aws:cloudwatch:us-east-1:123456789012:access-grant/7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d",
 *       grantId: "7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d",
 *       grantType: "CUSTOMER_MANAGED",
 *       name: "analyst-read-access",
 *       permission: "CUSTOM",
 *       principal: {
 *         principalId: "94b6c7d8-1a2b-4c3d-9e4f-5a6b7c8d9e0f",
 *         principalType: "IDC_USER"
 *       },
 *       spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 *     },
 *     {
 *       domainId: "d-1a2b3c4d5e",
 *       grantArn: "arn:aws:cloudwatch:us-east-1:123456789012:access-grant/8a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
 *       grantId: "8a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
 *       grantType: "CUSTOMER_MANAGED",
 *       name: "oncall-read-write",
 *       permission: "READ_WRITE_DELETE",
 *       principal: {
 *         principalId: "2f5a8c1b-6d3e-4f7a-8b9c-0d1e2f3a4b5c",
 *         principalType: "IDC_GROUP"
 *       },
 *       spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjIwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAccessGrantsCommand extends command<ListAccessGrantsCommandInput, ListAccessGrantsCommandOutput>(
  _ep0,
  _mw0,
  "ListAccessGrants",
  ListAccessGrants$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessGrantsInput;
      output: ListAccessGrantsOutput;
    };
    sdk: {
      input: ListAccessGrantsCommandInput;
      output: ListAccessGrantsCommandOutput;
    };
  };
}
