// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateMemberRequest, AssociateMemberResponse } from "../models/models_0";
import { AssociateMember$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateMemberCommand}.
 */
export interface AssociateMemberCommandInput extends AssociateMemberRequest {}
/**
 * @public
 *
 * The output of {@link AssociateMemberCommand}.
 */
export interface AssociateMemberCommandOutput extends AssociateMemberResponse, __MetadataBearer {}

/**
 * Associates an Amazon Web Services account with an Amazon Inspector delegated administrator. An HTTP 200 response indicates the association was successfully started, but doesn’t indicate whether it was completed. You can check if the association completed by using [ListMembers](https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListMembers.html) for multiple accounts or [GetMembers](https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetMember.html) for a single account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, AssociateMemberCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, AssociateMemberCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // AssociateMemberRequest
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new AssociateMemberCommand(input);
 * const response = await client.send(command);
 * // { // AssociateMemberResponse
 * //   accountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateMemberCommandInput - {@link AssociateMemberCommandInput}
 * @returns {@link AssociateMemberCommandOutput}
 * @see {@link AssociateMemberCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use Service Quotas to request a service quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class AssociateMemberCommand extends command<AssociateMemberCommandInput, AssociateMemberCommandOutput>(
  _ep0,
  _mw0,
  "AssociateMember",
  AssociateMember$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateMemberRequest;
      output: AssociateMemberResponse;
    };
    sdk: {
      input: AssociateMemberCommandInput;
      output: AssociateMemberCommandOutput;
    };
  };
}
