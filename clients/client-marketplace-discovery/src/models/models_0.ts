// smithy-typescript generated code
import type {
  BillingPeriodType,
  DeployedOnAwsStatus,
  DimensionLabelType,
  FulfillmentOptionType,
  LegalDocumentType,
  ListingBadgeType,
  PricingModelType,
  PricingUnitType,
  PurchaseOptionBadgeType,
  PurchaseOptionFilterType,
  PurchaseOptionType,
  RateCardConstraintType,
  ResourceContentType,
  ResourceType,
  ReviewSourceId,
  SaasQuickLaunchStatus,
  SearchFacetType,
  SearchFilterType,
  SearchListingsSortBy,
  SearchListingsSortOrder,
  SelectorType,
  SellerEngagementContentType,
  SellerEngagementType,
  TermType,
} from "./enums";

/**
 * Contains supported Amazon EBS volume information for an AMI fulfillment option.
 *
 * @public
 */
export interface AmazonMachineImageEbsVolume {
  /**
   * The supported Amazon EBS volume types.
   *
   * @public
   */
  volumeTypes: string[] | undefined;

  /**
   * The total number of provisioned IOPS supported.
   *
   * @public
   */
  iops?: number | undefined;
}

/**
 * Describes an operating system supported by an AMI fulfillment option.
 *
 * @public
 */
export interface AmazonMachineImageOperatingSystem {
  /**
   * The operating system family, such as Linux or Windows.
   *
   * @public
   */
  operatingSystemFamilyName: string | undefined;

  /**
   * The specific operating system name, such as Amazon Linux 2 or Windows Server 2022.
   *
   * @public
   */
  operatingSystemName: string | undefined;

  /**
   * The version of the operating system.
   *
   * @public
   */
  operatingSystemVersion?: string | undefined;
}

/**
 * Contains a recommended security group configuration for an AMI fulfillment option.
 *
 * @public
 */
export interface AmazonMachineImageSecurityGroup {
  /**
   * The IP protocol name, such as `tcp`.
   *
   * @public
   */
  protocol: string | undefined;

  /**
   * The start of the port range.
   *
   * @public
   */
  fromPort: number | undefined;

  /**
   * The end of the port range.
   *
   * @public
   */
  toPort: number | undefined;

  /**
   * The IP address ranges in CIDR format.
   *
   * @public
   */
  cidrIpAddresses: string[] | undefined;
}

/**
 * Recommended instance types for running an AMI fulfillment option.
 *
 * @public
 */
export interface AmazonMachineImageRecommendation {
  /**
   * The recommended EC2 instance type for this AMI.
   *
   * @public
   */
  instanceType: string | undefined;

  /**
   * The recommended security group configurations for this AMI.
   *
   * @public
   */
  securityGroups?: AmazonMachineImageSecurityGroup[] | undefined;
}

/**
 * Describes an Amazon Machine Image (AMI) fulfillment option, including version details, supported operating systems, and recommended instance types.
 *
 * @public
 */
export interface AmazonMachineImageFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The display name of the fulfillment option version.
   *
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * The version identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The operating systems supported by this AMI.
   *
   * @public
   */
  operatingSystems: AmazonMachineImageOperatingSystem[] | undefined;

  /**
   * Recommended instance types for running this AMI.
   *
   * @public
   */
  recommendation?: AmazonMachineImageRecommendation | undefined;

  /**
   * Release notes describing changes in this version of the fulfillment option.
   *
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * Instructions on how to deploy and use this fulfillment option.
   *
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * The date and time when the AMI became available for fulfillment.
   *
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * The URL pattern for accessing the product when an instance is running.
   *
   * @public
   */
  accessUrlTemplate?: string | undefined;

  /**
   * The architecture of the AMI, such as `x86_64`.
   *
   * @public
   */
  architecture: string | undefined;

  /**
   * The alias of the AMI associated with this fulfillment option.
   *
   * @public
   */
  amiAlias?: string | undefined;

  /**
   * The supported Amazon EBS volume configuration for the AMI.
   *
   * @public
   */
  ebsVolume?: AmazonMachineImageEbsVolume | undefined;

  /**
   * A short description of the fulfillment option.
   *
   * @public
   */
  shortDescription?: string | undefined;
}

/**
 * Describes an AWS service supported by a fulfillment option.
 *
 * @public
 */
export interface AwsSupportedService {
  /**
   * The machine-readable identifier of the supported service.
   *
   * @public
   */
  supportedServiceType: string | undefined;

  /**
   * The human-readable name of the supported service.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * A description of the supported service.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * Describes an API-based fulfillment option, where the product is accessed through an API integration.
 *
 * @public
 */
export interface ApiFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * Instructions on how to integrate with and use this API.
   *
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * The AWS services supported by this API integration.
   *
   * @public
   */
  awsSupportedServices: AwsSupportedService[] | undefined;
}

/**
 * @public
 */
export interface GetListingInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the listing to retrieve.
   *
   * @public
   */
  listingId: string | undefined;
}

/**
 * Information about a seller, including the profile identifier and display name.
 *
 * @public
 */
export interface SellerInformation {
  /**
   * The unique identifier of the seller profile.
   *
   * @public
   */
  sellerProfileId: string | undefined;

  /**
   * The human-readable name of the seller.
   *
   * @public
   */
  displayName: string | undefined;
}

/**
 * Summary information about an offer, including the offer identifier, name, and seller of record.
 *
 * @public
 */
export interface OfferInformation {
  /**
   * The unique identifier of the offer.
   *
   * @public
   */
  offerId: string | undefined;

  /**
   * The display name of the offer.
   *
   * @public
   */
  offerName?: string | undefined;

  /**
   * The entity responsible for selling the product under this offer.
   *
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;
}

/**
 * Summary information about a product, including the identifier, name, and manufacturer.
 *
 * @public
 */
export interface ProductInformation {
  /**
   * The unique identifier of the product.
   *
   * @public
   */
  productId: string | undefined;

  /**
   * The human-readable display name of the product.
   *
   * @public
   */
  productName: string | undefined;

  /**
   * The entity who manufactured the product.
   *
   * @public
   */
  manufacturer: SellerInformation | undefined;
}

/**
 * A product and offer associated with a listing.
 *
 * @public
 */
export interface ListingAssociatedEntity {
  /**
   * Information about the product associated with the listing.
   *
   * @public
   */
  product?: ProductInformation | undefined;

  /**
   * Information about the default offer associated with the listing.
   *
   * @public
   */
  offer?: OfferInformation | undefined;
}

/**
 * A badge indicating a special attribute of a listing, such as free tier eligibility or Quick Launch support.
 *
 * @public
 */
export interface ListingBadge {
  /**
   * The human-readable name of the badge.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The machine-readable type of the badge.
   *
   * @public
   */
  badgeType: ListingBadgeType | undefined;
}

/**
 * A category used to classify a listing or product into a logical group.
 *
 * @public
 */
export interface Category {
  /**
   * The machine-readable identifier of the category.
   *
   * @public
   */
  categoryId: string | undefined;

  /**
   * The human-readable name of the category.
   *
   * @public
   */
  displayName: string | undefined;
}

/**
 * A summary of a fulfillment option available for deploying or accessing a listing or product.
 *
 * @public
 */
export interface FulfillmentOptionSummary {
  /**
   * The machine-readable type of the fulfillment option, such as `SAAS` or `AMAZON_MACHINE_IMAGE`.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * The human-readable name of the fulfillment option type.
   *
   * @public
   */
  displayName: string | undefined;
}

/**
 * A pricing model that determines how buyers are charged for a listing, such as usage-based, contract, BYOL, or free.
 *
 * @public
 */
export interface PricingModel {
  /**
   * The machine-readable type of the pricing model.
   *
   * @public
   */
  pricingModelType: PricingModelType | undefined;

