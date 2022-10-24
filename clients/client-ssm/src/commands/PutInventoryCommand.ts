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
  PutInventoryRequest,
  PutInventoryRequestFilterSensitiveLog,
  PutInventoryResult,
  PutInventoryResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PutInventoryCommand,
  serializeAws_json1_1PutInventoryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface PutInventoryCommandInput extends PutInventoryRequest {}
export interface PutInventoryCommandOutput extends PutInventoryResult, __MetadataBearer {}

/**
 * <p>Bulk update custom inventory items on one or more managed nodes. The request adds an
 *    inventory item, if it doesn't already exist, or updates an inventory item, if it does
 *    exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new PutInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInventoryCommandInput} for command's `input` shape.
 * @see {@link PutInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class PutInventoryCommand extends $Command<
  PutInventoryCommandInput,
  PutInventoryCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: PutInventoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInventoryCommandInput, PutInventoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutInventoryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "PutInventoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInventoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutInventoryResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutInventoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutInventoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutInventoryCommandOutput> {
    return deserializeAws_json1_1PutInventoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
