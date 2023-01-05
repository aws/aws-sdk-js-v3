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
  CertificateMessage,
  CertificateMessageFilterSensitiveLog,
  DescribeCertificatesMessage,
  DescribeCertificatesMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeCertificatesCommand,
  serializeAws_queryDescribeCertificatesCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DescribeCertificatesCommandInput extends DescribeCertificatesMessage {}
export interface DescribeCertificatesCommandOutput extends CertificateMessage, __MetadataBearer {}

/**
 * <p>Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
 *             instance</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
 *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeCertificatesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeCertificatesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DescribeCertificatesCommand extends $Command<
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: DescribeCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCertificatesMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CertificateMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCertificatesCommandOutput> {
    return deserializeAws_queryDescribeCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