  /**
   * The human-readable name of the pricing model.
   *
   * @public
   */
  displayName: string | undefined;
}

/**
 * A pricing unit that defines the billing dimension for a listing, such as users, hosts, bandwidth, or data.
 *
 * @public
 */
export interface PricingUnit {
  /**
   * The machine-readable type of the pricing unit.
   *
   * @public
   */
  pricingUnitType: PricingUnitType | undefined;

  /**
   * The human-readable name of the pricing unit.
   *
   * @public
   */
  displayName: string | undefined;
}

/**
 * An embedded promotional image for a product.
 *
 * @public
 */
export interface PromotionalEmbeddedImage {
  /**
   * The title displayed when hovering over the image.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The URL of the image file.
   *
   * @public
   */
  url: string | undefined;

  /**
   * An optional description of the image.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * An embedded promotional video for a product.
 *
 * @public
 */
export interface PromotionalEmbeddedVideo {
  /**
   * The title displayed when hovering over the video.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The URL of the video file.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The URL of the high-resolution preview image for the video.
   *
   * @public
   */
  preview: string | undefined;

  /**
   * The URL of the thumbnail image for the video.
   *
   * @public
   */
  thumbnail: string | undefined;

  /**
   * An optional description of the video.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Embedded promotional media for a product, such as images or videos. Each element contains exactly one media type.
 *
 * @public
 */
export type PromotionalMedia =
  | PromotionalMedia.EmbeddedImageMember
  | PromotionalMedia.EmbeddedVideoMember
  | PromotionalMedia.$UnknownMember;

/**
 * @public
 */
export namespace PromotionalMedia {
  /**
   * An embedded promotional image for a product.
   *
   * @public
   */
  export interface EmbeddedImageMember {
    embeddedImage: PromotionalEmbeddedImage;
    embeddedVideo?: never;
    $unknown?: never;
  }

  /**
   * An embedded promotional video for a product.
   *
   * @public
   */
  export interface EmbeddedVideoMember {
    embeddedImage?: never;
    embeddedVideo: PromotionalEmbeddedVideo;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    embeddedImage?: never;
    embeddedVideo?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    embeddedImage: (value: PromotionalEmbeddedImage) => T;
    embeddedVideo: (value: PromotionalEmbeddedVideo) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A resource that provides supplementary information about a product, such as documentation links, support contacts, or usage instructions.
 *
 * @public
 */
export interface Resource {
  /**
   * The category of the resource, such as manufacturer support or usage instructions.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The format of the resource content, such as a URL, email address, or text.
   *
   * @public
   */
  contentType: ResourceContentType | undefined;

  /**
   * The resource content. Interpretation depends on the content type.
   *
   * @public
   */
  value: string | undefined;

  /**
   * An optional human-readable label for the resource.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * A review summary from a specific source, including the average rating and total review count.
 *
 * @public
 */
export interface ReviewSourceSummary {
  /**
   * The name of the review source, such as AWS Marketplace.
   *
   * @public
   */
  sourceName: string | undefined;

  /**
   * The machine-readable identifier of the review source.
   *
   * @public
   */
  sourceId: ReviewSourceId | undefined;

  /**
   * The URL where the reviews can be accessed at the source.
   *
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * The average rating across all reviews from this source.
   *
   * @public
   */
  averageRating: string | undefined;

  /**
   * The total number of reviews available from this source.
   *
   * @public
   */
  totalReviews: number | undefined;
}

/**
 * A summary of customer reviews available for a listing, aggregated by review source.
 *
 * @public
 */
export interface ReviewSummary {
  /**
   * Review summaries from different sources, such as AWS Marketplace.
   *
   * @public
   */
  reviewSourceSummaries: ReviewSourceSummary[] | undefined;
}

/**
 * An engagement option available to potential buyers of a product, such as requesting a private offer or a demo.
 *
 * @public
 */
export interface SellerEngagement {
  /**
   * The type of engagement, such as `REQUEST_FOR_PRIVATE_OFFER` or `REQUEST_FOR_DEMO`.
   *
   * @public
   */
  engagementType: SellerEngagementType | undefined;

  /**
   * The format of the engagement value, such as a URL.
   *
   * @public
   */
  contentType: SellerEngagementContentType | undefined;

  /**
   * The engagement value, such as a URL to the engagement form.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * A use case describing a scenario where the product can be applied.
 *
 * @public
 */
export interface UseCase {
  /**
   * A description of the use case.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The human-readable name of the use case.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The machine-readable identifier of the use case.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * An entry in the list of use cases for a listing.
 *
 * @public
 */
export interface UseCaseEntry {
  /**
   * The use case details.
   *
   * @public
   */
  useCase: UseCase | undefined;
}

/**
 * @public
 */
export interface GetListingOutput {
  /**
   * The locale of the returned content. Indicates whether the response contains content in the requested locale, or fell back to the default locale. See `Locale` for details.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The products and offers associated with this listing. Each entity contains product and offer information.
   *
   * @public
   */
  associatedEntities: ListingAssociatedEntity[] | undefined;

  /**
   * Badges indicating special attributes of the listing, such as free tier eligibility, free trial availability, or Quick Launch support.
   *
   * @public
   */
  badges: ListingBadge[] | undefined;

  /**
   * The name of the catalog that the listing belongs to.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The categories used to classify this listing into logical groups.
   *
   * @public
   */
  categories: Category[] | undefined;

  /**
   * A summary of fulfillment options available for deploying or accessing the listing, such as AMI, SaaS, or Container.
   *
   * @public
   */
  fulfillmentOptionSummaries: FulfillmentOptionSummary[] | undefined;

  /**
   * A list of key features that the listing offers to customers.
   *
   * @public
   */
  highlights: string[] | undefined;

  /**
   * Optional guidance explaining how to use data in this listing. Primarily defines how to integrate with a multi-product listing.
   *
   * @public
   */
  integrationGuide?: string | undefined;

  /**
   * The unique identifier of the listing.
   *
   * @public
   */
  listingId: string | undefined;

  /**
   * The human-readable display name of the listing.
   *
   * @public
   */
  listingName: string | undefined;

  /**
   * The URL of the logo thumbnail image for the listing.
   *
   * @public
   */
  logoThumbnailUrl: string | undefined;

  /**
   * A detailed description of what the listing offers, in paragraph format.
   *
   * @public
   */
  longDescription: string | undefined;

  /**
   * The pricing models for offers associated with this listing, such as usage-based, contract, BYOL, or free.
   *
   * @public
   */
  pricingModels: PricingModel[] | undefined;

  /**
   * The pricing units that define the billing dimensions for offers associated with this listing, such as users, hosts, or data.
   *
   * @public
   */
  pricingUnits: PricingUnit[] | undefined;

  /**
   * Embedded promotional media provided by the creator of the product, such as images and videos.
   *
   * @public
   */
  promotionalMedia: PromotionalMedia[] | undefined;

  /**
   * The entity who created and published the listing.
   *
   * @public
   */
  publisher: SellerInformation | undefined;

  /**
   * Resources that provide further information about using the product or requesting support, such as documentation links, support contacts, and usage instructions.
   *
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * A summary of customer reviews available for the listing, including average rating and total review count by source.
   *
   * @public
   */
  reviewSummary?: ReviewSummary | undefined;

  /**
   * Engagement options available to potential buyers, such as requesting a private offer or requesting a demo.
   *
   * @public
   */
  sellerEngagements: SellerEngagement[] | undefined;

  /**
   * A 1–3 sentence summary describing the key aspects of the listing.
   *
   * @public
   */
  shortDescription: string | undefined;

  /**
   * Use cases associated with the listing, describing scenarios where the product can be applied.
   *
   * @public
   */
  useCases: UseCaseEntry[] | undefined;
}

/**
 * @public
 */
export interface GetOfferInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the offer to retrieve.
   *
   * @public
   */
  offerId: string | undefined;
}

/**
 * Summary information about an offer set, including the identifier and seller of record.
 *
 * @public
 */
export interface OfferSetInformation {
  /**
   * The unique identifier of the offer set.
   *
   * @public
   */
  offerSetId: string | undefined;

