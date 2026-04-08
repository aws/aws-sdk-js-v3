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
 * <p>Describes an operating system supported by an AMI fulfillment option.</p>
 * @public
 */
export interface AmazonMachineImageOperatingSystem {
  /**
   * <p>The operating system family, such as Linux or Windows.</p>
   * @public
   */
  operatingSystemFamilyName: string | undefined;

  /**
   * <p>The specific operating system name, such as Amazon Linux 2 or Windows Server 2022.</p>
   * @public
   */
  operatingSystemName: string | undefined;

  /**
   * <p>The version of the operating system.</p>
   * @public
   */
  operatingSystemVersion?: string | undefined;
}

/**
 * <p>Recommended instance types for running an AMI fulfillment option.</p>
 * @public
 */
export interface AmazonMachineImageRecommendation {
  /**
   * <p>The recommended EC2 instance type for this AMI.</p>
   * @public
   */
  instanceType: string | undefined;
}

/**
 * <p>Describes an Amazon Machine Image (AMI) fulfillment option, including version details, supported operating systems, and recommended instance types.</p>
 * @public
 */
export interface AmazonMachineImageFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The display name of the fulfillment option version.</p>
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * <p>The version identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The operating systems supported by this AMI.</p>
   * @public
   */
  operatingSystems: AmazonMachineImageOperatingSystem[] | undefined;

  /**
   * <p>Recommended instance types for running this AMI.</p>
   * @public
   */
  recommendation?: AmazonMachineImageRecommendation | undefined;

  /**
   * <p>Release notes describing changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to deploy and use this fulfillment option.</p>
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * <p>Describes an AWS service supported by a fulfillment option.</p>
 * @public
 */
export interface AwsSupportedService {
  /**
   * <p>The machine-readable identifier of the supported service.</p>
   * @public
   */
  supportedServiceType: string | undefined;

  /**
   * <p>The human-readable name of the supported service.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>A description of the supported service.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * <p>Describes an API-based fulfillment option, where the product is accessed through an API integration.</p>
 * @public
 */
export interface ApiFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>Instructions on how to integrate with and use this API.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>The AWS services supported by this API integration.</p>
   * @public
   */
  awsSupportedServices: AwsSupportedService[] | undefined;
}

/**
 * @public
 */
export interface GetListingInput {
  /**
   * <p>The unique identifier of the listing to retrieve.</p>
   * @public
   */
  listingId: string | undefined;
}

/**
 * <p>Information about a seller, including the profile identifier and display name.</p>
 * @public
 */
export interface SellerInformation {
  /**
   * <p>The unique identifier of the seller profile.</p>
   * @public
   */
  sellerProfileId: string | undefined;

  /**
   * <p>The human-readable name of the seller.</p>
   * @public
   */
  displayName: string | undefined;
}

/**
 * <p>Summary information about an offer, including the offer identifier, name, and seller of record.</p>
 * @public
 */
export interface OfferInformation {
  /**
   * <p>The unique identifier of the offer.</p>
   * @public
   */
  offerId: string | undefined;

  /**
   * <p>The display name of the offer.</p>
   * @public
   */
  offerName?: string | undefined;

  /**
   * <p>The entity responsible for selling the product under this offer.</p>
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;
}

/**
 * <p>Summary information about a product, including the identifier, name, and manufacturer.</p>
 * @public
 */
export interface ProductInformation {
  /**
   * <p>The unique identifier of the product.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The human-readable display name of the product.</p>
   * @public
   */
  productName: string | undefined;

  /**
   * <p>The entity who manufactured the product.</p>
   * @public
   */
  manufacturer: SellerInformation | undefined;
}

/**
 * <p>A product and offer associated with a listing.</p>
 * @public
 */
export interface ListingAssociatedEntity {
  /**
   * <p>Information about the product associated with the listing.</p>
   * @public
   */
  product?: ProductInformation | undefined;

  /**
   * <p>Information about the default offer associated with the listing.</p>
   * @public
   */
  offer?: OfferInformation | undefined;
}

/**
 * <p>A badge indicating a special attribute of a listing, such as free tier eligibility or Quick Launch support.</p>
 * @public
 */
export interface ListingBadge {
  /**
   * <p>The human-readable name of the badge.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The machine-readable type of the badge.</p>
   * @public
   */
  badgeType: ListingBadgeType | undefined;
}

/**
 * <p>A category used to classify a listing or product into a logical group.</p>
 * @public
 */
export interface Category {
  /**
   * <p>The machine-readable identifier of the category.</p>
   * @public
   */
  categoryId: string | undefined;

  /**
   * <p>The human-readable name of the category.</p>
   * @public
   */
  displayName: string | undefined;
}

/**
 * <p>A summary of a fulfillment option available for deploying or accessing a listing or product.</p>
 * @public
 */
export interface FulfillmentOptionSummary {
  /**
   * <p>The machine-readable type of the fulfillment option, such as <code>SAAS</code> or <code>AMAZON_MACHINE_IMAGE</code>.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>The human-readable name of the fulfillment option type.</p>
   * @public
   */
  displayName: string | undefined;
}

/**
 * <p>A pricing model that determines how buyers are charged for a listing, such as usage-based, contract, BYOL, or free.</p>
 * @public
 */
export interface PricingModel {
  /**
   * <p>The machine-readable type of the pricing model.</p>
   * @public
   */
  pricingModelType: PricingModelType | undefined;

  /**
   * <p>The human-readable name of the pricing model.</p>
   * @public
   */
  displayName: string | undefined;
}

/**
 * <p>A pricing unit that defines the billing dimension for a listing, such as users, hosts, bandwidth, or data.</p>
 * @public
 */
export interface PricingUnit {
  /**
   * <p>The machine-readable type of the pricing unit.</p>
   * @public
   */
  pricingUnitType: PricingUnitType | undefined;

