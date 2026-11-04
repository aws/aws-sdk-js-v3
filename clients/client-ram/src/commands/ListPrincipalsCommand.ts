// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPrincipalsRequest, ListPrincipalsResponse } from "../models/models_0";
import { ListPrincipals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPrincipalsCommand}.
 */
export interface ListPrincipalsCommandInput extends ListPrincipalsRequest {}
/**
 * @public
 *
 * The output of {@link ListPrincipalsCommand}.
 */
export interface ListPrincipalsCommandOutput extends ListPrincipalsResponse, __MetadataBearer {}

/**
 * Lists the principals that you are sharing resources with or that are sharing resources with you.
 *
 * > **Note:** Always check the `NextToken` response parameter for a `null` value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The `NextToken` response parameter value is `null` *only* when there are no more results to display.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPrincipalsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPrincipalsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ListPrincipalsRequest
 *   resourceOwner: "SELF" || "OTHER-ACCOUNTS", // required
 *   resourceArn: "STRING_VALUE",
 *   principals: [ // PrincipalArnOrIdList
 *     "STRING_VALUE",
 *   ],
 *   resourceType: "STRING_VALUE",
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPrincipalsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrincipalsResponse
 * //   principals: [ // PrincipalList
 * //     { // Principal
 * //       id: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       external: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalsCommandInput - {@link ListPrincipalsCommandInput}
 * @returns {@link ListPrincipalsCommandOutput}
 * @see {@link ListPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The operation failed because the specified value for `NextToken` isn't valid. You must specify a value you received in the `NextToken` response of a previous call to this operation.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link UnknownResourceException} (client fault)
 *
 * The operation failed because a specified resource couldn't be found.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class ListPrincipalsCommand extends command<ListPrincipalsCommandInput, ListPrincipalsCommandOutput>(
  _ep0,
  _mw0,
  "ListPrincipals",
  ListPrincipals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrincipalsRequest;
      output: ListPrincipalsResponse;
    };
    sdk: {
      input: ListPrincipalsCommandInput;
      output: ListPrincipalsCommandOutput;
    };
  };
}
