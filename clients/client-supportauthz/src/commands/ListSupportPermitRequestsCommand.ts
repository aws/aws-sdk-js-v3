// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSupportPermitRequestsInput, ListSupportPermitRequestsOutput } from "../models/models_0";
import { ListSupportPermitRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSupportPermitRequestsCommand}.
 */
export interface ListSupportPermitRequestsCommandInput extends ListSupportPermitRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListSupportPermitRequestsCommand}.
 */
export interface ListSupportPermitRequestsCommandOutput extends ListSupportPermitRequestsOutput, __MetadataBearer {}

/**
 * <p>Lists permit requests from AWS support operators. Use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, ListSupportPermitRequestsCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, ListSupportPermitRequestsCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // ListSupportPermitRequestsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   supportCaseDisplayId: "STRING_VALUE",
 * };
 * const command = new ListSupportPermitRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListSupportPermitRequestsOutput
 * //   supportPermitRequests: [ // SupportPermitRequests // required
 * //     { // SupportPermitRequest
 * //       requestArn: "STRING_VALUE", // required
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
 * //       supportCaseDisplayId: "STRING_VALUE", // required
 * //       status: "PENDING" || "ACCEPTED" || "REJECTED" || "CANCELLED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSupportPermitRequestsCommandInput - {@link ListSupportPermitRequestsCommandInput}
 * @returns {@link ListSupportPermitRequestsCommandOutput}
 * @see {@link ListSupportPermitRequestsCommandInput} for command's `input` shape.
 * @see {@link ListSupportPermitRequestsCommandOutput} for command's `response` shape.
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
export class ListSupportPermitRequestsCommand extends command<ListSupportPermitRequestsCommandInput, ListSupportPermitRequestsCommandOutput>(
  _ep0,
  _mw0,
  "ListSupportPermitRequests",
  ListSupportPermitRequests$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSupportPermitRequestsInput;
      output: ListSupportPermitRequestsOutput;
    };
    sdk: {
      input: ListSupportPermitRequestsCommandInput;
      output: ListSupportPermitRequestsCommandOutput;
    };
  };
}
