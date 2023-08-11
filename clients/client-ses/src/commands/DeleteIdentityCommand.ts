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

import { DeleteIdentityRequest, DeleteIdentityResponse } from "../models/models_0";
import { de_DeleteIdentityCommand, se_DeleteIdentityCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityCommand}.
 */
export interface DeleteIdentityCommandInput extends DeleteIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityCommand}.
 */
export interface DeleteIdentityCommandOutput extends DeleteIdentityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified identity (an email address or a domain) from the list of
 *             verified identities.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DeleteIdentityRequest
 *   Identity: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityCommandInput - {@link DeleteIdentityCommandInput}
 * @returns {@link DeleteIdentityCommandOutput}
 * @see {@link DeleteIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example DeleteIdentity
 * ```javascript
 * // The following example deletes an identity from the list of identities that have been submitted for verification with Amazon SES:
 * const input = {
 *   "Identity": "user@example.com"
 * };
 * const command = new DeleteIdentityCommand(input);
 * await client.send(command);
 * // example id: deleteidentity-1469047858906
 * ```
 *
 */
export class DeleteIdentityCommand extends $Command<
  DeleteIdentityCommandInput,
  DeleteIdentityCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: DeleteIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIdentityCommandInput, DeleteIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteIdentityCommand";
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
  private serialize(input: DeleteIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIdentityCommandOutput> {
    return de_DeleteIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
