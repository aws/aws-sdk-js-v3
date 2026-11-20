// smithy-typescript generated code
import type {
  BillingPeriodType,
  CaseStudyResourceType,
  DeployedOnAwsStatus,
  DimensionLabelType,
  FulfillmentOptionType,
  LegalDocumentType,
  ListingAttributeType,
  ListingBadgeType,
  PricingModelType,
  PricingUnitType,
  PurchaseIndicatorType,
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
  SpecializationType,
  TermType,
  TrustCenterControlDomain,
  TrustCenterDocumentAccessType,
  TrustCenterProvider,
} from "./enums";

/**
 * <p>Contains supported Amazon EBS volume information for an AMI fulfillment option.</p>
 * @public
 */
export interface AmazonMachineImageEbsVolume {
  /**
   * <p>The supported Amazon EBS volume types.</p>
   * @public
   */
  volumeTypes: string[] | undefined;

  /**
   * <p>The total number of provisioned input/output operations per second (IOPS) that the volume supports.</p>
   * @public
   */
  iops?: number | undefined;
}

/**
 * <p>Describes an operating system that an AMI fulfillment option supports.</p>
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
 * <p>Contains a recommended security group configuration for an AMI fulfillment option.</p>
 * @public
 */
export interface AmazonMachineImageSecurityGroup {
  /**
   * <p>The IP protocol name, such as <code>tcp</code>.</p>
   * @public
   */
  protocol: string | undefined;

  /**
   * <p>The start of the port range.</p>
   * @public
   */
  fromPort: number | undefined;

  /**
   * <p>The end of the port range.</p>
   * @public
   */
  toPort: number | undefined;

  /**
   * <p>The IP address ranges in Classless Inter-Domain Routing (CIDR) format.</p>
   * @public
   */
  cidrIpAddresses: string[] | undefined;
}

/**
 * <p>The recommended instance types for running an AMI fulfillment option.</p>
 * @public
 */
export interface AmazonMachineImageRecommendation {
  /**
   * <p>The recommended Amazon Elastic Compute Cloud (Amazon EC2) instance type for this AMI.</p>
   * @public
   */
  instanceType: string | undefined;

  /**
   * <p>The recommended security group configurations for this AMI.</p>
   * @public
   */
  securityGroups?: AmazonMachineImageSecurityGroup[] | undefined;
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
   * <p>The recommended instance types for running this AMI.</p>
   * @public
   */
  recommendation?: AmazonMachineImageRecommendation | undefined;

  /**
   * <p>Release notes that describe the changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to deploy and use this fulfillment option.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>The date and time when the AMI became available for fulfillment.</p>
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * <p>The URL pattern for accessing the product when an instance is running.</p>
   * @public
   */
  accessUrlTemplate?: string | undefined;

  /**
   * <p>The architecture of the AMI, such as <code>x86_64</code>.</p>
   * @public
   */
  architecture: string | undefined;

  /**
   * <p>The alias of the AMI associated with this fulfillment option.</p>
   * @public
   */
  amiAlias?: string | undefined;

  /**
   * <p>The supported Amazon Elastic Block Store (Amazon EBS) volume configuration for the AMI.</p>
   * @public
   */
  ebsVolume?: AmazonMachineImageEbsVolume | undefined;

  /**
   * <p>A short description of the fulfillment option.</p>
   * @public
   */
  shortDescription?: string | undefined;
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
 * <p>Describes an API-based fulfillment option, where you access the product through an API integration.</p>
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
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

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
   * <p>The machine-readable type of the badge. See <code>ListingBadgeType</code> for the values.</p>
   * @public
   */
  badgeType: ListingBadgeType | undefined;
}

/**
 * <p>A category that classifies a listing or product into a logical group.</p>
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
 * <p>A pricing model that determines how you are charged for a listing, such as usage-based, contract, Bring Your Own License (BYOL), or free.</p>
 * @public
 */
export interface PricingModel {
  /**
   * <p>The machine-readable type of the pricing model. See <code>PricingModelType</code> for the values.</p>
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
 * <p>An indicator describing a purchase characteristic, such as availability for use without a subscription.</p>
 * @public
 */
export interface PurchaseIndicator {
  /**
   * <p>The type of purchase indicator.</p>
   * @public
   */
  indicatorType: PurchaseIndicatorType | undefined;
}

/**
 * <p>A resource that provides supplementary information about a product, such as documentation links, support contacts, or usage instructions.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The category of the resource, such as manufacturer support or usage instructions. This field has one of the following values:</p> <dl> <dt>MANUFACTURER_INSTRUCTIONS</dt> <dd> <p>Usage instructions from the seller.</p> </dd> <dt>MANUFACTURER_SUPPORT</dt> <dd> <p>Support information from the seller.</p> </dd> </dl>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The format of the resource content, such as a URL, email address, or text. This field has one of the following values:</p> <dl> <dt>EMAIL</dt> <dd> <p>An email address.</p> </dd> <dt>LINK</dt> <dd> <p>A URL.</p> </dd> <dt>OTHER</dt> <dd> <p>Text in another format.</p> </dd> <dt>PHONE_NUMBER</dt> <dd> <p>A phone number.</p> </dd> </dl>
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
   * <p>The name of the review source. This field has one of the following values:</p> <ul> <li> <p>AWS Marketplace</p> </li> <li> <p>G2</p> </li> <li> <p>PeerSpot</p> </li> </ul>
   * @public
   */
  sourceName: string | undefined;

  /**
   * <p>The machine-readable identifier of the review source. This field has one of the following values:</p> <dl> <dt>AWS_MARKETPLACE</dt> <dd> <p>The reviews come from AWS Marketplace.</p> </dd> <dt>G2</dt> <dd> <p>The reviews come from G2.</p> </dd> <dt>PEERSPOT</dt> <dd> <p>The reviews come from PeerSpot.</p> </dd> </dl>
   * @public
   */
  sourceId: ReviewSourceId | undefined;

  /**
   * <p>The URL where you can read the reviews at their source.</p>
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
   * <p>Review summaries from different sources, such as AWS Marketplace, G2, and PeerSpot.</p>
   * @public
   */
  reviewSourceSummaries: ReviewSourceSummary[] | undefined;
}

/**
 * <p>A way you can engage with the seller of a product, such as requesting a private offer or a demo.</p>
 * @public
 */
export interface SellerEngagement {
  /**
   * <p>The type of engagement. This field has one of the following values:</p> <dl> <dt>BUY_NOW</dt> <dd> <p>The product is available for immediate purchase.</p> </dd> <dt>EXPRESS_PRIVATE_OFFER</dt> <dd> <p>You can request an express private offer and accept it immediately.</p> </dd> <dt>REQUEST_FOR_DEMO</dt> <dd> <p>You can request a demo from the seller.</p> </dd> <dt>REQUEST_FOR_PRIVATE_OFFER</dt> <dd> <p>You can request a private offer from the seller.</p> </dd> <dt>TRY_FOR_FREE</dt> <dd> <p>The product offers a free trial.</p> </dd> </dl>
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
   * <p>The locale of the returned content. This value indicates whether the response contains content in the requested locale or fell back to the default locale. See <code>Locale</code> for details.</p>
   * @public
   */
  locale?: string | undefined;

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
   * <p>The categories that classify this listing into logical groups.</p>
   * @public
   */
  categories: Category[] | undefined;

