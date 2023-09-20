// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { UpdateIngestionDestinationRequest, UpdateIngestionDestinationResponse } from "../models/models_0";
import { de_UpdateIngestionDestinationCommand, se_UpdateIngestionDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Updates an ingestion destination, which specifies how an application's ingested data is
 *          processed by Amazon Web Services AppFabric and where it's delivered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, UpdateIngestionDestinationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, UpdateIngestionDestinationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
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
 */
export class UpdateIngestionDestinationCommand extends $Command<
  UpdateIngestionDestinationCommandInput,
  UpdateIngestionDestinationCommandOutput,
  AppFabricClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateIngestionDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppFabricClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIngestionDestinationCommandInput, UpdateIngestionDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIngestionDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppFabricClient";
    const commandName = "UpdateIngestionDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FabricFrontEndService",
        operation: "UpdateIngestionDestination",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateIngestionDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateIngestionDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIngestionDestinationCommandOutput> {
    return de_UpdateIngestionDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
