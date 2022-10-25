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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DeleteFileSystemPolicyRequest, DeleteFileSystemPolicyRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFileSystemPolicyCommand,
  serializeAws_restJson1DeleteFileSystemPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteFileSystemPolicyCommandInput extends DeleteFileSystemPolicyRequest {}
export interface DeleteFileSystemPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the <code>FileSystemPolicy</code> for the specified file system.
 *       The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted.
 *       For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DeleteFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class DeleteFileSystemPolicyCommand extends $Command<
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
  EFSClientResolvedConfig
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

  constructor(readonly input: DeleteFileSystemPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFileSystemPolicyCommandInput, DeleteFileSystemPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFileSystemPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DeleteFileSystemPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFileSystemPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFileSystemPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFileSystemPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileSystemPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteFileSystemPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