  /**
   * <p>The human-readable name of the pricing unit.</p>
   * @public
   */
  displayName: string | undefined;
}

/**
 * <p>An embedded promotional image for a product.</p>
 * @public
 */
export interface PromotionalEmbeddedImage {
  /**
   * <p>The title displayed when hovering over the image.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The URL of the image file.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>An optional description of the image.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>An embedded promotional video for a product.</p>
 * @public
 */
export interface PromotionalEmbeddedVideo {
  /**
   * <p>The title displayed when hovering over the video.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The URL of the video file.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The URL of the high-resolution preview image for the video.</p>
   * @public
   */
  preview: string | undefined;

  /**
   * <p>The URL of the thumbnail image for the video.</p>
   * @public
   */
  thumbnail: string | undefined;

  /**
   * <p>An optional description of the video.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Embedded promotional media for a product, such as images or videos. Each element contains exactly one media type.</p>
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
   * <p>An embedded promotional image for a product.</p>
   * @public
   */
  export interface EmbeddedImageMember {
    embeddedImage: PromotionalEmbeddedImage;
    embeddedVideo?: never;
    $unknown?: never;
  }

  /**
   * <p>An embedded promotional video for a product.</p>
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
 * <p>A resource that provides supplementary information about a product, such as documentation links, support contacts, or usage instructions.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The category of the resource, such as manufacturer support or usage instructions.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The format of the resource content, such as a URL, email address, or text.</p>
   * @public
   */
  contentType: ResourceContentType | undefined;

  /**
   * <p>The resource content. Interpretation depends on the content type.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>An optional human-readable label for the resource.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * <p>A review summary from a specific source, including the average rating and total review count.</p>
 * @public
 */
export interface ReviewSourceSummary {
  /**
   * <p>The name of the review source, such as AWS Marketplace.</p>
   * @public
   */
  sourceName: string | undefined;

  /**
   * <p>The machine-readable identifier of the review source.</p>
   * @public
   */
  sourceId: ReviewSourceId | undefined;

  /**
   * <p>The URL where the reviews can be accessed at the source.</p>
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * <p>The average rating across all reviews from this source.</p>
   * @public
   */
  averageRating: string | undefined;

  /**
   * <p>The total number of reviews available from this source.</p>
   * @public
   */
  totalReviews: number | undefined;
}

/**
 * <p>A summary of customer reviews available for a listing, aggregated by review source.</p>
 * @public
 */
export interface ReviewSummary {
  /**
   * <p>Review summaries from different sources, such as AWS Marketplace.</p>
   * @public
   */
  reviewSourceSummaries: ReviewSourceSummary[] | undefined;
}

/**
 * <p>An engagement option available to potential buyers of a product, such as requesting a private offer or a demo.</p>
 * @public
 */
export interface SellerEngagement {
  /**
   * <p>The type of engagement, such as <code>REQUEST_FOR_PRIVATE_OFFER</code> or <code>REQUEST_FOR_DEMO</code>.</p>
   * @public
   */
  engagementType: SellerEngagementType | undefined;

  /**
   * <p>The format of the engagement value, such as a URL.</p>
   * @public
   */
  contentType: SellerEngagementContentType | undefined;

  /**
   * <p>The engagement value, such as a URL to the engagement form.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>A use case describing a scenario where the product can be applied.</p>
 * @public
 */
export interface UseCase {
  /**
   * <p>A description of the use case.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The human-readable name of the use case.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The machine-readable identifier of the use case.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>An entry in the list of use cases for a listing.</p>
 * @public
 */
export interface UseCaseEntry {
  /**
   * <p>The use case details.</p>
   * @public
   */
  useCase: UseCase | undefined;
}

/**
 * @public
 */
export interface GetListingOutput {
  /**
   * <p>The products and offers associated with this listing. Each entity contains product and offer information.</p>
   * @public
   */
  associatedEntities: ListingAssociatedEntity[] | undefined;

  /**
   * <p>Badges indicating special attributes of the listing, such as free tier eligibility, free trial availability, or Quick Launch support.</p>
   * @public
   */
  badges: ListingBadge[] | undefined;

  /**
   * <p>The name of the catalog that the listing belongs to.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The categories used to classify this listing into logical groups.</p>
   * @public
   */
  categories: Category[] | undefined;

  /**
   * <p>A summary of fulfillment options available for deploying or accessing the listing, such as AMI, SaaS, or Container.</p>
   * @public
   */
  fulfillmentOptionSummaries: FulfillmentOptionSummary[] | undefined;

  /**
   * <p>A list of key features that the listing offers to customers.</p>
   * @public
   */
  highlights: string[] | undefined;

  /**
   * <p>Optional guidance explaining how to use data in this listing. Primarily defines how to integrate with a multi-product listing.</p>
   * @public
   */
  integrationGuide?: string | undefined;

  /**
   * <p>The unique identifier of the listing.</p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The human-readable display name of the listing.</p>
   * @public
   */
  listingName: string | undefined;

  /**
   * <p>The URL of the logo thumbnail image for the listing.</p>
   * @public
   */
  logoThumbnailUrl: string | undefined;

  /**
   * <p>A detailed description of what the listing offers, in paragraph format.</p>
   * @public
   */
  longDescription: string | undefined;

  /**
   * <p>The pricing models for offers associated with this listing, such as usage-based, contract, BYOL, or free.</p>
   * @public
   */
  pricingModels: PricingModel[] | undefined;

  /**
   * <p>The pricing units that define the billing dimensions for offers associated with this listing, such as users, hosts, or data.</p>
   * @public
   */
  pricingUnits: PricingUnit[] | undefined;

