// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAddonRequest, DeleteAddonResponse } from "../models/models_0";
import { de_DeleteAddonCommand, se_DeleteAddonCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAddonCommand}.
 */
export interface DeleteAddonCommandInput extends DeleteAddonRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAddonCommand}.
 */
export interface DeleteAddonCommandOutput extends DeleteAddonResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon EKS add-on.</p>
 *          <p>When you remove an add-on, it's deleted from the cluster. You can always manually
 *             start an add-on on the cluster using the Kubernetes API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DeleteAddonRequest
 *   clusterName: "STRING_VALUE", // required
 *   addonName: "STRING_VALUE", // required
 *   preserve: true || false,
 * };
 * const command = new DeleteAddonCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAddonResponse
 * //   addon: { // Addon
 * //     addonName: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETE_FAILED" || "DEGRADED" || "UPDATE_FAILED",
 * //     addonVersion: "STRING_VALUE",
 * //     health: { // AddonHealth
 * //       issues: [ // AddonIssueList
 * //         { // AddonIssue
 * //           code: "AccessDenied" || "InternalFailure" || "ClusterUnreachable" || "InsufficientNumberOfReplicas" || "ConfigurationConflict" || "AdmissionRequestDenied" || "UnsupportedAddonModification" || "K8sResourceNotFound" || "AddonSubscriptionNeeded" || "AddonPermissionFailure",
 * //           message: "STRING_VALUE",
 * //           resourceIds: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     addonArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     serviceAccountRoleArn: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     publisher: "STRING_VALUE",
 * //     owner: "STRING_VALUE",
 * //     marketplaceInformation: { // MarketplaceInformation
 * //       productId: "STRING_VALUE",
 * //       productUrl: "STRING_VALUE",
 * //     },
 * //     configurationValues: "STRING_VALUE",
 * //     podIdentityAssociations: [
 * //       "STRING_VALUE",
 * //     ],
 * //     namespaceConfig: { // AddonNamespaceConfigResponse
 * //       namespace: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAddonCommandInput - {@link DeleteAddonCommandInput}
 * @returns {@link DeleteAddonCommandOutput}
 * @see {@link DeleteAddonCommandInput} for command's `input` shape.
 * @see {@link DeleteAddonCommandOutput} for command's `response` shape.
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
export class DeleteAddonCommand extends $Command
  .classBuilder<
    DeleteAddonCommandInput,
    DeleteAddonCommandOutput,
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
  .s("AWSWesleyFrontend", "DeleteAddon", {})
  .n("EKSClient", "DeleteAddonCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAddonCommand)
  .de(de_DeleteAddonCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAddonRequest;
      output: DeleteAddonResponse;
    };
    sdk: {
      input: DeleteAddonCommandInput;
      output: DeleteAddonCommandOutput;
    };
  };
}
