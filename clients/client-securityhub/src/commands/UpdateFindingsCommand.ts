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
  UpdateFindingsRequest,
  UpdateFindingsRequestFilterSensitiveLog,
  UpdateFindingsResponse,
  UpdateFindingsResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1UpdateFindingsCommand,
  serializeAws_restJson1UpdateFindingsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface UpdateFindingsCommandInput extends UpdateFindingsRequest {}
export interface UpdateFindingsCommandOutput extends UpdateFindingsResponse, __MetadataBearer {}

/**
 * <p>
 *             <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use
 *             <code>BatchUpdateFindings</code>.</p>
 *          <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated
 *          findings that the filter attributes specify. Any member account that can view the finding
 *          also sees the update to the finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class UpdateFindingsCommand extends $Command<
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput,
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

  constructor(readonly input: UpdateFindingsCommandInput) {
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
  ): Handler<UpdateFindingsCommandInput, UpdateFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFindingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFindingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFindingsCommandOutput> {
    return deserializeAws_restJson1UpdateFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
