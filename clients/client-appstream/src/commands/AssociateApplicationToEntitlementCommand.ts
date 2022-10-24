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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  AssociateApplicationToEntitlementRequest,
  AssociateApplicationToEntitlementRequestFilterSensitiveLog,
  AssociateApplicationToEntitlementResult,
  AssociateApplicationToEntitlementResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateApplicationToEntitlementCommand,
  serializeAws_json1_1AssociateApplicationToEntitlementCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateApplicationToEntitlementCommandInput extends AssociateApplicationToEntitlementRequest {}
export interface AssociateApplicationToEntitlementCommandOutput
  extends AssociateApplicationToEntitlementResult,
    __MetadataBearer {}

/**
 * <p>Associates an application to entitle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateApplicationToEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateApplicationToEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new AssociateApplicationToEntitlementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateApplicationToEntitlementCommandInput} for command's `input` shape.
 * @see {@link AssociateApplicationToEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class AssociateApplicationToEntitlementCommand extends $Command<
  AssociateApplicationToEntitlementCommandInput,
  AssociateApplicationToEntitlementCommandOutput,
  AppStreamClientResolvedConfig
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

  constructor(readonly input: AssociateApplicationToEntitlementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateApplicationToEntitlementCommandInput, AssociateApplicationToEntitlementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateApplicationToEntitlementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "AssociateApplicationToEntitlementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateApplicationToEntitlementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateApplicationToEntitlementResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateApplicationToEntitlementCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateApplicationToEntitlementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateApplicationToEntitlementCommandOutput> {
    return deserializeAws_json1_1AssociateApplicationToEntitlementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
