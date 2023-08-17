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

import { GetVectorEnrichmentJobInput, GetVectorEnrichmentJobOutput } from "../models/models_0";
import { de_GetVectorEnrichmentJobCommand, se_GetVectorEnrichmentJobCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link GetVectorEnrichmentJobCommand}.
 */
export interface GetVectorEnrichmentJobCommandInput extends GetVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link GetVectorEnrichmentJobCommand}.
 */
export interface GetVectorEnrichmentJobCommandOutput extends GetVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, GetVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, GetVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // GetVectorEnrichmentJobInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetVectorEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // { // GetVectorEnrichmentJobOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Type: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   DurationInSeconds: Number("int"), // required
 * //   Status: "STRING_VALUE", // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   InputConfig: { // VectorEnrichmentJobInputConfig
 * //     DocumentType: "STRING_VALUE", // required
 * //     DataSourceConfig: { // VectorEnrichmentJobDataSourceConfigInput Union: only one key present
 * //       S3Data: { // VectorEnrichmentJobS3Data
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   JobConfig: { // VectorEnrichmentJobConfig Union: only one key present
 * //     ReverseGeocodingConfig: { // ReverseGeocodingConfig
 * //       YAttributeName: "STRING_VALUE", // required
 * //       XAttributeName: "STRING_VALUE", // required
 * //     },
 * //     MapMatchingConfig: { // MapMatchingConfig
 * //       IdAttributeName: "STRING_VALUE", // required
 * //       YAttributeName: "STRING_VALUE", // required
 * //       XAttributeName: "STRING_VALUE", // required
 * //       TimestampAttributeName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   ErrorDetails: { // VectorEnrichmentJobErrorDetails
 * //     ErrorType: "STRING_VALUE",
 * //     ErrorMessage: "STRING_VALUE",
 * //   },
 * //   ExportStatus: "STRING_VALUE",
 * //   ExportErrorDetails: { // VectorEnrichmentJobExportErrorDetails
 * //     Type: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVectorEnrichmentJobCommandInput - {@link GetVectorEnrichmentJobCommandInput}
 * @returns {@link GetVectorEnrichmentJobCommandOutput}
 * @see {@link GetVectorEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link GetVectorEnrichmentJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
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
export class GetVectorEnrichmentJobCommand extends $Command<
  GetVectorEnrichmentJobCommandInput,
  GetVectorEnrichmentJobCommandOutput,
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
  constructor(readonly input: GetVectorEnrichmentJobCommandInput) {
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
  ): Handler<GetVectorEnrichmentJobCommandInput, GetVectorEnrichmentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVectorEnrichmentJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "GetVectorEnrichmentJobCommand";
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
  private serialize(input: GetVectorEnrichmentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVectorEnrichmentJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVectorEnrichmentJobCommandOutput> {
    return de_GetVectorEnrichmentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