  /**
   * The entity responsible for selling the products under this offer set.
   *
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;
}

/**
 * A product and optional offer set associated with an offer.
 *
 * @public
 */
export interface OfferAssociatedEntity {
  /**
   * Information about the product associated with the offer.
   *
   * @public
   */
  product: ProductInformation | undefined;

  /**
   * Information about the offer set, if the offer is part of a bundled offer set.
   *
   * @public
   */
  offerSet?: OfferSetInformation | undefined;
}

/**
 * A badge indicating a special attribute of a purchase option, such as private pricing or future dated.
 *
 * @public
 */
export interface PurchaseOptionBadge {
  /**
   * The human-readable name of the badge.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The machine-readable type of the badge.
   *
   * @public
   */
  badgeType: PurchaseOptionBadgeType | undefined;
}

/**
 * @public
 */
export interface GetOfferOutput {
  /**
   * The locale of the returned content. Indicates whether the response contains content in the requested locale, or fell back to the default locale. See `Locale` for details.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the offer.
   *
   * @public
   */
  offerId: string | undefined;

  /**
   * The name of the catalog that the offer belongs to.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The display name of the offer. This is free-form text provided by the seller.
   *
   * @public
   */
  offerName?: string | undefined;

  /**
   * The date and time until when the offer can be procured. This value is null for offers that never expire.
   *
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * The date and time when the offer became available to the buyer.
   *
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * The entity responsible for selling the product under this offer.
   *
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;

  /**
   * The products and offer sets associated with this offer.
   *
   * @public
   */
  associatedEntities: OfferAssociatedEntity[] | undefined;

  /**
   * An encoded string to be passed by the acceptor of the terms when creating an agreement.
   *
   * @public
   */
  agreementProposalId: string | undefined;

  /**
   * The identifier of the existing agreement that this offer would replace. Enables agreement-based offer functionality.
   *
   * @public
   */
  replacementAgreementId?: string | undefined;

  /**
   * The pricing model that determines how buyers are charged, such as usage-based, contract, BYOL, or free.
   *
   * @public
   */
  pricingModel: PricingModel | undefined;

  /**
   * Badges indicating special attributes of the offer, such as private pricing, future dated, or replacement offer.
   *
   * @public
   */
  badges: PurchaseOptionBadge[] | undefined;
}

/**
 * @public
 */
export interface GetOfferSetInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the offer set to retrieve.
   *
   * @public
   */
  offerSetId: string | undefined;
}

/**
 * A product and offer associated with an offer set.
 *
 * @public
 */
export interface OfferSetAssociatedEntity {
  /**
   * Information about the product associated with the offer set.
   *
   * @public
   */
  product: ProductInformation | undefined;

  /**
   * Information about the offer associated with the offer set.
   *
   * @public
   */
  offer: OfferInformation | undefined;
}

/**
 * @public
 */
export interface GetOfferSetOutput {
  /**
   * The locale of the returned content. Indicates whether the response contains content in the requested locale, or fell back to the default locale. See `Locale` for details.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the offer set.
   *
   * @public
   */
  offerSetId: string | undefined;

  /**
   * The name of the catalog that the offer set belongs to.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The display name of the offer set.
   *
   * @public
   */
  offerSetName?: string | undefined;

  /**
   * The date and time when the offer set became available to the buyer.
   *
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * The date and time when the offer set expires and is no longer available for procurement.
   *
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * Detailed information about the offer set that helps buyers understand its purpose and contents.
   *
   * @public
   */
  buyerNotes?: string | undefined;

  /**
   * The entity responsible for selling the products under this offer set.
   *
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;

  /**
   * Badges indicating special attributes of the offer set, such as private pricing or future dated.
   *
   * @public
   */
  badges: PurchaseOptionBadge[] | undefined;

  /**
   * The products and offers included in this offer set.
   *
   * @public
   */
  associatedEntities: OfferSetAssociatedEntity[] | undefined;
}

/**
 * @public
 */
export interface GetOfferTermsInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the offer whose terms to retrieve.
   *
   * @public
   */
  offerId: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to get more results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Defines a Bring Your Own License (BYOL) pricing term, where buyers use their existing license for the product.
 *
 * @public
 */
export interface ByolPricingTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;
}

/**
 * Constraints that control how a buyer can configure a rate card.
 *
 * @public
 */
export interface Constraints {
  /**
   * Whether the buyer can select multiple dimensions. Values are `Allowed` or `Disallowed`.
   *
   * @public
   */
  multipleDimensionSelection: RateCardConstraintType | undefined;

  /**
   * Whether the buyer can configure quantities. Values are `Allowed` or `Disallowed`.
   *
   * @public
   */
  quantityConfiguration: RateCardConstraintType | undefined;
}

/**
 * A label used to group or categorize pricing dimensions, such as by region or SageMaker option.
 *
 * @public
 */
export interface DimensionLabel {
  /**
   * The type of the dimension label, such as `Region` or `SagemakerOption`.
   *
   * @public
   */
  labelType: DimensionLabelType | undefined;

  /**
   * The value used to group dimensions together.
   *
   * @public
   */
  labelValue: string | undefined;

  /**
   * The human-readable display name of the label.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * A per-unit rate within a rate card, defining the price for a specific dimension.
 *
 * @public
 */
export interface RateCardItem {
  /**
   * The machine-readable key identifying the dimension being priced.
   *
   * @public
   */
  dimensionKey: string | undefined;

  /**
   * The human-readable name of the dimension.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * A description of the dimension being priced.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Labels used to categorize this dimension, such as by region.
   *
   * @public
   */
  dimensionLabels?: DimensionLabel[] | undefined;

  /**
   * The unit of measurement for the dimension.
   *
   * @public
   */
  unit: string | undefined;

  /**
   * The price per unit for the dimension.
   *
   * @public
   */
  price: string | undefined;
}

/**
 * A selector used to choose a specific configuration within a configurable upfront rate card.
 *
 * @public
 */
export interface Selector {
  /**
   * The category of the selector, such as `Duration`.
   *
   * @public
   */
  type: SelectorType | undefined;

  /**
   * The value of the selector.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * A rate card item within a configurable upfront pricing term, including a selector for choosing the configuration and per-unit rates.
 *
 * @public
 */
export interface ConfigurableUpfrontRateCardItem {
  /**
   * The selector criteria for this rate card, such as duration.
   *
   * @public
   */
  selector: Selector | undefined;

  /**
   * Constraints on how the buyer can configure this rate card, such as whether multiple dimensions can be selected.
   *
   * @public
   */
  constraints: Constraints | undefined;

  /**
   * The per-unit rates for this configuration.
   *
   * @public
   */
  rateCard: RateCardItem[] | undefined;
}

/**
 * Defines a configurable upfront pricing term with selectable rate cards, where buyers choose from predefined pricing configurations.
 *
 * @public
 */
export interface ConfigurableUpfrontPricingTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * Defines the currency for the prices in this term.
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The rate cards available for selection, each with a selector, constraints, and per-unit rates.
   *
   * @public
   */
  rateCards?: ConfigurableUpfrontRateCardItem[] | undefined;
}

/**
 * An entitlement granted to the buyer as part of a pricing term.
 *
 * @public
 */
export interface GrantItem {
  /**
   * The machine-readable key identifying the entitlement dimension.
   *
   * @public
   */
  dimensionKey: string | undefined;

  /**
   * The human-readable name of the entitlement dimension.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * A description of the entitlement.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Labels used to categorize this entitlement, such as by region.
   *
   * @public
   */
  dimensionLabels?: DimensionLabel[] | undefined;

  /**
   * The unit of measurement for the entitlement.
   *
   * @public
   */
  unit: string | undefined;

