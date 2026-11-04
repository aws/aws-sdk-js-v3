// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourcePoliciesRequest, ListResourcePoliciesResponse } from "../models/models_0";
import { ListResourcePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcePoliciesCommand}.
 */
export interface ListResourcePoliciesCommandInput extends ListResourcePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcePoliciesCommand}.
 */
export interface ListResourcePoliciesCommandOutput extends ListResourcePoliciesResponse, __MetadataBearer {}

/**
 * Returns a list of policies for a resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, ListResourcePoliciesCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, ListResourcePoliciesCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // ListResourcePoliciesRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcePoliciesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ResourcePolicies: [ // ListResourcePoliciesResponseResourcePolicies
 * //     { // ListResourcePoliciesResponseResourcePolicy
 * //       PolicyArn: "STRING_VALUE",
 * //       PolicyType: "AWS_MANAGED" || "AWS_RAM",
 * //       PolicyName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResourcePoliciesCommandInput - {@link ListResourcePoliciesCommandInput}
 * @returns {@link ListResourcePoliciesCommandOutput}
 * @see {@link ListResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action. Check your permissions, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist. Check the resource ID, and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link MPAServiceException}
 *
 * Base exception class for all service exceptions from MPA service.
 *
 * @public
 */
export class ListResourcePoliciesCommand extends command<ListResourcePoliciesCommandInput, ListResourcePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListResourcePolicies",
  ListResourcePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcePoliciesRequest;
      output: ListResourcePoliciesResponse;
    };
    sdk: {
      input: ListResourcePoliciesCommandInput;
      output: ListResourcePoliciesCommandOutput;
    };
  };
}
