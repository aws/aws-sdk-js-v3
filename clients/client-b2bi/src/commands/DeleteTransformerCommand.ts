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

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { DeleteTransformerRequest } from "../models/models_0";
import { de_DeleteTransformerCommand, se_DeleteTransformerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransformerCommand}.
 */
export interface DeleteTransformerCommandInput extends DeleteTransformerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransformerCommand}.
 */
export interface DeleteTransformerCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified transformer. Transformers describe how to process the incoming EDI (electronic data interchange) documents, and extract the necessary information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, DeleteTransformerCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, DeleteTransformerCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // DeleteTransformerRequest
 *   transformerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTransformerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTransformerCommandInput - {@link DeleteTransformerCommandInput}
 * @returns {@link DeleteTransformerCommandOutput}
 * @see {@link DeleteTransformerCommandInput} for command's `input` shape.
 * @see {@link DeleteTransformerCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @example Sample DeleteTransformer call
 * ```javascript
 * //
 * const input = {
 *   "transformerId": "tr-974c129999f84d8c9"
 * };
 * const command = new DeleteTransformerCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class DeleteTransformerCommand extends $Command<
  DeleteTransformerCommandInput,
  DeleteTransformerCommandOutput,
  B2biClientResolvedConfig
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
  constructor(readonly input: DeleteTransformerCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTransformerCommandInput, DeleteTransformerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTransformerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "DeleteTransformerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "DeleteTransformer",
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
  private serialize(input: DeleteTransformerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTransformerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTransformerCommandOutput> {
    return de_DeleteTransformerCommand(output, context);
  }
}
