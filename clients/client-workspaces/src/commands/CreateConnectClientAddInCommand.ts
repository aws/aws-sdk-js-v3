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
  CreateConnectClientAddInRequest,
  CreateConnectClientAddInRequestFilterSensitiveLog,
  CreateConnectClientAddInResult,
  CreateConnectClientAddInResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateConnectClientAddInCommand,
  serializeAws_json1_1CreateConnectClientAddInCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface CreateConnectClientAddInCommandInput extends CreateConnectClientAddInRequest {}
export interface CreateConnectClientAddInCommandOutput extends CreateConnectClientAddInResult, __MetadataBearer {}

/**
 * <p>Creates a client-add-in for Amazon Connect within a directory. You can create only
 *          one Amazon Connect client add-in within a directory.</p>
 *          <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateConnectClientAddInCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateConnectClientAddInCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateConnectClientAddInCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectClientAddInCommandInput} for command's `input` shape.
 * @see {@link CreateConnectClientAddInCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class CreateConnectClientAddInCommand extends $Command<
  CreateConnectClientAddInCommandInput,
  CreateConnectClientAddInCommandOutput,
  WorkSpacesClientResolvedConfig
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

  constructor(readonly input: CreateConnectClientAddInCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectClientAddInCommandInput, CreateConnectClientAddInCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectClientAddInCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateConnectClientAddInCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConnectClientAddInRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectClientAddInResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConnectClientAddInCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateConnectClientAddInCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectClientAddInCommandOutput> {
    return deserializeAws_json1_1CreateConnectClientAddInCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