  /**
   * <p>Embedded promotional media provided by the creator of the product, such as images and videos.</p>
   * @public
   */
  promotionalMedia: PromotionalMedia[] | undefined;

  /**
   * <p>The entity who created and published the listing.</p>
   * @public
   */
  publisher: SellerInformation | undefined;

  /**
   * <p>Resources that provide further information about using the product or requesting support, such as documentation links, support contacts, and usage instructions.</p>
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * <p>A summary of customer reviews available for the listing, including average rating and total review count by source.</p>
   * @public
   */
  reviewSummary?: ReviewSummary | undefined;

  /**
   * <p>Engagement options available to potential buyers, such as requesting a private offer or requesting a demo.</p>
   * @public
   */
  sellerEngagements: SellerEngagement[] | undefined;

  /**
   * <p>A 1–3 sentence summary describing the key aspects of the listing.</p>
   * @public
   */
  shortDescription: string | undefined;

  /**
   * <p>Use cases associated with the listing, describing scenarios where the product can be applied.</p>
   * @public
   */
  useCases: UseCaseEntry[] | undefined;
}

/**
 * @public
 */
export interface GetOfferInput {
  /**
   * <p>The unique identifier of the offer to retrieve.</p>
   * @public
   */
  offerId: string | undefined;
}

/**
 * <p>Summary information about an offer set, including the identifier and seller of record.</p>
 * @public
 */
export interface OfferSetInformation {
  /**
   * <p>The unique identifier of the offer set.</p>
   * @public
   */
  offerSetId: string | undefined;

  /**
   * <p>The entity responsible for selling the products under this offer set.</p>
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;
}

/**
 * <p>A product and optional offer set associated with an offer.</p>
 * @public
 */
export interface OfferAssociatedEntity {
  /**
   * <p>Information about the product associated with the offer.</p>
   * @public
   */
  product: ProductInformation | undefined;

  /**
   * <p>Information about the offer set, if the offer is part of a bundled offer set.</p>
   * @public
   */
  offerSet?: OfferSetInformation | undefined;
}

/**
 * <p>A badge indicating a special attribute of a purchase option, such as private pricing or future dated.</p>
 * @public
 */
export interface PurchaseOptionBadge {
  /**
   * <p>The human-readable name of the badge.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The machine-readable type of the badge.</p>
   * @public
   */
  badgeType: PurchaseOptionBadgeType | undefined;
}

/**
 * @public
 */
export interface GetOfferOutput {
  /**
   * <p>The unique identifier of the offer.</p>
   * @public
   */
  offerId: string | undefined;

  /**
   * <p>The name of the catalog that the offer belongs to.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The display name of the offer. This is free-form text provided by the seller.</p>
   * @public
   */
  offerName?: string | undefined;

  /**
   * <p>An encoded string to be passed by the acceptor of the terms when creating an agreement.</p>
   * @public
   */
  agreementProposalId: string | undefined;

  /**
   * <p>The date and time until when the offer can be procured. This value is null for offers that never expire.</p>
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * <p>The date and time when the offer became available to the buyer.</p>
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * <p>The entity responsible for selling the product under this offer.</p>
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;

  /**
   * <p>The identifier of the existing agreement that this offer would replace. Enables agreement-based offer functionality.</p>
   * @public
   */
  replacementAgreementId?: string | undefined;

  /**
   * <p>The pricing model that determines how buyers are charged, such as usage-based, contract, BYOL, or free.</p>
   * @public
   */
  pricingModel: PricingModel | undefined;

  /**
   * <p>Badges indicating special attributes of the offer, such as private pricing, future dated, or replacement offer.</p>
   * @public
   */
  badges: PurchaseOptionBadge[] | undefined;

  /**
   * <p>The products and offer sets associated with this offer.</p>
   * @public
   */
  associatedEntities: OfferAssociatedEntity[] | undefined;
}

/**
 * @public
 */
export interface GetOfferSetInput {
  /**
   * <p>The unique identifier of the offer set to retrieve.</p>
   * @public
   */
  offerSetId: string | undefined;
}

/**
 * <p>A product and offer associated with an offer set.</p>
 * @public
 */
export interface OfferSetAssociatedEntity {
  /**
   * <p>Information about the product associated with the offer set.</p>
   * @public
   */
  product: ProductInformation | undefined;

  /**
   * <p>Information about the offer associated with the offer set.</p>
   * @public
   */
  offer: OfferInformation | undefined;
}

/**
 * @public
 */
export interface GetOfferSetOutput {
  /**
   * <p>The unique identifier of the offer set.</p>
   * @public
   */
  offerSetId: string | undefined;

  /**
   * <p>The name of the catalog that the offer set belongs to.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The display name of the offer set.</p>
   * @public
   */
  offerSetName?: string | undefined;

  /**
   * <p>The date and time when the offer set became available to the buyer.</p>
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * <p>The date and time when the offer set expires and is no longer available for procurement.</p>
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * <p>Detailed information about the offer set that helps buyers understand its purpose and contents.</p>
   * @public
   */
  buyerNotes?: string | undefined;

  /**
   * <p>The entity responsible for selling the products under this offer set.</p>
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;

  /**
   * <p>Badges indicating special attributes of the offer set, such as private pricing or future dated.</p>
   * @public
   */
  badges: PurchaseOptionBadge[] | undefined;