  /**
   * The maximum quantity of the entitlement that can be granted.
   *
   * @public
   */
  maxQuantity?: number | undefined;
}

/**
 * Defines a fixed upfront pricing term with a pre-paid amount and granted entitlements.
 *
 * @public
 */
export interface FixedUpfrontPricingTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * Defines the currency for the prices in this term.
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The duration of the fixed pricing term, in ISO 8601 format.
   *
   * @public
   */
  duration?: string | undefined;

  /**
   * The price charged upfront for this term.
   *
   * @public
   */
  price: string | undefined;

  /**
   * The entitlements granted to the buyer as part of this term.
   *
   * @public
   */
  grants: GrantItem[] | undefined;
}

/**
 * Defines a free trial pricing term that enables customers to try the product before purchasing.
 *
 * @public
 */
export interface FreeTrialPricingTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * The duration of the free trial period.
   *
   * @public
   */
  duration?: string | undefined;

  /**
   * The entitlements granted to the buyer during the free trial.
   *
   * @public
   */
  grants: GrantItem[] | undefined;
}

/**
 * A legal document associated with a legal term, such as a EULA or data subscription agreement.
 *
 * @public
 */
export interface DocumentItem {
  /**
   * The category of the legal document, such as `StandardEula` or `CustomEula`.
   *
   * @public
   */
  type: LegalDocumentType | undefined;

  /**
   * The URL where the legal document can be accessed.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The version of the standard contract, if applicable.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Defines a legal term containing documents proposed to buyers, such as EULAs and data subscription agreements.
 *
 * @public
 */
export interface LegalTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * The legal documents proposed to the buyer as part of this term.
   *
   * @public
   */
  documents: DocumentItem[] | undefined;
}

/**
 * Defines a net payment term that sets how many days after the invoice date the payment is due.
 *
 * @public
 */
export interface NetPaymentTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * The duration after invoice date by which payment is due.
   *
   * @public
   */
  paymentDuePeriod: string | undefined;
}

/**
 * A payment installment within a payment schedule term.
 *
 * @public
 */
export interface ScheduleItem {
  /**
   * The date when the payment is due.
   *
   * @public
   */
  chargeDate: Date | undefined;

  /**
   * The amount to be charged on the charge date.
   *
   * @public
   */
  chargeAmount: string | undefined;
}

/**
 * Defines a payment schedule term with installment payments at specified dates.
 *
 * @public
 */
export interface PaymentScheduleTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * Defines the currency for the prices in this term.
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The payment schedule installments, each with a charge date and amount.
   *
   * @public
   */
  schedule: ScheduleItem[] | undefined;
}

/**
 * Defines a recurring payment term with fixed charges at regular billing intervals.
 *
 * @public
 */
export interface RecurringPaymentTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * Defines the currency for the prices in this term.
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The billing period frequency, such as `Monthly`.
   *
   * @public
   */
  billingPeriod: BillingPeriodType | undefined;

  /**
   * The amount charged each billing period.
   *
   * @public
   */
  price: string | undefined;
}

/**
 * A single fixed price increase percentage applied at each renewal cycle.
 *
 * @public
 */
export interface FixedPercentage {
  /**
   * The percentage value applied at each renewal cycle.
   *
   * @public
   */
  percentageValue: string | undefined;
}

/**
 * A price increase percentage range with minimum, maximum, and default values.
 *
 * @public
 */
export interface PercentageRange {
  /**
   * The minimum percentage by which the price can increase at each renewal cycle.
   *
   * @public
   */
  minimumValue: string | undefined;

  /**
   * The maximum percentage by which the price can increase at each renewal cycle.
   *
   * @public
   */
  maximumValue: string | undefined;

  /**
   * The percentage increase applied by default when no other value is finalized before the adjustment deadline. Falls between `minimumValue` and `maximumValue`.
   *
   * @public
   */
  defaultValue: string | undefined;
}

/**
 * The pricing adjustment that applies at each renewal cycle, expressed as either a fixed percentage or a percentage range. Exactly one variant is present.
 *
 * @public
 */
export type PriceIncrease =
  | PriceIncrease.FixedPercentageMember
  | PriceIncrease.PercentageRangeMember
  | PriceIncrease.$UnknownMember;

/**
 * @public
 */
export namespace PriceIncrease {
  /**
   * A single fixed percentage applied uniformly at every renewal cycle.
   *
   * @public
   */
  export interface FixedPercentageMember {
    fixedPercentage: FixedPercentage;
    percentageRange?: never;
    $unknown?: never;
  }

  /**
   * A percentage band with minimum, maximum, and default values that bound the price increase at each renewal cycle.
   *
   * @public
   */
  export interface PercentageRangeMember {
    fixedPercentage?: never;
    percentageRange: PercentageRange;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fixedPercentage?: never;
    percentageRange?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fixedPercentage: (value: FixedPercentage) => T;
    percentageRange: (value: PercentageRange) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A single installment entry in the renewal payment schedule.
 *
 * @public
 */
export interface PaymentScheduleEntry {
  /**
   * The relative offset from the renewal agreement start date when this installment is due, represented in ISO 8601 duration format (for example, P1M or P30D).
   *
   * @public
   */
  chargeDateOffset: string | undefined;

  /**
   * The percentage of the increased Total Contract Value (TCV) to charge in this installment. All entries in a schedule sum to 100.00.
   *
   * @public
   */
  chargePercentage: string | undefined;

  /**
   * The optional calendar day of month on which the charge occurs. When absent, the charge day is derived from `chargeDateOffset`. For months with fewer days than the specified day, the charge occurs on the last day of the month. For example, if `dayOfMonth` is 31, the charge in April occurs on April 30.
   *
   * @public
   */
  dayOfMonth?: number | undefined;
}

/**
 * A template for the payment schedule term on the renewal offer.
 *
 * @public
 */
export interface PaymentScheduleTermTemplate {
  /**
   * An ordered list of installment entries for the renewal payment schedule.
   *
   * @public
   */
  schedule: PaymentScheduleEntry[] | undefined;
}

/**
 * A structural template defining how a specific term type is reshaped on each renewal cycle. Exactly one variant is present.
 *
 * @public
 */
export type TermTemplate =
  | TermTemplate.PaymentScheduleTermTemplateMember
  | TermTemplate.$UnknownMember;

/**
 * @public
 */
export namespace TermTemplate {
  /**
   * The installment schedule used to structure payments on the renewal offer.
   *
   * @public
   */
  export interface PaymentScheduleTermTemplateMember {
    paymentScheduleTermTemplate: PaymentScheduleTermTemplate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    paymentScheduleTermTemplate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    paymentScheduleTermTemplate: (value: PaymentScheduleTermTemplate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines a renewal term that enables automatic agreement renewal.
 *
 * @public
 */
export interface RenewalTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * The maximum number of renewals allowed on this offer. Absent means unlimited renewals.
   *
   * @public
   */
  maxRenewals?: number | undefined;

  /**
   * The duration before the agreement end date when the lockout window begins, in ISO 8601 format (for example, P30D). Absent means no lockout.
   *
   * @public
   */
  lockoutPeriod?: string | undefined;

  /**
   * The duration before the agreement end date by which the renewal price is finalized, represented in ISO 8601 format (for example, P30D). Only applicable with `PercentageRange`.
   *
   * @public
   */
  adjustmentDeadline?: string | undefined;

  /**
   * The price increase applied at each renewal cycle. Absent means identical pricing on renewal.
   *
   * @public
   */
  priceIncrease?: PriceIncrease | undefined;

  /**
   * Structural templates defining how specific terms are reshaped on each renewal cycle. Absent for upfront-only offers.
   *
   * @public
   */
  termTemplates?: TermTemplate[] | undefined;
}

/**
 * Defines a support term that includes the refund policy for the offer.
 *
 * @public
 */
export interface SupportTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * The refund policy description for the offer.
   *
   * @public
   */
  refundPolicy: string | undefined;
}

/**
 * A rate card within a usage-based pricing term, containing per-unit rates.
 *
 * @public
 */
export interface UsageBasedRateCardItem {
  /**
   * The per-unit rates for this usage-based rate card.
   *
   * @public
   */
  rateCard: RateCardItem[] | undefined;
}

/**
 * Defines a usage-based pricing term (typically pay-as-you-go), where buyers are charged based on product usage.
 *
 * @public
 */
export interface UsageBasedPricingTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * Defines the currency for the prices in this term.
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The rate cards containing per-unit rates for usage-based pricing.
   *
   * @public
   */
  rateCards: UsageBasedRateCardItem[] | undefined;
}

/**
 * Defines a validity term that specifies the duration or date range of an agreement.
 *
 * @public
 */
export interface ValidityTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * The duration of the agreement, in ISO 8601 format.
   *
   * @public
   */
  agreementDuration?: string | undefined;

