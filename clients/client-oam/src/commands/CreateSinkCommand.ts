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
  CreateSinkInput,
  CreateSinkInputFilterSensitiveLog,
  CreateSinkOutput,
  CreateSinkOutputFilterSensitiveLog,
} from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import {
  deserializeAws_restJson1CreateSinkCommand,
  serializeAws_restJson1CreateSinkCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSinkCommandInput extends CreateSinkInput {}
export interface CreateSinkCommandOutput extends CreateSinkOutput, __MetadataBearer {}

/**
 * <p>Use this to create a <i>sink</i> in the current account, so that it can be
 *             used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that
 *             represents an attachment point in a monitoring account. Source accounts can link to the sink
 *             to send observability data.</p>
 *         <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it.
 *             For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p>
 *         <p>Each account can contain one sink. If you delete a sink, you can then create a new one in that account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, CreateSinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, CreateSinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const command = new CreateSinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSinkCommandInput} for command's `input` shape.
 * @see {@link CreateSinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 */
export class CreateSinkCommand extends $Command<
  CreateSinkCommandInput,
  CreateSinkCommandOutput,
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

  constructor(readonly input: CreateSinkCommandInput) {
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
  ): Handler<CreateSinkCommandInput, CreateSinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSinkCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "CreateSinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSinkInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSinkOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSinkCommandOutput> {
    return deserializeAws_restJson1CreateSinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
