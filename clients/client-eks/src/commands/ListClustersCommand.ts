// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListClustersRequest, ListClustersResponse } from "../models/models_0";
import { de_ListClustersCommand, se_ListClustersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClustersCommand}.
 */
export interface ListClustersCommandInput extends ListClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListClustersCommand}.
 */
export interface ListClustersCommandOutput extends ListClustersResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon EKS clusters in your Amazon Web Services account in the
 *             specified Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListClustersCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListClustersCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // ListClustersRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   include: [ // IncludeClustersList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersResponse
 * //   clusters: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 * @example To list your available clusters
 * ```javascript
 * // This example command lists all of your available clusters in your default region.
 * const input = {};
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "clusters": [
 *     "devel",
 *     "prod"
 *   ]
 * }
 * *\/
 * // example id: to-list-your-available-clusters-1527868801040
 * ```
 *
 */
export class ListClustersCommand extends $Command
  .classBuilder<
    ListClustersCommandInput,
    ListClustersCommandOutput,
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
  .s("AWSWesleyFrontend", "ListClusters", {})
  .n("EKSClient", "ListClustersCommand")
  .f(void 0, void 0)
  .ser(se_ListClustersCommand)
  .de(de_ListClustersCommand)
  .build() {}
