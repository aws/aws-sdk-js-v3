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

import { DeleteActivationRequest, DeleteActivationResult } from "../models/models_0";
import { de_DeleteActivationCommand, se_DeleteActivationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteActivationCommand}.
 */
export interface DeleteActivationCommandInput extends DeleteActivationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteActivationCommand}.
 */
export interface DeleteActivationCommandOutput extends DeleteActivationResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an activation. You aren't required to delete an activation. If you delete an
 *    activation, you can no longer use it to register additional managed nodes. Deleting an activation
 *    doesn't de-register managed nodes. You must manually de-register managed nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteActivationRequest
 *   ActivationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteActivationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteActivationCommandInput - {@link DeleteActivationCommandInput}
 * @returns {@link DeleteActivationCommandOutput}
 * @see {@link DeleteActivationCommandInput} for command's `input` shape.
 * @see {@link DeleteActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidActivation} (client fault)
 *  <p>The activation isn't valid. The activation might have been deleted, or the ActivationId and
 *    the ActivationCode don't match.</p>
 *
 * @throws {@link InvalidActivationId} (client fault)
 *  <p>The activation ID isn't valid. Verify the you entered the correct ActivationId or
 *    ActivationCode and try again.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DeleteActivationCommand extends $Command<
  DeleteActivationCommandInput,
  DeleteActivationCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteActivationCommandInput) {
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
  ): Handler<DeleteActivationCommandInput, DeleteActivationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteActivationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteActivationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DeleteActivation",
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
  private serialize(input: DeleteActivationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteActivationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteActivationCommandOutput> {
    return de_DeleteActivationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
