// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessEntryRequest, DeleteAccessEntryResponse } from "../models/models_0";
import { de_DeleteAccessEntryCommand, se_DeleteAccessEntryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessEntryCommand}.
 */
export interface DeleteAccessEntryCommandInput extends DeleteAccessEntryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessEntryCommand}.
 */
export interface DeleteAccessEntryCommandOutput extends DeleteAccessEntryResponse, __MetadataBearer {}

/**
 * <p>Deletes an access entry.</p>
 *          <p>Deleting an access entry of a type other than <code>Standard</code> can cause your
 *             cluster to function improperly. If you delete an access entry in error, you can recreate
 *             it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteAccessEntryCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteAccessEntryCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DeleteAccessEntryRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessEntryCommandInput - {@link DeleteAccessEntryCommandInput}
 * @returns {@link DeleteAccessEntryCommandOutput}
 * @see {@link DeleteAccessEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessEntryCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
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
export class DeleteAccessEntryCommand extends $Command
  .classBuilder<
    DeleteAccessEntryCommandInput,
    DeleteAccessEntryCommandOutput,
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
  .s("AWSWesleyFrontend", "DeleteAccessEntry", {})
  .n("EKSClient", "DeleteAccessEntryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccessEntryCommand)
  .de(de_DeleteAccessEntryCommand)
  .build() {}