  /**
   * <p>A summary of fulfillment options available for deploying or accessing the listing, such as Amazon Machine Image (AMI), Software as a Service (SaaS), or Container.</p>
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
   * <p>The pricing models for offers associated with this listing, such as usage-based, contract, Bring Your Own License (BYOL), or free.</p>
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
   * <p>The engagement options available to you, such as buying now, requesting a private offer, or requesting a demo.</p>
   * @public
   */
  sellerEngagements: SellerEngagement[] | undefined;

  /**
   * <p>A 1–3 sentence summary describing the key aspects of the listing.</p>
   * @public
   */
  shortDescription: string | undefined;

  /**
   * <p>Use cases associated with the listing, describing scenarios where you can apply the product.</p>
   * @public
   */
  useCases: UseCaseEntry[] | undefined;

  /**
   * <p>Indicators describing purchase characteristics of this listing, such as whether you can subscribe to it or use it without a subscription. The list is empty when no special purchase conditions apply.</p>
   * @public
   */
  purchaseIndicators: PurchaseIndicator[] | undefined;
}

/**
 * @public
 */
export interface GetOfferInput {
  /**
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

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
 * <p>A badge indicating a special attribute of a purchase option, such as private pricing or future-dated.</p>
 * @public
 */
export interface PurchaseOptionBadge {
  /**
   * <p>The human-readable name of the badge.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The machine-readable type of the badge. See <code>PurchaseOptionBadgeType</code> for the values.</p>
   * @public
   */
  badgeType: PurchaseOptionBadgeType | undefined;
}

/**
 * @public
 */
export interface GetOfferOutput {
  /**
   * <p>The locale of the returned content. This value indicates whether the response contains content in the requested locale or fell back to the default locale. See <code>Locale</code> for details.</p>
   * @public
   */
  locale?: string | undefined;

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
   * <p>The display name of the offer. The seller provides this free-form text.</p>
   * @public
   */
  offerName?: string | undefined;

  /**
   * <p>The date and time until which you can procure the offer. This value is null for offers that never expire.</p>
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * <p>The date and time when the offer became available to you.</p>
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * <p>The entity responsible for selling the product under this offer.</p>
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;

  /**
   * <p>The products and offer sets associated with this offer.</p>
   * @public
   */
  associatedEntities: OfferAssociatedEntity[] | undefined;

  /**
   * <p>An encoded string that you pass when you accept the terms and create an agreement.</p>
   * @public
   */
  agreementProposalId: string | undefined;

  /**
   * <p>The identifier of the existing agreement that this offer would replace.</p>
   * @public
   */
  replacementAgreementId?: string | undefined;

  /**
   * <p>The pricing model that determines how you are charged, such as usage-based, contract, Bring Your Own License (BYOL), or free.</p>
   * @public
   */
  pricingModel: PricingModel | undefined;

  /**
   * <p>Badges indicating special attributes of the offer, such as private pricing, future-dated, or replacement offer.</p>
   * @public
   */
  badges: PurchaseOptionBadge[] | undefined;
}

/**
 * @public
 */
export interface GetOfferSetInput {
  /**
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

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
   * <p>The locale of the returned content. This value indicates whether the response contains content in the requested locale or fell back to the default locale. See <code>Locale</code> for details.</p>
   * @public
   */
  locale?: string | undefined;

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
   * <p>The date and time when the offer set became available to you.</p>
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * <p>The date and time when the offer set expires and is no longer available for procurement.</p>
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * <p>Detailed information about the offer set that helps you understand its purpose and contents.</p>
   * @public
   */
  buyerNotes?: string | undefined;

  /**
   * <p>The entity responsible for selling the products under this offer set.</p>
   * @public
   */
  sellerOfRecord: SellerInformation | undefined;

  /**
   * <p>Badges indicating special attributes of the offer set, such as private pricing or future-dated.</p>
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
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The unique identifier of the offer whose terms to retrieve.</p>
   * @public
   */
  offerId: string | undefined;

  /**
   * <p>The maximum number of terms to return in each call. If you omit this field, the default is 10. Use <code>nextToken</code> to retrieve the next page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes a Bring Your Own License (BYOL) pricing term. With this term, you use your existing license for the product.</p>
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
 * <p>Constraints that control how you can configure a rate card.</p>
 * @public
 */
export interface Constraints {
  /**
   * <p>Specifies whether you can select multiple dimensions. This field has one of the following values:</p> <dl> <dt>Allowed</dt> <dd> <p>You can select more than one dimension.</p> </dd> <dt>Disallowed</dt> <dd> <p>You can select only one dimension.</p> </dd> </dl>
   * @public
   */
  multipleDimensionSelection: RateCardConstraintType | undefined;

  /**
   * <p>Specifies whether you can configure quantities. This field has one of the following values:</p> <dl> <dt>Allowed</dt> <dd> <p>You can set the quantity of each dimension.</p> </dd> <dt>Disallowed</dt> <dd> <p>You cannot change the quantity.</p> </dd> </dl>
   * @public
   */
  quantityConfiguration: RateCardConstraintType | undefined;
}

/**
 * <p>A label that groups or categorizes pricing dimensions, such as by region or SageMaker option.</p>
 * @public
 */
export interface DimensionLabel {
  /**
   * <p>The type of the dimension label. This field has one of the following values:</p> <dl> <dt>Region</dt> <dd> <p>The label groups dimensions by AWS Region.</p> </dd> <dt>SagemakerOption</dt> <dd> <p>The label groups dimensions by Amazon SageMaker option.</p> </dd> </dl>
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
 * <p>A price override for a pricing dimension in one AWS Region.</p>
 * @public
 */
export interface RegionalPrice {
  /**
   * <p>The AWS Region the override applies to.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>The human-readable display name of the Region.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The per-unit price for the dimension in this Region.</p>
   * @public
   */
  price: string | undefined;
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
   * <p>Labels that categorize this dimension, such as by region.</p>
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

  /**
   * <p>The price overrides for the dimension in individual AWS Regions. When a Regional price is present for an AWS Region, it replaces the default price.</p>
   * @public
   */
  regionalPrices: RegionalPrice[] | undefined;
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
   * <p>Constraints on how you can configure this rate card, such as whether you can select multiple dimensions.</p>
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
 * <p>Describes a configurable upfront pricing term with selectable rate cards. You choose from predefined pricing configurations.</p>
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
 * <p>An entitlement that you receive as part of a pricing term.</p>
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
   * <p>Labels that categorize this entitlement, such as by region.</p>
   * @public
   */
  dimensionLabels?: DimensionLabel[] | undefined;

  /**
   * <p>The unit of measurement for the entitlement.</p>
   * @public
   */
  unit: string | undefined;

