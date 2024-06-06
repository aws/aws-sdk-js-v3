// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetCampaignRequest, GetCampaignResponse } from "../models/models_0";
import { de_GetCampaignCommand, se_GetCampaignCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCampaignCommand}.
 */
export interface GetCampaignCommandInput extends GetCampaignRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignCommand}.
 */
export interface GetCampaignCommandOutput extends GetCampaignResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about a campaign. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetCampaignCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetCampaignCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetCampaignRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetCampaignCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   signalCatalogArn: "STRING_VALUE",
 * //   targetArn: "STRING_VALUE",
 * //   status: "CREATING" || "WAITING_FOR_APPROVAL" || "RUNNING" || "SUSPENDED",
 * //   startTime: new Date("TIMESTAMP"),
 * //   expiryTime: new Date("TIMESTAMP"),
 * //   postTriggerCollectionDuration: Number("long"),
 * //   diagnosticsMode: "OFF" || "SEND_ACTIVE_DTCS",
 * //   spoolingMode: "OFF" || "TO_DISK",
 * //   compression: "OFF" || "SNAPPY",
 * //   priority: Number("int"),
 * //   signalsToCollect: [ // SignalInformationList
 * //     { // SignalInformation
 * //       name: "STRING_VALUE", // required
 * //       maxSampleCount: Number("long"),
 * //       minimumSamplingIntervalMs: Number("long"),
 * //     },
 * //   ],
 * //   collectionScheme: { // CollectionScheme Union: only one key present
 * //     timeBasedCollectionScheme: { // TimeBasedCollectionScheme
 * //       periodMs: Number("long"), // required
 * //     },
 * //     conditionBasedCollectionScheme: { // ConditionBasedCollectionScheme
 * //       expression: "STRING_VALUE", // required
 * //       minimumTriggerIntervalMs: Number("long"),
 * //       triggerMode: "ALWAYS" || "RISING_EDGE",
 * //       conditionLanguageVersion: Number("int"),
 * //     },
 * //   },
 * //   dataExtraDimensions: [ // DataExtraDimensionNodePathList
 * //     "STRING_VALUE",
 * //   ],
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModificationTime: new Date("TIMESTAMP"),
 * //   dataDestinationConfigs: [ // DataDestinationConfigs
 * //     { // DataDestinationConfig Union: only one key present
 * //       s3Config: { // S3Config
 * //         bucketArn: "STRING_VALUE", // required
 * //         dataFormat: "JSON" || "PARQUET",
 * //         storageCompressionFormat: "NONE" || "GZIP",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       timestreamConfig: { // TimestreamConfig
 * //         timestreamTableArn: "STRING_VALUE", // required
 * //         executionRoleArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCampaignCommandInput - {@link GetCampaignCommandInput}
 * @returns {@link GetCampaignCommandOutput}
 * @see {@link GetCampaignCommandInput} for command's `input` shape.
 * @see {@link GetCampaignCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 * @public
 */
export class GetCampaignCommand extends $Command
  .classBuilder<
    GetCampaignCommandInput,
    GetCampaignCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "GetCampaign", {})
  .n("IoTFleetWiseClient", "GetCampaignCommand")
  .f(void 0, void 0)
  .ser(se_GetCampaignCommand)
  .de(de_GetCampaignCommand)
  .build() {}
