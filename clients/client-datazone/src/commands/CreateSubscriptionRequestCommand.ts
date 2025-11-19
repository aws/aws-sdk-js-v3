// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSubscriptionRequestInput, CreateSubscriptionRequestOutput } from "../models/models_0";
import { CreateSubscriptionRequest } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriptionRequestCommand}.
 */
export interface CreateSubscriptionRequestCommandInput extends CreateSubscriptionRequestInput {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionRequestCommand}.
 */
export interface CreateSubscriptionRequestCommandOutput extends CreateSubscriptionRequestOutput, __MetadataBearer {}

/**
 * <p>Creates a subscription request in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateSubscriptionRequestCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateSubscriptionRequestCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateSubscriptionRequestInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   subscribedPrincipals: [ // SubscribedPrincipalInputs // required
 *     { // SubscribedPrincipalInput Union: only one key present
 *       project: { // SubscribedProjectInput
 *         identifier: "STRING_VALUE",
 *       },
 *       user: { // SubscribedUserInput
 *         identifier: "STRING_VALUE",
 *       },
 *       group: { // SubscribedGroupInput
 *         identifier: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   subscribedListings: [ // SubscribedListingInputs // required
 *     { // SubscribedListingInput
 *       identifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   requestReason: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   metadataForms: [ // MetadataFormInputs
 *     { // FormInput
 *       formName: "STRING_VALUE", // required
 *       typeIdentifier: "STRING_VALUE",
 *       typeRevision: "STRING_VALUE",
 *       content: "STRING_VALUE",
 *     },
 *   ],
 *   assetPermissions: [ // AssetPermissions
 *     { // AssetPermission
 *       assetId: "STRING_VALUE", // required
 *       permissions: { // Permissions Union: only one key present
 *         s3: [ // S3Permissions
 *           "READ" || "WRITE",
 *         ],
 *       },
 *     },
 *   ],
 *   assetScopes: [ // AcceptedAssetScopes
 *     { // AcceptedAssetScope
 *       assetId: "STRING_VALUE", // required
 *       filterIds: [ // FilterIds // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateSubscriptionRequestCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriptionRequestOutput
 * //   id: "STRING_VALUE", // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedBy: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   status: "PENDING" || "ACCEPTED" || "REJECTED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   requestReason: "STRING_VALUE", // required
 * //   subscribedPrincipals: [ // SubscribedPrincipals // required
 * //     { // SubscribedPrincipal Union: only one key present
 * //       project: { // SubscribedProject
 * //         id: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //       },
 * //       user: { // SubscribedUser
 * //         id: "STRING_VALUE",
 * //         details: { // UserProfileDetails Union: only one key present
 * //           iam: { // IamUserProfileDetails
 * //             arn: "STRING_VALUE",
 * //             principalId: "STRING_VALUE",
 * //           },
 * //           sso: { // SsoUserProfileDetails
 * //             username: "STRING_VALUE",
 * //             firstName: "STRING_VALUE",
 * //             lastName: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       group: { // SubscribedGroup
 * //         id: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   subscribedListings: [ // SubscribedListings // required
 * //     { // SubscribedListing
 * //       id: "STRING_VALUE", // required
 * //       revision: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       item: { // SubscribedListingItem Union: only one key present
 * //         assetListing: { // SubscribedAssetListing
 * //           entityId: "STRING_VALUE",
 * //           entityRevision: "STRING_VALUE",
 * //           entityType: "STRING_VALUE",
 * //           forms: "STRING_VALUE",
 * //           glossaryTerms: [ // DetailedGlossaryTerms
 * //             { // DetailedGlossaryTerm
 * //               name: "STRING_VALUE",
 * //               shortDescription: "STRING_VALUE",
 * //             },
 * //           ],
 * //           assetScope: { // AssetScope
 * //             assetId: "STRING_VALUE", // required
 * //             filterIds: [ // FilterIds // required
 * //               "STRING_VALUE",
 * //             ],
 * //             status: "STRING_VALUE", // required
 * //             errorMessage: "STRING_VALUE",
 * //           },
 * //           permissions: { // Permissions Union: only one key present
 * //             s3: [ // S3Permissions
 * //               "READ" || "WRITE",
 * //             ],
 * //           },
 * //         },
 * //         productListing: { // SubscribedProductListing
 * //           entityId: "STRING_VALUE",
 * //           entityRevision: "STRING_VALUE",
 * //           glossaryTerms: [
 * //             {
 * //               name: "STRING_VALUE",
 * //               shortDescription: "STRING_VALUE",
 * //             },
 * //           ],
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           assetListings: [ // AssetInDataProductListingItems
 * //             { // AssetInDataProductListingItem
 * //               entityId: "STRING_VALUE",
 * //               entityRevision: "STRING_VALUE",
 * //               entityType: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       ownerProjectId: "STRING_VALUE", // required
 * //       ownerProjectName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   reviewerId: "STRING_VALUE",
 * //   decisionComment: "STRING_VALUE",
 * //   existingSubscriptionId: "STRING_VALUE",
 * //   metadataForms: [ // MetadataForms
 * //     { // FormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateSubscriptionRequestCommandInput - {@link CreateSubscriptionRequestCommandInput}
 * @returns {@link CreateSubscriptionRequestCommandOutput}
 * @see {@link CreateSubscriptionRequestCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionRequestCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class CreateSubscriptionRequestCommand extends $Command
  .classBuilder<
    CreateSubscriptionRequestCommandInput,
    CreateSubscriptionRequestCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateSubscriptionRequest", {})
  .n("DataZoneClient", "CreateSubscriptionRequestCommand")
  .sc(CreateSubscriptionRequest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriptionRequestInput;
      output: CreateSubscriptionRequestOutput;
    };
    sdk: {
      input: CreateSubscriptionRequestCommandInput;
      output: CreateSubscriptionRequestCommandOutput;
    };
  };
}