  /**
   * <p>The maximum quantity of the entitlement that you can receive.</p>
   * @public
   */
  maxQuantity?: number | undefined;
}

/**
 * <p>Describes a fixed upfront pricing term with a pre-paid amount and granted entitlements.</p>
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
   * <p>The entitlements that you receive as part of this term.</p>
   * @public
   */
  grants: GrantItem[] | undefined;
}

/**
 * <p>Describes a free trial pricing term. With this term, you can try the product before you purchase it.</p>
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
   * <p>The entitlements that you receive during the free trial.</p>
   * @public
   */
  grants: GrantItem[] | undefined;
}

/**
 * <p>A legal document associated with a legal term, such as an End User License Agreement (EULA) or a data subscription agreement.</p>
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
 * <p>Describes a legal term containing documents proposed to you, such as End User License Agreements (EULAs) and data subscription agreements.</p>
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
   * <p>The legal documents proposed to you as part of this term.</p>
   * @public
   */
  documents: DocumentItem[] | undefined;
}

/**
 * <p>Describes a net payment term that sets how many days after the invoice date the payment is due.</p>
 * @public
 */
export interface NetPaymentTerm {
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
   * <p>The duration after invoice date by which payment is due.</p>
   * @public
   */
  paymentDuePeriod: string | undefined;
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
 * <p>Describes a payment schedule term with installment payments at specified dates.</p>
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
 * <p>Describes a recurring payment term with fixed charges at regular billing intervals.</p>
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
 * <p>A single fixed price increase percentage applied at each renewal cycle.</p>
 * @public
 */
export interface FixedPercentage {
  /**
   * <p>The percentage value applied at each renewal cycle.</p>
   * @public
   */
  percentageValue: string | undefined;
}

/**
 * <p>A price increase percentage range with minimum, maximum, and default values.</p>
 * @public
 */
export interface PercentageRange {
  /**
   * <p>The minimum percentage by which the price can increase at each renewal cycle.</p>
   * @public
   */
  minimumValue: string | undefined;

  /**
   * <p>The maximum percentage by which the price can increase at each renewal cycle.</p>
   * @public
   */
  maximumValue: string | undefined;

  /**
   * <p>The percentage increase applied by default when no other value is finalized before the adjustment deadline. Falls between <code>minimumValue</code> and <code>maximumValue</code>.</p>
   * @public
   */
  defaultValue: string | undefined;
}

/**
 * <p>The pricing adjustment that applies at each renewal cycle, expressed as either a fixed percentage or a percentage range. Exactly one of the following members is present:</p> <dl> <dt>fixedPercentage</dt> <dd> <p>A single fixed percentage applied uniformly at every renewal cycle.</p> </dd> <dt>percentageRange</dt> <dd> <p>A percentage range with minimum, maximum, and default values that bound the price increase at each renewal cycle.</p> </dd> </dl>
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
   * <p>A single fixed percentage applied uniformly at every renewal cycle.</p>
   * @public
   */
  export interface FixedPercentageMember {
    fixedPercentage: FixedPercentage;
    percentageRange?: never;
    $unknown?: never;
  }

  /**
   * <p>A percentage band with minimum, maximum, and default values that bound the price increase at each renewal cycle.</p>
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
 * <p>A single installment entry in the renewal payment schedule.</p>
 * @public
 */
export interface PaymentScheduleEntry {
  /**
   * <p>The relative offset from the renewal agreement start date when this installment is due, represented in ISO 8601 duration format (for example, P1M or P30D).</p>
   * @public
   */
  chargeDateOffset: string | undefined;

  /**
   * <p>The percentage of the increased Total Contract Value (TCV) to charge in this installment. All entries in a schedule sum to 100.00.</p>
   * @public
   */
  chargePercentage: string | undefined;

  /**
   * <p>The optional calendar day of month on which the charge occurs. When absent, the charge day is derived from <code>chargeDateOffset</code>. For months with fewer days than the specified day, the charge occurs on the last day of the month. For example, if <code>dayOfMonth</code> is 31, the charge in April occurs on April 30.</p>
   * @public
   */
  dayOfMonth?: number | undefined;
}

/**
 * <p>A template for the payment schedule term on the renewal offer.</p>
 * @public
 */
export interface PaymentScheduleTermTemplate {
  /**
   * <p>An ordered list of installment entries for the renewal payment schedule.</p>
   * @public
   */
  schedule: PaymentScheduleEntry[] | undefined;
}

/**
 * <p>A structural template defining how a specific term type is reshaped on each renewal cycle. Exactly one variant is present.</p>
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
   * <p>The installment schedule used to structure payments on the renewal offer.</p>
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
 * <p>Describes a renewal term that renews the agreement automatically.</p>
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

  /**
   * <p>The maximum number of renewals allowed on this offer. Absent means unlimited renewals.</p>
   * @public
   */
  maxRenewals?: number | undefined;

  /**
   * <p>The duration before the agreement end date when the lockout window begins, in ISO 8601 format (for example, P30D). Absent means no lockout.</p>
   * @public
   */
  lockoutPeriod?: string | undefined;

  /**
   * <p>The duration before the agreement end date by which the renewal price is finalized, represented in ISO 8601 format (for example, P30D). This field applies only with <code>PercentageRange</code>.</p>
   * @public
   */
  adjustmentDeadline?: string | undefined;

  /**
   * <p>The price increase applied at each renewal cycle. Absent means identical pricing on renewal.</p>
   * @public
   */
  priceIncrease?: PriceIncrease | undefined;

  /**
   * <p>Structural templates defining how specific terms are reshaped on each renewal cycle. Absent for upfront-only offers.</p>
   * @public
   */
  termTemplates?: TermTemplate[] | undefined;
}

/**
 * <p>Describes a support term that includes the refund policy for the offer.</p>
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
 * <p>Describes a usage-based pricing term, typically pay-as-you-go. You are charged based on your use of the product.</p>
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
 * <p>Describes a validity term that specifies the duration or date range of an agreement.</p>
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
 * <p>Describes a variable payment term with a maximum total charge amount.</p>
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
   * <p>Describes a Bring Your Own License (BYOL) pricing term. With this term, you use your existing license for the product.</p>
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
   * <p>Describes a configurable upfront pricing term with selectable rate cards. You choose from predefined pricing configurations.</p>
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
   * <p>Describes a fixed upfront pricing term with a pre-paid amount and granted entitlements.</p>
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
   * <p>Describes a free trial pricing term. With this term, you can try the product before you purchase it.</p>
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
   * <p>Describes a legal term containing documents proposed to you, such as End User License Agreements (EULAs) and data subscription agreements.</p>
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
   * <p>Describes a payment schedule term with installment payments at specified dates.</p>
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
   * <p>Describes a recurring payment term with fixed charges at regular billing intervals.</p>
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
   * <p>Describes a renewal term that renews the agreement automatically.</p>
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
   * <p>Describes a support term that includes the refund policy for the offer.</p>
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
   * <p>Describes a usage-based pricing term, typically pay-as-you-go. You are charged based on your use of the product.</p>
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
   * <p>Describes a validity term that specifies the duration or date range of an agreement.</p>
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
   * <p>Describes a variable payment term with a maximum total charge amount.</p>
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
   * <p>A net payment term.</p>
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
   * <p>The locale of the returned content. This value indicates whether the response contains content in the requested locale or fell back to the default locale. See <code>Locale</code> for details.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The terms attached to the offer. Each element contains exactly one term type.</p>
   * @public
   */
  offerTerms: OfferTerm[] | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProductInput {
  /**
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

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
   * <p>The locale of the returned content. This value indicates whether the response contains content in the requested locale or fell back to the default locale. See <code>Locale</code> for details.</p>
   * @public
   */
  locale?: string | undefined;

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
   * <p>The entity who manufactured the product.</p>
   * @public
   */
  manufacturer: SellerInformation | undefined;

  /**
   * <p>Specifies whether the product is deployed on AWS infrastructure.</p>
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
   * <p>The URL of the logo thumbnail image for the product.</p>
   * @public
   */
  logoThumbnailUrl: string | undefined;

  /**
   * <p>A summary of fulfillment options available for deploying or accessing the product, such as Amazon Machine Image (AMI), Software as a Service (SaaS), or Container.</p>
   * @public
   */
  fulfillmentOptionSummaries: FulfillmentOptionSummary[] | undefined;

  /**
   * <p>The categories that classify this product into logical groups.</p>
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
   * <p>The engagement options available to you, such as buying now, requesting a private offer, or requesting a demo.</p>
   * @public
   */
  sellerEngagements: SellerEngagement[] | undefined;

  /**
   * <p>The default listing identifier associated with the product.</p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>Indicators describing purchase characteristics of this product, such as whether you can subscribe to it or use it without a subscription. The list is empty when no special purchase conditions apply.</p>
   * @public
   */
  purchaseIndicators: PurchaseIndicator[] | undefined;
}