  /**
   * <p>The products and offers included in this offer set.</p>
   * @public
   */
  associatedEntities: OfferSetAssociatedEntity[] | undefined;
}

/**
 * @public
 */
export interface GetOfferTermsInput {
  /**
   * <p>The unique identifier of the offer whose terms to retrieve.</p>
   * @public
   */
  offerId: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to get more results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Defines a Bring Your Own License (BYOL) pricing term, where buyers use their existing license for the product.</p>
 * @public
 */
export interface ByolPricingTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;
}

/**
 * <p>Constraints that control how a buyer can configure a rate card.</p>
 * @public
 */
export interface Constraints {
  /**
   * <p>Whether the buyer can select multiple dimensions. Values are <code>Allowed</code> or <code>Disallowed</code>.</p>
   * @public
   */
  multipleDimensionSelection: RateCardConstraintType | undefined;

  /**
   * <p>Whether the buyer can configure quantities. Values are <code>Allowed</code> or <code>Disallowed</code>.</p>
   * @public
   */
  quantityConfiguration: RateCardConstraintType | undefined;
}

/**
 * <p>A label used to group or categorize pricing dimensions, such as by region or SageMaker option.</p>
 * @public
 */
export interface DimensionLabel {
  /**
   * <p>The type of the dimension label, such as <code>Region</code> or <code>SagemakerOption</code>.</p>
   * @public
   */
  labelType: DimensionLabelType | undefined;

  /**
   * <p>The value used to group dimensions together.</p>
   * @public
   */
  labelValue: string | undefined;

  /**
   * <p>The human-readable display name of the label.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * <p>A per-unit rate within a rate card, defining the price for a specific dimension.</p>
 * @public
 */
export interface RateCardItem {
  /**
   * <p>The machine-readable key identifying the dimension being priced.</p>
   * @public
   */
  dimensionKey: string | undefined;

  /**
   * <p>The human-readable name of the dimension.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>A description of the dimension being priced.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Labels used to categorize this dimension, such as by region.</p>
   * @public
   */
  dimensionLabels?: DimensionLabel[] | undefined;

  /**
   * <p>The unit of measurement for the dimension.</p>
   * @public
   */
  unit: string | undefined;

  /**
   * <p>The price per unit for the dimension.</p>
   * @public
   */
  price: string | undefined;
}

/**
 * <p>A selector used to choose a specific configuration within a configurable upfront rate card.</p>
 * @public
 */
export interface Selector {
  /**
   * <p>The category of the selector, such as <code>Duration</code>.</p>
   * @public
   */
  type: SelectorType | undefined;

  /**
   * <p>The value of the selector.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>A rate card item within a configurable upfront pricing term, including a selector for choosing the configuration and per-unit rates.</p>
 * @public
 */
export interface ConfigurableUpfrontRateCardItem {
  /**
   * <p>The selector criteria for this rate card, such as duration.</p>
   * @public
   */
  selector: Selector | undefined;

  /**
   * <p>Constraints on how the buyer can configure this rate card, such as whether multiple dimensions can be selected.</p>
   * @public
   */
  constraints: Constraints | undefined;

  /**
   * <p>The per-unit rates for this configuration.</p>
   * @public
   */
  rateCard: RateCardItem[] | undefined;
}

/**
 * <p>Defines a configurable upfront pricing term with selectable rate cards, where buyers choose from predefined pricing configurations.</p>
 * @public
 */
export interface ConfigurableUpfrontPricingTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>Defines the currency for the prices in this term.</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The rate cards available for selection, each with a selector, constraints, and per-unit rates.</p>
   * @public
   */
  rateCards?: ConfigurableUpfrontRateCardItem[] | undefined;
}

/**
 * <p>An entitlement granted to the buyer as part of a pricing term.</p>
 * @public
 */
export interface GrantItem {
  /**
   * <p>The machine-readable key identifying the entitlement dimension.</p>
   * @public
   */
  dimensionKey: string | undefined;

  /**
   * <p>The human-readable name of the entitlement dimension.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>A description of the entitlement.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Labels used to categorize this entitlement, such as by region.</p>
   * @public
   */
  dimensionLabels?: DimensionLabel[] | undefined;

  /**
   * <p>The unit of measurement for the entitlement.</p>
   * @public
   */
  unit: string | undefined;

  /**
   * <p>The maximum quantity of the entitlement that can be granted.</p>
   * @public
   */
  maxQuantity?: number | undefined;
}

/**
 * <p>Defines a fixed upfront pricing term with a pre-paid amount and granted entitlements.</p>
 * @public
 */
export interface FixedUpfrontPricingTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>Defines the currency for the prices in this term.</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The duration of the fixed pricing term, in ISO 8601 format.</p>
   * @public
   */
  duration?: string | undefined;

  /**
   * <p>The price charged upfront for this term.</p>
   * @public
   */
  price: string | undefined;

  /**
   * <p>The entitlements granted to the buyer as part of this term.</p>
   * @public
   */
  grants: GrantItem[] | undefined;
}

/**
 * <p>Defines a free trial pricing term that enables customers to try the product before purchasing.</p>
 * @public
 */
export interface FreeTrialPricingTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>The duration of the free trial period.</p>
   * @public
   */
  duration?: string | undefined;

  /**
   * <p>The entitlements granted to the buyer during the free trial.</p>
   * @public
   */
  grants: GrantItem[] | undefined;
}

/**
 * <p>A legal document associated with a legal term, such as a EULA or data subscription agreement.</p>
 * @public
 */
export interface DocumentItem {
  /**
   * <p>The category of the legal document, such as <code>StandardEula</code> or <code>CustomEula</code>.</p>
   * @public
   */
  type: LegalDocumentType | undefined;

  /**
   * <p>The URL where the legal document can be accessed.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The version of the standard contract, if applicable.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Defines a legal term containing documents proposed to buyers, such as EULAs and data subscription agreements.</p>
 * @public
 */
export interface LegalTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>The legal documents proposed to the buyer as part of this term.</p>
   * @public
   */
  documents: DocumentItem[] | undefined;
}

/**
 * <p>A payment installment within a payment schedule term.</p>
 * @public
 */
export interface ScheduleItem {
  /**
   * <p>The date when the payment is due.</p>
   * @public
   */
  chargeDate: Date | undefined;