  /**
   * The date when the agreement ends.
   *
   * @public
   */
  agreementEndDate?: Date | undefined;

  /**
   * The date when the agreement starts.
   *
   * @public
   */
  agreementStartDate?: Date | undefined;
}

/**
 * Defines a variable payment term with a maximum total charge amount.
 *
 * @public
 */
export interface VariablePaymentTerm {
  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The category of the term.
   *
   * @public
   */
  type: TermType | undefined;

  /**
   * Defines the currency for the prices in this term.
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The maximum total amount that can be charged under this term.
   *
   * @public
   */
  maxTotalChargeAmount: string | undefined;
}

/**
 * A term attached to an offer. Each element contains exactly one term type, such as a pricing term, legal term, or payment schedule term.
 *
 * @public
 */
export type OfferTerm =
  | OfferTerm.ByolPricingTermMember
  | OfferTerm.ConfigurableUpfrontPricingTermMember
  | OfferTerm.FixedUpfrontPricingTermMember
  | OfferTerm.FreeTrialPricingTermMember
  | OfferTerm.LegalTermMember
  | OfferTerm.NetPaymentTermMember
  | OfferTerm.PaymentScheduleTermMember
  | OfferTerm.RecurringPaymentTermMember
  | OfferTerm.RenewalTermMember
  | OfferTerm.SupportTermMember
  | OfferTerm.UsageBasedPricingTermMember
  | OfferTerm.ValidityTermMember
  | OfferTerm.VariablePaymentTermMember
  | OfferTerm.$UnknownMember;

/**
 * @public
 */
export namespace OfferTerm {
  /**
   * Defines a Bring Your Own License (BYOL) pricing term, where buyers use their existing license for the product.
   *
   * @public
   */
  export interface ByolPricingTermMember {
    byolPricingTerm: ByolPricingTerm;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a configurable upfront pricing term with selectable rate cards, where buyers choose from predefined pricing configurations.
   *
   * @public
   */
  export interface ConfigurableUpfrontPricingTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm: ConfigurableUpfrontPricingTerm;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a fixed upfront pricing term with a pre-paid amount and granted entitlements.
   *
   * @public
   */
  export interface FixedUpfrontPricingTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm: FixedUpfrontPricingTerm;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a free trial pricing term that enables customers to try the product before purchasing.
   *
   * @public
   */
  export interface FreeTrialPricingTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm: FreeTrialPricingTerm;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a legal term containing documents proposed to buyers, such as EULAs and data subscription agreements.
   *
   * @public
   */
  export interface LegalTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm: LegalTerm;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a payment schedule term with installment payments at specified dates.
   *
   * @public
   */
  export interface PaymentScheduleTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm: PaymentScheduleTerm;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a recurring payment term with fixed charges at regular billing intervals.
   *
   * @public
   */
  export interface RecurringPaymentTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm: RecurringPaymentTerm;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a renewal term that enables automatic agreement renewal.
   *
   * @public
   */
  export interface RenewalTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm: RenewalTerm;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a support term that includes the refund policy for the offer.
   *
   * @public
   */
  export interface SupportTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm: SupportTerm;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a usage-based pricing term (typically pay-as-you-go), where buyers are charged based on product usage.
   *
   * @public
   */
  export interface UsageBasedPricingTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm: UsageBasedPricingTerm;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a validity term that specifies the duration or date range of an agreement.
   *
   * @public
   */
  export interface ValidityTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm: ValidityTerm;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a variable payment term with a maximum total charge amount.
   *
   * @public
   */
  export interface VariablePaymentTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm: VariablePaymentTerm;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * A net payment term.
   *
   * @public
   */
  export interface NetPaymentTermMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm: NetPaymentTerm;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    byolPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    freeTrialPricingTerm?: never;
    legalTerm?: never;
    paymentScheduleTerm?: never;
    recurringPaymentTerm?: never;
    renewalTerm?: never;
    supportTerm?: never;
    usageBasedPricingTerm?: never;
    validityTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    byolPricingTerm: (value: ByolPricingTerm) => T;
    configurableUpfrontPricingTerm: (value: ConfigurableUpfrontPricingTerm) => T;
    fixedUpfrontPricingTerm: (value: FixedUpfrontPricingTerm) => T;
    freeTrialPricingTerm: (value: FreeTrialPricingTerm) => T;
    legalTerm: (value: LegalTerm) => T;
    paymentScheduleTerm: (value: PaymentScheduleTerm) => T;
    recurringPaymentTerm: (value: RecurringPaymentTerm) => T;
    renewalTerm: (value: RenewalTerm) => T;
    supportTerm: (value: SupportTerm) => T;
    usageBasedPricingTerm: (value: UsageBasedPricingTerm) => T;
    validityTerm: (value: ValidityTerm) => T;
    variablePaymentTerm: (value: VariablePaymentTerm) => T;
    netPaymentTerm: (value: NetPaymentTerm) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetOfferTermsOutput {
  /**
   * The locale of the returned content. Indicates whether the response contains content in the requested locale, or fell back to the default locale. See `Locale` for details.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The terms attached to the offer. Each element contains exactly one term type.
   *
   * @public
   */
  offerTerms: OfferTerm[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProductInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the product to retrieve.
   *
   * @public
   */
  productId: string | undefined;
}

/**
 * @public
 */
export interface GetProductOutput {
  /**
   * The locale of the returned content. Indicates whether the response contains content in the requested locale, or fell back to the default locale. See `Locale` for details.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the product.
   *
   * @public
   */
  productId: string | undefined;

  /**
   * The name of the catalog that the product belongs to.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The human-readable display name of the product.
   *
   * @public
   */
  productName: string | undefined;

  /**
   * The entity who manufactured the product.
   *
   * @public
   */
  manufacturer: SellerInformation | undefined;

  /**
   * Indicates whether the product is deployed on AWS infrastructure.
   *
   * @public
   */
  deployedOnAws: DeployedOnAwsStatus | undefined;

  /**
   * A 1–3 sentence summary describing the key aspects of the product.
   *
   * @public
   */
  shortDescription: string | undefined;

  /**
   * A detailed description of what the product does, in paragraph format.
   *
   * @public
   */
  longDescription: string | undefined;

  /**
   * The URL of the logo thumbnail image for the product.
   *
   * @public
   */
  logoThumbnailUrl: string | undefined;

  /**
   * A summary of fulfillment options available for deploying or accessing the product, such as AMI, SaaS, or Container.
   *
   * @public
   */
  fulfillmentOptionSummaries: FulfillmentOptionSummary[] | undefined;

  /**
   * The categories used to classify this product into logical groups.
   *
   * @public
   */
  categories: Category[] | undefined;

  /**
   * A list of key features that the product offers to customers.
   *
   * @public
   */
  highlights: string[] | undefined;

  /**
   * Embedded promotional media provided by the creator of the product, such as images and videos.
   *
   * @public
   */
  promotionalMedia: PromotionalMedia[] | undefined;

  /**
   * Resources that provide further information about using the product or requesting support, such as documentation links, support contacts, and usage instructions.
   *
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * Engagement options available to potential buyers, such as requesting a private offer or requesting a demo.
   *
   * @public
   */
  sellerEngagements: SellerEngagement[] | undefined;

  /**
   * The default listing identifier associated with the product.
   *
   * @public
   */
  listingId: string | undefined;
}

/**
 * @public
 */
export interface ListFulfillmentOptionsInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The unique identifier of the product for which to list fulfillment options.
   *
   * @public
   */
  productId: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to get more results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes an AWS CloudFormation template fulfillment option for infrastructure deployment.
 *
 * @public
 */
export interface CloudFormationFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The display name of the fulfillment option version.
   *
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The version identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * Release notes describing changes in this version of the fulfillment option.
   *
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * Instructions on how to deploy and use this CloudFormation template.
   *
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * The date and time when the CloudFormation fulfillment option became available for fulfillment.
   *
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * A short description of the fulfillment option.
   *
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * A detailed description of the fulfillment option.
   *
   * @public
   */
  longDescription?: string | undefined;
}

/**
 * Describes an operating system supported by a container fulfillment option.
 *
 * @public
 */
export interface ContainerOperatingSystem {
  /**
   * The operating system family, such as Linux.
   *
   * @public
   */
  operatingSystemFamilyName: string | undefined;

