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

import {
  CreateCodeRepositoryInput,
  CreateCodeRepositoryInputFilterSensitiveLog,
  CreateCodeRepositoryOutput,
  CreateCodeRepositoryOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCodeRepositoryCommand,
  serializeAws_json1_1CreateCodeRepositoryCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateCodeRepositoryCommandInput extends CreateCodeRepositoryInput {}
export interface CreateCodeRepositoryCommandOutput extends CreateCodeRepositoryOutput, __MetadataBearer {}

/**
 * <p>Creates a Git repository as a resource in your SageMaker account. You can associate the
 *             repository with notebook instances so that you can use Git source control for the
 *             notebooks you create. The Git repository is a resource in your SageMaker account, so it can
 *             be associated with more than one notebook instance, and it persists independently from
 *             the lifecycle of any notebook instances it is associated with.</p>
 *          <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
 *             or in any other Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateCodeRepositoryCommand extends $Command<
  CreateCodeRepositoryCommandInput,
  CreateCodeRepositoryCommandOutput,
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

  constructor(readonly input: CreateCodeRepositoryCommandInput) {
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
  ): Handler<CreateCodeRepositoryCommandInput, CreateCodeRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCodeRepositoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateCodeRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCodeRepositoryInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCodeRepositoryOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCodeRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCodeRepositoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCodeRepositoryCommandOutput> {
    return deserializeAws_json1_1CreateCodeRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
