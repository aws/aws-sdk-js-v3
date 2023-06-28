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

import { DescribeModelCardExportJobRequest, DescribeModelCardExportJobResponse } from "../models/models_2";
import { de_DescribeModelCardExportJobCommand, se_DescribeModelCardExportJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelCardExportJobCommand}.
 */
export interface DescribeModelCardExportJobCommandInput extends DescribeModelCardExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelCardExportJobCommand}.
 */
export interface DescribeModelCardExportJobCommandOutput extends DescribeModelCardExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an Amazon SageMaker Model Card export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelCardExportJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelCardExportJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeModelCardExportJobRequest
 *   ModelCardExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelCardExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelCardExportJobResponse
 * //   ModelCardExportJobName: "STRING_VALUE", // required
 * //   ModelCardExportJobArn: "STRING_VALUE", // required
 * //   Status: "InProgress" || "Completed" || "Failed", // required
 * //   ModelCardName: "STRING_VALUE", // required
 * //   ModelCardVersion: Number("int"), // required
 * //   OutputConfig: { // ModelCardExportOutputConfig
 * //     S3OutputPath: "STRING_VALUE", // required
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastModifiedAt: new Date("TIMESTAMP"), // required
 * //   FailureReason: "STRING_VALUE",
 * //   ExportArtifacts: { // ModelCardExportArtifacts
 * //     S3ExportArtifacts: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeModelCardExportJobCommandInput - {@link DescribeModelCardExportJobCommandInput}
 * @returns {@link DescribeModelCardExportJobCommandOutput}
 * @see {@link DescribeModelCardExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCardExportJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeModelCardExportJobCommand extends $Command<
  DescribeModelCardExportJobCommandInput,
  DescribeModelCardExportJobCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeModelCardExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeModelCardExportJobCommandInput, DescribeModelCardExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeModelCardExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeModelCardExportJobCommand";
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
  private serialize(input: DescribeModelCardExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeModelCardExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeModelCardExportJobCommandOutput> {
    return de_DescribeModelCardExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
