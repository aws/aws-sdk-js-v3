// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFargateProfileRequest, DescribeFargateProfileResponse } from "../models/models_0";
import { de_DescribeFargateProfileCommand, se_DescribeFargateProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFargateProfileCommand}.
 */
export interface DescribeFargateProfileCommandInput extends DescribeFargateProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFargateProfileCommand}.
 */
export interface DescribeFargateProfileCommandOutput extends DescribeFargateProfileResponse, __MetadataBearer {}

/**
 * <p>Describes an Fargate profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeFargateProfileRequest
 *   clusterName: "STRING_VALUE", // required
 *   fargateProfileName: "STRING_VALUE", // required
 * };
 * const command = new DescribeFargateProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFargateProfileResponse
 * //   fargateProfile: { // FargateProfile
 * //     fargateProfileName: "STRING_VALUE",
 * //     fargateProfileArn: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     podExecutionRoleArn: "STRING_VALUE",
 * //     subnets: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     selectors: [ // FargateProfileSelectors
 * //       { // FargateProfileSelector
 * //         namespace: "STRING_VALUE",
 * //         labels: { // FargateProfileLabel
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     status: "CREATING" || "ACTIVE" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFargateProfileCommandInput - {@link DescribeFargateProfileCommandInput}
 * @returns {@link DescribeFargateProfileCommandOutput}
 * @see {@link DescribeFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeFargateProfileCommandOutput} for command's `response` shape.
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
export class DescribeFargateProfileCommand extends $Command
  .classBuilder<
    DescribeFargateProfileCommandInput,
    DescribeFargateProfileCommandOutput,
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
  .s("AWSWesleyFrontend", "DescribeFargateProfile", {})
  .n("EKSClient", "DescribeFargateProfileCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFargateProfileCommand)
  .de(de_DescribeFargateProfileCommand)
  .build() {}
