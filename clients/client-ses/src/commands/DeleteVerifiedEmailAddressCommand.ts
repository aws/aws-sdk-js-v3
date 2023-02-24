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
  DeleteVerifiedEmailAddressRequest,
  DeleteVerifiedEmailAddressRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteVerifiedEmailAddressCommand,
  serializeAws_queryDeleteVerifiedEmailAddressCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

export interface DeleteVerifiedEmailAddressCommandInput extends DeleteVerifiedEmailAddressRequest {}
export interface DeleteVerifiedEmailAddressCommandOutput extends __MetadataBearer {}

/**
 * <p>Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses
 *             and domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteVerifiedEmailAddressCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteVerifiedEmailAddressCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new DeleteVerifiedEmailAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVerifiedEmailAddressCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class DeleteVerifiedEmailAddressCommand extends $Command<
  DeleteVerifiedEmailAddressCommandInput,
  DeleteVerifiedEmailAddressCommandOutput,
  SESClientResolvedConfig
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

  constructor(readonly input: DeleteVerifiedEmailAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVerifiedEmailAddressCommandInput, DeleteVerifiedEmailAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVerifiedEmailAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteVerifiedEmailAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVerifiedEmailAddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVerifiedEmailAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteVerifiedEmailAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVerifiedEmailAddressCommandOutput> {
    return deserializeAws_queryDeleteVerifiedEmailAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
