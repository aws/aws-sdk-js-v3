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
} from "@smithy/types";

import { DeleteContentRequest, DeleteContentResponse } from "../models/models_0";
import { de_DeleteContentCommand, se_DeleteContentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteContentCommand}.
 */
export interface DeleteContentCommandInput extends DeleteContentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContentCommand}.
 */
export interface DeleteContentCommandOutput extends DeleteContentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, DeleteContentCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, DeleteContentCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // DeleteContentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContentCommandInput - {@link DeleteContentCommandInput}
 * @returns {@link DeleteContentCommandOutput}
 * @see {@link DeleteContentCommandInput} for command's `input` shape.
 * @see {@link DeleteContentCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 */
export class DeleteContentCommand extends $Command<
  DeleteContentCommandInput,
  DeleteContentCommandOutput,
  WisdomClientResolvedConfig
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
  constructor(readonly input: DeleteContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteContentCommandInput, DeleteContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteContentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "DeleteContentCommand";
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
  private serialize(input: DeleteContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContentCommandOutput> {
    return de_DeleteContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
