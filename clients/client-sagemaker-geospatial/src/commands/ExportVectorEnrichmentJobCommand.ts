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

import { ExportVectorEnrichmentJobInput, ExportVectorEnrichmentJobOutput } from "../models/models_0";
import { de_ExportVectorEnrichmentJobCommand, se_ExportVectorEnrichmentJobCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportVectorEnrichmentJobCommand}.
 */
export interface ExportVectorEnrichmentJobCommandInput extends ExportVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link ExportVectorEnrichmentJobCommand}.
 */
export interface ExportVectorEnrichmentJobCommandOutput extends ExportVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ExportVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ExportVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // ExportVectorEnrichmentJobInput
 *   Arn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   OutputConfig: { // ExportVectorEnrichmentJobOutputConfig
 *     S3Data: { // VectorEnrichmentJobS3Data
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new ExportVectorEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // { // ExportVectorEnrichmentJobOutput
 * //   Arn: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   ExportStatus: "STRING_VALUE", // required
 * //   OutputConfig: { // ExportVectorEnrichmentJobOutputConfig
 * //     S3Data: { // VectorEnrichmentJobS3Data
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportVectorEnrichmentJobCommandInput - {@link ExportVectorEnrichmentJobCommandInput}
 * @returns {@link ExportVectorEnrichmentJobCommandOutput}
 * @see {@link ExportVectorEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link ExportVectorEnrichmentJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SageMakerGeospatialServiceException}
 * <p>Base exception class for all service exceptions from SageMakerGeospatial service.</p>
 *
 */
export class ExportVectorEnrichmentJobCommand extends $Command<
  ExportVectorEnrichmentJobCommandInput,
  ExportVectorEnrichmentJobCommandOutput,
  SageMakerGeospatialClientResolvedConfig
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
  constructor(readonly input: ExportVectorEnrichmentJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerGeospatialClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportVectorEnrichmentJobCommandInput, ExportVectorEnrichmentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportVectorEnrichmentJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "ExportVectorEnrichmentJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMakerGeospatial",
        operation: "ExportVectorEnrichmentJob",
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
  private serialize(input: ExportVectorEnrichmentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportVectorEnrichmentJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportVectorEnrichmentJobCommandOutput> {
    return de_ExportVectorEnrichmentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
