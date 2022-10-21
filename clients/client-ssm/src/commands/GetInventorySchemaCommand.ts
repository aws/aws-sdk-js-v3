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
  GetInventorySchemaRequest,
  GetInventorySchemaRequestFilterSensitiveLog,
  GetInventorySchemaResult,
  GetInventorySchemaResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetInventorySchemaCommand,
  serializeAws_json1_1GetInventorySchemaCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface GetInventorySchemaCommandInput extends GetInventorySchemaRequest {}
export interface GetInventorySchemaCommandOutput extends GetInventorySchemaResult, __MetadataBearer {}

/**
 * <p>Return a list of inventory type names for the account, or return a list of attribute names
 *    for a specific Inventory item type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventorySchemaCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventorySchemaCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetInventorySchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInventorySchemaCommandInput} for command's `input` shape.
 * @see {@link GetInventorySchemaCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class GetInventorySchemaCommand extends $Command<
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
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

  constructor(readonly input: GetInventorySchemaCommandInput) {
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
  ): Handler<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInventorySchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetInventorySchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInventorySchemaRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetInventorySchemaResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInventorySchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInventorySchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInventorySchemaCommandOutput> {
    return deserializeAws_json1_1GetInventorySchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
