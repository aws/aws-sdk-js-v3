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
  StartConnectionRequest,
  StartConnectionRequestFilterSensitiveLog,
  StartConnectionResponse,
  StartConnectionResponseFilterSensitiveLog,
} from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  deserializeAws_restJson1StartConnectionCommand,
  serializeAws_restJson1StartConnectionCommand,
} from "../protocols/Aws_restJson1";

export interface StartConnectionCommandInput extends StartConnectionRequest {}
export interface StartConnectionCommandOutput extends StartConnectionResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>
 *       Amazon Web Services uses this action to install Outpost servers.</p>
 *          </note>
 *          <p>
 *       Starts the connection required for Outpost server installation.
 *     </p>
 *          <p>
 *       Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For
 *       more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html">
 *       Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html">
 *       Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, StartConnectionCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, StartConnectionCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new StartConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartConnectionCommandInput} for command's `input` shape.
 * @see {@link StartConnectionCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 */
export class StartConnectionCommand extends $Command<
  StartConnectionCommandInput,
  StartConnectionCommandOutput,
  OutpostsClientResolvedConfig
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

  constructor(readonly input: StartConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartConnectionCommandInput, StartConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "StartConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartConnectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartConnectionCommandOutput> {
    return deserializeAws_restJson1StartConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
