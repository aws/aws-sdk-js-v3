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
  CreateEntitlementRequest,
  CreateEntitlementRequestFilterSensitiveLog,
  CreateEntitlementResult,
  CreateEntitlementResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateEntitlementCommand,
  serializeAws_json1_1CreateEntitlementCommand,
} from "../protocols/Aws_json1_1";

export interface CreateEntitlementCommandInput extends CreateEntitlementRequest {}
export interface CreateEntitlementCommandOutput extends CreateEntitlementResult, __MetadataBearer {}

/**
 * <p>Creates a new entitlement. Entitlements control access to specific applications within
 *             a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user
 *             identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all
 *             applications in a stack. Entitlements don't apply to the desktop stream view
 *             application, or to applications managed by a dynamic app provider using the Dynamic
 *             Application Framework.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateEntitlementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEntitlementCommandInput} for command's `input` shape.
 * @see {@link CreateEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class CreateEntitlementCommand extends $Command<
  CreateEntitlementCommandInput,
  CreateEntitlementCommandOutput,
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

  constructor(readonly input: CreateEntitlementCommandInput) {
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
  ): Handler<CreateEntitlementCommandInput, CreateEntitlementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEntitlementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateEntitlementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEntitlementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEntitlementResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEntitlementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEntitlementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEntitlementCommandOutput> {
    return deserializeAws_json1_1CreateEntitlementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
