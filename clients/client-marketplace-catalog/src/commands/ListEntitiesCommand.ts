// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import { ListEntitiesRequest, ListEntitiesResponse } from "../models/models_0";
import { de_ListEntitiesCommand, se_ListEntitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntitiesCommand}.
 */
export interface ListEntitiesCommandInput extends ListEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitiesCommand}.
 */
export interface ListEntitiesCommandOutput extends ListEntitiesResponse, __MetadataBearer {}

/**
 * <p>Provides the list of entities of a given type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListEntitiesCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListEntitiesCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // ListEntitiesRequest
 *   Catalog: "STRING_VALUE", // required
 *   EntityType: "STRING_VALUE", // required
 *   FilterList: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       ValueList: [ // ValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Sort: { // Sort
 *     SortBy: "STRING_VALUE",
 *     SortOrder: "ASCENDING" || "DESCENDING",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OwnershipType: "SELF" || "SHARED",
 *   EntityTypeFilters: { // EntityTypeFilters Union: only one key present
 *     DataProductFilters: { // DataProductFilters
 *       EntityId: { // DataProductEntityIdFilter
 *         ValueList: [ // DataProductEntityIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ProductTitle: { // DataProductTitleFilter
 *         ValueList: [ // DataProductTitleFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       Visibility: { // DataProductVisibilityFilter
 *         ValueList: [ // DataProductVisibilityFilterValueList
 *           "Limited" || "Public" || "Restricted" || "Unavailable" || "Draft",
 *         ],
 *       },
 *       LastModifiedDate: { // DataProductLastModifiedDateFilter
 *         DateRange: { // DataProductLastModifiedDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     SaaSProductFilters: { // SaaSProductFilters
 *       EntityId: { // SaaSProductEntityIdFilter
 *         ValueList: [ // SaaSProductEntityIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ProductTitle: { // SaaSProductTitleFilter
 *         ValueList: [ // SaaSProductTitleFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       Visibility: { // SaaSProductVisibilityFilter
 *         ValueList: [ // SaaSProductVisibilityFilterValueList
 *           "Limited" || "Public" || "Restricted" || "Draft",
 *         ],
 *       },
 *       LastModifiedDate: { // SaaSProductLastModifiedDateFilter
 *         DateRange: { // SaaSProductLastModifiedDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     AmiProductFilters: { // AmiProductFilters
 *       EntityId: { // AmiProductEntityIdFilter
 *         ValueList: [ // AmiProductEntityIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       LastModifiedDate: { // AmiProductLastModifiedDateFilter
 *         DateRange: { // AmiProductLastModifiedDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *       ProductTitle: { // AmiProductTitleFilter
 *         ValueList: [ // AmiProductTitleFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       Visibility: { // AmiProductVisibilityFilter
 *         ValueList: [ // AmiProductVisibilityFilterValueList
 *           "Limited" || "Public" || "Restricted" || "Draft",
 *         ],
 *       },
 *     },
 *     OfferFilters: { // OfferFilters
 *       EntityId: { // OfferEntityIdFilter
 *         ValueList: [ // OfferEntityIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Name: { // OfferNameFilter
 *         ValueList: [ // OfferNameFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       ProductId: { // OfferProductIdFilter
 *         ValueList: [ // OfferProductIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ResaleAuthorizationId: { // OfferResaleAuthorizationIdFilter
 *         ValueList: [ // OfferResaleAuthorizationIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ReleaseDate: { // OfferReleaseDateFilter
 *         DateRange: { // OfferReleaseDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *       AvailabilityEndDate: { // OfferAvailabilityEndDateFilter
 *         DateRange: { // OfferAvailabilityEndDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *       BuyerAccounts: { // OfferBuyerAccountsFilter
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       State: { // OfferStateFilter
 *         ValueList: [ // OfferStateFilterValueList
 *           "Draft" || "Released",
 *         ],
 *       },
 *       Targeting: { // OfferTargetingFilter
 *         ValueList: [ // OfferTargetingFilterValueList
 *           "BuyerAccounts" || "ParticipatingPrograms" || "CountryCodes" || "None",
 *         ],
 *       },
 *       LastModifiedDate: { // OfferLastModifiedDateFilter
 *         DateRange: { // OfferLastModifiedDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     ContainerProductFilters: { // ContainerProductFilters
 *       EntityId: { // ContainerProductEntityIdFilter
 *         ValueList: [ // ContainerProductEntityIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       LastModifiedDate: { // ContainerProductLastModifiedDateFilter
 *         DateRange: { // ContainerProductLastModifiedDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *       ProductTitle: { // ContainerProductTitleFilter
 *         ValueList: [ // ContainerProductTitleFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       Visibility: { // ContainerProductVisibilityFilter
 *         ValueList: [ // ContainerProductVisibilityFilterValueList
 *           "Limited" || "Public" || "Restricted" || "Draft",
 *         ],
 *       },
 *     },
 *     ResaleAuthorizationFilters: { // ResaleAuthorizationFilters
 *       EntityId: { // ResaleAuthorizationEntityIdFilter
 *         ValueList: [ // ResaleAuthorizationEntityIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Name: { // ResaleAuthorizationNameFilter
 *         ValueList: [ // ResaleAuthorizationNameFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       ProductId: { // ResaleAuthorizationProductIdFilter
 *         ValueList: [ // ResaleAuthorizationProductIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       CreatedDate: { // ResaleAuthorizationCreatedDateFilter
 *         DateRange: { // ResaleAuthorizationCreatedDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *         ValueList: [ // ResaleAuthorizationCreatedDateFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AvailabilityEndDate: { // ResaleAuthorizationAvailabilityEndDateFilter
 *         DateRange: { // ResaleAuthorizationAvailabilityEndDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *         ValueList: [ // ResaleAuthorizationAvailabilityEndDateFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ManufacturerAccountId: { // ResaleAuthorizationManufacturerAccountIdFilter
 *         ValueList: [ // ResaleAuthorizationManufacturerAccountIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       ProductName: { // ResaleAuthorizationProductNameFilter
 *         ValueList: [ // ResaleAuthorizationProductNameFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       ManufacturerLegalName: { // ResaleAuthorizationManufacturerLegalNameFilter
 *         ValueList: [ // ResaleAuthorizationManufacturerLegalNameFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       ResellerAccountID: { // ResaleAuthorizationResellerAccountIDFilter
 *         ValueList: [ // ResaleAuthorizationResellerAccountIDFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       ResellerLegalName: { // ResaleAuthorizationResellerLegalNameFilter
 *         ValueList: [ // ResaleAuthorizationResellerLegalNameFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       Status: { // ResaleAuthorizationStatusFilter
 *         ValueList: [ // ResaleAuthorizationStatusFilterValueList
 *           "Draft" || "Active" || "Restricted",
 *         ],
 *       },
 *       OfferExtendedStatus: { // ResaleAuthorizationOfferExtendedStatusFilter
 *         ValueList: [ // ResaleAuthorizationOfferExtendedStatusFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       LastModifiedDate: { // ResaleAuthorizationLastModifiedDateFilter
 *         DateRange: { // ResaleAuthorizationLastModifiedDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     MachineLearningProductFilters: { // MachineLearningProductFilters
 *       EntityId: { // MachineLearningProductEntityIdFilter
 *         ValueList: [ // MachineLearningProductEntityIdFilterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       LastModifiedDate: { // MachineLearningProductLastModifiedDateFilter
 *         DateRange: { // MachineLearningProductLastModifiedDateFilterDateRange
 *           AfterValue: "STRING_VALUE",
 *           BeforeValue: "STRING_VALUE",
 *         },
 *       },
 *       ProductTitle: { // MachineLearningProductTitleFilter
 *         ValueList: [ // MachineLearningProductTitleFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         WildCardValue: "STRING_VALUE",
 *       },
 *       Visibility: { // MachineLearningProductVisibilityFilter
 *         ValueList: [ // MachineLearningProductVisibilityFilterValueList
 *           "Limited" || "Public" || "Restricted" || "Draft",
 *         ],
 *       },
 *     },
 *   },
 *   EntityTypeSort: { // EntityTypeSort Union: only one key present
 *     DataProductSort: { // DataProductSort
 *       SortBy: "EntityId" || "ProductTitle" || "Visibility" || "LastModifiedDate",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *     SaaSProductSort: { // SaaSProductSort
 *       SortBy: "EntityId" || "ProductTitle" || "Visibility" || "LastModifiedDate" || "DeliveryOptionTypes",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *     AmiProductSort: { // AmiProductSort
 *       SortBy: "EntityId" || "LastModifiedDate" || "ProductTitle" || "Visibility",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *     OfferSort: { // OfferSort
 *       SortBy: "EntityId" || "Name" || "ProductId" || "ResaleAuthorizationId" || "ReleaseDate" || "AvailabilityEndDate" || "BuyerAccounts" || "State" || "Targeting" || "LastModifiedDate",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *     ContainerProductSort: { // ContainerProductSort
 *       SortBy: "EntityId" || "LastModifiedDate" || "ProductTitle" || "Visibility" || "CompatibleAWSServices",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *     ResaleAuthorizationSort: { // ResaleAuthorizationSort
 *       SortBy: "EntityId" || "Name" || "ProductId" || "ProductName" || "ManufacturerAccountId" || "ManufacturerLegalName" || "ResellerAccountID" || "ResellerLegalName" || "Status" || "OfferExtendedStatus" || "CreatedDate" || "AvailabilityEndDate" || "LastModifiedDate",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *     MachineLearningProductSort: { // MachineLearningProductSort
 *       SortBy: "EntityId" || "LastModifiedDate" || "ProductTitle" || "Visibility",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *   },
 * };
 * const command = new ListEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitiesResponse
 * //   EntitySummaryList: [ // EntitySummaryList
 * //     { // EntitySummary
 * //       Name: "STRING_VALUE",
 * //       EntityType: "STRING_VALUE",
 * //       EntityId: "STRING_VALUE",
 * //       EntityArn: "STRING_VALUE",
 * //       LastModifiedDate: "STRING_VALUE",
 * //       Visibility: "STRING_VALUE",
 * //       AmiProductSummary: { // AmiProductSummary
 * //         ProductTitle: "STRING_VALUE",
 * //         Visibility: "Limited" || "Public" || "Restricted" || "Draft",
 * //       },
 * //       ContainerProductSummary: { // ContainerProductSummary
 * //         ProductTitle: "STRING_VALUE",
 * //         Visibility: "Limited" || "Public" || "Restricted" || "Draft",
 * //       },
 * //       DataProductSummary: { // DataProductSummary
 * //         ProductTitle: "STRING_VALUE",
 * //         Visibility: "Limited" || "Public" || "Restricted" || "Unavailable" || "Draft",
 * //       },
 * //       SaaSProductSummary: { // SaaSProductSummary
 * //         ProductTitle: "STRING_VALUE",
 * //         Visibility: "Limited" || "Public" || "Restricted" || "Draft",
 * //       },
 * //       OfferSummary: { // OfferSummary
 * //         Name: "STRING_VALUE",
 * //         ProductId: "STRING_VALUE",
 * //         ResaleAuthorizationId: "STRING_VALUE",
 * //         ReleaseDate: "STRING_VALUE",
 * //         AvailabilityEndDate: "STRING_VALUE",
 * //         BuyerAccounts: [ // OfferBuyerAccountsList
 * //           "STRING_VALUE",
 * //         ],
 * //         State: "Draft" || "Released",
 * //         Targeting: [ // OfferTargetingList
 * //           "BuyerAccounts" || "ParticipatingPrograms" || "CountryCodes" || "None",
 * //         ],
 * //       },
 * //       ResaleAuthorizationSummary: { // ResaleAuthorizationSummary
 * //         Name: "STRING_VALUE",
 * //         ProductId: "STRING_VALUE",
 * //         ProductName: "STRING_VALUE",
 * //         ManufacturerAccountId: "STRING_VALUE",
 * //         ManufacturerLegalName: "STRING_VALUE",
 * //         ResellerAccountID: "STRING_VALUE",
 * //         ResellerLegalName: "STRING_VALUE",
 * //         Status: "Draft" || "Active" || "Restricted",
 * //         OfferExtendedStatus: "STRING_VALUE",
 * //         CreatedDate: "STRING_VALUE",
 * //         AvailabilityEndDate: "STRING_VALUE",
 * //       },
 * //       MachineLearningProductSummary: { // MachineLearningProductSummary
 * //         ProductTitle: "STRING_VALUE",
 * //         Visibility: "Limited" || "Public" || "Restricted" || "Draft",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitiesCommandInput - {@link ListEntitiesCommandInput}
 * @returns {@link ListEntitiesCommandOutput}
 * @see {@link ListEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 * @throws {@link MarketplaceCatalogServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCatalog service.</p>
 *
 *
 * @public
 */
export class ListEntitiesCommand extends $Command
  .classBuilder<
    ListEntitiesCommandInput,
    ListEntitiesCommandOutput,
    MarketplaceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMPSeymour", "ListEntities", {})
  .n("MarketplaceCatalogClient", "ListEntitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListEntitiesCommand)
  .de(de_ListEntitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntitiesRequest;
      output: ListEntitiesResponse;
    };
    sdk: {
      input: ListEntitiesCommandInput;
      output: ListEntitiesCommandOutput;
    };
  };
}
