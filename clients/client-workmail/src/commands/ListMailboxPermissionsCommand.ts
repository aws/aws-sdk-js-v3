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
  ListMailboxPermissionsRequest,
  ListMailboxPermissionsRequestFilterSensitiveLog,
  ListMailboxPermissionsResponse,
  ListMailboxPermissionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListMailboxPermissionsCommand,
  serializeAws_json1_1ListMailboxPermissionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface ListMailboxPermissionsCommandInput extends ListMailboxPermissionsRequest {}
export interface ListMailboxPermissionsCommandOutput extends ListMailboxPermissionsResponse, __MetadataBearer {}

/**
 * <p>Lists the mailbox permissions associated with a user, group, or resource
 *          mailbox.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class ListMailboxPermissionsCommand extends $Command<
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
  WorkMailClientResolvedConfig
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

  constructor(readonly input: ListMailboxPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMailboxPermissionsCommandInput, ListMailboxPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMailboxPermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListMailboxPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMailboxPermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMailboxPermissionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMailboxPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMailboxPermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMailboxPermissionsCommandOutput> {
    return deserializeAws_json1_1ListMailboxPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