  /**
   * <p>The amount to be charged on the charge date.</p>
   * @public
   */
  chargeAmount: string | undefined;
}

/**
 * <p>Defines a payment schedule term with installment payments at specified dates.</p>
 * @public
 */
export interface PaymentScheduleTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>Defines the currency for the prices in this term.</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The payment schedule installments, each with a charge date and amount.</p>
   * @public
   */
  schedule: ScheduleItem[] | undefined;
}

/**
 * <p>Defines a recurring payment term with fixed charges at regular billing intervals.</p>
 * @public
 */
export interface RecurringPaymentTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>Defines the currency for the prices in this term.</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The billing period frequency, such as <code>Monthly</code>.</p>
   * @public
   */
  billingPeriod: BillingPeriodType | undefined;

  /**
   * <p>The amount charged each billing period.</p>
   * @public
   */
  price: string | undefined;
}

/**
 * <p>Defines a renewal term that enables automatic agreement renewal.</p>
 * @public
 */
export interface RenewalTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;
}

/**
 * <p>Defines a support term that includes the refund policy for the offer.</p>
 * @public
 */
export interface SupportTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>The refund policy description for the offer.</p>
   * @public
   */
  refundPolicy: string | undefined;
}

/**
 * <p>A rate card within a usage-based pricing term, containing per-unit rates.</p>
 * @public
 */
export interface UsageBasedRateCardItem {
  /**
   * <p>The per-unit rates for this usage-based rate card.</p>
   * @public
   */
  rateCard: RateCardItem[] | undefined;
}

/**
 * <p>Defines a usage-based pricing term (typically pay-as-you-go), where buyers are charged based on product usage.</p>
 * @public
 */
export interface UsageBasedPricingTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>Defines the currency for the prices in this term.</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The rate cards containing per-unit rates for usage-based pricing.</p>
   * @public
   */
  rateCards: UsageBasedRateCardItem[] | undefined;
}

/**
 * <p>Defines a validity term that specifies the duration or date range of an agreement.</p>
 * @public
 */
export interface ValidityTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>The duration of the agreement, in ISO 8601 format.</p>
   * @public
   */
  agreementDuration?: string | undefined;

  /**
   * <p>The date when the agreement ends.</p>
   * @public
   */
  agreementEndDate?: Date | undefined;

  /**
   * <p>The date when the agreement starts.</p>
   * @public
   */
  agreementStartDate?: Date | undefined;
}

/**
 * <p>Defines a variable payment term with a maximum total charge amount.</p>
 * @public
 */
export interface VariablePaymentTerm {
  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The category of the term.</p>
   * @public
   */
  type: TermType | undefined;

  /**
   * <p>Defines the currency for the prices in this term.</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The maximum total amount that can be charged under this term.</p>
   * @public
   */
  maxTotalChargeAmount: string | undefined;
}

/**
 * <p>A term attached to an offer. Each element contains exactly one term type, such as a pricing term, legal term, or payment schedule term.</p>
 * @public
 */
