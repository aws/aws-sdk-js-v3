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

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import {
  ListPermissionsRequest,
  ListPermissionsRequestFilterSensitiveLog,
  ListPermissionsResponse,
  ListPermissionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPermissionsCommand,
  serializeAws_restJson1ListPermissionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListPermissionsCommandInput extends ListPermissionsRequest {}
export interface ListPermissionsCommandOutput extends ListPermissionsResponse, __MetadataBearer {}

/**
 * <p>Lists the users and groups who have the Grafana <code>Admin</code> and
 *             <code>Editor</code> roles in this workspace. If you use this
 *             operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns
 *             the roles of all users
 *             and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles
 *             for that user or group are returned. If you do this, you can specify only one <code>userId</code> or
 *             one <code>groupId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, ListPermissionsCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, ListPermissionsCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const command = new ListPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionsCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 */
export class ListPermissionsCommand extends $Command<
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
  GrafanaClientResolvedConfig
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

  constructor(readonly input: ListPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GrafanaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPermissionsCommandInput, ListPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "ListPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPermissionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPermissionsCommandOutput> {
    return deserializeAws_restJson1ListPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