/**
 * @public
 */
export interface ListFulfillmentOptionsInput {
  /**
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The unique identifier of the product for which to list fulfillment options.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The maximum number of fulfillment options to return in each call. If you omit this field, the default is 25. Use <code>nextToken</code> to retrieve the next page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
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
   * <p>Release notes that describe the changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to deploy and use this CloudFormation template.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>The date and time when the CloudFormation fulfillment option became available for fulfillment.</p>
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * <p>The URL of the architecture diagram for the CloudFormation template.</p>
   * @public
   */
  architectureDiagramUrl?: string | undefined;

  /**
   * <p>The URL of the CloudFormation template.</p>
   * @public
   */
  deploymentTemplateUrl?: string | undefined;

  /**
   * <p>A short description of the fulfillment option.</p>
   * @public
   */
  shortDescription?: string | undefined;

  /**
   * <p>A detailed description of the fulfillment option.</p>
   * @public
   */
  longDescription?: string | undefined;
}

/**
 * <p>Describes an operating system that a container fulfillment option supports.</p>
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
   * <p>Release notes that describe the changes in this version of the fulfillment option.</p>
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
 * <p>Describes an Amazon Elastic Compute Cloud (Amazon EC2) Image Builder component fulfillment option.</p>
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
   * <p>The AWS services that this EC2 Image Builder component supports.</p>
   * @public
   */
  awsSupportedServices?: AwsSupportedService[] | undefined;

  /**
   * <p>Release notes that describe the changes in this version of the fulfillment option.</p>
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
 * <p>Describes an operating system that an Amazon EKS add-on fulfillment option supports.</p>
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
 * <p>Describes an Amazon Elastic Kubernetes Service (Amazon EKS) add-on fulfillment option.</p>
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
   * <p>Release notes that describe the changes in this version of the fulfillment option.</p>
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
 * <p>Describes an operating system that a Helm chart fulfillment option supports.</p>
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
   * <p>Release notes that describe the changes in this version of the fulfillment option.</p>
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
 * <p>Contains a single AWS CloudFormation deployment template for a Software as a Service (SaaS) product.</p>
 * @public
 */
export interface SaasCloudFormationDeploymentTemplate {
  /**
   * <p>The display name of the deployment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the deployment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The default CloudFormation stack name used when deploying this template.</p>
   * @public
   */
  defaultStackName: string | undefined;

  /**
   * <p>The URL of the CloudFormation deployment template.</p>
   * @public
   */
  templateUrl: string | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) policy that you need to deploy this template.</p>
   * @public
   */
  iamPolicy: string | undefined;
}

/**
 * <p>Contains a deployment template for a SaaS product. Exactly one member is set, indicating the deployment template type.</p>
 * @public
 */
export type SaasDeploymentTemplate =
  | SaasDeploymentTemplate.CloudFormationDeploymentTemplateMember
  | SaasDeploymentTemplate.$UnknownMember;

/**
 * @public
 */
export namespace SaasDeploymentTemplate {
  /**
   * <p>An AWS CloudFormation deployment template.</p>
   * @public
   */
  export interface CloudFormationDeploymentTemplateMember {
    cloudFormationDeploymentTemplate: SaasCloudFormationDeploymentTemplate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudFormationDeploymentTemplate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudFormationDeploymentTemplate: (value: SaasCloudFormationDeploymentTemplate) => T;
    _: (name: string, value: any) => T;
  }
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
   * <p>Instructions on how you access and use this SaaS product.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>The date and time when the SaaS product became available for fulfillment.</p>
   * @public
   */
  availableFromTime?: Date | undefined;

  /**
   * <p>The URL that you use to launch the seller's SaaS product. This URL is distinct from <code>fulfillmentUrl</code>, which is the seller's software registration landing page.</p>
   * @public
   */
  launchUrl?: string | undefined;

  /**
   * <p>Specifies whether the SaaS product supports Quick Launch deployment. This field has one of the following values:</p> <dl> <dt>DISABLED</dt> <dd> <p>The product does not support Quick Launch.</p> </dd> <dt>ENABLED</dt> <dd> <p>The product supports Quick Launch.</p> </dd> </dl>
   * @public
   */
  quickLaunch: SaasQuickLaunchStatus | undefined;

  /**
   * <p>The AWS CloudFormation deployment templates available for this SaaS product. The list is empty when no deployment templates are available.</p>
   * @public
   */
  deploymentTemplates: SaasDeploymentTemplate[] | undefined;
}

/**
 * <p>The recommended instance types for training and inference with a SageMaker algorithm.</p>
 * @public
 */
export interface SageMakerAlgorithmRecommendation {
  /**
   * <p>The instance type that the seller recommends for batch transform jobs with this algorithm.</p>
   * @public
   */
  recommendedBatchTransformInstanceType: string | undefined;

  /**
   * <p>The instance type that the seller recommends for real-time inference endpoints with this algorithm.</p>
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
   * <p>Release notes that describe the changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to use this SageMaker algorithm.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>The recommended instance types for training and inference with this algorithm.</p>
   * @public
   */
  recommendation?: SageMakerAlgorithmRecommendation | undefined;
}

/**
 * <p>The recommended instance types for inference with a SageMaker model.</p>
 * @public
 */
export interface SageMakerModelRecommendation {
  /**
   * <p>The instance type that the seller recommends for batch transform jobs with this model package.</p>
   * @public
   */
  recommendedBatchTransformInstanceType: string | undefined;

  /**
   * <p>The instance type that the seller recommends for real-time inference endpoints with this model package.</p>
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
   * <p>Release notes that describe the changes in this version of the fulfillment option.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>Instructions on how to use this SageMaker model.</p>
   * @public
   */
  usageInstructions?: string | undefined;

  /**
   * <p>The recommended instance types for inference with this model.</p>
   * @public
   */
  recommendation?: SageMakerModelRecommendation | undefined;

  /**
   * <p>The Multipurpose Internet Mail Extensions (MIME) types that this model accepts as input.</p>
   * @public
   */
  supportedContentTypes?: string[] | undefined;

