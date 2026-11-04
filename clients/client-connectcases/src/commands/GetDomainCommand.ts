// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDomainRequest, GetDomainResponse } from "../models/models_0";
import { GetDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDomainCommand}.
 */
export interface GetDomainCommandInput extends GetDomainRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainCommand}.
 */
export interface GetDomainCommandOutput extends GetDomainResponse, __MetadataBearer {}

/**
 * Returns information about a specific domain if it exists.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetDomainCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetDomainCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // GetDomainRequest
 *   domainId: "STRING_VALUE", // required
 * };
 * const command = new GetDomainCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainResponse
 * //   domainId: "STRING_VALUE", // required
 * //   domainArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   createdTime: new Date("TIMESTAMP"), // required
 * //   domainStatus: "STRING_VALUE", // required
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainCommandInput - {@link GetDomainCommandInput}
 * @returns {@link GetDomainCommandOutput}
 * @see {@link GetDomainCommandInput} for command's `input` shape.
 * @see {@link GetDomainCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class GetDomainCommand extends command<GetDomainCommandInput, GetDomainCommandOutput>(
  _ep0,
  _mw0,
  "GetDomain",
  GetDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainRequest;
      output: GetDomainResponse;
    };
    sdk: {
      input: GetDomainCommandInput;
      output: GetDomainCommandOutput;
    };
  };
}
