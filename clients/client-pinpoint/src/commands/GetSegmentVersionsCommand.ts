// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSegmentVersionsRequest, GetSegmentVersionsResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSegmentVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSegmentVersionsCommand}.
 */
export interface GetSegmentVersionsCommandInput extends GetSegmentVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetSegmentVersionsCommand}.
 */
export interface GetSegmentVersionsCommandOutput extends GetSegmentVersionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetSegmentVersionsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   SegmentId: "STRING_VALUE", // required
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetSegmentVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetSegmentVersionsResponse
 * //   SegmentsResponse: { // SegmentsResponse
 * //     Item: [ // ListOfSegmentResponse // required
 * //       { // SegmentResponse
 * //         ApplicationId: "STRING_VALUE", // required
 * //         Arn: "STRING_VALUE", // required
 * //         CreationDate: "STRING_VALUE", // required
 * //         Dimensions: { // SegmentDimensions
 * //           Attributes: { // MapOfAttributeDimension
 * //             "<keys>": { // AttributeDimension
 * //               AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //               Values: [ // ListOf__string // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           Behavior: { // SegmentBehaviors
 * //             Recency: { // RecencyDimension
 * //               Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 * //               RecencyType: "ACTIVE" || "INACTIVE", // required
 * //             },
 * //           },
 * //           Demographic: { // SegmentDemographics
 * //             AppVersion: { // SetDimension
 * //               DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //               Values: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Channel: {
 * //               DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //               Values: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             DeviceType: {
 * //               DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //               Values: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Make: {
 * //               DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //               Values: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Model: {
 * //               DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //               Values: "<ListOf__string>", // required
 * //             },
 * //             Platform: "<SetDimension>",
 * //           },
 * //           Location: { // SegmentLocation
 * //             Country: "<SetDimension>",
 * //             GPSPoint: { // GPSPointDimension
 * //               Coordinates: { // GPSCoordinates
 * //                 Latitude: Number("double"), // required
 * //                 Longitude: Number("double"), // required
 * //               },
 * //               RangeInKilometers: Number("double"),
 * //             },
 * //           },
 * //           Metrics: { // MapOfMetricDimension
 * //             "<keys>": { // MetricDimension
 * //               ComparisonOperator: "STRING_VALUE", // required
 * //               Value: Number("double"), // required
 * //             },
 * //           },
 * //           UserAttributes: {
 * //             "<keys>": {
 * //               AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //               Values: "<ListOf__string>", // required
 * //             },
 * //           },
 * //         },
 * //         Id: "STRING_VALUE", // required
 * //         ImportDefinition: { // SegmentImportResource
 * //           ChannelCounts: { // MapOf__integer
 * //             "<keys>": Number("int"),
 * //           },
 * //           ExternalId: "STRING_VALUE", // required
 * //           Format: "CSV" || "JSON", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //           S3Url: "STRING_VALUE", // required
 * //           Size: Number("int"), // required
 * //         },
 * //         LastModifiedDate: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         SegmentGroups: { // SegmentGroupList
 * //           Groups: [ // ListOfSegmentGroup
 * //             { // SegmentGroup
 * //               Dimensions: [ // ListOfSegmentDimensions
 * //                 {
 * //                   Attributes: {
 * //                     "<keys>": {
 * //                       AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                       Values: "<ListOf__string>", // required
 * //                     },
 * //                   },
 * //                   Behavior: {
 * //                     Recency: {
 * //                       Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 * //                       RecencyType: "ACTIVE" || "INACTIVE", // required
 * //                     },
 * //                   },
 * //                   Demographic: {
 * //                     AppVersion: "<SetDimension>",
 * //                     Channel: "<SetDimension>",
 * //                     DeviceType: "<SetDimension>",
 * //                     Make: "<SetDimension>",
 * //                     Model: "<SetDimension>",
 * //                     Platform: "<SetDimension>",
 * //                   },
 * //                   Location: {
 * //                     Country: "<SetDimension>",
 * //                     GPSPoint: {
 * //                       Coordinates: {
 * //                         Latitude: Number("double"), // required
 * //                         Longitude: Number("double"), // required
 * //                       },
 * //                       RangeInKilometers: Number("double"),
 * //                     },
 * //                   },
 * //                   Metrics: {
 * //                     "<keys>": {
 * //                       ComparisonOperator: "STRING_VALUE", // required
 * //                       Value: Number("double"), // required
 * //                     },
 * //                   },
 * //                   UserAttributes: {
 * //                     "<keys>": {
 * //                       AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                       Values: "<ListOf__string>", // required
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //               SourceSegments: [ // ListOfSegmentReference
 * //                 { // SegmentReference
 * //                   Id: "STRING_VALUE", // required
 * //                   Version: Number("int"),
 * //                 },
 * //               ],
 * //               SourceType: "ALL" || "ANY" || "NONE",
 * //               Type: "ALL" || "ANY" || "NONE",
 * //             },
 * //           ],
 * //           Include: "ALL" || "ANY" || "NONE",
 * //         },
 * //         SegmentType: "DIMENSIONAL" || "IMPORT", // required
 * //         tags: { // MapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Version: Number("int"),
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSegmentVersionsCommandInput - {@link GetSegmentVersionsCommandInput}
 * @returns {@link GetSegmentVersionsCommandOutput}
 * @see {@link GetSegmentVersionsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentVersionsCommandOutput} for command's `response` shape.
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
export class GetSegmentVersionsCommand extends $Command
  .classBuilder<
    GetSegmentVersionsCommandInput,
    GetSegmentVersionsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetSegmentVersions", {})
  .n("PinpointClient", "GetSegmentVersionsCommand")
  .sc(GetSegmentVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSegmentVersionsRequest;
      output: GetSegmentVersionsResponse;
    };
    sdk: {
      input: GetSegmentVersionsCommandInput;
      output: GetSegmentVersionsCommandOutput;
    };
  };
}