  /**
   * <p>The MIME types that this model returns as output.</p>
   * @public
   */
  supportedResponseMimeTypes?: string[] | undefined;
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
   * <p>An Amazon Machine Image (AMI) fulfillment option for Amazon Elastic Compute Cloud (Amazon EC2) deployment.</p>
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
   * <p>An Amazon Elastic Compute Cloud (Amazon EC2) Image Builder component fulfillment option.</p>
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
   * <p>A Best Current Practice 47 (BCP 47) language tag or comma-separated priority list of language tags that specifies the preferred locale for response content. The field accepts a maximum of two language tags.</p> <p>The service resolves a locale string to the nearest supported locale. If no supported locale matches, the service applies the fallback behavior described in the following lists.</p> <ul> <li> <p> <b>Preferred locale</b> (first tag) – The locale you want the service to return content in.</p> </li> <li> <p> <b>Fallback locale</b> (optional, second tag) – The service default locale (<code>en-US</code> or <code>en</code>). The service returns content in this locale when translated content for the preferred locale is unavailable.</p> </li> </ul> <p>The field is optional. If you omit this field or set it to null, the service returns content in the default locale (<code>en-US</code>).</p> <p>The service supports the following locales:</p> <dl> <dt>en-US</dt> <dd> <p>English (service default, also resolves from <code>en</code>)</p> </dd> <dt>fr</dt> <dd> <p>French</p> </dd> <dt>es</dt> <dd> <p>Spanish</p> </dd> <dt>ko</dt> <dd> <p>Korean</p> </dd> <dt>ja</dt> <dd> <p>Japanese</p> </dd> </dl> <p>The fallback behavior is as follows:</p> <ul> <li> <p>If translated content for the preferred locale is unavailable, the service returns content in the default locale.</p> </li> <li> <p>If the preferred locale is not supported and you provide no fallback, the service returns a <code>ValidationException</code>.</p> </li> <li> <p>If you provide an unsupported locale with the default locale as fallback (for example, <code>xx, en-US</code>), the service returns content in the default locale.</p> </li> </ul> <p>The <code>locale</code> field in Get API responses indicates the locale of the returned content. You can use this field to determine whether the response contains content in the requested locale or the default locale.</p> <p>The following examples show how the field works:</p> <dl> <dt>fr</dt> <dd> <p>Request French content. If unavailable, falls back to <code>en-US</code>.</p> </dd> <dt>fr, en-US</dt> <dd> <p>Request French content with explicit fallback to English.</p> </dd> <dt>en-US</dt> <dd> <p>Request content in the default locale.</p> </dd> </dl>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The fulfillment options available for the product. Each option describes how you can deploy or access the product.</p>
   * @public
   */
  fulfillmentOptions: FulfillmentOption[] | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the listing and attribute types to retrieve.</p>
 * @public
 */
export interface ListListingAttributesInput {
  /**
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The unique identifier of the listing whose attributes are requested.</p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The attribute types to retrieve. Specify one or more of the following values:</p> <dl> <dt>CASE_STUDY</dt> <dd> <p>Case studies associated with the listing.</p> </dd> <dt>SPECIALIZATION_DETAIL</dt> <dd> <p>Specializations earned for the listing.</p> </dd> <dt>TRUST_CENTER_CERTIFICATION</dt> <dd> <p>Trust center certifications associated with the listing.</p> </dd> <dt>TRUST_CENTER_CONTROL</dt> <dd> <p>Trust center controls associated with the listing.</p> </dd> <dt>TRUST_CENTER_DOCUMENT</dt> <dd> <p>Trust center documents associated with the listing.</p> </dd> <dt>TRUST_CENTER_FAQ</dt> <dd> <p>The trust center FAQ associated with the listing.</p> </dd> <dt>TRUST_CENTER_SOURCE</dt> <dd> <p>Trust center sources associated with the listing.</p> </dd> <dt>TRUST_CENTER_UPDATE</dt> <dd> <p>Trust center updates associated with the listing.</p> </dd> </dl>
   * @public
   */
  attributeTypes: ListingAttributeType[] | undefined;

  /**
   * <p>The maximum number of attributes to return in each call. If you omit this field, the default is 25. Use <code>nextToken</code> to retrieve the next page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Key implementation dates for a case study.</p>
 * @public
 */
export interface EngagementDates {
  /**
   * <p>The implementation start date.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The implementation completion date. The service omits this field for an engagement in progress.</p>
   * @public
   */
  completionDate?: Date | undefined;
}

/**
 * <p>A resource that a case study cites, such as supporting documentation or a web page.</p>
 * @public
 */
export interface CaseStudyResource {
  /**
   * <p>The format of the resource value.</p>
   * @public
   */
  contentType: ResourceContentType | undefined;

  /**
   * <p>The resource value, such as a URL.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The resource name displayed to you.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The type of case study resource.</p>
   * @public
   */
  resourceType: CaseStudyResourceType | undefined;
}

/**
 * <p>A case study associated with a listing.</p>
 * @public
 */
export interface CaseStudy {
  /**
   * <p>The unique identifier of the case study.</p>
   * @public
   */
  caseStudyId: string | undefined;

  /**
   * <p>The case study name displayed to you.</p>
   * @public
   */
  caseStudyName: string | undefined;

  /**
   * <p>A brief value proposition for the case study.</p>
   * @public
   */
  shortDescription: string | undefined;

  /**
   * <p>The key implementation dates for the engagement.</p>
   * @public
   */
  engagementDates?: EngagementDates | undefined;

  /**
   * <p>The business challenge that the engagement addresses.</p>
   * @public
   */
  challenge?: string | undefined;

  /**
   * <p>How the partner resolved the challenge.</p>
   * @public
   */
  resolution?: string | undefined;

  /**
   * <p>The implementation approach used for the engagement.</p>
   * @public
   */
  implementationApproach?: string | undefined;

  /**
   * <p>The results and outcomes achieved by the engagement.</p>
   * @public
   */
  outcome?: string | undefined;

  /**
   * <p>Resources related to the case study.</p>
   * @public
   */
  resources?: CaseStudyResource[] | undefined;
}

/**
 * <p>Describes a specialization type with its display information.</p>
 * @public
 */
export interface SpecializationTypeDetail {
  /**
   * <p>The specialization type.</p>
   * @public
   */
  specializationType: SpecializationType | undefined;

  /**
   * <p>The name of the specialization type displayed to you.</p>
   * @public
   */
  displayName: string | undefined;
}

/**
 * <p>A specialization earned for the listing, such as an AWS Competency.</p>
 * @public
 */
export interface Specialization {
  /**
   * <p>The unique identifier of the specialization.</p>
   * @public
   */
  specializationId: string | undefined;

  /**
   * <p>The name of the specialization displayed to you.</p>
   * @public
   */
  specializationName: string | undefined;

  /**
   * <p>A description of the specialization displayed to you.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The types that categorize this specialization.</p>
   * @public
   */
  specializationTypes: SpecializationTypeDetail[] | undefined;

  /**
   * <p>The identifiers of the case studies that this specialization cites. Retrieve the case studies with the <code>CASE_STUDY</code> attribute type.</p>
   * @public
   */
  caseStudyIds?: string[] | undefined;
}

/**
 * <p>A category under a specialization that the listing earned.</p>
 * @public
 */
export interface SpecializationCategory {
  /**
   * <p>The unique identifier of the category.</p>
   * @public
   */
  specializationCategoryId: string | undefined;

