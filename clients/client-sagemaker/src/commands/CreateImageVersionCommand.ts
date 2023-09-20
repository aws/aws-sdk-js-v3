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

import { CreateImageVersionRequest, CreateImageVersionResponse } from "../models/models_1";
import { de_CreateImageVersionCommand, se_CreateImageVersionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateImageVersionCommand}.
 */
export interface CreateImageVersionCommandInput extends CreateImageVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateImageVersionCommand}.
 */
export interface CreateImageVersionCommandOutput extends CreateImageVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a version of the SageMaker image specified by <code>ImageName</code>. The version
 *         represents the Amazon Elastic Container Registry (ECR) container image specified by <code>BaseImage</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateImageVersionRequest
 *   BaseImage: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   ImageName: "STRING_VALUE", // required
 *   Aliases: [ // SageMakerImageVersionAliases
 *     "STRING_VALUE",
 *   ],
 *   VendorGuidance: "NOT_PROVIDED" || "STABLE" || "TO_BE_ARCHIVED" || "ARCHIVED",
 *   JobType: "TRAINING" || "INFERENCE" || "NOTEBOOK_KERNEL",
 *   MLFramework: "STRING_VALUE",
 *   ProgrammingLang: "STRING_VALUE",
 *   Processor: "CPU" || "GPU",
 *   Horovod: true || false,
 *   ReleaseNotes: "STRING_VALUE",
 * };
 * const command = new CreateImageVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateImageVersionResponse
 * //   ImageVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImageVersionCommandInput - {@link CreateImageVersionCommandInput}
 * @returns {@link CreateImageVersionCommandOutput}
 * @see {@link CreateImageVersionCommandInput} for command's `input` shape.
 * @see {@link CreateImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
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
export class CreateImageVersionCommand extends $Command<
  CreateImageVersionCommandInput,
  CreateImageVersionCommandOutput,
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
  constructor(readonly input: CreateImageVersionCommandInput) {
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
  ): Handler<CreateImageVersionCommandInput, CreateImageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateImageVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateImageVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateImageVersion",
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
  private serialize(input: CreateImageVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateImageVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImageVersionCommandOutput> {
    return de_CreateImageVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
