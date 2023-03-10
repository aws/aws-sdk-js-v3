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
  DeleteInventoryRequest,
  DeleteInventoryRequestFilterSensitiveLog,
  DeleteInventoryResult,
  DeleteInventoryResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteInventoryCommand,
  serializeAws_json1_1DeleteInventoryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * The input for {@link DeleteInventoryCommand}.
 */
export interface DeleteInventoryCommandInput extends DeleteInventoryRequest {}
/**
 * The output of {@link DeleteInventoryCommand}.
 */
export interface DeleteInventoryCommandOutput extends DeleteInventoryResult, __MetadataBearer {}

/**
 * <p>Delete a custom inventory type or the data associated with a custom Inventory type. Deleting
 *    a custom inventory type is also referred to as deleting a custom inventory schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInventoryCommandInput} for command's `input` shape.
 * @see {@link DeleteInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDeleteInventoryParametersException} (client fault)
 *  <p>One or more of the parameters specified for the delete operation isn't valid. Verify all
 *    parameters and try again.</p>
 *
 * @throws {@link InvalidInventoryRequestException} (client fault)
 *  <p>The request isn't valid.</p>
 *
 * @throws {@link InvalidOptionException} (client fault)
 *  <p>The delete inventory option specified isn't valid. Verify the option and try again.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 *
 */
export class DeleteInventoryCommand extends $Command<
  DeleteInventoryCommandInput,
  DeleteInventoryCommandOutput,
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

  constructor(readonly input: DeleteInventoryCommandInput) {
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
  ): Handler<DeleteInventoryCommandInput, DeleteInventoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteInventoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteInventoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInventoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteInventoryResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInventoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteInventoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInventoryCommandOutput> {
    return deserializeAws_json1_1DeleteInventoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
