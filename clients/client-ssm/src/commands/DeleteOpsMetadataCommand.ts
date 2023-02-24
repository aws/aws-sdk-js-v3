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
  DeleteOpsMetadataRequest,
  DeleteOpsMetadataRequestFilterSensitiveLog,
  DeleteOpsMetadataResult,
  DeleteOpsMetadataResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteOpsMetadataCommand,
  serializeAws_json1_1DeleteOpsMetadataCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DeleteOpsMetadataCommandInput extends DeleteOpsMetadataRequest {}
export interface DeleteOpsMetadataCommandOutput extends DeleteOpsMetadataResult, __MetadataBearer {}

/**
 * <p>Delete OpsMetadata related to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link DeleteOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DeleteOpsMetadataCommand extends $Command<
  DeleteOpsMetadataCommandInput,
  DeleteOpsMetadataCommandOutput,
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

  constructor(readonly input: DeleteOpsMetadataCommandInput) {
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
  ): Handler<DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteOpsMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteOpsMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOpsMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteOpsMetadataResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOpsMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteOpsMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOpsMetadataCommandOutput> {
    return deserializeAws_json1_1DeleteOpsMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
