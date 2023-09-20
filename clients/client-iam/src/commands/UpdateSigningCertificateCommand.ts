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
import { UpdateSigningCertificateRequest } from "../models/models_1";
import { de_UpdateSigningCertificateCommand, se_UpdateSigningCertificateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSigningCertificateCommand}.
 */
export interface UpdateSigningCertificateCommandInput extends UpdateSigningCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSigningCertificateCommand}.
 */
export interface UpdateSigningCertificateCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Changes the status of the specified user signing certificate from active to disabled,
 *             or vice versa. This operation can be used to disable an IAM user's signing
 *             certificate as part of a certificate rotation work flow.</p>
 *          <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the Amazon Web Services access key ID used to sign the request. This operation
 *             works for access keys under the Amazon Web Services account. Consequently, you can use this operation
 *             to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated
 *             users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UpdateSigningCertificateRequest
 *   UserName: "STRING_VALUE",
 *   CertificateId: "STRING_VALUE", // required
 *   Status: "Active" || "Inactive", // required
 * };
 * const command = new UpdateSigningCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSigningCertificateCommandInput - {@link UpdateSigningCertificateCommandInput}
 * @returns {@link UpdateSigningCertificateCommandOutput}
 * @see {@link UpdateSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateSigningCertificateCommandOutput} for command's `response` shape.
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
 * @example To change the active status of a signing certificate for an IAM user
 * ```javascript
 * // The following command changes the status of a signing certificate for a user named Bob to Inactive.
 * const input = {
 *   "CertificateId": "TA7SMP42TDN5Z26OBPJE7EXAMPLE",
 *   "Status": "Inactive",
 *   "UserName": "Bob"
 * };
 * const command = new UpdateSigningCertificateCommand(input);
 * await client.send(command);
 * // example id: 829aee7b-efc5-4b3b-84a5-7f899b38018d
 * ```
 *
 */
export class UpdateSigningCertificateCommand extends $Command<
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
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
  constructor(readonly input: UpdateSigningCertificateCommandInput) {
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
  ): Handler<UpdateSigningCertificateCommandInput, UpdateSigningCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSigningCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateSigningCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "UpdateSigningCertificate",
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
  private serialize(input: UpdateSigningCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSigningCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSigningCertificateCommandOutput> {
    return de_UpdateSigningCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
