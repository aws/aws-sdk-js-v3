// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIngestionDestinationRequest, CreateIngestionDestinationResponse } from "../models/models_0";
import { de_CreateIngestionDestinationCommand, se_CreateIngestionDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIngestionDestinationCommand}.
 */
export interface CreateIngestionDestinationCommandInput extends CreateIngestionDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIngestionDestinationCommand}.
 */
export interface CreateIngestionDestinationCommandOutput extends CreateIngestionDestinationResponse, __MetadataBearer {}

/**
 * <p>Creates an ingestion destination, which specifies how an application's ingested data is
 *          processed by Amazon Web Services AppFabric and where it's delivered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, CreateIngestionDestinationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, CreateIngestionDestinationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppFabricClient(config);
 * const input = { // CreateIngestionDestinationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   processingConfiguration: { // ProcessingConfiguration Union: only one key present
 *     auditLog: { // AuditLogProcessingConfiguration
 *       schema: "ocsf" || "raw", // required
 *       format: "json" || "parquet", // required
 *     },
 *   },
 *   destinationConfiguration: { // DestinationConfiguration Union: only one key present
 *     auditLog: { // AuditLogDestinationConfiguration
 *       destination: { // Destination Union: only one key present
 *         s3Bucket: { // S3Bucket
 *           bucketName: "STRING_VALUE", // required
 *           prefix: "STRING_VALUE",
 *         },
 *         firehoseStream: { // FirehoseStream
 *           streamName: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateIngestionDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIngestionDestinationResponse
 * //   ingestionDestination: { // IngestionDestination
 * //     arn: "STRING_VALUE", // required
 * //     ingestionArn: "STRING_VALUE", // required
 * //     processingConfiguration: { // ProcessingConfiguration Union: only one key present
 * //       auditLog: { // AuditLogProcessingConfiguration
 * //         schema: "ocsf" || "raw", // required
 * //         format: "json" || "parquet", // required
 * //       },
 * //     },
 * //     destinationConfiguration: { // DestinationConfiguration Union: only one key present
 * //       auditLog: { // AuditLogDestinationConfiguration
 * //         destination: { // Destination Union: only one key present
 * //           s3Bucket: { // S3Bucket
 * //             bucketName: "STRING_VALUE", // required
 * //             prefix: "STRING_VALUE",
 * //           },
 * //           firehoseStream: { // FirehoseStream
 * //             streamName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     status: "Active" || "Failed",
 * //     statusReason: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIngestionDestinationCommandInput - {@link CreateIngestionDestinationCommandInput}
 * @returns {@link CreateIngestionDestinationCommandOutput}
 * @see {@link CreateIngestionDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateIngestionDestinationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has created a conflict. Check the request parameters and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 * @public
 */
export class CreateIngestionDestinationCommand extends $Command
  .classBuilder<
    CreateIngestionDestinationCommandInput,
    CreateIngestionDestinationCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "CreateIngestionDestination", {})
  .n("AppFabricClient", "CreateIngestionDestinationCommand")
  .f(void 0, void 0)
  .ser(se_CreateIngestionDestinationCommand)
  .de(de_CreateIngestionDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIngestionDestinationRequest;
      output: CreateIngestionDestinationResponse;
    };
    sdk: {
      input: CreateIngestionDestinationCommandInput;
      output: CreateIngestionDestinationCommandOutput;
    };
  };
}
