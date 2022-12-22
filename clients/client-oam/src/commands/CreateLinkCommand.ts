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
  CreateLinkInput,
  CreateLinkInputFilterSensitiveLog,
  CreateLinkOutput,
  CreateLinkOutputFilterSensitiveLog,
} from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import {
  deserializeAws_restJson1CreateLinkCommand,
  serializeAws_restJson1CreateLinkCommand,
} from "../protocols/Aws_restJson1";

export interface CreateLinkCommandInput extends CreateLinkInput {}
export interface CreateLinkCommandOutput extends CreateLinkOutput, __MetadataBearer {}

/**
 * <p>Creates a link between a source account and a sink that you have created in a monitoring account.</p>
 *         <p>Before you create a link, you must create a sink in the monitoring account and create a
 *             sink policy in that account. The sink policy must permit the source account to link to it. You
 *             can grant permission to source accounts by granting permission to an entire organization or to
 *             individual accounts.</p>
 *         <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and
 *             <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p>
 *         <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p>
 *         <p>Each source account can be linked to as many as five monitoring accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, CreateLinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, CreateLinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const command = new CreateLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLinkCommandInput} for command's `input` shape.
 * @see {@link CreateLinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 */
export class CreateLinkCommand extends $Command<
  CreateLinkCommandInput,
  CreateLinkCommandOutput,
  OAMClientResolvedConfig
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

  constructor(readonly input: CreateLinkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLinkCommandInput, CreateLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLinkCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "CreateLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLinkInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLinkOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLinkCommandOutput> {
    return deserializeAws_restJson1CreateLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
