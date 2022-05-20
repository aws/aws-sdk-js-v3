// smithy-typescript generated code
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
  StartStudioSSOConfigurationRepairRequest,
  StartStudioSSOConfigurationRepairResponse,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand,
  serializeAws_restJson1StartStudioSSOConfigurationRepairCommand,
} from "../protocols/Aws_restJson1";

export interface StartStudioSSOConfigurationRepairCommandInput extends StartStudioSSOConfigurationRepairRequest {}
export interface StartStudioSSOConfigurationRepairCommandOutput
  extends StartStudioSSOConfigurationRepairResponse,
    __MetadataBearer {}

/**
 * <p>Repairs the Amazon Web Services SSO configuration for a given studio.</p>
 *         <p>If the studio has a valid Amazon Web Services SSO configuration currently associated with
 *             it, this operation will fail with a validation error.</p>
 *         <p>If the studio does not have a valid Amazon Web Services SSO configuration currently
 *             associated with it, then a new Amazon Web Services SSO application is created for the studio
 *             and the studio is changed to the READY state.</p>
 *         <p>After the Amazon Web Services SSO application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, StartStudioSSOConfigurationRepairCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, StartStudioSSOConfigurationRepairCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new StartStudioSSOConfigurationRepairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStudioSSOConfigurationRepairCommandInput} for command's `input` shape.
 * @see {@link StartStudioSSOConfigurationRepairCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class StartStudioSSOConfigurationRepairCommand extends $Command<
  StartStudioSSOConfigurationRepairCommandInput,
  StartStudioSSOConfigurationRepairCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartStudioSSOConfigurationRepairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartStudioSSOConfigurationRepairCommandInput, StartStudioSSOConfigurationRepairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "StartStudioSSOConfigurationRepairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartStudioSSOConfigurationRepairRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartStudioSSOConfigurationRepairResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartStudioSSOConfigurationRepairCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartStudioSSOConfigurationRepairCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartStudioSSOConfigurationRepairCommandOutput> {
    return deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
