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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteAccessKeyRequest } from "../models/models_0";
import { de_DeleteAccessKeyCommand, se_DeleteAccessKeyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessKeyCommand}.
 */
export interface DeleteAccessKeyCommandInput extends DeleteAccessKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessKeyCommand}.
 */
export interface DeleteAccessKeyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the access key pair associated with the specified IAM user.</p>
 *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the Amazon Web Services access key ID signing the request. This operation works for access keys under
 *             the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root
 *             user credentials even if the Amazon Web Services account has no associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteAccessKeyRequest
 *   UserName: "STRING_VALUE",
 *   AccessKeyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessKeyCommandInput - {@link DeleteAccessKeyCommandInput}
 * @returns {@link DeleteAccessKeyCommandOutput}
 * @see {@link DeleteAccessKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To delete an access key for an IAM user
 * ```javascript
 * // The following command deletes one access key (access key ID and secret access key) assigned to the IAM user named Bob.
 * const input = {
 *   "AccessKeyId": "AKIDPMS9RO4H3FEXAMPLE",
 *   "UserName": "Bob"
 * };
 * const command = new DeleteAccessKeyCommand(input);
 * await client.send(command);
 * // example id: 61a785a7-d30a-415a-ae18-ab9236e56871
 * ```
 *
 */
export class DeleteAccessKeyCommand extends $Command<
  DeleteAccessKeyCommandInput,
  DeleteAccessKeyCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: DeleteAccessKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAccessKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteAccessKeyCommand";
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
  private serialize(input: DeleteAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAccessKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccessKeyCommandOutput> {
    return de_DeleteAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
