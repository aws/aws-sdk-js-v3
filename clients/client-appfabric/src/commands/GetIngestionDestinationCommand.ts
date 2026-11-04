// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIngestionDestinationRequest, GetIngestionDestinationResponse } from "../models/models_0";
import { GetIngestionDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIngestionDestinationCommand}.
 */
export interface GetIngestionDestinationCommandInput extends GetIngestionDestinationRequest {}
/**
 * @public
 *
 * The output of {@link GetIngestionDestinationCommand}.
 */
export interface GetIngestionDestinationCommandOutput extends GetIngestionDestinationResponse, __MetadataBearer {}

/**
 * Returns information about an ingestion destination.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, GetIngestionDestinationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, GetIngestionDestinationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // GetIngestionDestinationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   ingestionDestinationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetIngestionDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetIngestionDestinationResponse
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
 * @param GetIngestionDestinationCommandInput - {@link GetIngestionDestinationCommandInput}
 * @returns {@link GetIngestionDestinationCommandOutput}
 * @see {@link GetIngestionDestinationCommandInput} for command's `input` shape.
 * @see {@link GetIngestionDestinationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppFabricServiceException}
 *
 * Base exception class for all service exceptions from AppFabric service.
 *
 * @public
 */
export class GetIngestionDestinationCommand extends command<GetIngestionDestinationCommandInput, GetIngestionDestinationCommandOutput>(
  _ep0,
  _mw0,
  "GetIngestionDestination",
  GetIngestionDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIngestionDestinationRequest;
      output: GetIngestionDestinationResponse;
    };
    sdk: {
      input: GetIngestionDestinationCommandInput;
      output: GetIngestionDestinationCommandOutput;
    };
  };
}
