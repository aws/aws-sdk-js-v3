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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  ListGroupCertificateAuthoritiesRequest,
  ListGroupCertificateAuthoritiesRequestFilterSensitiveLog,
  ListGroupCertificateAuthoritiesResponse,
  ListGroupCertificateAuthoritiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand,
  serializeAws_restJson1ListGroupCertificateAuthoritiesCommand,
} from "../protocols/Aws_restJson1";

export interface ListGroupCertificateAuthoritiesCommandInput extends ListGroupCertificateAuthoritiesRequest {}
export interface ListGroupCertificateAuthoritiesCommandOutput
  extends ListGroupCertificateAuthoritiesResponse,
    __MetadataBearer {}

/**
 * Retrieves the current CAs for a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListGroupCertificateAuthoritiesCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListGroupCertificateAuthoritiesCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListGroupCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListGroupCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class ListGroupCertificateAuthoritiesCommand extends $Command<
  ListGroupCertificateAuthoritiesCommandInput,
  ListGroupCertificateAuthoritiesCommandOutput,
  GreengrassClientResolvedConfig
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

  constructor(readonly input: ListGroupCertificateAuthoritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupCertificateAuthoritiesCommandInput, ListGroupCertificateAuthoritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGroupCertificateAuthoritiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListGroupCertificateAuthoritiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGroupCertificateAuthoritiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListGroupCertificateAuthoritiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListGroupCertificateAuthoritiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGroupCertificateAuthoritiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListGroupCertificateAuthoritiesCommandOutput> {
    return deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
