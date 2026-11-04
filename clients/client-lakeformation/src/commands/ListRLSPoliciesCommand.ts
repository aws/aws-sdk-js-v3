// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRLSPoliciesRequest, ListRLSPoliciesResponse } from "../models/models_0";
import { ListRLSPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRLSPoliciesCommand}.
 */
export interface ListRLSPoliciesCommandInput extends ListRLSPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListRLSPoliciesCommand}.
 */
export interface ListRLSPoliciesCommandOutput extends ListRLSPoliciesResponse, __MetadataBearer {}

/**
 * Lists the row-level security policies in the Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListRLSPoliciesCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListRLSPoliciesCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // ListRLSPoliciesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRLSPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListRLSPoliciesResponse
 * //   RLSPolicies: [ // RLSPolicyList
 * //     { // RLSPolicy
 * //       CatalogId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       AttachmentColumns: [ // ColumnList
 * //         { // Column
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE",
 * //         },
 * //       ],
 * //       FilterExpression: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRLSPoliciesCommandInput - {@link ListRLSPoliciesCommandInput}
 * @returns {@link ListRLSPoliciesCommandOutput}
 * @see {@link ListRLSPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListRLSPoliciesCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class ListRLSPoliciesCommand extends command<ListRLSPoliciesCommandInput, ListRLSPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListRLSPolicies",
  ListRLSPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRLSPoliciesRequest;
      output: ListRLSPoliciesResponse;
    };
    sdk: {
      input: ListRLSPoliciesCommandInput;
      output: ListRLSPoliciesCommandOutput;
    };
  };
}
