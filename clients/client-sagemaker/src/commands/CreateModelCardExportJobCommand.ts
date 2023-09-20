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

import { CreateModelCardExportJobRequest, CreateModelCardExportJobResponse } from "../models/models_1";
import { de_CreateModelCardExportJobCommand, se_CreateModelCardExportJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCardExportJobCommand}.
 */
export interface CreateModelCardExportJobCommandInput extends CreateModelCardExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCardExportJobCommand}.
 */
export interface CreateModelCardExportJobCommandOutput extends CreateModelCardExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon SageMaker Model Card export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelCardExportJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelCardExportJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateModelCardExportJobRequest
 *   ModelCardName: "STRING_VALUE", // required
 *   ModelCardVersion: Number("int"),
 *   ModelCardExportJobName: "STRING_VALUE", // required
 *   OutputConfig: { // ModelCardExportOutputConfig
 *     S3OutputPath: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateModelCardExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelCardExportJobResponse
 * //   ModelCardExportJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelCardExportJobCommandInput - {@link CreateModelCardExportJobCommandInput}
 * @returns {@link CreateModelCardExportJobCommandOutput}
 * @see {@link CreateModelCardExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateModelCardExportJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateModelCardExportJobCommand extends $Command<
  CreateModelCardExportJobCommandInput,
  CreateModelCardExportJobCommandOutput,
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
  constructor(readonly input: CreateModelCardExportJobCommandInput) {
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
  ): Handler<CreateModelCardExportJobCommandInput, CreateModelCardExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateModelCardExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelCardExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateModelCardExportJob",
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
  private serialize(input: CreateModelCardExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateModelCardExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelCardExportJobCommandOutput> {
    return de_CreateModelCardExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
