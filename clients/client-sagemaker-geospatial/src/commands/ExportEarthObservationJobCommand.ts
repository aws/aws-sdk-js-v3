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

import { ExportEarthObservationJobInput, ExportEarthObservationJobOutput } from "../models/models_0";
import { de_ExportEarthObservationJobCommand, se_ExportEarthObservationJobCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ExportEarthObservationJobCommand}.
 */
export interface ExportEarthObservationJobCommandInput extends ExportEarthObservationJobInput {}
/**
 * @public
 *
 * The output of {@link ExportEarthObservationJobCommand}.
 */
export interface ExportEarthObservationJobCommandOutput extends ExportEarthObservationJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ExportEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ExportEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // ExportEarthObservationJobInput
 *   Arn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   OutputConfig: { // OutputConfigInput
 *     S3Data: { // ExportS3DataInput
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   ExportSourceImages: true || false,
 * };
 * const command = new ExportEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * // { // ExportEarthObservationJobOutput
 * //   Arn: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   ExportStatus: "STRING_VALUE", // required
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   OutputConfig: { // OutputConfigInput
 * //     S3Data: { // ExportS3DataInput
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * //   ExportSourceImages: true || false,
 * // };
 *
 * ```
 *
 * @param ExportEarthObservationJobCommandInput - {@link ExportEarthObservationJobCommandInput}
 * @returns {@link ExportEarthObservationJobCommandOutput}
 * @see {@link ExportEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link ExportEarthObservationJobCommandOutput} for command's `response` shape.
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
export class ExportEarthObservationJobCommand extends $Command<
  ExportEarthObservationJobCommandInput,
  ExportEarthObservationJobCommandOutput,
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
  constructor(readonly input: ExportEarthObservationJobCommandInput) {
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
  ): Handler<ExportEarthObservationJobCommandInput, ExportEarthObservationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportEarthObservationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "ExportEarthObservationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMakerGeospatial",
        operation: "ExportEarthObservationJob",
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
  private serialize(input: ExportEarthObservationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportEarthObservationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportEarthObservationJobCommandOutput> {
    return de_ExportEarthObservationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
