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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  ArchiveFindingsRequest,
  ArchiveFindingsRequestFilterSensitiveLog,
  ArchiveFindingsResponse,
  ArchiveFindingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ArchiveFindingsCommand,
  serializeAws_restJson1ArchiveFindingsCommand,
} from "../protocols/Aws_restJson1";

export interface ArchiveFindingsCommandInput extends ArchiveFindingsRequest {}
export interface ArchiveFindingsCommandOutput extends ArchiveFindingsResponse, __MetadataBearer {}

/**
 * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p>
 *          <note>
 *             <p>Only the administrator account can archive findings. Member accounts don't have permission to
 *         archive findings from their accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ArchiveFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ArchiveFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ArchiveFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ArchiveFindingsCommandInput} for command's `input` shape.
 * @see {@link ArchiveFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class ArchiveFindingsCommand extends $Command<
  ArchiveFindingsCommandInput,
  ArchiveFindingsCommandOutput,
  GuardDutyClientResolvedConfig
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

  constructor(readonly input: ArchiveFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ArchiveFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "ArchiveFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ArchiveFindingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ArchiveFindingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ArchiveFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ArchiveFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ArchiveFindingsCommandOutput> {
    return deserializeAws_restJson1ArchiveFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