export type OfferTerm =
  | OfferTerm.ByolPricingTermMember
  | OfferTerm.ConfigurableUpfrontPricingTermMember
  | OfferTerm.FixedUpfrontPricingTermMember
  | OfferTerm.FreeTrialPricingTermMember
  | OfferTerm.LegalTermMember
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
   * <p>Defines a Bring Your Own License (BYOL) pricing term, where buyers use their existing license for the product.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a configurable upfront pricing term with selectable rate cards, where buyers choose from predefined pricing configurations.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a fixed upfront pricing term with a pre-paid amount and granted entitlements.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a free trial pricing term that enables customers to try the product before purchasing.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a legal term containing documents proposed to buyers, such as EULAs and data subscription agreements.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a payment schedule term with installment payments at specified dates.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a recurring payment term with fixed charges at regular billing intervals.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a renewal term that enables automatic agreement renewal.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a support term that includes the refund policy for the offer.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a usage-based pricing term (typically pay-as-you-go), where buyers are charged based on product usage.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a validity term that specifies the duration or date range of an agreement.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a variable payment term with a maximum total charge amount.</p>
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
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetOfferTermsOutput {
  /**
   * <p>The terms attached to the offer. Each element contains exactly one term type.</p>
   * @public
   */
  offerTerms: OfferTerm[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProductInput {
  /**
   * <p>The unique identifier of the product to retrieve.</p>
   * @public
   */
  productId: string | undefined;
}

/**
 * @public
 */
export interface GetProductOutput {
  /**
   * <p>The unique identifier of the product.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The name of the catalog that the product belongs to.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The human-readable display name of the product.</p>
   * @public
   */
  productName: string | undefined;

  /**
   * <p>Indicates whether the product is deployed on AWS infrastructure.</p>
   * @public
   */
  deployedOnAws: DeployedOnAwsStatus | undefined;

  /**
   * <p>A 1–3 sentence summary describing the key aspects of the product.</p>
   * @public
   */
  shortDescription: string | undefined;

  /**
   * <p>A detailed description of what the product does, in paragraph format.</p>
   * @public
   */
  longDescription: string | undefined;

  /**
   * <p>The entity who manufactured the product.</p>
   * @public
   */
  manufacturer: SellerInformation | undefined;

  /**
   * <p>The URL of the logo thumbnail image for the product.</p>
   * @public
   */
  logoThumbnailUrl: string | undefined;

  /**
   * <p>A summary of fulfillment options available for deploying or accessing the product, such as AMI, SaaS, or Container.</p>
   * @public
   */
  fulfillmentOptionSummaries: FulfillmentOptionSummary[] | undefined;

  /**
   * <p>The categories used to classify this product into logical groups.</p>
   * @public
   */
  categories: Category[] | undefined;

  /**
   * <p>A list of key features that the product offers to customers.</p>
   * @public
   */
  highlights: string[] | undefined;

  /**
   * <p>Embedded promotional media provided by the creator of the product, such as images and videos.</p>
   * @public
   */
  promotionalMedia: PromotionalMedia[] | undefined;

  /**
   * <p>Resources that provide further information about using the product or requesting support, such as documentation links, support contacts, and usage instructions.</p>
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * <p>Engagement options available to potential buyers, such as requesting a private offer or requesting a demo.</p>
   * @public
   */
  sellerEngagements: SellerEngagement[] | undefined;
}

/**
 * @public
 */
export interface ListFulfillmentOptionsInput {
  /**
   * <p>The unique identifier of the product for which to list fulfillment options.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to get more results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes an AWS CloudFormation template fulfillment option for infrastructure deployment.</p>
 * @public
 */
export interface CloudFormationFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The display name of the fulfillment option version.</p>
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The version identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * <p>Release notes describing changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to deploy and use this CloudFormation template.</p>
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * <p>Describes an operating system supported by a container fulfillment option.</p>
 * @public
 */
export interface ContainerOperatingSystem {
  /**
   * <p>The operating system family, such as Linux.</p>
   * @public
   */
  operatingSystemFamilyName: string | undefined;

  /**
   * <p>The specific operating system name.</p>
   * @public
   */
  operatingSystemName: string | undefined;
}

/**
 * <p>Describes a container image fulfillment option for container-based deployment.</p>
 * @public
 */
export interface ContainerFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The display name of the fulfillment option version.</p>
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The version identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * <p>The operating systems supported by this container image.</p>
   * @public
   */
  operatingSystems?: ContainerOperatingSystem[] | undefined;

  /**
   * <p>The AWS services supported by this container deployment.</p>
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;

  /**
   * <p>Release notes describing changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to deploy and use this container image.</p>
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * <p>Describes a data artifact within a Data Exchange fulfillment option.</p>
 * @public
 */
export interface DataArtifact {
  /**
   * <p>A description of the data artifact.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data artifact.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The type of the data artifact resource.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The classification of sensitive data contained in the dataset.</p>
   * @public
   */
  dataClassification: string | undefined;
}

/**
 * <p>Describes an AWS Data Exchange fulfillment option for data set delivery.</p>
 * @public
 */
export interface DataExchangeFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The data artifacts included in this Data Exchange fulfillment option.</p>
   * @public
   */
  dataArtifacts?: DataArtifact[] | undefined;
}

/**
 * <p>Describes an EC2 Image Builder component fulfillment option.</p>
 * @public
 */
export interface Ec2ImageBuilderComponentFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The display name of the fulfillment option version.</p>
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The version identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * <p>The operating systems supported by this EC2 Image Builder component.</p>
   * @public
   */
  operatingSystems?: ContainerOperatingSystem[] | undefined;

  /**
   * <p>The AWS services supported by this EC2 Image Builder component.</p>
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;

  /**
   * <p>Release notes describing changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to deploy and use this EC2 Image Builder component.</p>
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * <p>Describes an operating system supported by an EKS add-on fulfillment option.</p>
 * @public
 */
export interface EksAddOnOperatingSystem {
  /**
   * <p>The operating system family, such as Linux.</p>
   * @public
   */
  operatingSystemFamilyName: string | undefined;

  /**
   * <p>The specific operating system name.</p>
   * @public
   */
  operatingSystemName: string | undefined;
}

/**
 * <p>Describes an Amazon EKS add-on fulfillment option.</p>
 * @public
 */
export interface EksAddOnFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The display name of the fulfillment option version.</p>
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The version identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * <p>The operating systems supported by this EKS add-on.</p>
   * @public
   */
  operatingSystems?: EksAddOnOperatingSystem[] | undefined;

  /**
   * <p>Release notes describing changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to deploy and use this EKS add-on.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>The AWS services supported by this EKS add-on.</p>
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;
}

/**
 * <p>Describes an operating system supported by a Helm chart fulfillment option.</p>
 * @public
 */
export interface HelmOperatingSystem {
  /**
   * <p>The operating system family, such as Linux.</p>
   * @public
   */
  operatingSystemFamilyName: string | undefined;

  /**
   * <p>The specific operating system name.</p>
   * @public
   */
  operatingSystemName: string | undefined;
}

/**
 * <p>Describes a Helm chart fulfillment option for Kubernetes deployment.</p>
 * @public
 */
export interface HelmFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The display name of the fulfillment option version.</p>
   * @public
   */
  fulfillmentOptionName: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The version identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * <p>The operating systems supported by this Helm chart.</p>
   * @public
   */
  operatingSystems?: HelmOperatingSystem[] | undefined;

  /**
   * <p>Release notes describing changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>The AWS services supported by this Helm chart deployment.</p>
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;

  /**
   * <p>Instructions on how to deploy and use this Helm chart.</p>
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * <p>Describes a professional services fulfillment option.</p>
 * @public
 */
export interface ProfessionalServicesFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;
}

/**
 * <p>Describes a Software as a Service (SaaS) fulfillment option.</p>
 * @public
 */
export interface SaasFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The URL of the seller's software registration landing page.</p>
   * @public
   */
  fulfillmentUrl?: string | undefined;

  /**
   * <p>Instructions on how to access and use this SaaS product.</p>
   * @public
   */
  usageInstructions?: string | undefined;
}

/**
 * <p>Recommended instance types for training and inference with a SageMaker algorithm.</p>
 * @public
 */
