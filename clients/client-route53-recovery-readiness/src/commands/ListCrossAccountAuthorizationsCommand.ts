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
  ListCrossAccountAuthorizationsRequest,
  ListCrossAccountAuthorizationsRequestFilterSensitiveLog,
  ListCrossAccountAuthorizationsResponse,
  ListCrossAccountAuthorizationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListCrossAccountAuthorizationsCommand,
  serializeAws_restJson1ListCrossAccountAuthorizationsCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

export interface ListCrossAccountAuthorizationsCommandInput extends ListCrossAccountAuthorizationsRequest {}
export interface ListCrossAccountAuthorizationsCommandOutput
  extends ListCrossAccountAuthorizationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the cross-account readiness authorizations that are in place for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListCrossAccountAuthorizationsCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, ListCrossAccountAuthorizationsCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new ListCrossAccountAuthorizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCrossAccountAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link ListCrossAccountAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 */
export class ListCrossAccountAuthorizationsCommand extends $Command<
  ListCrossAccountAuthorizationsCommandInput,
  ListCrossAccountAuthorizationsCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
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

  constructor(readonly input: ListCrossAccountAuthorizationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCrossAccountAuthorizationsCommandInput, ListCrossAccountAuthorizationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCrossAccountAuthorizationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "ListCrossAccountAuthorizationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCrossAccountAuthorizationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCrossAccountAuthorizationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListCrossAccountAuthorizationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCrossAccountAuthorizationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCrossAccountAuthorizationsCommandOutput> {
    return deserializeAws_restJson1ListCrossAccountAuthorizationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
