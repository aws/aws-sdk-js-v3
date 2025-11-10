// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateIngestionDestinationRequest, UpdateIngestionDestinationResponse } from "../models/models_0";
import { UpdateIngestionDestination } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIngestionDestinationCommand}.
 */
export interface UpdateIngestionDestinationCommandInput extends UpdateIngestionDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIngestionDestinationCommand}.
 */
export interface UpdateIngestionDestinationCommandOutput extends UpdateIngestionDestinationResponse, __MetadataBearer {}

/**
 * <p>Updates an ingestion destination, which specifies how an application's ingested data is
 *          processed by Amazon Web Services AppFabric and where it's delivered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, UpdateIngestionDestinationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, UpdateIngestionDestinationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // UpdateIngestionDestinationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   ingestionDestinationIdentifier: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateIngestionDestinationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIngestionDestinationResponse
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
 * @param UpdateIngestionDestinationCommandInput - {@link UpdateIngestionDestinationCommandInput}
 * @returns {@link UpdateIngestionDestinationCommandOutput}
 * @see {@link UpdateIngestionDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateIngestionDestinationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
 *
 * @public
 */
export class UpdateIngestionDestinationCommand extends $Command
  .classBuilder<
    UpdateIngestionDestinationCommandInput,
    UpdateIngestionDestinationCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FabricFrontEndService", "UpdateIngestionDestination", {})
  .n("AppFabricClient", "UpdateIngestionDestinationCommand")
  .sc(UpdateIngestionDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIngestionDestinationRequest;
      output: UpdateIngestionDestinationResponse;
    };
    sdk: {
      input: UpdateIngestionDestinationCommandInput;
      output: UpdateIngestionDestinationCommandOutput;
    };
  };
}
