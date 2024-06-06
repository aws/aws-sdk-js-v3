// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkteamsRequest, ListWorkteamsResponse } from "../models/models_4";
import { de_ListWorkteamsCommand, se_ListWorkteamsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkteamsCommand}.
 */
export interface ListWorkteamsCommandInput extends ListWorkteamsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkteamsCommand}.
 */
export interface ListWorkteamsCommandOutput extends ListWorkteamsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of private work teams that you have defined in a region. The list may be empty if
 *             no work team satisfies the filter specified in the <code>NameContains</code>
 *             parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListWorkteamsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListWorkteamsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListWorkteamsRequest
 *   SortBy: "Name" || "CreateDate",
 *   SortOrder: "Ascending" || "Descending",
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkteamsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkteamsResponse
 * //   Workteams: [ // Workteams // required
 * //     { // Workteam
 * //       WorkteamName: "STRING_VALUE", // required
 * //       MemberDefinitions: [ // MemberDefinitions // required
 * //         { // MemberDefinition
 * //           CognitoMemberDefinition: { // CognitoMemberDefinition
 * //             UserPool: "STRING_VALUE", // required
 * //             UserGroup: "STRING_VALUE", // required
 * //             ClientId: "STRING_VALUE", // required
 * //           },
 * //           OidcMemberDefinition: { // OidcMemberDefinition
 * //             Groups: [ // Groups
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       WorkteamArn: "STRING_VALUE", // required
 * //       WorkforceArn: "STRING_VALUE",
 * //       ProductListingIds: [ // ProductListings
 * //         "STRING_VALUE",
 * //       ],
 * //       Description: "STRING_VALUE", // required
 * //       SubDomain: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       LastUpdatedDate: new Date("TIMESTAMP"),
 * //       NotificationConfiguration: { // NotificationConfiguration
 * //         NotificationTopicArn: "STRING_VALUE",
 * //       },
 * //       WorkerAccessConfiguration: { // WorkerAccessConfiguration
 * //         S3Presign: { // S3Presign
 * //           IamPolicyConstraints: { // IamPolicyConstraints
 * //             SourceIp: "Enabled" || "Disabled",
 * //             VpcSourceIp: "Enabled" || "Disabled",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkteamsCommandInput - {@link ListWorkteamsCommandInput}
 * @returns {@link ListWorkteamsCommandOutput}
 * @see {@link ListWorkteamsCommandInput} for command's `input` shape.
 * @see {@link ListWorkteamsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListWorkteamsCommand extends $Command
  .classBuilder<
    ListWorkteamsCommandInput,
    ListWorkteamsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListWorkteams", {})
  .n("SageMakerClient", "ListWorkteamsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkteamsCommand)
  .de(de_ListWorkteamsCommand)
  .build() {}
