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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import {
  DeleteResourcesByExternalIdInput,
  DeleteResourcesByExternalIdInputFilterSensitiveLog,
  DeleteResourcesByExternalIdOutput,
  DeleteResourcesByExternalIdOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteResourcesByExternalIdCommand,
  serializeAws_json1_1DeleteResourcesByExternalIdCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteResourcesByExternalIdCommandInput extends DeleteResourcesByExternalIdInput {}
export interface DeleteResourcesByExternalIdCommandOutput extends DeleteResourcesByExternalIdOutput, __MetadataBearer {}

/**
 * <p>Deletes resources linked to an external ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteResourcesByExternalIdCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteResourcesByExternalIdCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeleteResourcesByExternalIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcesByExternalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcesByExternalIdCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 */
export class DeleteResourcesByExternalIdCommand extends $Command<
  DeleteResourcesByExternalIdCommandInput,
  DeleteResourcesByExternalIdCommandOutput,
  CodeDeployClientResolvedConfig
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

  constructor(readonly input: DeleteResourcesByExternalIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourcesByExternalIdCommandInput, DeleteResourcesByExternalIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourcesByExternalIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "DeleteResourcesByExternalIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResourcesByExternalIdInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteResourcesByExternalIdOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResourcesByExternalIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteResourcesByExternalIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteResourcesByExternalIdCommandOutput> {
    return deserializeAws_json1_1DeleteResourcesByExternalIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