  /**
   * The specific operating system name.
   *
   * @public
   */
  operatingSystemName: string | undefined;
}

/**
 * Describes a container image fulfillment option for container-based deployment.
 *
 * @public
 */
export interface ContainerFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The display name of the fulfillment option version.
   *
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The version identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * The operating systems supported by this container image.
   *
   * @public
   */
  operatingSystems?: ContainerOperatingSystem[] | undefined;

  /**
   * The AWS services supported by this container deployment.
   *
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;

  /**
   * Release notes describing changes in this version of the fulfillment option.
   *
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * Instructions on how to deploy and use this container image.
   *
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * Describes a data artifact within a Data Exchange fulfillment option.
 *
 * @public
 */
export interface DataArtifact {
  /**
   * A description of the data artifact.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data artifact.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The type of the data artifact resource.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The classification of sensitive data contained in the dataset.
   *
   * @public
   */
  dataClassification: string | undefined;
}

/**
 * Describes an AWS Data Exchange fulfillment option for data set delivery.
 *
 * @public
 */
export interface DataExchangeFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The data artifacts included in this Data Exchange fulfillment option.
   *
   * @public
   */
  dataArtifacts?: DataArtifact[] | undefined;
}

/**
 * Describes an EC2 Image Builder component fulfillment option.
 *
 * @public
 */
export interface Ec2ImageBuilderComponentFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The display name of the fulfillment option version.
   *
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The version identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * The operating systems supported by this EC2 Image Builder component.
   *
   * @public
   */
  operatingSystems?: ContainerOperatingSystem[] | undefined;

  /**
   * The AWS services supported by this EC2 Image Builder component.
   *
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;

  /**
   * Release notes describing changes in this version of the fulfillment option.
   *
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * Instructions on how to deploy and use this EC2 Image Builder component.
   *
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * Describes an operating system supported by an EKS add-on fulfillment option.
 *
 * @public
 */
export interface EksAddOnOperatingSystem {
  /**
   * The operating system family, such as Linux.
   *
   * @public
   */
  operatingSystemFamilyName: string | undefined;

  /**
   * The specific operating system name.
   *
   * @public
   */
  operatingSystemName: string | undefined;
}

/**
 * Describes an Amazon EKS add-on fulfillment option.
 *
 * @public
 */
export interface EksAddOnFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The display name of the fulfillment option version.
   *
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The version identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * The operating systems supported by this EKS add-on.
   *
   * @public
   */
  operatingSystems?: EksAddOnOperatingSystem[] | undefined;

  /**
   * Release notes describing changes in this version of the fulfillment option.
   *
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * Instructions on how to deploy and use this EKS add-on.
   *
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * The AWS services supported by this EKS add-on.
   *
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;
}

/**
 * Describes an operating system supported by a Helm chart fulfillment option.
 *
 * @public
 */
export interface HelmOperatingSystem {
  /**
   * The operating system family, such as Linux.
   *
   * @public
   */
  operatingSystemFamilyName: string | undefined;

  /**
   * The specific operating system name.
   *
   * @public
   */
  operatingSystemName: string | undefined;
}

/**
 * Describes a Helm chart fulfillment option for Kubernetes deployment.
 *
 * @public
 */
export interface HelmFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The display name of the fulfillment option version.
   *
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The version identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * The operating systems supported by this Helm chart.
   *
   * @public
   */
  operatingSystems?: HelmOperatingSystem[] | undefined;

  /**
   * Release notes describing changes in this version of the fulfillment option.
   *
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * The AWS services supported by this Helm chart deployment.
   *
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;

  /**
   * Instructions on how to deploy and use this Helm chart.
   *
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * Describes a professional services fulfillment option.
 *
 * @public
 */
export interface ProfessionalServicesFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;
}

/**
 * Describes a Software as a Service (SaaS) fulfillment option.
 *
 * @public
 */
export interface SaasFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The URL of the seller's software registration landing page.
   *
   * @public
   */
  fulfillmentUrl?: string | undefined;

  /**
   * Instructions on how to access and use this SaaS product.
   *
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * The date and time when the SaaS product became available for fulfillment.
   *
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * The URL that a buyer uses to launch the seller's SaaS product. This URL is distinct from `fulfillmentUrl`, which is the seller's software registration landing page.
   *
   * @public
   */
  launchUrl?: string | undefined;

  /**
   * Specifies whether the SaaS product supports quick-launch deployment.
   *
   * @public
   */
  quickLaunch: SaasQuickLaunchStatus | undefined;
}

/**
 * Recommended instance types for training and inference with a SageMaker algorithm.
 *
 * @public
 */
export interface SageMakerAlgorithmRecommendation {
  /**
   * The recommended instance type for batch inference.
   *
   * @public
   */
  recommendedBatchTransformInstanceType: string | undefined;

  /**
   * The recommended instance type for real-time inference.
   *
   * @public
   */
  recommendedRealtimeInferenceInstanceType?: string | undefined;

  /**
   * The recommended instance type for training.
   *
   * @public
   */
  recommendedTrainingInstanceType: string | undefined;
}

/**
 * Describes an Amazon SageMaker algorithm fulfillment option, including version details and recommended instance types.
 *
 * @public
 */
export interface SageMakerAlgorithmFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The version identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * Release notes describing changes in this version of the fulfillment option.
   *
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * Instructions on how to use this SageMaker algorithm.
   *
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * Recommended instance types for training and inference with this algorithm.
   *
   * @public
   */
  recommendation?: SageMakerAlgorithmRecommendation | undefined;
}

/**
 * Recommended instance types for inference with a SageMaker model.
 *
 * @public
 */
export interface SageMakerModelRecommendation {
  /**
   * The recommended instance type for batch inference.
   *
   * @public
   */
  recommendedBatchTransformInstanceType: string | undefined;

  /**
   * The recommended instance type for real-time inference.
   *
   * @public
   */
  recommendedRealtimeInferenceInstanceType?: string | undefined;
}

/**
 * Describes an Amazon SageMaker model fulfillment option, including version details and recommended instance types.
 *
 * @public
 */
export interface SageMakerModelFulfillmentOption {
  /**
   * The unique identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * The category of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * A human-readable name for the fulfillment option type.
   *
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * The version identifier of the fulfillment option.
   *
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * Release notes describing changes in this version of the fulfillment option.
   *
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * Instructions on how to use this SageMaker model.
   *
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * Recommended instance types for inference with this model.
   *
   * @public
   */
  recommendation?: SageMakerModelRecommendation | undefined;

