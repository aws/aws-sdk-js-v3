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
  DescribeHsmClientCertificatesMessage,
  DescribeHsmClientCertificatesMessageFilterSensitiveLog,
  HsmClientCertificateMessage,
  HsmClientCertificateMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeHsmClientCertificatesCommand,
  serializeAws_queryDescribeHsmClientCertificatesCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DescribeHsmClientCertificatesCommandInput extends DescribeHsmClientCertificatesMessage {}
export interface DescribeHsmClientCertificatesCommandOutput extends HsmClientCertificateMessage, __MetadataBearer {}

/**
 * <p>Returns information about the specified HSM client certificate. If no certificate
 *             ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM client certificates that match any combination of the specified keys and values.
 *             For example, if you have <code>owner</code> and <code>environment</code> for tag keys,
 *             and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates
 *             that have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, HSM client certificates
 *             are returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmClientCertificatesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeHsmClientCertificatesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeHsmClientCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHsmClientCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmClientCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeHsmClientCertificatesCommand extends $Command<
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: DescribeHsmClientCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHsmClientCertificatesCommandInput, DescribeHsmClientCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHsmClientCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeHsmClientCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHsmClientCertificatesMessageFilterSensitiveLog,
      outputFilterSensitiveLog: HsmClientCertificateMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHsmClientCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeHsmClientCertificatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHsmClientCertificatesCommandOutput> {
    return deserializeAws_queryDescribeHsmClientCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
