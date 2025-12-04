// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { ListResourceSetsRequest, ListResourceSetsResponse } from "../models/models_0";
import { ListResourceSets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceSetsCommand}.
 */
export interface ListResourceSetsCommandInput extends ListResourceSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceSetsCommand}.
 */
export interface ListResourceSetsCommandOutput extends ListResourceSetsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ResourceSetSummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListResourceSetsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListResourceSetsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // ListResourceSetsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourceSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceSetsResponse
 * //   ResourceSets: [ // ResourceSetSummaryList
 * //     { // ResourceSetSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       ResourceSetStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceSetsCommandInput - {@link ListResourceSetsCommandInput}
 * @returns {@link ListResourceSetsCommandOutput}
 * @see {@link ListResourceSetsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSetsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class ListResourceSetsCommand extends $Command
  .classBuilder<
    ListResourceSetsCommandInput,
    ListResourceSetsCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "ListResourceSets", {})
  .n("FMSClient", "ListResourceSetsCommand")
  .sc(ListResourceSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceSetsRequest;
      output: ListResourceSetsResponse;
    };
    sdk: {
      input: ListResourceSetsCommandInput;
      output: ListResourceSetsCommandOutput;
    };
  };
}