  /**
   * <p>The name of the category displayed to you.</p>
   * @public
   */
  specializationCategoryName: string | undefined;

  /**
   * <p>The identifier of the parent specialization.</p>
   * @public
   */
  parentSpecializationId: string | undefined;
}

/**
 * <p>A specialization result for a listing. Exactly one member is set: a specialization or a category under one.</p>
 * @public
 */
export type SpecializationDetail =
  | SpecializationDetail.SpecializationMember
  | SpecializationDetail.SpecializationCategoryMember
  | SpecializationDetail.$UnknownMember;

/**
 * @public
 */
export namespace SpecializationDetail {
  /**
   * <p>A specialization earned for the listing.</p>
   * @public
   */
  export interface SpecializationMember {
    specialization: Specialization;
    specializationCategory?: never;
    $unknown?: never;
  }

  /**
   * <p>A category under a specialization that the listing earned.</p>
   * @public
   */
  export interface SpecializationCategoryMember {
    specialization?: never;
    specializationCategory: SpecializationCategory;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    specialization?: never;
    specializationCategory?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    specialization: (value: Specialization) => T;
    specializationCategory: (value: SpecializationCategory) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A trust center certification associated with a listing.</p>
 * @public
 */
export interface TrustCenterCertificationAttribute {
  /**
   * <p>The certification type. The set of values is open and can include provider-defined certifications.</p>
   * @public
   */
  certificationType: string | undefined;

  /**
   * <p>The authoritative certification name displayed to you.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The URL of the certification logo.</p>
   * @public
   */
  logoUrl: string | undefined;
}

/**
 * <p>A control that a trust center publishes.</p>
 * @public
 */
export interface TrustCenterControl {
  /**
   * <p>The name of the control.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the control.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The trust center domains to which the control applies.</p>
   * @public
   */
  domains: TrustCenterControlDomain[] | undefined;
}

/**
 * <p>A trust center document associated with a listing.</p>
 * @public
 */
export interface TrustCenterDocumentAttribute {
  /**
   * <p>The format of the document resource value.</p>
   * @public
   */
  contentType: ResourceContentType | undefined;

  /**
   * <p>The URL used to download, view, or request access to the document.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The document name displayed to you.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The subject area of the document.</p>
   * @public
   */
  subjectArea?: string | undefined;

  /**
   * <p>How the document can be accessed.</p>
   * @public
   */
  accessType: TrustCenterDocumentAccessType | undefined;
}

/**
 * <p>A frequently asked question that a trust center publishes.</p>
 * @public
 */
export interface TrustCenterFaqAttribute {
  /**
   * <p>The question.</p>
   * @public
   */
  question: string | undefined;

  /**
   * <p>The answer.</p>
   * @public
   */
  answer: string | undefined;

  /**
   * <p>The subject area of the question.</p>
   * @public
   */
  subjectArea?: string | undefined;
}

/**
 * <p>A source of trust center information.</p>
 * @public
 */
export interface TrustCenterSource {
  /**
   * <p>The format of the trust center source value.</p>
   * @public
   */
  contentType: ResourceContentType | undefined;

  /**
   * <p>The URL of the trust center.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The trust center provider name displayed to you.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The provider hosting the trust center.</p>
   * @public
   */
  provider: TrustCenterProvider | undefined;
}

/**
 * <p>An update that a trust center publishes.</p>
 * @public
 */
export interface TrustCenterUpdateAttribute {
  /**
   * <p>The update title.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The update description.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The time when the update was published.</p>
   * @public
   */
  publishedTime: Date | undefined;
}

/**
 * <p>An attribute associated with a listing. Each entry contains one attribute type.</p>
 * @public
 */
export type ListingAttributeResults =
  | ListingAttributeResults.CaseStudyMember
  | ListingAttributeResults.SpecializationDetailMember
  | ListingAttributeResults.TrustCenterCertificationMember
  | ListingAttributeResults.TrustCenterControlMember
  | ListingAttributeResults.TrustCenterDocumentMember
  | ListingAttributeResults.TrustCenterFaqMember
  | ListingAttributeResults.TrustCenterSourceMember
  | ListingAttributeResults.TrustCenterUpdateMember
  | ListingAttributeResults.$UnknownMember;

/**
 * @public
 */
export namespace ListingAttributeResults {
  /**
   * <p>A case study associated with the listing.</p>
   * @public
   */
  export interface CaseStudyMember {
    caseStudy: CaseStudy;
    specializationDetail?: never;
    trustCenterSource?: never;
    trustCenterCertification?: never;
    trustCenterDocument?: never;
    trustCenterControl?: never;
    trustCenterFaq?: never;
    trustCenterUpdate?: never;
    $unknown?: never;
  }

  /**
   * <p>A specialization earned for the listing. Each result is either a specialization or a category under a specialization.</p>
   * @public
   */
  export interface SpecializationDetailMember {
    caseStudy?: never;
    specializationDetail: SpecializationDetail;
    trustCenterSource?: never;
    trustCenterCertification?: never;
    trustCenterDocument?: never;
    trustCenterControl?: never;
    trustCenterFaq?: never;
    trustCenterUpdate?: never;
    $unknown?: never;
  }

  /**
   * <p>A trust center source associated with the listing.</p>
   * @public
   */
  export interface TrustCenterSourceMember {
    caseStudy?: never;
    specializationDetail?: never;
    trustCenterSource: TrustCenterSource;
    trustCenterCertification?: never;
    trustCenterDocument?: never;
    trustCenterControl?: never;
    trustCenterFaq?: never;
    trustCenterUpdate?: never;
    $unknown?: never;
  }

  /**
   * <p>A trust center certification associated with the listing.</p>
   * @public
   */
  export interface TrustCenterCertificationMember {
    caseStudy?: never;
    specializationDetail?: never;
    trustCenterSource?: never;
    trustCenterCertification: TrustCenterCertificationAttribute;
    trustCenterDocument?: never;
    trustCenterControl?: never;
    trustCenterFaq?: never;
    trustCenterUpdate?: never;
    $unknown?: never;
  }

  /**
   * <p>A trust center document associated with the listing.</p>
   * @public
   */
  export interface TrustCenterDocumentMember {
    caseStudy?: never;
    specializationDetail?: never;
    trustCenterSource?: never;
    trustCenterCertification?: never;
    trustCenterDocument: TrustCenterDocumentAttribute;
    trustCenterControl?: never;
    trustCenterFaq?: never;
    trustCenterUpdate?: never;
    $unknown?: never;
  }

  /**
   * <p>A trust center control associated with the listing.</p>
   * @public
   */
  export interface TrustCenterControlMember {
    caseStudy?: never;
    specializationDetail?: never;
    trustCenterSource?: never;
    trustCenterCertification?: never;
    trustCenterDocument?: never;
    trustCenterControl: TrustCenterControl;
    trustCenterFaq?: never;
    trustCenterUpdate?: never;
    $unknown?: never;
  }

