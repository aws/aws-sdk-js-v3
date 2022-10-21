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
  DisassociateQualificationFromWorkerRequest,
  DisassociateQualificationFromWorkerRequestFilterSensitiveLog,
  DisassociateQualificationFromWorkerResponse,
  DisassociateQualificationFromWorkerResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1DisassociateQualificationFromWorkerCommand,
  serializeAws_json1_1DisassociateQualificationFromWorkerCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociateQualificationFromWorkerCommandInput extends DisassociateQualificationFromWorkerRequest {}
export interface DisassociateQualificationFromWorkerCommandOutput
  extends DisassociateQualificationFromWorkerResponse,
    __MetadataBearer {}

/**
 * <p>
 *             The 	<code>DisassociateQualificationFromWorker</code>
 *             revokes a previously granted Qualification from a user.
 *         </p>
 *         <p>
 *             You can provide a text message explaining why the Qualification was
 *             revoked. The user who had the Qualification can see this message.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DisassociateQualificationFromWorkerCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DisassociateQualificationFromWorkerCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DisassociateQualificationFromWorkerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateQualificationFromWorkerCommandInput} for command's `input` shape.
 * @see {@link DisassociateQualificationFromWorkerCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class DisassociateQualificationFromWorkerCommand extends $Command<
  DisassociateQualificationFromWorkerCommandInput,
  DisassociateQualificationFromWorkerCommandOutput,
  MTurkClientResolvedConfig
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

  constructor(readonly input: DisassociateQualificationFromWorkerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateQualificationFromWorkerCommandInput, DisassociateQualificationFromWorkerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateQualificationFromWorkerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "DisassociateQualificationFromWorkerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateQualificationFromWorkerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateQualificationFromWorkerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateQualificationFromWorkerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateQualificationFromWorkerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateQualificationFromWorkerCommandOutput> {
    return deserializeAws_json1_1DisassociateQualificationFromWorkerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
