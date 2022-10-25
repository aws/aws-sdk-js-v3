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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import {
  ListOrganizationAdminAccountsRequest,
  ListOrganizationAdminAccountsRequestFilterSensitiveLog,
  ListOrganizationAdminAccountsResponse,
  ListOrganizationAdminAccountsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListOrganizationAdminAccountsCommand,
  serializeAws_restJson1ListOrganizationAdminAccountsCommand,
} from "../protocols/Aws_restJson1";

export interface ListOrganizationAdminAccountsCommandInput extends ListOrganizationAdminAccountsRequest {}
export interface ListOrganizationAdminAccountsCommandOutput
  extends ListOrganizationAdminAccountsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the Detective administrator account for an
 *          organization. Can only be called by the organization management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListOrganizationAdminAccountsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListOrganizationAdminAccountsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 */
export class ListOrganizationAdminAccountsCommand extends $Command<
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
  DetectiveClientResolvedConfig
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

  constructor(readonly input: ListOrganizationAdminAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOrganizationAdminAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "ListOrganizationAdminAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOrganizationAdminAccountsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOrganizationAdminAccountsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOrganizationAdminAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOrganizationAdminAccountsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOrganizationAdminAccountsCommandOutput> {
    return deserializeAws_restJson1ListOrganizationAdminAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
