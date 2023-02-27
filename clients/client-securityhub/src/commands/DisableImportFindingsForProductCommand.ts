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
  DisableImportFindingsForProductRequest,
  DisableImportFindingsForProductRequestFilterSensitiveLog,
  DisableImportFindingsForProductResponse,
  DisableImportFindingsForProductResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1DisableImportFindingsForProductCommand,
  serializeAws_restJson1DisableImportFindingsForProductCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * The input for {@link DisableImportFindingsForProductCommand}.
 */
export interface DisableImportFindingsForProductCommandInput extends DisableImportFindingsForProductRequest {}
/**
 * The output of {@link DisableImportFindingsForProductCommand}.
 */
export interface DisableImportFindingsForProductCommandOutput
  extends DisableImportFindingsForProductResponse,
    __MetadataBearer {}

/**
 * <p>Disables the integration of the specified product with Security Hub. After the integration is
 *          disabled, findings from that product are no longer sent to Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link DisableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class DisableImportFindingsForProductCommand extends $Command<
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput,
  SecurityHubClientResolvedConfig
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

  constructor(readonly input: DisableImportFindingsForProductCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableImportFindingsForProductCommandInput, DisableImportFindingsForProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableImportFindingsForProductCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DisableImportFindingsForProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableImportFindingsForProductRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableImportFindingsForProductResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableImportFindingsForProductCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisableImportFindingsForProductCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableImportFindingsForProductCommandOutput> {
    return deserializeAws_restJson1DisableImportFindingsForProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
