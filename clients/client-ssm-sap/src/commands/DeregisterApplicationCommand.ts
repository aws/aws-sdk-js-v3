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

import { DeregisterApplicationInput, DeregisterApplicationOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeregisterApplicationCommand,
  serializeAws_restJson1DeregisterApplicationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 *
 * The input for {@link DeregisterApplicationCommand}.
 */
export interface DeregisterApplicationCommandInput extends DeregisterApplicationInput {}
/**
 * @public
 *
 * The output of {@link DeregisterApplicationCommand}.
 */
export interface DeregisterApplicationCommandOutput extends DeregisterApplicationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deregister an SAP application with AWS Systems Manager for SAP. This action does not
 *          aﬀect the existing setup of your SAP workloads on Amazon EC2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, DeregisterApplicationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, DeregisterApplicationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const command = new DeregisterApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeregisterApplicationCommandInput - {@link DeregisterApplicationCommandInput}
 * @returns {@link DeregisterApplicationCommandOutput}
 * @see {@link DeregisterApplicationCommandInput} for command's `input` shape.
 * @see {@link DeregisterApplicationCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 *
 */
export class DeregisterApplicationCommand extends $Command<
  DeregisterApplicationCommandInput,
  DeregisterApplicationCommandOutput,
  SsmSapClientResolvedConfig
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
  constructor(readonly input: DeregisterApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SsmSapClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterApplicationCommandInput, DeregisterApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "DeregisterApplicationCommand";
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
  private serialize(input: DeregisterApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeregisterApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterApplicationCommandOutput> {
    return deserializeAws_restJson1DeregisterApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
