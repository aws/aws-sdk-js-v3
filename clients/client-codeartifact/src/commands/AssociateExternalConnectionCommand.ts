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
  AssociateExternalConnectionRequest,
  AssociateExternalConnectionRequestFilterSensitiveLog,
  AssociateExternalConnectionResult,
  AssociateExternalConnectionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateExternalConnectionCommand,
  serializeAws_restJson1AssociateExternalConnectionCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateExternalConnectionCommandInput extends AssociateExternalConnectionRequest {}
export interface AssociateExternalConnectionCommandOutput extends AssociateExternalConnectionResult, __MetadataBearer {}

/**
 * <p>Adds an existing external connection to a repository. One external connection is allowed
 *       per repository.</p>
 *          <note>
 *             <p>A repository can have one or more upstream repositories, or an external connection.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, AssociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, AssociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new AssociateExternalConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateExternalConnectionCommandInput} for command's `input` shape.
 * @see {@link AssociateExternalConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class AssociateExternalConnectionCommand extends $Command<
  AssociateExternalConnectionCommandInput,
  AssociateExternalConnectionCommandOutput,
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

  constructor(readonly input: AssociateExternalConnectionCommandInput) {
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
  ): Handler<AssociateExternalConnectionCommandInput, AssociateExternalConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateExternalConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "AssociateExternalConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateExternalConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateExternalConnectionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateExternalConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateExternalConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateExternalConnectionCommandOutput> {
    return deserializeAws_restJson1AssociateExternalConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
