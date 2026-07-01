// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSupportPermitsInput, ListSupportPermitsOutput } from "../models/models_0";
import { ListSupportPermits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSupportPermitsCommand}.
 */
export interface ListSupportPermitsCommandInput extends ListSupportPermitsInput {}
/**
 * @public
 *
 * The output of {@link ListSupportPermitsCommand}.
 */
export interface ListSupportPermitsCommandOutput extends ListSupportPermitsOutput, __MetadataBearer {}

/**
 * <p>Lists all support permits in the caller's account. Use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, ListSupportPermitsCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, ListSupportPermitsCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // ListSupportPermitsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   supportPermitStatuses: [ // SupportPermitStatuses
 *     "ACTIVE" || "INACTIVE" || "DELETING",
 *   ],
 * };
 * const command = new ListSupportPermitsCommand(input);
 * const response = await client.send(command);
 * // { // ListSupportPermitsOutput
 * //   supportPermits: [ // SupportPermitSummaries // required
 * //     { // SupportPermitSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       permit: { // Permit
 * //         actions: { // ActionSet Union: only one key present
 * //           allActions: {},
 * //           actions: [ // Actions
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         resources: { // ResourceSet Union: only one key present
 * //           allResourcesInRegion: {},
 * //           resources: [ // Resources
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         conditions: [ // Conditions
 * //           { // Condition Union: only one key present
 * //             allowAfter: new Date("TIMESTAMP"),
 * //             allowBefore: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //       },
 * //       status: "ACTIVE" || "INACTIVE" || "DELETING", // required
 * //       signingKeyInfo: { // SigningKeyInfo Union: only one key present
 * //         kmsKey: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       supportCaseDisplayId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSupportPermitsCommandInput - {@link ListSupportPermitsCommandInput}
 * @returns {@link ListSupportPermitsCommandOutput}
 * @see {@link ListSupportPermitsCommandInput} for command's `input` shape.
 * @see {@link ListSupportPermitsCommandOutput} for command's `response` shape.
 * @see {@link SupportAuthZClientResolvedConfig | config} for SupportAuthZClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeded the allowed limit. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SupportAuthZServiceException}
 * <p>Base exception class for all service exceptions from SupportAuthZ service.</p>
 *
 *
 * @public
 */
export class ListSupportPermitsCommand extends command<ListSupportPermitsCommandInput, ListSupportPermitsCommandOutput>(
  _ep0,
  _mw0,
  "ListSupportPermits",
  ListSupportPermits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSupportPermitsInput;
      output: ListSupportPermitsOutput;
    };
    sdk: {
      input: ListSupportPermitsCommandInput;
      output: ListSupportPermitsCommandOutput;
    };
  };
}