export interface SageMakerAlgorithmRecommendation {
  /**
   * <p>The recommended instance type for batch inference.</p>
   * @public
   */
  recommendedBatchTransformInstanceType: string | undefined;

  /**
   * <p>The recommended instance type for real-time inference.</p>
   * @public
   */
  recommendedRealtimeInferenceInstanceType?: string | undefined;

  /**
   * <p>The recommended instance type for training.</p>
   * @public
   */
  recommendedTrainingInstanceType: string | undefined;
}

/**
 * <p>Describes an Amazon SageMaker algorithm fulfillment option, including version details and recommended instance types.</p>
 * @public
 */
export interface SageMakerAlgorithmFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The version identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * <p>Release notes describing changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to use this SageMaker algorithm.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>Recommended instance types for training and inference with this algorithm.</p>
   * @public
   */
  recommendation?: SageMakerAlgorithmRecommendation | undefined;
}

/**
 * <p>Recommended instance types for inference with a SageMaker model.</p>
 * @public
 */
export interface SageMakerModelRecommendation {
  /**
   * <p>The recommended instance type for batch inference.</p>
   * @public
   */
  recommendedBatchTransformInstanceType: string | undefined;

  /**
   * <p>The recommended instance type for real-time inference.</p>
   * @public
   */
  recommendedRealtimeInferenceInstanceType?: string | undefined;
}

/**
 * <p>Describes an Amazon SageMaker model fulfillment option, including version details and recommended instance types.</p>
 * @public
 */
export interface SageMakerModelFulfillmentOption {
  /**
   * <p>The unique identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionId: string | undefined;

  /**
   * <p>The category of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionType: FulfillmentOptionType | undefined;

  /**
   * <p>A human-readable name for the fulfillment option type.</p>
   * @public
   */
  fulfillmentOptionDisplayName: string | undefined;

  /**
   * <p>The version identifier of the fulfillment option.</p>
   * @public
   */
  fulfillmentOptionVersion?: string | undefined;

  /**
   * <p>Release notes describing changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to use this SageMaker model.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>Recommended instance types for inference with this model.</p>
   * @public
   */
  recommendation?: SageMakerModelRecommendation | undefined;
}

