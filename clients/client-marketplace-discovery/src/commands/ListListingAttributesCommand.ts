// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListListingAttributesInput, ListListingAttributesOutput } from "../models/models_0";
import { ListListingAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListListingAttributesCommand}.
 */
export interface ListListingAttributesCommandInput extends ListListingAttributesInput {}
/**
 * @public
 *
 * The output of {@link ListListingAttributesCommand}.
 */
export interface ListListingAttributesCommandOutput extends ListListingAttributesOutput, __MetadataBearer {}

/**
 * <p>Retrieves the requested attributes for a listing, including case studies and trust center information. The operation returns results in pages. Use <code>nextToken</code> to retrieve the next page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, ListListingAttributesCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, ListListingAttributesCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // ListListingAttributesInput
 *   locale: "STRING_VALUE",
 *   listingId: "STRING_VALUE", // required
 *   attributeTypes: [ // ListingAttributeTypeList // required
 *     "CASE_STUDY" || "SPECIALIZATION_DETAIL" || "TRUST_CENTER_SOURCE" || "TRUST_CENTER_CERTIFICATION" || "TRUST_CENTER_DOCUMENT" || "TRUST_CENTER_CONTROL" || "TRUST_CENTER_FAQ" || "TRUST_CENTER_UPDATE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListListingAttributesOutput
 * //   locale: "STRING_VALUE",
 * //   listingAttributes: [ // ListingAttributeResultsList // required
 * //     { // ListingAttributeResults Union: only one key present
 * //       caseStudy: { // CaseStudy
 * //         caseStudyId: "STRING_VALUE", // required
 * //         caseStudyName: "STRING_VALUE", // required
 * //         shortDescription: "STRING_VALUE", // required
 * //         engagementDates: { // EngagementDates
 * //           startDate: new Date("TIMESTAMP"), // required
 * //           completionDate: new Date("TIMESTAMP"),
 * //         },
 * //         challenge: "STRING_VALUE",
 * //         resolution: "STRING_VALUE",
 * //         implementationApproach: "STRING_VALUE",
 * //         outcome: "STRING_VALUE",
 * //         resources: [ // CaseStudyResourceList
 * //           { // CaseStudyResource
 * //             contentType: "EMAIL" || "PHONE_NUMBER" || "LINK" || "OTHER", // required
 * //             value: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE",
 * //             resourceType: "CASE_STUDY_WEBSITE", // required
 * //           },
 * //         ],
 * //       },
 * //       specializationDetail: { // SpecializationDetail Union: only one key present
 * //         specialization: { // Specialization
 * //           specializationId: "STRING_VALUE", // required
 * //           specializationName: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           specializationTypes: [ // SpecializationTypeList // required
 * //             { // SpecializationTypeDetail
 * //               specializationType: "USE_CASE" || "INDUSTRY" || "SERVICES", // required
 * //               displayName: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           caseStudyIds: [ // CaseStudyIdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         specializationCategory: { // SpecializationCategory
 * //           specializationCategoryId: "STRING_VALUE", // required
 * //           specializationCategoryName: "STRING_VALUE", // required
 * //           parentSpecializationId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       trustCenterSource: { // TrustCenterSource
 * //         contentType: "EMAIL" || "PHONE_NUMBER" || "LINK" || "OTHER", // required
 * //         value: "STRING_VALUE", // required
 * //         displayName: "STRING_VALUE",
 * //         provider: "DRATA" || "VANTA" || "OTHER", // required
 * //       },
 * //       trustCenterCertification: { // TrustCenterCertificationAttribute
 * //         certificationType: "STRING_VALUE", // required
 * //         displayName: "STRING_VALUE", // required
 * //         logoUrl: "STRING_VALUE", // required
 * //       },
 * //       trustCenterDocument: { // TrustCenterDocumentAttribute
 * //         contentType: "EMAIL" || "PHONE_NUMBER" || "LINK" || "OTHER", // required
 * //         value: "STRING_VALUE", // required
 * //         displayName: "STRING_VALUE",
 * //         subjectArea: "STRING_VALUE",
 * //         accessType: "DOWNLOAD" || "VIEW" || "REQUEST_ACCESS", // required
 * //       },
 * //       trustCenterControl: { // TrustCenterControl
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         domains: [ // TrustCenterControlDomainList // required
 * //           "SECURITY" || "AI_GOVERNANCE" || "RESILIENCE",
 * //         ],
 * //       },
 * //       trustCenterFaq: { // TrustCenterFaqAttribute
 * //         question: "STRING_VALUE", // required
 * //         answer: "STRING_VALUE", // required
 * //         subjectArea: "STRING_VALUE",
 * //       },
 * //       trustCenterUpdate: { // TrustCenterUpdateAttribute
 * //         title: "STRING_VALUE", // required
 * //         description: "STRING_VALUE", // required
 * //         publishedTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListListingAttributesCommandInput - {@link ListListingAttributesCommandInput}
 * @returns {@link ListListingAttributesCommandOutput}
 * @see {@link ListListingAttributesCommandInput} for command's `input` shape.
 * @see {@link ListListingAttributesCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDiscoveryClientResolvedConfig | config} for MarketplaceDiscoveryClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Verify that the identifier is correct.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Verify that you have the required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of your requests and retry.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the <code>reason</code> field for the constraint that failed.</p>
 *
 * @throws {@link MarketplaceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceDiscovery service.</p>
 *
 *
 * @example List case studies for a listing
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "CASE_STUDY"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       caseStudy: {
 *         caseStudyId: "cs-sampleOne",
 *         caseStudyName: "Disaster recovery for a connected vehicle platform",
 *         challenge: "The customer needed a multi-region failover strategy without doubling steady-state infrastructure cost.",
 *         engagementDates: {
 *           completionDate: "2025-06-30T00:00:00Z",
 *           startDate: "2025-01-15T00:00:00Z"
 *         },
 *         implementationApproach: "Delivered in three phases over six months: assessment, pilot region build-out, and full production cutover.",
 *         outcome: "Achieved a 5-minute RTO, passed a full regional failover audit, and reduced DR spend by 30%.",
 *         resolution: "Deployed a multi-region active-passive architecture with automated cross-Region failover.",
 *         resources: [
 *           {
 *             contentType: "LINK",
 *             resourceType: "CASE_STUDY_WEBSITE",
 *             value: "https://partner.example.com/case-studies/connected-vehicle-dr"
 *           }
 *         ],
 *         shortDescription: "Multi-region failover for a connected vehicle platform, cutting RTO to minutes."
 *       }
 *     },
 *     {
 *       caseStudy: {
 *         caseStudyId: "cs-sampleTwo",
 *         caseStudyName: "Scaling analytics for a global retailer",
 *         resources: [
 *           {
 *             contentType: "LINK",
 *             resourceType: "CASE_STUDY_WEBSITE",
 *             value: "https://partner.example.com/case-studies/global-retail-analytics"
 *           }
 *         ],
 *         shortDescription: "Rebuilt a retailer's analytics pipeline to handle peak-season load at a fraction of the cost."
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List case studies with pagination
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "CASE_STUDY"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US",
 *   maxResults: 1
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       caseStudy: {
 *         caseStudyId: "cs-sampleOne",
 *         caseStudyName: "Disaster recovery for a connected vehicle platform",
 *         challenge: "The customer needed a multi-region failover strategy without doubling steady-state infrastructure cost.",
 *         engagementDates: {
 *           completionDate: "2025-06-30T00:00:00Z",
 *           startDate: "2025-01-15T00:00:00Z"
 *         },
 *         implementationApproach: "Delivered in three phases over six months: assessment, pilot region build-out, and full production cutover.",
 *         outcome: "Achieved a 5-minute RTO, passed a full regional failover audit, and reduced DR spend by 30%.",
 *         resolution: "Deployed a multi-region active-passive architecture with automated cross-Region failover.",
 *         resources: [
 *           {
 *             contentType: "LINK",
 *             resourceType: "CASE_STUDY_WEBSITE",
 *             value: "https://partner.example.com/case-studies/connected-vehicle-dr"
 *           }
 *         ],
 *         shortDescription: "Multi-region failover for a connected vehicle platform, cutting RTO to minutes."
 *       }
 *     }
 *   ],
 *   locale: "en-US",
 *   nextToken: "bW9jay10b2tlbg=="
 * }
 * *\/
 * ```
 *
 * @example List specializations for a listing
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "SPECIALIZATION_DETAIL"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       specializationDetail: {
 *         specialization: {
 *           caseStudyIds: [
 *             "cs-sampleOne"
 *           ],
 *           description: "Recognizes partners with validated expertise designing and operating storage solutions on AWS.",
 *           specializationId: "spec-9d2f6h4j8k1m5n3p",
 *           specializationName: "Storage Services Competency",
 *           specializationTypes: [
 *             {
 *               displayName: "Services",
 *               specializationType: "SERVICES"
 *             }
 *           ]
 *         }
 *       }
 *     },
 *     {
 *       specializationDetail: {
 *         specializationCategory: {
 *           parentSpecializationId: "spec-9d2f6h4j8k1m5n3p",
 *           specializationCategoryId: "spec-4k8n2p6x9m3q7w1z",
 *           specializationCategoryName: "Data Migration"
 *         }
 *       }
 *     },
 *     {
 *       specializationDetail: {
 *         specializationCategory: {
 *           parentSpecializationId: "spec-9d2f6h4j8k1m5n3p",
 *           specializationCategoryId: "spec-7a3c5e1g9j2l6n4r",
 *           specializationCategoryName: "Backup and Recovery"
 *         }
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example Request multiple Trust Center attribute types
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_SOURCE",
 *     "TRUST_CENTER_CERTIFICATION",
 *     "TRUST_CENTER_DOCUMENT"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US",
 *   maxResults: 25
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       trustCenterSource: {
 *         contentType: "LINK",
 *         provider: "DRATA",
 *         value: "https://trust.example.com/"
 *       }
 *     },
 *     {
 *       trustCenterCertification: {
 *         certificationType: "SOC2_TYPE_2",
 *         displayName: "SOC 2 Type II",
 *         logoUrl: "https://assets.example.com/certifications/soc2.svg"
 *       }
 *     },
 *     {
 *       trustCenterDocument: {
 *         accessType: "REQUEST_ACCESS",
 *         contentType: "LINK",
 *         displayName: "Penetration Test Report",
 *         subjectArea: "Security",
 *         value: "https://trust.example.com/documents/request-access"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List a Trust Center certification
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_CERTIFICATION"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       trustCenterCertification: {
 *         certificationType: "SOC2_TYPE_2",
 *         displayName: "SOC 2 Type II",
 *         logoUrl: "https://assets.example.com/certifications/soc2.svg"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List a Trust Center document that requires access
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_DOCUMENT"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       trustCenterDocument: {
 *         accessType: "REQUEST_ACCESS",
 *         contentType: "LINK",
 *         displayName: "Penetration Test Report",
 *         subjectArea: "Security",
 *         value: "https://trust.example.com/documents/request-access"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List a view-only Trust Center document
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_DOCUMENT"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       trustCenterDocument: {
 *         accessType: "VIEW",
 *         contentType: "LINK",
 *         displayName: "Privacy Policy",
 *         subjectArea: "Privacy",
 *         value: "https://trust.example.com/documents/privacy-policy"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List a downloadable Trust Center document
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_DOCUMENT"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       trustCenterDocument: {
 *         accessType: "DOWNLOAD",
 *         contentType: "LINK",
 *         displayName: "SOC 2 Type II Report",
 *         subjectArea: "Compliance",
 *         value: "https://trust.example.com/documents/soc2-report.pdf"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List Trust Center controls
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_CONTROL"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       trustCenterControl: {
 *         domains: [
 *           "SECURITY"
 *         ],
 *         name: "Data Access"
 *       }
 *     },
 *     {
 *       trustCenterControl: {
 *         description: "Disaster recovery testing is performed annually.",
 *         domains: [
 *           "RESILIENCE"
 *         ],
 *         name: "Disaster Recovery Testing"
 *       }
 *     },
 *     {
 *       trustCenterControl: {
 *         description: "Customer data is not used for model training.",
 *         domains: [
 *           "AI_GOVERNANCE"
 *         ],
 *         name: "Customer Data Use"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List a Trust Center frequently asked question
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_FAQ"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       trustCenterFaq: {
 *         answer: "Customer data is encrypted in transit and at rest.",
 *         question: "Is customer data encrypted?",
 *         subjectArea: "Privacy"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List Trust Center updates
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_UPDATE"
 *   ],
 *   listingId: "prodview-sampleListingId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes: [
 *     {
 *       trustCenterUpdate: {
 *         description: "The current SOC 2 Type II report is now available.",
 *         publishedTime: "2026-09-01T12:00:00Z",
 *         title: "SOC 2 report renewed"
 *       }
 *     },
 *     {
 *       trustCenterUpdate: {
 *         description: "The previous SOC 2 Type II report remains available for reference.",
 *         publishedTime: "2026-09-01T12:00:00Z",
 *         title: "SOC 2 report renewed"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example Valid attribute types that do not apply to the listing
 * ```javascript
 * //
 * const input = {
 *   attributeTypes: [
 *     "TRUST_CENTER_CERTIFICATION"
 *   ],
 *   listingId: "prodview-sampleNonApplicableId",
 *   locale: "en-US"
 * };
 * const command = new ListListingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   listingAttributes:   [],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListListingAttributesCommand extends command<ListListingAttributesCommandInput, ListListingAttributesCommandOutput>(
  _ep0,
  _mw0,
  "ListListingAttributes",
  ListListingAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListListingAttributesInput;
      output: ListListingAttributesOutput;
    };
    sdk: {
      input: ListListingAttributesCommandInput;
      output: ListListingAttributesCommandOutput;
    };
  };
}
