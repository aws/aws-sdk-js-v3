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

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import {
  IncreaseReplicationFactorRequest,
  IncreaseReplicationFactorRequestFilterSensitiveLog,
  IncreaseReplicationFactorResponse,
  IncreaseReplicationFactorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1IncreaseReplicationFactorCommand,
  serializeAws_json1_1IncreaseReplicationFactorCommand,
} from "../protocols/Aws_json1_1";

export interface IncreaseReplicationFactorCommandInput extends IncreaseReplicationFactorRequest {}
export interface IncreaseReplicationFactorCommandOutput extends IncreaseReplicationFactorResponse, __MetadataBearer {}

/**
 * <p>Adds one or more nodes to a DAX cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, IncreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, IncreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new IncreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 */
export class IncreaseReplicationFactorCommand extends $Command<
  IncreaseReplicationFactorCommandInput,
  IncreaseReplicationFactorCommandOutput,
  DAXClientResolvedConfig
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

  constructor(readonly input: IncreaseReplicationFactorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IncreaseReplicationFactorCommandInput, IncreaseReplicationFactorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, IncreaseReplicationFactorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "IncreaseReplicationFactorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: IncreaseReplicationFactorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: IncreaseReplicationFactorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IncreaseReplicationFactorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1IncreaseReplicationFactorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IncreaseReplicationFactorCommandOutput> {
    return deserializeAws_json1_1IncreaseReplicationFactorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