  /**
   * The MIME types that this model accepts as input.
   *
   * @public
   */
  supportedContentTypes?: string[] | undefined;

  /**
   * The MIME types that this model returns as output.
   *
   * @public
   */
  supportedResponseMimeTypes?: string[] | undefined;
}

/**
 * Describes a fulfillment option for a product. Each element contains exactly one fulfillment option type.
 *
 * @public
 */
export type FulfillmentOption =
  | FulfillmentOption.AmazonMachineImageFulfillmentOptionMember
  | FulfillmentOption.ApiFulfillmentOptionMember
  | FulfillmentOption.CloudFormationFulfillmentOptionMember
  | FulfillmentOption.ContainerFulfillmentOptionMember
  | FulfillmentOption.DataExchangeFulfillmentOptionMember
  | FulfillmentOption.Ec2ImageBuilderComponentFulfillmentOptionMember
  | FulfillmentOption.EksAddOnFulfillmentOptionMember
  | FulfillmentOption.HelmFulfillmentOptionMember
  | FulfillmentOption.ProfessionalServicesFulfillmentOptionMember
  | FulfillmentOption.SaasFulfillmentOptionMember
  | FulfillmentOption.SageMakerAlgorithmFulfillmentOptionMember
  | FulfillmentOption.SageMakerModelFulfillmentOptionMember
  | FulfillmentOption.$UnknownMember;

/**
 * @public
 */
export namespace FulfillmentOption {
  /**
   * An Amazon Machine Image (AMI) fulfillment option for EC2 deployment.
   *
   * @public
   */
  export interface AmazonMachineImageFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption: AmazonMachineImageFulfillmentOption;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * An API-based fulfillment option for programmatic integration.
   *
   * @public
   */
  export interface ApiFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption: ApiFulfillmentOption;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * An AWS CloudFormation template fulfillment option for infrastructure deployment.
   *
   * @public
   */
  export interface CloudFormationFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption: CloudFormationFulfillmentOption;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * A container image fulfillment option for container-based deployment.
   *
   * @public
   */
  export interface ContainerFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption: ContainerFulfillmentOption;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * A Helm chart fulfillment option for Kubernetes deployment.
   *
   * @public
   */
  export interface HelmFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption: HelmFulfillmentOption;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * An Amazon EKS add-on fulfillment option.
   *
   * @public
   */
  export interface EksAddOnFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption: EksAddOnFulfillmentOption;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * An EC2 Image Builder component fulfillment option.
   *
   * @public
   */
  export interface Ec2ImageBuilderComponentFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption: Ec2ImageBuilderComponentFulfillmentOption;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * An AWS Data Exchange fulfillment option for data set delivery.
   *
   * @public
   */
  export interface DataExchangeFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption: DataExchangeFulfillmentOption;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * A professional services fulfillment option.
   *
   * @public
   */
  export interface ProfessionalServicesFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption: ProfessionalServicesFulfillmentOption;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * A Software as a Service (SaaS) fulfillment option.
   *
   * @public
   */
  export interface SaasFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption: SaasFulfillmentOption;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * An Amazon SageMaker algorithm fulfillment option.
   *
   * @public
   */
  export interface SageMakerAlgorithmFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption: SageMakerAlgorithmFulfillmentOption;
    sageMakerModelFulfillmentOption?: never;
    $unknown?: never;
  }

