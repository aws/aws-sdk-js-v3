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

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import {
  ListCertificatesRequest,
  ListCertificatesRequestFilterSensitiveLog,
  ListCertificatesResponse,
  ListCertificatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCertificatesCommand,
  serializeAws_json1_1ListCertificatesCommand,
} from "../protocols/Aws_json1_1";

export interface ListCertificatesCommandInput extends ListCertificatesRequest {}
export interface ListCertificatesCommandOutput extends ListCertificatesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of certificate ARNs and domain names. You can request that only
 *       certificates that match a specific status be listed. You can also filter by specific
 *       attributes of the certificate. Default filtering returns only <code>RSA_2048</code>
 *       certificates. For more information, see <a>Filters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListCertificatesCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListCertificatesCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 */
export class ListCertificatesCommand extends $Command<
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
  ACMClientResolvedConfig
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

  constructor(readonly input: ListCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCertificatesCommandInput, ListCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ListCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCertificatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCertificatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCertificatesCommandOutput> {
    return deserializeAws_json1_1ListCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
