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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  CheckSchemaVersionValidityInput,
  CheckSchemaVersionValidityInputFilterSensitiveLog,
  CheckSchemaVersionValidityResponse,
  CheckSchemaVersionValidityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CheckSchemaVersionValidityCommand,
  serializeAws_json1_1CheckSchemaVersionValidityCommand,
} from "../protocols/Aws_json1_1";

export interface CheckSchemaVersionValidityCommandInput extends CheckSchemaVersionValidityInput {}
export interface CheckSchemaVersionValidityCommandOutput extends CheckSchemaVersionValidityResponse, __MetadataBearer {}

/**
 * <p>Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CheckSchemaVersionValidityCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CheckSchemaVersionValidityCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CheckSchemaVersionValidityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckSchemaVersionValidityCommandInput} for command's `input` shape.
 * @see {@link CheckSchemaVersionValidityCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class CheckSchemaVersionValidityCommand extends $Command<
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: CheckSchemaVersionValidityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckSchemaVersionValidityCommandInput, CheckSchemaVersionValidityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckSchemaVersionValidityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CheckSchemaVersionValidityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckSchemaVersionValidityInputFilterSensitiveLog,
      outputFilterSensitiveLog: CheckSchemaVersionValidityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckSchemaVersionValidityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckSchemaVersionValidityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CheckSchemaVersionValidityCommandOutput> {
    return deserializeAws_json1_1CheckSchemaVersionValidityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
