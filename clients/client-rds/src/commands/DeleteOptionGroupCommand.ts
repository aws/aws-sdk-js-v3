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

import { DeleteOptionGroupMessage } from "../models/models_0";
import {
  deserializeAws_queryDeleteOptionGroupCommand,
  serializeAws_queryDeleteOptionGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DeleteOptionGroupCommand}.
 */
export interface DeleteOptionGroupCommandInput extends DeleteOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteOptionGroupCommand}.
 */
export interface DeleteOptionGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes an existing option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteOptionGroupMessage
 *   OptionGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteOptionGroupCommandInput - {@link DeleteOptionGroupCommandInput}
 * @returns {@link DeleteOptionGroupCommandOutput}
 * @see {@link DeleteOptionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidOptionGroupStateFault} (client fault)
 *  <p>The option group isn't in the <i>available</i> state.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 *
 * @example To delete an option group.
 * ```javascript
 * // This example deletes the specified option group.
 * const input = {
 *   "OptionGroupName": "mydboptiongroup"
 * };
 * const command = new DeleteOptionGroupCommand(input);
 * await client.send(command);
 * // example id: delete-db-option-group-578be2be-3095-431a-9ea4-9a3c3b0daef4
 * ```
 *
 */
export class DeleteOptionGroupCommand extends $Command<
  DeleteOptionGroupCommandInput,
  DeleteOptionGroupCommandOutput,
  RDSClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DeleteOptionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteOptionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteOptionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteOptionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteOptionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOptionGroupCommandOutput> {
    return deserializeAws_queryDeleteOptionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
