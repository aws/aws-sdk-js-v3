// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPrincipalsRequest, ListPrincipalsResponse } from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListPrincipals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the principals that you are sharing resources with or that are sharing resources
 *             with you.</p>
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
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class ListPrincipalsCommand extends $Command
  .classBuilder<
    ListPrincipalsCommandInput,
    ListPrincipalsCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "ListPrincipals", {})
  .n("RAMClient", "ListPrincipalsCommand")
  .sc(ListPrincipals$)
  .build() {
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
