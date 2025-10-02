// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePodIdentityAssociationRequest, DescribePodIdentityAssociationResponse } from "../models/models_0";
import {
  de_DescribePodIdentityAssociationCommand,
  se_DescribePodIdentityAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePodIdentityAssociationCommand}.
 */
export interface DescribePodIdentityAssociationCommandInput extends DescribePodIdentityAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DescribePodIdentityAssociationCommand}.
 */
export interface DescribePodIdentityAssociationCommandOutput
  extends DescribePodIdentityAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Returns descriptive information about an EKS Pod Identity association.</p>
 *          <p>This action requires the ID of the association. You can get the ID from the response to
 *             the <code>CreatePodIdentityAssocation</code> for newly created associations. Or, you can
 *             list the IDs for associations with <code>ListPodIdentityAssociations</code> and filter the
 *             list by namespace or service account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new DescribePodIdentityAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DescribePodIdentityAssociationResponse
 * //   association: { // PodIdentityAssociation
 * //     clusterName: "STRING_VALUE",
 * //     namespace: "STRING_VALUE",
 * //     serviceAccount: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     associationArn: "STRING_VALUE",
 * //     associationId: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     ownerArn: "STRING_VALUE",
 * //     disableSessionTags: true || false,
 * //     targetRoleArn: "STRING_VALUE",
 * //     externalId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePodIdentityAssociationCommandInput - {@link DescribePodIdentityAssociationCommandInput}
 * @returns {@link DescribePodIdentityAssociationCommandOutput}
 * @see {@link DescribePodIdentityAssociationCommandInput} for command's `input` shape.
 * @see {@link DescribePodIdentityAssociationCommandOutput} for command's `response` shape.
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
export class DescribePodIdentityAssociationCommand extends $Command
  .classBuilder<
    DescribePodIdentityAssociationCommandInput,
    DescribePodIdentityAssociationCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "DescribePodIdentityAssociation", {})
  .n("EKSClient", "DescribePodIdentityAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DescribePodIdentityAssociationCommand)
  .de(de_DescribePodIdentityAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePodIdentityAssociationRequest;
      output: DescribePodIdentityAssociationResponse;
    };
    sdk: {
      input: DescribePodIdentityAssociationCommandInput;
      output: DescribePodIdentityAssociationCommandOutput;
    };
  };
}