  /**
   * An Amazon SageMaker model fulfillment option.
   *
   * @public
   */
  export interface SageMakerModelFulfillmentOptionMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption: SageMakerModelFulfillmentOption;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    amazonMachineImageFulfillmentOption?: never;
    apiFulfillmentOption?: never;
    cloudFormationFulfillmentOption?: never;
    containerFulfillmentOption?: never;
    helmFulfillmentOption?: never;
    eksAddOnFulfillmentOption?: never;
    ec2ImageBuilderComponentFulfillmentOption?: never;
    dataExchangeFulfillmentOption?: never;
    professionalServicesFulfillmentOption?: never;
    saasFulfillmentOption?: never;
    sageMakerAlgorithmFulfillmentOption?: never;
    sageMakerModelFulfillmentOption?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    amazonMachineImageFulfillmentOption: (value: AmazonMachineImageFulfillmentOption) => T;
    apiFulfillmentOption: (value: ApiFulfillmentOption) => T;
    cloudFormationFulfillmentOption: (value: CloudFormationFulfillmentOption) => T;
    containerFulfillmentOption: (value: ContainerFulfillmentOption) => T;
    helmFulfillmentOption: (value: HelmFulfillmentOption) => T;
    eksAddOnFulfillmentOption: (value: EksAddOnFulfillmentOption) => T;
    ec2ImageBuilderComponentFulfillmentOption: (value: Ec2ImageBuilderComponentFulfillmentOption) => T;
    dataExchangeFulfillmentOption: (value: DataExchangeFulfillmentOption) => T;
    professionalServicesFulfillmentOption: (value: ProfessionalServicesFulfillmentOption) => T;
    saasFulfillmentOption: (value: SaasFulfillmentOption) => T;
    sageMakerAlgorithmFulfillmentOption: (value: SageMakerAlgorithmFulfillmentOption) => T;
    sageMakerModelFulfillmentOption: (value: SageMakerModelFulfillmentOption) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListFulfillmentOptionsOutput {
  /**
   * A BCP 47 language tag or comma-separated priority list of language tags that specifies the preferred locale for response content. The field accepts a maximum of two language tags.
   *
   * The service resolves a locale string to the nearest supported locale. If no supported locale matches, the service applies the fallback behavior described below.
   *
   * - **Preferred locale** (first tag) – The locale you want the service to return content in.
   * - **Fallback locale** (optional, second tag) – The service default locale (`en-US` or `en`). The service returns content in this locale when translated content for the preferred locale is unavailable.
   *
   * The field is optional. If omitted or null, the service returns content in the default locale (`en-US`).
   *
   * **Supported locales:**
   *
   * - `en-US` – English (service default, also resolves from `en`)
   * - `fr` – French
   * - `es` – Spanish
   * - `ko` – Korean
   * - `ja` – Japanese
   *
   * **Fallback behavior:**
   *
   * - If translated content for the preferred locale is unavailable, the service returns content in the default locale.
   * - If the preferred locale is not supported and no fallback is provided, the service returns a `ValidationException`.
   * - If you provide an unsupported locale with the default locale as fallback (for example, `xx, en-US`), the service returns content in the default locale.
   *
   * **Response locale field (Get APIs):** The `locale` field in Get API responses indicates the locale of the returned content. You can use this field to determine whether the response contains content in the requested locale or the default locale.
   *
   * **Examples:**
   *
   * - `fr` – Request French content. If unavailable, falls back to `en-US`.
   * - `fr, en-US` – Request French content with explicit fallback to English.
   * - `en-US` – Request content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The fulfillment options available for the product. Each option describes how the buyer can deploy or access the product.
   *
   * @public
   */
  fulfillmentOptions: FulfillmentOption[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A filter used to narrow purchase option results by product, seller, type, visibility, or availability.
 *
 * @public
 */
export interface PurchaseOptionFilter {
  /**
   * The type of filter to apply, such as `PRODUCT_ID`, `VISIBILITY_SCOPE`, or `PURCHASE_OPTION_TYPE`.
   *
   * @public
   */
  filterType: PurchaseOptionFilterType | undefined;

  /**
   * The values to filter by. Supported values depend on `filterType`:
   *
   * - `PRODUCT_ID` – One or more product identifiers to filter by.
   * - `SELLER_OF_RECORD_PROFILE_ID` – One or more seller profile identifiers to filter by.
   * - `PURCHASE_OPTION_TYPE` – One or more purchase option types to filter by: `OFFER` or `OFFERSET`.
   * - `VISIBILITY_SCOPE` – The visibility scope to filter by: `PRIVATE`.
   * - `AVAILABILITY_STATUS` – One or more availability statuses to filter by: `AVAILABLE` or `EXPIRED`.
   *
   * To retrieve private offers and offer sets visible to you, use `VISIBILITY_SCOPE` with `PRIVATE`. OR logic combines multiple values within the same filter.
   *
   * @public
   */
  filterValues: string[] | undefined;
}

/**
 * @public
 */
export interface ListPurchaseOptionsInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * Filters to narrow the results. Multiple filters are combined with AND logic. Multiple values within the same filter are combined with OR logic.
   *
   * @public
   */
  filters?: PurchaseOptionFilter[] | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to get more results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A product, offer, and optional offer set associated with a purchase option.
 *
 * @public
 */
export interface PurchaseOptionAssociatedEntity {
  /**
   * Information about the product associated with the purchase option.
   *
   * @public
   */
  product: ProductInformation | undefined;

  /**
   * Information about the offer associated with the purchase option.
   *
   * @public
   */
  offer: OfferInformation | undefined;

  /**
   * Information about the offer set, if the purchase option is part of a bundled offer set.
   *
   * @public
   */
  offerSet?: OfferSetInformation | undefined;
}

/**
 * Summary information about a purchase option (offer or offer set) available to the buyer, including the seller, badges, and associated products.
 *
 * @public
 */
export interface PurchaseOptionSummary {
  /**
   * The unique identifier of the purchase option.
   *
   * @public
   */
  purchaseOptionId: string | undefined;

  /**
   * The name of the catalog that the purchase option belongs to.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The type of purchase option. Values are `OFFER` for a single-product offer or `OFFERSET` for a bundled offer set.
   *
   * @public
   */
  purchaseOptionType: PurchaseOptionType | undefined;

  /**
   * The display name of the purchase option.
   *
   * @public
   */
  purchaseOptionName?: string | undefined;

  /**
   * The date and time when the purchase option became available to the buyer.
   *
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * The date and time when the purchase option expires and is no longer available for procurement.
   *
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * The entity responsible for selling the product under this purchase option.
   *
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;

  /**
   * Badges indicating special attributes of the purchase option, such as private pricing or future dated.
   *
   * @public
   */
  badges?: PurchaseOptionBadge[] | undefined;

  /**
   * The products, offers, and offer sets associated with this purchase option.
   *
   * @public
   */
  associatedEntities: PurchaseOptionAssociatedEntity[] | undefined;
}

/**
 * @public
 */
export interface ListPurchaseOptionsOutput {
  /**
   * The purchase options available to the buyer. Each option is either an offer for a single product or an offer set spanning multiple products.
   *
   * @public
   */
  purchaseOptions?: PurchaseOptionSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A filter used to narrow search results by attribute, such as category, pricing model, or fulfillment type.
 *
 * @public
 */
export interface SearchFilter {
  /**
   * The type of filter to apply.
   *
   * @public
   */
  filterType: SearchFilterType | undefined;

  /**
   * The values to filter by. Term filters accept multiple values (OR logic). Range filters (MIN/MAX_AVERAGE_CUSTOMER_RATING) accept a single value between 0.0 and 5.0.
   *
   * @public
   */
  filterValues: string[] | undefined;
}

/**
 * @public
 */
export interface SearchFacetsInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The search query text to filter listings before retrieving facets.
   *
   * @public
   */
  searchText?: string | undefined;

  /**
   * Filters to apply before retrieving facets. Multiple filters are combined with AND logic. Multiple values within the same filter are combined with OR logic.
   *
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * A list of specific facet types to retrieve. If empty or null, all available facets are returned.
   *
   * @public
   */
  facetTypes?: SearchFacetType[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A facet value with display information and a count of matching listings. Used to build filter and browse experiences.
 *
 * @public
 */
export interface ListingFacet {
  /**
   * The internal value used for filtering when passed back in a search filter.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The human-readable name of the facet value, suitable for display in a user interface.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The parent facet value for hierarchical facets, such as subcategories.
   *
   * @public
   */
  parent?: string | undefined;

  /**
   * The number of listings matching this facet value.
   *
   * @public
   */
  count: number | undefined;
}

/**
 * @public
 */
export interface SearchFacetsOutput {
  /**
   * The total number of listings matching the search criteria.
   *
   * @public
   */
  totalResults: number | undefined;

  /**
   * A map of facet types to their corresponding facet values. Each facet value includes a display name, internal value, and count of matching listings.
   *
   * @public
   */
  listingFacets: Partial<Record<SearchFacetType, ListingFacet[]>> | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchListingsInput {
  /**
   * A BCP 47 language tag or comma-separated priority list specifying the preferred locale for response content. See `Locale` for supported values, constraints, fallback behavior, and the default locale. If omitted, the service returns content in the default locale.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * The search query text to find relevant listings.
   *
   * @public
   */
  searchText?: string | undefined;

  /**
   * Filters to narrow search results. Multiple filters are combined with AND logic. Multiple values within the same filter are combined with OR logic.
   *
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to get more results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The field to sort results by. Valid values are `RELEVANCE` and `AVERAGE_CUSTOMER_RATING`.
   *
   * @public
   */
  sortBy?: SearchListingsSortBy | undefined;

  /**
   * The sort direction. Valid values are `DESCENDING` and `ASCENDING`.
   *
   * @public
   */
  sortOrder?: SearchListingsSortOrder | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A product associated with a listing summary.
 *
 * @public
 */
export interface ListingSummaryAssociatedEntity {
  /**
   * Information about the associated product.
   *
   * @public
   */
  product?: ProductInformation | undefined;
}

/**
 * Summary information about a listing returned by search operations, including the listing name, description, badges, categories, pricing models, reviews, and associated products.
 *
 * @public
 */
export interface ListingSummary {
  /**
   * The unique identifier of the listing.
   *
   * @public
   */
  listingId: string | undefined;

  /**
   * The human-readable display name of the listing.
   *
   * @public
   */
  listingName: string | undefined;

  /**
   * The entity who created and published the listing.
   *
   * @public
   */
  publisher: SellerInformation | undefined;

  /**
   * A summary of fulfillment options available for the listing.
   *
   * @public
   */
  fulfillmentOptionSummaries: FulfillmentOptionSummary[] | undefined;

  /**
   * The name of the catalog that the listing belongs to.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * A 1–3 sentence summary describing the key aspects of the listing.
   *
   * @public
   */
  shortDescription: string | undefined;

  /**
   * The URL of the logo thumbnail image for the listing.
   *
   * @public
   */
  logoThumbnailUrl: string | undefined;

  /**
   * The categories used to classify this listing into logical groups.
   *
   * @public
   */
  categories: Category[] | undefined;

  /**
   * Badges indicating special attributes of the listing.
   *
   * @public
   */
  badges: ListingBadge[] | undefined;

  /**
   * A summary of customer reviews for the listing.
   *
   * @public
   */
  reviewSummary: ReviewSummary | undefined;

  /**
   * The pricing models for offers associated with this listing.
   *
   * @public
   */
  pricingModels: PricingModel[] | undefined;

  /**
   * The pricing units that define the billing dimensions for offers associated with this listing.
   *
   * @public
   */
  pricingUnits: PricingUnit[] | undefined;

  /**
   * The products associated with this listing.
   *
   * @public
   */
  associatedEntities: ListingSummaryAssociatedEntity[] | undefined;
}

/**
 * @public
 */
export interface SearchListingsOutput {
  /**
   * The total number of listings matching the search criteria.
   *
   * @public
   */
  totalResults: number | undefined;

  /**
   * The listing summaries matching the search criteria. Each summary includes the listing name, description, badges, categories, pricing models, reviews, and associated products.
   *
   * @public
   */
  listingSummaries: ListingSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}
