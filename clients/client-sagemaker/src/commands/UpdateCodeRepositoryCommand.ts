// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdateCodeRepositoryInput, UpdateCodeRepositoryOutput } from "../models/models_4";
import { de_UpdateCodeRepositoryCommand, se_UpdateCodeRepositoryCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link UpdateCodeRepositoryCommand}.
 */
export interface UpdateCodeRepositoryCommandInput extends UpdateCodeRepositoryInput {}
/**
 * @public
 *
 * The output of {@link UpdateCodeRepositoryCommand}.
 */
export interface UpdateCodeRepositoryCommandOutput extends UpdateCodeRepositoryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified Git repository with the specified values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateCodeRepositoryInput
 *   CodeRepositoryName: "STRING_VALUE", // required
 *   GitConfig: { // GitConfigForUpdate
 *     SecretArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCodeRepositoryOutput
 * //   CodeRepositoryArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateCodeRepositoryCommandInput - {@link UpdateCodeRepositoryCommandInput}
 * @returns {@link UpdateCodeRepositoryCommandOutput}
 * @see {@link UpdateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateCodeRepositoryCommand extends $Command<
  UpdateCodeRepositoryCommandInput,
  UpdateCodeRepositoryCommandOutput,
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
  constructor(readonly input: UpdateCodeRepositoryCommandInput) {
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
  ): Handler<UpdateCodeRepositoryCommandInput, UpdateCodeRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCodeRepositoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateCodeRepositoryCommand";
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
  private serialize(input: UpdateCodeRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCodeRepositoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCodeRepositoryCommandOutput> {
    return de_UpdateCodeRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
