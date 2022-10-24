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
  CreateAssociationBatchRequest,
  CreateAssociationBatchRequestFilterSensitiveLog,
  CreateAssociationBatchResult,
  CreateAssociationBatchResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAssociationBatchCommand,
  serializeAws_json1_1CreateAssociationBatchCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface CreateAssociationBatchCommandInput extends CreateAssociationBatchRequest {}
export interface CreateAssociationBatchCommandOutput extends CreateAssociationBatchResult, __MetadataBearer {}

/**
 * <p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes
 *    or targets.</p>
 *          <p>When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager
 *    Agent (SSM Agent) running on the managed node processes the document and configures the node as
 *    specified.</p>
 *          <p>If you associate a document with a managed node that already has an associated document, the
 *    system returns the AssociationAlreadyExists exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationBatchCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationBatchCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateAssociationBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssociationBatchCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationBatchCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class CreateAssociationBatchCommand extends $Command<
  CreateAssociationBatchCommandInput,
  CreateAssociationBatchCommandOutput,
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

  constructor(readonly input: CreateAssociationBatchCommandInput) {
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
  ): Handler<CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssociationBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateAssociationBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssociationBatchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAssociationBatchResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssociationBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAssociationBatchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssociationBatchCommandOutput> {
    return deserializeAws_json1_1CreateAssociationBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
