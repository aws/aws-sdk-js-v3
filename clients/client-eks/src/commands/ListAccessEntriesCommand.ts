// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccessEntriesRequest, ListAccessEntriesResponse } from "../models/models_0";
import { de_ListAccessEntriesCommand, se_ListAccessEntriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessEntriesCommand}.
 */
export interface ListAccessEntriesCommandInput extends ListAccessEntriesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessEntriesCommand}.
 */
export interface ListAccessEntriesCommandOutput extends ListAccessEntriesResponse, __MetadataBearer {}

/**
 * <p>Lists the access entries for your cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListAccessEntriesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListAccessEntriesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // ListAccessEntriesRequest
 *   clusterName: "STRING_VALUE", // required
 *   associatedPolicyArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAccessEntriesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessEntriesResponse
 * //   accessEntries: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessEntriesCommandInput - {@link ListAccessEntriesCommandInput}
 * @returns {@link ListAccessEntriesCommandOutput}
 * @see {@link ListAccessEntriesCommandInput} for command's `input` shape.
 * @see {@link ListAccessEntriesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class ListAccessEntriesCommand extends $Command
  .classBuilder<
    ListAccessEntriesCommandInput,
    ListAccessEntriesCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "ListAccessEntries", {})
  .n("EKSClient", "ListAccessEntriesCommand")
  .f(void 0, void 0)
  .ser(se_ListAccessEntriesCommand)
  .de(de_ListAccessEntriesCommand)
  .build() {}
