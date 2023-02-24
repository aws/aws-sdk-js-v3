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

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import {
  DisassociateS3ResourcesRequest,
  DisassociateS3ResourcesRequestFilterSensitiveLog,
  DisassociateS3ResourcesResult,
  DisassociateS3ResourcesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateS3ResourcesCommand,
  serializeAws_json1_1DisassociateS3ResourcesCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociateS3ResourcesCommandInput extends DisassociateS3ResourcesRequest {}
export interface DisassociateS3ResourcesCommandOutput extends DisassociateS3ResourcesResult, __MetadataBearer {}

/**
 * <p>(Discontinued) Removes specified S3 resources from being monitored by Amazon Macie
 *       Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from
 *       Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is
 *       specified, the action removes specified S3 resources from Macie Classic for the specified
 *       member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, DisassociateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, DisassociateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new DisassociateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link DisassociateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for MacieClient's `config` shape.
 *
 */
export class DisassociateS3ResourcesCommand extends $Command<
  DisassociateS3ResourcesCommandInput,
  DisassociateS3ResourcesCommandOutput,
  MacieClientResolvedConfig
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

  constructor(readonly input: DisassociateS3ResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateS3ResourcesCommandInput, DisassociateS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateS3ResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "DisassociateS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateS3ResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateS3ResourcesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateS3ResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateS3ResourcesCommandOutput> {
    return deserializeAws_json1_1DisassociateS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
