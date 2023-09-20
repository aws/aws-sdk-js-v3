// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeletePipeRequest, DeletePipeResponse } from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import { de_DeletePipeCommand, se_DeletePipeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePipeCommand}.
 */
export interface DeletePipeCommandInput extends DeletePipeRequest {}
/**
 * @public
 *
 * The output of {@link DeletePipeCommand}.
 */
export interface DeletePipeCommandOutput extends DeletePipeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, DeletePipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, DeletePipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * const client = new PipesClient(config);
 * const input = { // DeletePipeRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeletePipeCommand(input);
 * const response = await client.send(command);
 * // { // DeletePipeResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   DesiredState: "STRING_VALUE",
 * //   CurrentState: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeletePipeCommandInput - {@link DeletePipeCommandInput}
 * @returns {@link DeletePipeCommandOutput}
 * @see {@link DeletePipeCommandInput} for command's `input` shape.
 * @see {@link DeletePipeCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An action you attempted resulted in an exception.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An action was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that an error has occurred while performing a validate operation.</p>
 *
 * @throws {@link PipesServiceException}
 * <p>Base exception class for all service exceptions from Pipes service.</p>
 *
 */
export class DeletePipeCommand extends $Command<
  DeletePipeCommandInput,
  DeletePipeCommandOutput,
  PipesClientResolvedConfig
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
  constructor(readonly input: DeletePipeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PipesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePipeCommandInput, DeletePipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeletePipeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PipesClient";
    const commandName = "DeletePipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pipes",
        operation: "DeletePipe",
      },
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
  private serialize(input: DeletePipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeletePipeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePipeCommandOutput> {
    return de_DeletePipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
