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
  ListDelegatedAdministratorsRequest,
  ListDelegatedAdministratorsRequestFilterSensitiveLog,
  ListDelegatedAdministratorsResponse,
  ListDelegatedAdministratorsResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1ListDelegatedAdministratorsCommand,
  serializeAws_json1_1ListDelegatedAdministratorsCommand,
} from "../protocols/Aws_json1_1";

export interface ListDelegatedAdministratorsCommandInput extends ListDelegatedAdministratorsRequest {}
export interface ListDelegatedAdministratorsCommandOutput
  extends ListDelegatedAdministratorsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the Amazon Web Services accounts that are designated as delegated administrators in this
 *             organization.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListDelegatedAdministratorsCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListDelegatedAdministratorsCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListDelegatedAdministratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDelegatedAdministratorsCommandInput} for command's `input` shape.
 * @see {@link ListDelegatedAdministratorsCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class ListDelegatedAdministratorsCommand extends $Command<
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: ListDelegatedAdministratorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDelegatedAdministratorsCommandInput, ListDelegatedAdministratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDelegatedAdministratorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListDelegatedAdministratorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDelegatedAdministratorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDelegatedAdministratorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDelegatedAdministratorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDelegatedAdministratorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDelegatedAdministratorsCommandOutput> {
    return deserializeAws_json1_1ListDelegatedAdministratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
