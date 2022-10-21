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

import { DeleteEventSubscriptionMessage, DeleteEventSubscriptionMessageFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDeleteEventSubscriptionCommand,
  serializeAws_queryDeleteEventSubscriptionCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DeleteEventSubscriptionCommandInput extends DeleteEventSubscriptionMessage {}
export interface DeleteEventSubscriptionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon Redshift event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DeleteEventSubscriptionCommand extends $Command<
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
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

  constructor(readonly input: DeleteEventSubscriptionCommandInput) {
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
  ): Handler<DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEventSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteEventSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEventSubscriptionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEventSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteEventSubscriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventSubscriptionCommandOutput> {
    return deserializeAws_queryDeleteEventSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
