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
  UpdateDocumentMetadataRequest,
  UpdateDocumentMetadataRequestFilterSensitiveLog,
  UpdateDocumentMetadataResponse,
  UpdateDocumentMetadataResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateDocumentMetadataCommand,
  serializeAws_json1_1UpdateDocumentMetadataCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UpdateDocumentMetadataCommandInput extends UpdateDocumentMetadataRequest {}
export interface UpdateDocumentMetadataCommandOutput extends UpdateDocumentMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates information related to approval reviews for a specific version of a change template
 *    in Change Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class UpdateDocumentMetadataCommand extends $Command<
  UpdateDocumentMetadataCommandInput,
  UpdateDocumentMetadataCommandOutput,
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

  constructor(readonly input: UpdateDocumentMetadataCommandInput) {
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
  ): Handler<UpdateDocumentMetadataCommandInput, UpdateDocumentMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDocumentMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateDocumentMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDocumentMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDocumentMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDocumentMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDocumentMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDocumentMetadataCommandOutput> {
    return deserializeAws_json1_1UpdateDocumentMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
