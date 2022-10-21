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

import { CreateTagsMessage, CreateTagsMessageFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_queryCreateTagsCommand, serializeAws_queryCreateTagsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface CreateTagsCommandInput extends CreateTagsMessage {}
export interface CreateTagsCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds tags to a cluster.</p>
 *         <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a
 *             resource, you will receive an error and the attempt will fail.</p>
 *         <p>If you specify a key that already exists for the resource, the value for that key
 *             will be updated with the new value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateTagsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateTagsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class CreateTagsCommand extends $Command<
  CreateTagsCommandInput,
  CreateTagsCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: CreateTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTagsCommandInput, CreateTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTagsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTagsCommandOutput> {
    return deserializeAws_queryCreateTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
