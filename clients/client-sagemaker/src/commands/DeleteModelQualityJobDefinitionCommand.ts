// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { DeleteModelQualityJobDefinitionRequest } from "../models/models_1";
import {
  de_DeleteModelQualityJobDefinitionCommand,
  se_DeleteModelQualityJobDefinitionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link DeleteModelQualityJobDefinitionCommand}.
 */
export interface DeleteModelQualityJobDefinitionCommandInput extends DeleteModelQualityJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteModelQualityJobDefinitionCommand}.
 */
export interface DeleteModelQualityJobDefinitionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the secified model quality monitoring job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteModelQualityJobDefinitionRequest
 *   JobDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelQualityJobDefinitionRequest - {@link DeleteModelQualityJobDefinitionRequest}
 * @returns {@link Unit}
 * @see {@link DeleteModelQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteModelQualityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DeleteModelQualityJobDefinitionCommand extends $Command<
  DeleteModelQualityJobDefinitionCommandInput,
  DeleteModelQualityJobDefinitionCommandOutput,
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
  constructor(readonly input: DeleteModelQualityJobDefinitionCommandInput) {
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
  ): Handler<DeleteModelQualityJobDefinitionCommandInput, DeleteModelQualityJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteModelQualityJobDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteModelQualityJobDefinitionCommand";
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
  private serialize(
    input: DeleteModelQualityJobDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteModelQualityJobDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteModelQualityJobDefinitionCommandOutput> {
    return de_DeleteModelQualityJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
