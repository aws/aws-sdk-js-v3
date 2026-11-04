// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetHumanReadableSummaryRequest, GetHumanReadableSummaryResponse } from "../models/models_0";
import { GetHumanReadableSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetHumanReadableSummaryCommand}.
 */
export interface GetHumanReadableSummaryCommandInput extends GetHumanReadableSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetHumanReadableSummaryCommand}.
 */
export interface GetHumanReadableSummaryCommandOutput extends GetHumanReadableSummaryResponse, __MetadataBearer {}

/**
 * Retrieves a human readable summary for a given entity. At this time, the only supported entity type is `delegation-request`
 *
 * This method uses a Large Language Model (LLM) to generate the summary.
 *
 * If a delegation request has no owner or owner account, `GetHumanReadableSummary` for that delegation request can be called by any account. If the owner account is assigned but there is no owner id, only identities within that owner account can call `GetHumanReadableSummary` for the delegation request to retrieve a summary of that request. Once the delegation request is fully owned, the owner of the request gets a default permission to get that delegation request. For more details, read default permissions granted to delegation requests. These rules are identical to [GetDelegationRequest](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetDelegationRequest.html) API behavior, such that a party who has permissions to call [GetDelegationRequest](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetDelegationRequest.html) for a given delegation request will always be able to retrieve the human readable summary for that request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetHumanReadableSummaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetHumanReadableSummaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetHumanReadableSummaryRequest
 *   EntityArn: "STRING_VALUE", // required
 *   Locale: "STRING_VALUE",
 * };
 * const command = new GetHumanReadableSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetHumanReadableSummaryResponse
 * //   SummaryContent: "STRING_VALUE",
 * //   Locale: "STRING_VALUE",
 * //   SummaryState: "AVAILABLE" || "NOT_AVAILABLE" || "NOT_SUPPORTED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param GetHumanReadableSummaryCommandInput - {@link GetHumanReadableSummaryCommandInput}
 * @returns {@link GetHumanReadableSummaryCommandOutput}
 * @see {@link GetHumanReadableSummaryCommandInput} for command's `input` shape.
 * @see {@link GetHumanReadableSummaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class GetHumanReadableSummaryCommand extends command<GetHumanReadableSummaryCommandInput, GetHumanReadableSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetHumanReadableSummary",
  GetHumanReadableSummary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHumanReadableSummaryRequest;
      output: GetHumanReadableSummaryResponse;
    };
    sdk: {
      input: GetHumanReadableSummaryCommandInput;
      output: GetHumanReadableSummaryCommandOutput;
    };
  };
}
