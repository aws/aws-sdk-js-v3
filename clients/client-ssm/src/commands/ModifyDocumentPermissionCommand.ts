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
  ModifyDocumentPermissionRequest,
  ModifyDocumentPermissionRequestFilterSensitiveLog,
  ModifyDocumentPermissionResponse,
  ModifyDocumentPermissionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ModifyDocumentPermissionCommand,
  serializeAws_json1_1ModifyDocumentPermissionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface ModifyDocumentPermissionCommandInput extends ModifyDocumentPermissionRequest {}
export interface ModifyDocumentPermissionCommandOutput extends ModifyDocumentPermissionResponse, __MetadataBearer {}

/**
 * <p>Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document
 *    privately, you must specify the Amazon Web Services user account IDs for those people who can use the
 *    document. If you share a document publicly, you must specify <i>All</i> as the
 *    account ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ModifyDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ModifyDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link ModifyDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class ModifyDocumentPermissionCommand extends $Command<
  ModifyDocumentPermissionCommandInput,
  ModifyDocumentPermissionCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: ModifyDocumentPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDocumentPermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ModifyDocumentPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDocumentPermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyDocumentPermissionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDocumentPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyDocumentPermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDocumentPermissionCommandOutput> {
    return deserializeAws_json1_1ModifyDocumentPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
