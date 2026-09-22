// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSpacesForOrganizationInput, ListSpacesForOrganizationOutput } from "../models/models_0";
import { ListSpacesForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSpacesForOrganizationCommand}.
 */
export interface ListSpacesForOrganizationCommandInput extends ListSpacesForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link ListSpacesForOrganizationCommand}.
 */
export interface ListSpacesForOrganizationCommandOutput extends ListSpacesForOrganizationOutput, __MetadataBearer {}

/**
 * Returns the spaces across all member accounts in the organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListSpacesForOrganizationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListSpacesForOrganizationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListSpacesForOrganizationInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSpacesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ListSpacesForOrganizationOutput
 * //   items: [ // SpaceSummaryList // required
 * //     { // SpaceSummary
 * //       spaceId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       spaceArn: "STRING_VALUE", // required
 * //       domainArn: "STRING_VALUE",
 * //       region: "STRING_VALUE", // required
 * //       ownerAccountId: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "SUSPENDED" || "MOVING", // required
 * //       statusReason: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpacesForOrganizationCommandInput - {@link ListSpacesForOrganizationCommandInput}
 * @returns {@link ListSpacesForOrganizationCommandOutput}
 * @see {@link ListSpacesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListSpacesForOrganizationCommandOutput} for command's `response` shape.
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
 * @example List spaces across the organization
 * ```javascript
 * // The following example lists the first page of spaces across all member accounts in the organization. The results include spaces owned by different accounts, along with a nextToken to retrieve the next page. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   maxResults: 50
 * };
 * const command = new ListSpacesForOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       name: "prod-observability",
 *       ownerAccountId: "111122223333",
 *       region: "us-east-1",
 *       spaceArn: "arn:aws:cloudwatch:us-east-1:111122223333:space/c1d2e3f4-5a6b-4c7d-8e9f-0a1b2c3d4e5f",
 *       spaceId: "c1d2e3f4-5a6b-4c7d-8e9f-0a1b2c3d4e5f",
 *       status: "ACTIVE",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     },
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       name: "prod-observability",
 *       ownerAccountId: "444455556666",
 *       region: "us-east-1",
 *       spaceArn: "arn:aws:cloudwatch:us-east-1:444455556666:space/d4e5f6a7-8b9c-4d0e-8f1a-2b3c4d5e6f7a",
 *       spaceId: "d4e5f6a7-8b9c-4d0e-8f1a-2b3c4d5e6f7a",
 *       status: "ACTIVE",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjIwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSpacesForOrganizationCommand extends command<ListSpacesForOrganizationCommandInput, ListSpacesForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "ListSpacesForOrganization",
  ListSpacesForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSpacesForOrganizationInput;
      output: ListSpacesForOrganizationOutput;
    };
    sdk: {
      input: ListSpacesForOrganizationCommandInput;
      output: ListSpacesForOrganizationCommandOutput;
    };
  };
}
