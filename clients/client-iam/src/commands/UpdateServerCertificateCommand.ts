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
import { UpdateServerCertificateRequest } from "../models/models_1";
import { de_UpdateServerCertificateCommand, se_UpdateServerCertificateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServerCertificateCommand}.
 */
export interface UpdateServerCertificateCommandInput extends UpdateServerCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServerCertificateCommand}.
 */
export interface UpdateServerCertificateCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the name and/or the path of the specified server certificate stored in
 *             IAM.</p>
 *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic also includes a list of Amazon Web Services services that can use the server certificates that
 *             you manage with IAM.</p>
 *          <important>
 *             <p>You should understand the implications of changing a server certificate's path or
 *                 name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>The person making the request (the principal), must have permission to change the
 *                 server certificate with the old name and the new name. For example, to change the
 *                 certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the
 *                 principal must have a policy that allows them to update both certificates. If the
 *                 principal has permission to update the <code>ProductionCert</code> group, but not
 *                 the <code>ProdCert</code> certificate, then the update fails. For more information
 *                 about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UpdateServerCertificateRequest
 *   ServerCertificateName: "STRING_VALUE", // required
 *   NewPath: "STRING_VALUE",
 *   NewServerCertificateName: "STRING_VALUE",
 * };
 * const command = new UpdateServerCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateServerCertificateCommandInput - {@link UpdateServerCertificateCommandInput}
 * @returns {@link UpdateServerCertificateCommandOutput}
 * @see {@link UpdateServerCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
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
 */
export class UpdateServerCertificateCommand extends $Command<
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
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
  constructor(readonly input: UpdateServerCertificateCommandInput) {
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
  ): Handler<UpdateServerCertificateCommandInput, UpdateServerCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServerCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateServerCertificateCommand";
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
  private serialize(input: UpdateServerCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServerCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServerCertificateCommandOutput> {
    return de_UpdateServerCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
