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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListSecurityProfilePermissionsRequest,
  ListSecurityProfilePermissionsRequestFilterSensitiveLog,
  ListSecurityProfilePermissionsResponse,
  ListSecurityProfilePermissionsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListSecurityProfilePermissionsCommand,
  serializeAws_restJson1ListSecurityProfilePermissionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListSecurityProfilePermissionsCommandInput extends ListSecurityProfilePermissionsRequest {}
export interface ListSecurityProfilePermissionsCommandOutput
  extends ListSecurityProfilePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Lists the permissions granted to a security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityProfilePermissionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityProfilePermissionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListSecurityProfilePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityProfilePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilePermissionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListSecurityProfilePermissionsCommand extends $Command<
  ListSecurityProfilePermissionsCommandInput,
  ListSecurityProfilePermissionsCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: ListSecurityProfilePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecurityProfilePermissionsCommandInput, ListSecurityProfilePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSecurityProfilePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListSecurityProfilePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecurityProfilePermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSecurityProfilePermissionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSecurityProfilePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSecurityProfilePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSecurityProfilePermissionsCommandOutput> {
    return deserializeAws_restJson1ListSecurityProfilePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
