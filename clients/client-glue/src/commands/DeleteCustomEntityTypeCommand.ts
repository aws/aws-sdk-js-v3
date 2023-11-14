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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteCustomEntityTypeRequest, DeleteCustomEntityTypeResponse } from "../models/models_1";
import { de_DeleteCustomEntityTypeCommand, se_DeleteCustomEntityTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomEntityTypeCommand}.
 */
export interface DeleteCustomEntityTypeCommandInput extends DeleteCustomEntityTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomEntityTypeCommand}.
 */
export interface DeleteCustomEntityTypeCommandOutput extends DeleteCustomEntityTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a custom pattern by specifying its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteCustomEntityTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteCustomEntityTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DeleteCustomEntityTypeRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomEntityTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCustomEntityTypeResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCustomEntityTypeCommandInput - {@link DeleteCustomEntityTypeCommandInput}
 * @returns {@link DeleteCustomEntityTypeCommandOutput}
 * @see {@link DeleteCustomEntityTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class DeleteCustomEntityTypeCommand extends $Command<
  DeleteCustomEntityTypeCommandInput,
  DeleteCustomEntityTypeCommandOutput,
  GlueClientResolvedConfig
> {
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
  constructor(readonly input: DeleteCustomEntityTypeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomEntityTypeCommandInput, DeleteCustomEntityTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomEntityTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteCustomEntityTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "DeleteCustomEntityType",
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
  private serialize(input: DeleteCustomEntityTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCustomEntityTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomEntityTypeCommandOutput> {
    return de_DeleteCustomEntityTypeCommand(output, context);
  }
}