  /**
   * <p>A trust center frequently asked question associated with the listing.</p>
   * @public
   */
  export interface TrustCenterFaqMember {
    caseStudy?: never;
    specializationDetail?: never;
    trustCenterSource?: never;
    trustCenterCertification?: never;
    trustCenterDocument?: never;
    trustCenterControl?: never;
    trustCenterFaq: TrustCenterFaqAttribute;
    trustCenterUpdate?: never;
    $unknown?: never;
  }

  /**
   * <p>A trust center update associated with the listing.</p>
   * @public
   */
  export interface TrustCenterUpdateMember {
    caseStudy?: never;
    specializationDetail?: never;
    trustCenterSource?: never;
    trustCenterCertification?: never;
    trustCenterDocument?: never;
    trustCenterControl?: never;
    trustCenterFaq?: never;
    trustCenterUpdate: TrustCenterUpdateAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    caseStudy?: never;
    specializationDetail?: never;
    trustCenterSource?: never;
    trustCenterCertification?: never;
    trustCenterDocument?: never;
    trustCenterControl?: never;
    trustCenterFaq?: never;
    trustCenterUpdate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    caseStudy: (value: CaseStudy) => T;
    specializationDetail: (value: SpecializationDetail) => T;
    trustCenterSource: (value: TrustCenterSource) => T;
    trustCenterCertification: (value: TrustCenterCertificationAttribute) => T;
    trustCenterDocument: (value: TrustCenterDocumentAttribute) => T;
    trustCenterControl: (value: TrustCenterControl) => T;
    trustCenterFaq: (value: TrustCenterFaqAttribute) => T;
    trustCenterUpdate: (value: TrustCenterUpdateAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains the requested listing attributes and pagination information.</p>
 * @public
 */
export interface ListListingAttributesOutput {
  /**
   * <p>The locale of the returned content. See <code>Locale</code> for details.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The requested attributes. Each entry contains one attribute type.</p>
   * @public
   */
  listingAttributes: ListingAttributeResults[] | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
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
   * <p>The type of filter to apply. This field has one of the following values:</p> <dl> <dt>AVAILABILITY_STATUS</dt> <dd> <p>Filters by whether the purchase option is available or expired.</p> </dd> <dt>PRODUCT_ID</dt> <dd> <p>Filters by product.</p> </dd> <dt>PURCHASE_OPTION_TYPE</dt> <dd> <p>Filters by offer or offer set.</p> </dd> <dt>SELLER_OF_RECORD_PROFILE_ID</dt> <dd> <p>Filters by seller.</p> </dd> <dt>VISIBILITY_SCOPE</dt> <dd> <p>Filters by visibility.</p> </dd> </dl> <p>See <code>filterValues</code> for the values that each type accepts.</p>
   * @public
   */
  filterType: PurchaseOptionFilterType | undefined;

  /**
   * <p>The values to filter by. Supported values depend on <code>filterType</code>:</p> <dl> <dt>AVAILABILITY_STATUS</dt> <dd> <p>One or more availability statuses to filter by: <code>AVAILABLE</code> or <code>EXPIRED</code>.</p> </dd> <dt>PRODUCT_ID</dt> <dd> <p>One or more product identifiers to filter by.</p> </dd> <dt>PURCHASE_OPTION_TYPE</dt> <dd> <p>One or more purchase option types to filter by: <code>OFFER</code> or <code>OFFERSET</code>.</p> </dd> <dt>SELLER_OF_RECORD_PROFILE_ID</dt> <dd> <p>One or more seller profile identifiers to filter by.</p> </dd> <dt>VISIBILITY_SCOPE</dt> <dd> <p>The visibility scope to filter by: <code>PRIVATE</code>.</p> </dd> </dl> <p>To retrieve private offers and offer sets visible to you, use <code>VISIBILITY_SCOPE</code> with <code>PRIVATE</code>. Within one filter, a result matches if it has any of the values.</p>
   * @public
   */
  filterValues: string[] | undefined;
}

/**
 * @public
 */
export interface ListPurchaseOptionsInput {
  /**
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>Filters to narrow the results. A result must match every filter. Within one filter, a result matches if it has any of the values.</p>
   * @public
   */
  filters?: PurchaseOptionFilter[] | undefined;

  /**
   * <p>The maximum number of purchase options to return in each call. If you omit this field, the default is 25. Use <code>nextToken</code> to retrieve the next page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
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
 * <p>Summary information about a purchase option (offer or offer set) available to you, including the seller, badges, and associated products.</p>
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
   * <p>The type of purchase option. This field has one of the following values:</p> <dl> <dt>OFFER</dt> <dd> <p>An offer for a single product.</p> </dd> <dt>OFFERSET</dt> <dd> <p>An offer set that bundles offers for several products.</p> </dd> </dl>
   * @public
   */
  purchaseOptionType: PurchaseOptionType | undefined;

  /**
   * <p>The display name of the purchase option.</p>
   * @public
   */
  purchaseOptionName?: string | undefined;

  /**
   * <p>The date and time when the purchase option became available to you.</p>
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
   * <p>Badges indicating special attributes of the purchase option, such as private pricing or future-dated.</p>
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
   * <p>The purchase options available to you. Each option is either an offer for a single product or an offer set spanning multiple products.</p>
   * @public
   */
  purchaseOptions?: PurchaseOptionSummary[] | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
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
   * <p>The type of filter to apply. See <code>filterValues</code> for the supported types and their values.</p>
   * @public
   */
  filterType: SearchFilterType | undefined;

  /**
   * <p>The values to filter by. Term filters accept multiple values, and a result matches if it has any of them. Range filters accept a single value. The supported values for each <code>filterType</code> are as follows:</p> <dl> <dt>CATEGORY</dt> <dd> <p>One or more category identifiers. Matches listings in those categories.</p> </dd> <dt>CERTIFICATES</dt> <dd> <p>One or more certification identifiers, such as <code>ISO_27001</code> or <code>SOC2_TYPE_2</code>. Matches listings that hold those certifications.</p> </dd> <dt>DEPLOYED_ON_AWS</dt> <dd> <p>The single value <code>DEPLOYED_ON_AWS</code>. Matches listings whose products are deployed on AWS infrastructure.</p> </dd> <dt>FULFILLMENT_OPTION_TYPE</dt> <dd> <p>One or more fulfillment option types, such as <code>SAAS</code>, <code>AMAZON_MACHINE_IMAGE</code>, or <code>CONTAINER</code>. Matches listings that you can deploy or access in those ways.</p> </dd> <dt>MAX_AVERAGE_CUSTOMER_RATING</dt> <dd> <p>A single rating between <code>0.0</code> and <code>5.0</code>. Matches listings whose average customer rating is at or below that value.</p> </dd> <dt>MIN_AVERAGE_CUSTOMER_RATING</dt> <dd> <p>A single rating between <code>0.0</code> and <code>5.0</code>. Matches listings whose average customer rating is at or above that value.</p> </dd> <dt>NUMBER_OF_PRODUCTS</dt> <dd> <p> <code>SINGLE_PRODUCT</code> or <code>MULTI_PRODUCT</code>. Matches single-product listings or multi-product solutions.</p> </dd> <dt>PRICING_MODEL</dt> <dd> <p>One or more of <code>BYOL</code>, <code>CONTRACT</code>, <code>FREE</code>, and <code>USAGE</code>. Matches listings with offers that use those pricing models.</p> </dd> <dt>PRICING_UNIT</dt> <dd> <p>One or more pricing units, such as <code>USERS</code>, <code>HOSTS</code>, or <code>REQUESTS</code>. Matches listings that bill by those units.</p> </dd> <dt>PRODUCT_ID</dt> <dd> <p>One or more product identifiers. Matches listings that contain those products.</p> </dd> <dt>PUBLISHER</dt> <dd> <p>One or more publisher identifiers. Matches listings from those sellers.</p> </dd> <dt>SELLER_ENGAGEMENT</dt> <dd> <p>One or more <code>SellerEngagementType</code> values, such as <code>BUY_NOW</code> or <code>REQUEST_FOR_DEMO</code>. Matches listings that offer those ways to engage with the seller.</p> </dd> <dt>SPECIALIZATION</dt> <dd> <p>One or more specialization identifiers. Matches listings that earned those specializations.</p> </dd> <dt>SPECIALIZATION_CATEGORY</dt> <dd> <p>One or more specialization category identifiers. Matches listings that earned a category under a specialization.</p> </dd> <dt>TRUST_CENTER</dt> <dd> <p>The single value <code>HAS_TRUST_CENTER</code>. Matches listings that have a trust center.</p> </dd> </dl> <p>Use <code>SearchFacets</code> to retrieve the values available for <code>CATEGORY</code>, <code>PUBLISHER</code>, <code>CERTIFICATES</code>, <code>SPECIALIZATION</code>, and <code>SPECIALIZATION_CATEGORY</code>.</p>
   * @public
   */
  filterValues: string[] | undefined;
}

/**
 * @public
 */
export interface SearchFacetsInput {
  /**
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The search query text to filter listings before retrieving facets.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>Filters to apply before retrieving facets. A result must match every filter. Within one filter, a result matches if it has any of the values.</p>
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * <p>The facet types to retrieve. If you omit this field or leave it empty, the service returns all available facets.</p>
   * @public
   */
  facetTypes?: SearchFacetType[] | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
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
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchListingsInput {
  /**
   * <p>The preferred locale for response content, as a Best Current Practice 47 (BCP 47) language tag or a comma-separated priority list of language tags. See <code>Locale</code> for supported values, constraints, fallback behavior, and the default locale. If you omit this field, the service returns content in the default locale.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The search query text to find relevant listings.</p>
   * @public
   */
  searchText?: string | undefined;

  /**
   * <p>Filters to narrow search results. A result must match every filter. Within one filter, a result matches if it has any of the values.</p>
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * <p>The maximum number of listings to return in each call. If you omit this field, the default is 25. Use <code>nextToken</code> to retrieve the next page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The field to sort results by. If you do not specify a value, the service sorts by <code>RELEVANCE</code>. This field has one of the following values:</p> <dl> <dt>AVERAGE_CUSTOMER_RATING</dt> <dd> <p>Sorts by average customer rating.</p> </dd> <dt>RELEVANCE</dt> <dd> <p>Sorts by relevance to the search query.</p> </dd> </dl>
   * @public
   */
  sortBy?: SearchListingsSortBy | undefined;

  /**
   * <p>The sort direction. If you do not specify a value, the service sorts in <code>DESCENDING</code> order. This field has one of the following values:</p> <dl> <dt>ASCENDING</dt> <dd> <p>Sorts from lowest to highest.</p> </dd> <dt>DESCENDING</dt> <dd> <p>Sorts from highest to lowest.</p> </dd> </dl>
   * @public
   */
  sortOrder?: SearchListingsSortOrder | undefined;

  /**
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
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
 * <p>A summary of the case studies associated with a listing.</p>
 * @public
 */
export interface CaseStudiesSummary {
  /**
   * <p>The total number of case studies associated with the listing.</p>
   * @public
   */
  caseStudyCount: number | undefined;
}

/**
 * <p>Summary information for a certification associated with a listing.</p>
 * @public
 */
export interface TrustCenterCertificationSummary {
  /**
   * <p>The certification type. The set of values is open and can include provider-defined certifications.</p>
   * @public
   */
  certificationType: string | undefined;

  /**
   * <p>The certification name displayed to you.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The URL of the certification logo.</p>
   * @public
   */
  logoUrl: string | undefined;
}

/**
 * <p>Summary information for a source of trust center information.</p>
 * @public
 */
export interface TrustCenterSourceSummary {
  /**
   * <p>The format of the trust center source value.</p>
   * @public
   */
  contentType: ResourceContentType | undefined;

  /**
   * <p>The URL of the trust center.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The trust center provider name displayed to you.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The provider hosting the trust center.</p>
   * @public
   */
  provider: TrustCenterProvider | undefined;
}

/**
 * <p>A summary of trust center information associated with a listing.</p>
 * @public
 */
export interface TrustCenterSummary {
  /**
   * <p>Trust center source summaries associated with the listing.</p>
   * @public
   */
  sourceSummaries: TrustCenterSourceSummary[] | undefined;

  /**
   * <p>A subset of certifications associated with the listing, selected by importance.</p>
   * @public
   */
  certificationSummaries: TrustCenterCertificationSummary[] | undefined;

  /**
   * <p>The total number of distinct certifications associated with the listing, including certifications omitted from <code>certificationSummaries</code>.</p>
   * @public
   */
  totalCertificationCount: number | undefined;
}

/**
 * <p>The name and identifier of a use case.</p>
 * @public
 */
export interface UseCaseInformation {
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
 * <p>A use case entry, as in <code>GetListing</code> without the description.</p>
 * @public
 */
export interface UseCaseSummaryEntry {
  /**
   * <p>The name and identifier of the use case.</p>
   * @public
   */
  useCase: UseCaseInformation | undefined;
}

/**
 * <p>The use cases of a listing, in summary form.</p>
 * @public
 */
export interface UseCaseSummary {
  /**
   * <p>The use cases, in the order the seller defined them.</p>
   * @public
   */
  useCases: UseCaseSummaryEntry[] | undefined;
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
   * <p>A summary of fulfillment options available for the listing.</p>
   * @public
   */
  fulfillmentOptionSummaries: FulfillmentOptionSummary[] | undefined;

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
   * <p>The categories that classify this listing into logical groups.</p>
   * @public
   */
  categories: Category[] | undefined;

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

  /**
   * <p>A summary of trust center sources and certifications associated with the listing.</p>
   * @public
   */
  trustCenterSummary?: TrustCenterSummary | undefined;

  /**
   * <p>A summary of the case studies associated with the listing. Retrieve the case studies with <code>ListListingAttributes</code>.</p>
   * @public
   */
  caseStudiesSummary?: CaseStudiesSummary | undefined;

  /**
   * <p>A summary of the use cases the listing is written for: the name and identifier of each, without descriptions. The summary is empty when the listing has none.</p>
   * @public
   */
  useCaseSummary?: UseCaseSummary | undefined;

  /**
   * <p>The seller engagement options available for this listing, such as buying now, requesting a private offer, or requesting a demo.</p>
   * @public
   */
  sellerEngagements?: SellerEngagement[] | undefined;
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
   * <p>If the service returns <code>nextToken</code>, more results are available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again with the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. An expired pagination token returns a <code>ValidationException</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}
