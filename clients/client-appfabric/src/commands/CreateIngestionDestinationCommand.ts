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
} from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { CreateIngestionDestinationRequest, CreateIngestionDestinationResponse } from "../models/models_0";
import { de_CreateIngestionDestinationCommand, se_CreateIngestionDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates an ingestion destination, which specifies how an application's ingested data is
 *          processed by Amazon Web Services AppFabric and where it's delivered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, CreateIngestionDestinationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, CreateIngestionDestinationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
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
 */
export class CreateIngestionDestinationCommand extends $Command<
  CreateIngestionDestinationCommandInput,
  CreateIngestionDestinationCommandOutput,
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
  constructor(readonly input: CreateIngestionDestinationCommandInput) {
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
  ): Handler<CreateIngestionDestinationCommandInput, CreateIngestionDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateIngestionDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppFabricClient";
    const commandName = "CreateIngestionDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateIngestionDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateIngestionDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIngestionDestinationCommandOutput> {
    return de_CreateIngestionDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
