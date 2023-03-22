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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  DisassociateServiceRoleFromAccountRequest,
  DisassociateServiceRoleFromAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand,
  serializeAws_restJson1DisassociateServiceRoleFromAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DisassociateServiceRoleFromAccountCommand}.
 */
export interface DisassociateServiceRoleFromAccountCommandInput extends DisassociateServiceRoleFromAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateServiceRoleFromAccountCommand}.
 */
export interface DisassociateServiceRoleFromAccountCommandOutput
  extends DisassociateServiceRoleFromAccountResponse,
    __MetadataBearer {}

/**
 * @public
 * Disassociates the service role from your account. Without a service role, deployments will not work.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DisassociateServiceRoleFromAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DisassociateServiceRoleFromAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DisassociateServiceRoleFromAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisassociateServiceRoleFromAccountCommandInput - {@link DisassociateServiceRoleFromAccountCommandInput}
 * @returns {@link DisassociateServiceRoleFromAccountCommandOutput}
 * @see {@link DisassociateServiceRoleFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceRoleFromAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 *
 */
export class DisassociateServiceRoleFromAccountCommand extends $Command<
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
  GreengrassClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DisassociateServiceRoleFromAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateServiceRoleFromAccountCommandInput, DisassociateServiceRoleFromAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateServiceRoleFromAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DisassociateServiceRoleFromAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DisassociateServiceRoleFromAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateServiceRoleFromAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
