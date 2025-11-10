// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccessEntryRequest, UpdateAccessEntryResponse } from "../models/models_0";
import { UpdateAccessEntry } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessEntryCommand}.
 */
export interface UpdateAccessEntryCommandInput extends UpdateAccessEntryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessEntryCommand}.
 */
export interface UpdateAccessEntryCommandOutput extends UpdateAccessEntryResponse, __MetadataBearer {}

/**
 * <p>Updates an access entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateAccessEntryCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateAccessEntryCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // UpdateAccessEntryRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   kubernetesGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 *   username: "STRING_VALUE",
 * };
 * const command = new UpdateAccessEntryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessEntryResponse
 * //   accessEntry: { // AccessEntry
 * //     clusterName: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //     kubernetesGroups: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     accessEntryArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     username: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccessEntryCommandInput - {@link UpdateAccessEntryCommandInput}
 * @returns {@link UpdateAccessEntryCommandOutput}
 * @see {@link UpdateAccessEntryCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessEntryCommandOutput} for command's `response` shape.
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
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *             specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class UpdateAccessEntryCommand extends $Command
  .classBuilder<
    UpdateAccessEntryCommandInput,
    UpdateAccessEntryCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "UpdateAccessEntry", {})
  .n("EKSClient", "UpdateAccessEntryCommand")
  .sc(UpdateAccessEntry)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessEntryRequest;
      output: UpdateAccessEntryResponse;
    };
    sdk: {
      input: UpdateAccessEntryCommandInput;
      output: UpdateAccessEntryCommandOutput;
    };
  };
}
