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

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import {
  DisassociateExternalConnectionRequest,
  DisassociateExternalConnectionRequestFilterSensitiveLog,
  DisassociateExternalConnectionResult,
  DisassociateExternalConnectionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateExternalConnectionCommand,
  serializeAws_restJson1DisassociateExternalConnectionCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateExternalConnectionCommandInput extends DisassociateExternalConnectionRequest {}
export interface DisassociateExternalConnectionCommandOutput
  extends DisassociateExternalConnectionResult,
    __MetadataBearer {}

/**
 * <p>
 *       Removes an existing external connection from a repository.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DisassociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DisassociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DisassociateExternalConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateExternalConnectionCommandInput} for command's `input` shape.
 * @see {@link DisassociateExternalConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class DisassociateExternalConnectionCommand extends $Command<
  DisassociateExternalConnectionCommandInput,
  DisassociateExternalConnectionCommandOutput,
  CodeartifactClientResolvedConfig
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

  constructor(readonly input: DisassociateExternalConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateExternalConnectionCommandInput, DisassociateExternalConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateExternalConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DisassociateExternalConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateExternalConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateExternalConnectionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateExternalConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateExternalConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateExternalConnectionCommandOutput> {
    return deserializeAws_restJson1DisassociateExternalConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
