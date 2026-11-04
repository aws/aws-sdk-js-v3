// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIdentitySourcesRequest, ListIdentitySourcesResponse } from "../models/models_0";
import { ListIdentitySources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIdentitySourcesCommand}.
 */
export interface ListIdentitySourcesCommandInput extends ListIdentitySourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentitySourcesCommand}.
 */
export interface ListIdentitySourcesCommandOutput extends ListIdentitySourcesResponse, __MetadataBearer {}

/**
 * Returns a list of identity sources. For more information, see [Identity Source](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html) in the *Multi-party approval User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, ListIdentitySourcesCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, ListIdentitySourcesCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // ListIdentitySourcesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIdentitySourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentitySourcesResponse
 * //   NextToken: "STRING_VALUE",
 * //   IdentitySources: [ // IdentitySources
 * //     { // IdentitySourceForList
 * //       IdentitySourceType: "IAM_IDENTITY_CENTER",
 * //       IdentitySourceParameters: { // IdentitySourceParametersForList Union: only one key present
 * //         IamIdentityCenter: { // IamIdentityCenterForList
 * //           InstanceArn: "STRING_VALUE",
 * //           ApprovalPortalUrl: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //         },
 * //       },
 * //       IdentitySourceArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Status: "CREATING" || "ACTIVE" || "DELETING" || "ERROR",
 * //       StatusCode: "ACCESS_DENIED" || "DELETION_FAILED" || "IDC_INSTANCE_NOT_FOUND" || "IDC_INSTANCE_NOT_VALID",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIdentitySourcesCommandInput - {@link ListIdentitySourcesCommandInput}
 * @returns {@link ListIdentitySourcesCommandOutput}
 * @see {@link ListIdentitySourcesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitySourcesCommandOutput} for command's `response` shape.
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
export class ListIdentitySourcesCommand extends command<ListIdentitySourcesCommandInput, ListIdentitySourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListIdentitySources",
  ListIdentitySources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentitySourcesRequest;
      output: ListIdentitySourcesResponse;
    };
    sdk: {
      input: ListIdentitySourcesCommandInput;
      output: ListIdentitySourcesCommandOutput;
    };
  };
}