/**
 * <p>Describes a fulfillment option for a product. Each element contains exactly one fulfillment option type.</p>
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
   * <p>An Amazon Machine Image (AMI) fulfillment option for EC2 deployment.</p>
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
   * <p>An API-based fulfillment option for programmatic integration.</p>
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
   * <p>An AWS CloudFormation template fulfillment option for infrastructure deployment.</p>
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
   * <p>A container image fulfillment option for container-based deployment.</p>
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
   * <p>A Helm chart fulfillment option for Kubernetes deployment.</p>
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
   * <p>An Amazon EKS add-on fulfillment option.</p>
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
   * <p>An EC2 Image Builder component fulfillment option.</p>
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
   * <p>An AWS Data Exchange fulfillment option for data set delivery.</p>
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
   * <p>A professional services fulfillment option.</p>
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
   * <p>A Software as a Service (SaaS) fulfillment option.</p>
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
   * <p>An Amazon SageMaker algorithm fulfillment option.</p>
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
   * <p>An Amazon SageMaker model fulfillment option.</p>
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
   * <p>The fulfillment options available for the product. Each option describes how the buyer can deploy or access the product.</p>
   * @public
   */
  fulfillmentOptions: FulfillmentOption[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A filter used to narrow purchase option results by product, seller, type, visibility, or availability.</p>
 * @public
 */
export interface PurchaseOptionFilter {
  /**
   * <p>The type of filter to apply, such as <code>PRODUCT_ID</code>, <code>VISIBILITY_SCOPE</code>, or <code>PURCHASE_OPTION_TYPE</code>.</p>
   * @public
   */
  filterType: PurchaseOptionFilterType | undefined;

  /**
   * <p>The values to filter by. Multiple values within the same filter are combined with OR logic.</p>
   * @public
   */
  filterValues: string[] | undefined;
}

/**
 * @public
 */
export interface ListPurchaseOptionsInput {
  /**
   * <p>Filters to narrow the results. Multiple filters are combined with AND logic. Multiple values within the same filter are combined with OR logic.</p>
   * @public
   */
  filters?: PurchaseOptionFilter[] | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to get more results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A product, offer, and optional offer set associated with a purchase option.</p>
 * @public
 */
export interface PurchaseOptionAssociatedEntity {
  /**
   * <p>Information about the product associated with the purchase option.</p>
   * @public
   */
  product: ProductInformation | undefined;

  /**
   * <p>Information about the offer associated with the purchase option.</p>
   * @public
   */
  offer: OfferInformation | undefined;

  /**
   * <p>Information about the offer set, if the purchase option is part of a bundled offer set.</p>
   * @public
   */
  offerSet?: OfferSetInformation | undefined;
}

/**
 * <p>Summary information about a purchase option (offer or offer set) available to the buyer, including the seller, badges, and associated products.</p>
 * @public
 */
export interface PurchaseOptionSummary {
  /**
   * <p>The unique identifier of the purchase option.</p>
   * @public
   */
  purchaseOptionId: string | undefined;

  /**
   * <p>The name of the catalog that the purchase option belongs to.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The type of purchase option. Values are <code>OFFER</code> for a single-product offer or <code>OFFERSET</code> for a bundled offer set.</p>
   * @public
   */
  purchaseOptionType: PurchaseOptionType | undefined;

  /**
   * <p>The display name of the purchase option.</p>
   * @public
   */
  purchaseOptionName?: string | undefined;

  /**
   * <p>The date and time when the purchase option became available to the buyer.</p>
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * <p>The date and time when the purchase option expires and is no longer available for procurement.</p>
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * <p>The entity responsible for selling the product under this purchase option.</p>
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;

  /**
   * <p>Badges indicating special attributes of the purchase option, such as private pricing or future dated.</p>
   * @public
   */
  badges?: PurchaseOptionBadge[] | undefined;

  /**
   * <p>The products, offers, and offer sets associated with this purchase option.</p>
   * @public
   */
  associatedEntities: PurchaseOptionAssociatedEntity[] | undefined;
}

/**
 * @public
 */
export interface ListPurchaseOptionsOutput {
  /**
   * <p>The purchase options available to the buyer. Each option is either an offer for a single product or an offer set spanning multiple products.</p>
   * @public
   */
  purchaseOptions?: PurchaseOptionSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A filter used to narrow search results by attribute, such as category, pricing model, or fulfillment type.</p>
 * @public
 */
export interface SearchFilter {
  /**
   * <p>The type of filter to apply.</p>
   * @public
   */
  filterType: SearchFilterType | undefined;

  /**
   * <p>The values to filter by. Term filters accept multiple values (OR logic). Range filters (MIN/MAX_AVERAGE_CUSTOMER_RATING) accept a single value between 0.0 and 5.0.</p>
   * @public
   */
  filterValues: string[] | undefined;
}

/**
 * @public
 */
export interface SearchFacetsInput {
  /**
   * <p>The search query text to filter listings before retrieving facets.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>Filters to apply before retrieving facets. Multiple filters are combined with AND logic. Multiple values within the same filter are combined with OR logic.</p>
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * <p>A list of specific facet types to retrieve. If empty or null, all available facets are returned.</p>
   * @public
   */
  facetTypes?: SearchFacetType[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A facet value with display information and a count of matching listings. Used to build filter and browse experiences.</p>
 * @public
 */
export interface ListingFacet {
  /**
   * <p>The internal value used for filtering when passed back in a search filter.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The human-readable name of the facet value, suitable for display in a user interface.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The parent facet value for hierarchical facets, such as subcategories.</p>
   * @public
   */
  parent?: string | undefined;

  /**
   * <p>The number of listings matching this facet value.</p>
   * @public
   */
  count: number | undefined;
}

/**
 * @public
 */
export interface SearchFacetsOutput {
  /**
   * <p>The total number of listings matching the search criteria.</p>
   * @public
   */
  totalResults: number | undefined;

  /**
   * <p>A map of facet types to their corresponding facet values. Each facet value includes a display name, internal value, and count of matching listings.</p>
   * @public
   */
  listingFacets: Partial<Record<SearchFacetType, ListingFacet[]>> | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchListingsInput {
  /**
   * <p>The search query text to find relevant listings.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>Filters to narrow search results. Multiple filters are combined with AND logic. Multiple values within the same filter are combined with OR logic.</p>
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to get more results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The field to sort results by. Valid values are <code>RELEVANCE</code> and <code>AVERAGE_CUSTOMER_RATING</code>.</p>
   * @public
   */
  sortBy?: SearchListingsSortBy | undefined;

  /**
   * <p>The sort direction. Valid values are <code>DESCENDING</code> and <code>ASCENDING</code>.</p>
   * @public
   */
  sortOrder?: SearchListingsSortOrder | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A product associated with a listing summary.</p>
 * @public
 */
export interface ListingSummaryAssociatedEntity {
  /**
   * <p>Information about the associated product.</p>
   * @public
   */
  product?: ProductInformation | undefined;
}

/**
 * <p>Summary information about a listing returned by search operations, including the listing name, description, badges, categories, pricing models, reviews, and associated products.</p>
 * @public
 */
export interface ListingSummary {
  /**
   * <p>The unique identifier of the listing.</p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The human-readable display name of the listing.</p>
   * @public
   */
  listingName: string | undefined;

  /**
   * <p>The entity who created and published the listing.</p>
   * @public
   */
  publisher: SellerInformation | undefined;

  /**
   * <p>The name of the catalog that the listing belongs to.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>A 1–3 sentence summary describing the key aspects of the listing.</p>
   * @public
   */
  shortDescription: string | undefined;

  /**
   * <p>The URL of the logo thumbnail image for the listing.</p>
   * @public
   */
  logoThumbnailUrl: string | undefined;

  /**
   * <p>The categories used to classify this listing into logical groups.</p>
   * @public
   */
  categories: Category[] | undefined;

  /**
   * <p>A summary of fulfillment options available for the listing.</p>
   * @public
   */
  fulfillmentOptionSummaries: FulfillmentOptionSummary[] | undefined;

  /**
   * <p>Badges indicating special attributes of the listing.</p>
   * @public
   */
  badges: ListingBadge[] | undefined;

  /**
   * <p>A summary of customer reviews for the listing.</p>
   * @public
   */
  reviewSummary: ReviewSummary | undefined;

  /**
   * <p>The pricing models for offers associated with this listing.</p>
   * @public
   */
  pricingModels: PricingModel[] | undefined;

  /**
   * <p>The pricing units that define the billing dimensions for offers associated with this listing.</p>
   * @public
   */
  pricingUnits: PricingUnit[] | undefined;

  /**
   * <p>The products associated with this listing.</p>
   * @public
   */
  associatedEntities: ListingSummaryAssociatedEntity[] | undefined;
}

/**
 * @public
 */
export interface SearchListingsOutput {
  /**
   * <p>The total number of listings matching the search criteria.</p>
   * @public
   */
  totalResults: number | undefined;

  /**
   * <p>The listing summaries matching the search criteria. Each summary includes the listing name, description, badges, categories, pricing models, reviews, and associated products.</p>
   * @public
   */
  listingSummaries: ListingSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}
