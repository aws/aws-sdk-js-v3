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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAccessKeyRequest } from "../models/models_1";
import { de_UpdateAccessKeyCommand, se_UpdateAccessKeyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessKeyCommand}.
 */
export interface UpdateAccessKeyCommandInput extends UpdateAccessKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessKeyCommand}.
 */
export interface UpdateAccessKeyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Changes the status of the specified access key from Active to Inactive, or vice versa.
 *             This operation can be used to disable a user's key as part of a key rotation
 *             workflow.</p>
 *          <p>If the <code>UserName</code> is not specified, the user name is determined implicitly
 *             based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is
 *             used, then <code>UserName</code> is required. If a long-term key is assigned to the
 *             user, then <code>UserName</code> is not required. This operation works for access keys
 *             under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user
 *             credentials even if the Amazon Web Services account has no associated users.</p>
 *          <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a>
 *             in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UpdateAccessKeyRequest
 *   UserName: "STRING_VALUE",
 *   AccessKeyId: "STRING_VALUE", // required
 *   Status: "Active" || "Inactive", // required
 * };
 * const command = new UpdateAccessKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccessKeyCommandInput - {@link UpdateAccessKeyCommandInput}
 * @returns {@link UpdateAccessKeyCommandOutput}
 * @see {@link UpdateAccessKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessKeyCommandOutput} for command's `response` shape.
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
 * @example To activate or deactivate an access key for an IAM user
 * ```javascript
 * // The following command deactivates the specified access key (access key ID and secret access key) for the IAM user named Bob.
 * const input = {
 *   "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
 *   "Status": "Inactive",
 *   "UserName": "Bob"
 * };
 * const command = new UpdateAccessKeyCommand(input);
 * await client.send(command);
 * // example id: 02b556fd-e673-49b7-ab6b-f2f9035967d0
 * ```
 *
 */
export class UpdateAccessKeyCommand extends $Command<
  UpdateAccessKeyCommandInput,
  UpdateAccessKeyCommandOutput,
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
  constructor(readonly input: UpdateAccessKeyCommandInput) {
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
  ): Handler<UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccessKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateAccessKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "UpdateAccessKey",
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
  private serialize(input: UpdateAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAccessKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAccessKeyCommandOutput> {
    return de_UpdateAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
