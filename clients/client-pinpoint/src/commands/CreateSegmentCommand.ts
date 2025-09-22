// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSegmentRequest, CreateSegmentResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateSegment } from "../schemas/schemas_18_Segment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSegmentCommand}.
 */
export interface CreateSegmentCommandInput extends CreateSegmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateSegmentCommand}.
 */
export interface CreateSegmentCommandOutput extends CreateSegmentResponse, __MetadataBearer {}

/**
 * <p>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // CreateSegmentRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   WriteSegmentRequest: { // WriteSegmentRequest
 *     Dimensions: { // SegmentDimensions
 *       Attributes: { // MapOfAttributeDimension
 *         "<keys>": { // AttributeDimension
 *           AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *           Values: [ // ListOf__string // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       Behavior: { // SegmentBehaviors
 *         Recency: { // RecencyDimension
 *           Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 *           RecencyType: "ACTIVE" || "INACTIVE", // required
 *         },
 *       },
 *       Demographic: { // SegmentDemographics
 *         AppVersion: { // SetDimension
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Channel: {
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         DeviceType: {
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Make: {
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Model: {
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: "<ListOf__string>", // required
 *         },
 *         Platform: "<SetDimension>",
 *       },
 *       Location: { // SegmentLocation
 *         Country: "<SetDimension>",
 *         GPSPoint: { // GPSPointDimension
 *           Coordinates: { // GPSCoordinates
 *             Latitude: Number("double"), // required
 *             Longitude: Number("double"), // required
 *           },
 *           RangeInKilometers: Number("double"),
 *         },
 *       },
 *       Metrics: { // MapOfMetricDimension
 *         "<keys>": { // MetricDimension
 *           ComparisonOperator: "STRING_VALUE", // required
 *           Value: Number("double"), // required
 *         },
 *       },
 *       UserAttributes: {
 *         "<keys>": {
 *           AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *           Values: "<ListOf__string>", // required
 *         },
 *       },
 *     },
 *     Name: "STRING_VALUE",
 *     SegmentGroups: { // SegmentGroupList
 *       Groups: [ // ListOfSegmentGroup
 *         { // SegmentGroup
 *           Dimensions: [ // ListOfSegmentDimensions
 *             {
 *               Attributes: {
 *                 "<keys>": {
 *                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                   Values: "<ListOf__string>", // required
 *                 },
 *               },
 *               Behavior: {
 *                 Recency: {
 *                   Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 *                   RecencyType: "ACTIVE" || "INACTIVE", // required
 *                 },
 *               },
 *               Demographic: {
 *                 AppVersion: "<SetDimension>",
 *                 Channel: "<SetDimension>",
 *                 DeviceType: "<SetDimension>",
 *                 Make: "<SetDimension>",
 *                 Model: "<SetDimension>",
 *                 Platform: "<SetDimension>",
 *               },
 *               Location: {
 *                 Country: "<SetDimension>",
 *                 GPSPoint: {
 *                   Coordinates: {
 *                     Latitude: Number("double"), // required
 *                     Longitude: Number("double"), // required
 *                   },
 *                   RangeInKilometers: Number("double"),
 *                 },
 *               },
 *               Metrics: {
 *                 "<keys>": {
 *                   ComparisonOperator: "STRING_VALUE", // required
 *                   Value: Number("double"), // required
 *                 },
 *               },
 *               UserAttributes: {
 *                 "<keys>": {
 *                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                   Values: "<ListOf__string>", // required
 *                 },
 *               },
 *             },
 *           ],
 *           SourceSegments: [ // ListOfSegmentReference
 *             { // SegmentReference
 *               Id: "STRING_VALUE", // required
 *               Version: Number("int"),
 *             },
 *           ],
 *           SourceType: "ALL" || "ANY" || "NONE",
 *           Type: "ALL" || "ANY" || "NONE",
 *         },
 *       ],
 *       Include: "ALL" || "ANY" || "NONE",
 *     },
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateSegmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateSegmentResponse
 * //   SegmentResponse: { // SegmentResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreationDate: "STRING_VALUE", // required
 * //     Dimensions: { // SegmentDimensions
 * //       Attributes: { // MapOfAttributeDimension
 * //         "<keys>": { // AttributeDimension
 * //           AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //           Values: [ // ListOf__string // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       Behavior: { // SegmentBehaviors
 * //         Recency: { // RecencyDimension
 * //           Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 * //           RecencyType: "ACTIVE" || "INACTIVE", // required
 * //         },
 * //       },
 * //       Demographic: { // SegmentDemographics
 * //         AppVersion: { // SetDimension
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Channel: {
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         DeviceType: {
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Make: {
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Model: {
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: "<ListOf__string>", // required
 * //         },
 * //         Platform: "<SetDimension>",
 * //       },
 * //       Location: { // SegmentLocation
 * //         Country: "<SetDimension>",
 * //         GPSPoint: { // GPSPointDimension
 * //           Coordinates: { // GPSCoordinates
 * //             Latitude: Number("double"), // required
 * //             Longitude: Number("double"), // required
 * //           },
 * //           RangeInKilometers: Number("double"),
 * //         },
 * //       },
 * //       Metrics: { // MapOfMetricDimension
 * //         "<keys>": { // MetricDimension
 * //           ComparisonOperator: "STRING_VALUE", // required
 * //           Value: Number("double"), // required
 * //         },
 * //       },
 * //       UserAttributes: {
 * //         "<keys>": {
 * //           AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //           Values: "<ListOf__string>", // required
 * //         },
 * //       },
 * //     },
 * //     Id: "STRING_VALUE", // required
 * //     ImportDefinition: { // SegmentImportResource
 * //       ChannelCounts: { // MapOf__integer
 * //         "<keys>": Number("int"),
 * //       },
 * //       ExternalId: "STRING_VALUE", // required
 * //       Format: "CSV" || "JSON", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       S3Url: "STRING_VALUE", // required
 * //       Size: Number("int"), // required
 * //     },
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SegmentGroups: { // SegmentGroupList
 * //       Groups: [ // ListOfSegmentGroup
 * //         { // SegmentGroup
 * //           Dimensions: [ // ListOfSegmentDimensions
 * //             {
 * //               Attributes: {
 * //                 "<keys>": {
 * //                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                   Values: "<ListOf__string>", // required
 * //                 },
 * //               },
 * //               Behavior: {
 * //                 Recency: {
 * //                   Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 * //                   RecencyType: "ACTIVE" || "INACTIVE", // required
 * //                 },
 * //               },
 * //               Demographic: {
 * //                 AppVersion: "<SetDimension>",
 * //                 Channel: "<SetDimension>",
 * //                 DeviceType: "<SetDimension>",
 * //                 Make: "<SetDimension>",
 * //                 Model: "<SetDimension>",
 * //                 Platform: "<SetDimension>",
 * //               },
 * //               Location: {
 * //                 Country: "<SetDimension>",
 * //                 GPSPoint: {
 * //                   Coordinates: {
 * //                     Latitude: Number("double"), // required
 * //                     Longitude: Number("double"), // required
 * //                   },
 * //                   RangeInKilometers: Number("double"),
 * //                 },
 * //               },
 * //               Metrics: {
 * //                 "<keys>": {
 * //                   ComparisonOperator: "STRING_VALUE", // required
 * //                   Value: Number("double"), // required
 * //                 },
 * //               },
 * //               UserAttributes: {
 * //                 "<keys>": {
 * //                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                   Values: "<ListOf__string>", // required
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //           SourceSegments: [ // ListOfSegmentReference
 * //             { // SegmentReference
 * //               Id: "STRING_VALUE", // required
 * //               Version: Number("int"),
 * //             },
 * //           ],
 * //           SourceType: "ALL" || "ANY" || "NONE",
 * //           Type: "ALL" || "ANY" || "NONE",
 * //         },
 * //       ],
 * //       Include: "ALL" || "ANY" || "NONE",
 * //     },
 * //     SegmentType: "DIMENSIONAL" || "IMPORT", // required
 * //     tags: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSegmentCommandInput - {@link CreateSegmentCommandInput}
 * @returns {@link CreateSegmentCommandOutput}
 * @see {@link CreateSegmentCommandInput} for command's `input` shape.
 * @see {@link CreateSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class CreateSegmentCommand extends $Command
  .classBuilder<
    CreateSegmentCommandInput,
    CreateSegmentCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "CreateSegment", {})
  .n("PinpointClient", "CreateSegmentCommand")
  .sc(CreateSegment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSegmentRequest;
      output: CreateSegmentResponse;
    };
    sdk: {
      input: CreateSegmentCommandInput;
      output: CreateSegmentCommandOutput;
    };
  };
}
