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

import { DescribeImageVersionRequest, DescribeImageVersionResponse } from "../models/models_2";
import { de_DescribeImageVersionCommand, se_DescribeImageVersionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageVersionCommand}.
 */
export interface DescribeImageVersionCommandInput extends DescribeImageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageVersionCommand}.
 */
export interface DescribeImageVersionCommandOutput extends DescribeImageVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a version of a SageMaker image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeImageVersionRequest
 *   ImageName: "STRING_VALUE", // required
 *   Version: Number("int"),
 *   Alias: "STRING_VALUE",
 * };
 * const command = new DescribeImageVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageVersionResponse
 * //   BaseImage: "STRING_VALUE",
 * //   ContainerImage: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * //   ImageArn: "STRING_VALUE",
 * //   ImageVersionArn: "STRING_VALUE",
 * //   ImageVersionStatus: "CREATING" || "CREATED" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   Version: Number("int"),
 * //   VendorGuidance: "NOT_PROVIDED" || "STABLE" || "TO_BE_ARCHIVED" || "ARCHIVED",
 * //   JobType: "TRAINING" || "INFERENCE" || "NOTEBOOK_KERNEL",
 * //   MLFramework: "STRING_VALUE",
 * //   ProgrammingLang: "STRING_VALUE",
 * //   Processor: "CPU" || "GPU",
 * //   Horovod: true || false,
 * //   ReleaseNotes: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImageVersionCommandInput - {@link DescribeImageVersionCommandInput}
 * @returns {@link DescribeImageVersionCommandOutput}
 * @see {@link DescribeImageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeImageVersionCommand extends $Command<
  DescribeImageVersionCommandInput,
  DescribeImageVersionCommandOutput,
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
  constructor(readonly input: DescribeImageVersionCommandInput) {
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
  ): Handler<DescribeImageVersionCommandInput, DescribeImageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImageVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeImageVersionCommand";
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
  private serialize(input: DescribeImageVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeImageVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImageVersionCommandOutput> {
    return de_DescribeImageVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
