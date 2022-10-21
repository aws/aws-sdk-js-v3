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
  CreateSMBFileShareInput,
  CreateSMBFileShareInputFilterSensitiveLog,
  CreateSMBFileShareOutput,
  CreateSMBFileShareOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateSMBFileShareCommand,
  serializeAws_json1_1CreateSMBFileShareCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface CreateSMBFileShareCommandInput extends CreateSMBFileShareInput {}
export interface CreateSMBFileShareCommandOutput extends CreateSMBFileShareOutput, __MetadataBearer {}

/**
 * <p>Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In
 *          Storage Gateway, a file share is a file system mount point backed by Amazon S3
 *          cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation
 *          is only supported for S3 File Gateways.</p>
 *
 *          <important>
 *             <p>S3 File Gateways require Security Token Service (Amazon Web Services STS) to be
 *             activated to enable you to create a file share. Make sure that Amazon Web Services STS
 *             is activated in the Amazon Web Services Region you are creating your S3 File Gateway in.
 *             If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate
 *             it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
 *                   <i>Identity and Access Management User Guide</i>.</p>
 *
 *             <p>File gateways don't support creating hard or symbolic links on a file
 *             share.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateSMBFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateSMBFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateSMBFileShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSMBFileShareCommandInput} for command's `input` shape.
 * @see {@link CreateSMBFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class CreateSMBFileShareCommand extends $Command<
  CreateSMBFileShareCommandInput,
  CreateSMBFileShareCommandOutput,
  StorageGatewayClientResolvedConfig
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

  constructor(readonly input: CreateSMBFileShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSMBFileShareCommandInput, CreateSMBFileShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSMBFileShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateSMBFileShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSMBFileShareInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSMBFileShareOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSMBFileShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSMBFileShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSMBFileShareCommandOutput> {
    return deserializeAws_json1_1CreateSMBFileShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
