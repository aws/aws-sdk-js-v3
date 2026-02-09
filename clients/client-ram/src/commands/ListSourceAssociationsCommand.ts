// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSourceAssociationsRequest, ListSourceAssociationsResponse } from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListSourceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourceAssociationsCommand}.
 */
export interface ListSourceAssociationsCommandInput extends ListSourceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceAssociationsCommand}.
 */
export interface ListSourceAssociationsCommandOutput extends ListSourceAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists source associations for resource shares. Source associations control which sources can be used with service principals in resource shares. This operation provides visibility into source associations for resource share owners.</p>
 *          <p>You can filter the results by resource share Amazon Resource Name (ARN), source ID, source type, or association status. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListSourceAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListSourceAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ListSourceAssociationsRequest
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   sourceId: "STRING_VALUE",
 *   sourceType: "STRING_VALUE",
 *   associationStatus: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED" || "SUSPENDED" || "SUSPENDING" || "RESTORING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSourceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceAssociationsResponse
 * //   sourceAssociations: [ // AssociatedSourceList
 * //     { // AssociatedSource
 * //       resourceShareArn: "STRING_VALUE",
 * //       sourceId: "STRING_VALUE",
 * //       sourceType: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"),
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourceAssociationsCommandInput - {@link ListSourceAssociationsCommandInput}
 * @returns {@link ListSourceAssociationsCommandOutput}
 * @see {@link ListSourceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListSourceAssociationsCommandOutput} for command's `response` shape.
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
export class ListSourceAssociationsCommand extends $Command
  .classBuilder<
    ListSourceAssociationsCommandInput,
    ListSourceAssociationsCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "ListSourceAssociations", {})
  .n("RAMClient", "ListSourceAssociationsCommand")
  .sc(ListSourceAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourceAssociationsRequest;
      output: ListSourceAssociationsResponse;
    };
    sdk: {
      input: ListSourceAssociationsCommandInput;
      output: ListSourceAssociationsCommandOutput;
    };
  };
}
