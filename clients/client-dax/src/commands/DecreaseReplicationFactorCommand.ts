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
  DecreaseReplicationFactorRequest,
  DecreaseReplicationFactorRequestFilterSensitiveLog,
  DecreaseReplicationFactorResponse,
  DecreaseReplicationFactorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DecreaseReplicationFactorCommand,
  serializeAws_json1_1DecreaseReplicationFactorCommand,
} from "../protocols/Aws_json1_1";

export interface DecreaseReplicationFactorCommandInput extends DecreaseReplicationFactorRequest {}
export interface DecreaseReplicationFactorCommandOutput extends DecreaseReplicationFactorResponse, __MetadataBearer {}

/**
 * <p>Removes one or more nodes from a DAX cluster.</p>
 *         <note>
 *             <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DecreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DecreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DecreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link DecreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 */
export class DecreaseReplicationFactorCommand extends $Command<
  DecreaseReplicationFactorCommandInput,
  DecreaseReplicationFactorCommandOutput,
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

  constructor(readonly input: DecreaseReplicationFactorCommandInput) {
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
  ): Handler<DecreaseReplicationFactorCommandInput, DecreaseReplicationFactorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DecreaseReplicationFactorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "DecreaseReplicationFactorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecreaseReplicationFactorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DecreaseReplicationFactorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DecreaseReplicationFactorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DecreaseReplicationFactorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DecreaseReplicationFactorCommandOutput> {
    return deserializeAws_json1_1DecreaseReplicationFactorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
