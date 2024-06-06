// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssociationsRequest, ListAssociationsResponse } from "../models/models_3";
import { de_ListAssociationsCommand, se_ListAssociationsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociationsCommand}.
 */
export interface ListAssociationsCommandInput extends ListAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociationsCommand}.
 */
export interface ListAssociationsCommandOutput extends ListAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists the associations in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAssociationsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAssociationsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListAssociationsRequest
 *   SourceArn: "STRING_VALUE",
 *   DestinationArn: "STRING_VALUE",
 *   SourceType: "STRING_VALUE",
 *   DestinationType: "STRING_VALUE",
 *   AssociationType: "ContributedTo" || "AssociatedWith" || "DerivedFrom" || "Produced" || "SameAs",
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortBy: "SourceArn" || "DestinationArn" || "SourceType" || "DestinationType" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociationsResponse
 * //   AssociationSummaries: [ // AssociationSummaries
 * //     { // AssociationSummary
 * //       SourceArn: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       SourceType: "STRING_VALUE",
 * //       DestinationType: "STRING_VALUE",
 * //       AssociationType: "ContributedTo" || "AssociatedWith" || "DerivedFrom" || "Produced" || "SameAs",
 * //       SourceName: "STRING_VALUE",
 * //       DestinationName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CreatedBy: { // UserContext
 * //         UserProfileArn: "STRING_VALUE",
 * //         UserProfileName: "STRING_VALUE",
 * //         DomainId: "STRING_VALUE",
 * //         IamIdentity: { // IamIdentity
 * //           Arn: "STRING_VALUE",
 * //           PrincipalId: "STRING_VALUE",
 * //           SourceIdentity: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociationsCommandInput - {@link ListAssociationsCommandInput}
 * @returns {@link ListAssociationsCommandOutput}
 * @see {@link ListAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListAssociationsCommand extends $Command
  .classBuilder<
    ListAssociationsCommandInput,
    ListAssociationsCommandOutput,
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
  .s("SageMaker", "ListAssociations", {})
  .n("SageMakerClient", "ListAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssociationsCommand)
  .de(de_ListAssociationsCommand)
  .build() {}
