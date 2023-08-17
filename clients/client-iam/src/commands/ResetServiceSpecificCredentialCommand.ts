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
import {
  ResetServiceSpecificCredentialRequest,
  ResetServiceSpecificCredentialResponse,
  ResetServiceSpecificCredentialResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ResetServiceSpecificCredentialCommand,
  se_ResetServiceSpecificCredentialCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetServiceSpecificCredentialCommand}.
 */
export interface ResetServiceSpecificCredentialCommandInput extends ResetServiceSpecificCredentialRequest {}
/**
 * @public
 *
 * The output of {@link ResetServiceSpecificCredentialCommand}.
 */
export interface ResetServiceSpecificCredentialCommandOutput
  extends ResetServiceSpecificCredentialResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Resets the password for a service-specific credential. The new password is Amazon Web Services
 *             generated and cryptographically strong. It cannot be configured by the user. Resetting
 *             the password immediately invalidates the previous password associated with this
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResetServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ResetServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ResetServiceSpecificCredentialRequest
 *   UserName: "STRING_VALUE",
 *   ServiceSpecificCredentialId: "STRING_VALUE", // required
 * };
 * const command = new ResetServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * // { // ResetServiceSpecificCredentialResponse
 * //   ServiceSpecificCredential: { // ServiceSpecificCredential
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     ServiceName: "STRING_VALUE", // required
 * //     ServiceUserName: "STRING_VALUE", // required
 * //     ServicePassword: "STRING_VALUE", // required
 * //     ServiceSpecificCredentialId: "STRING_VALUE", // required
 * //     UserName: "STRING_VALUE", // required
 * //     Status: "Active" || "Inactive", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetServiceSpecificCredentialCommandInput - {@link ResetServiceSpecificCredentialCommandInput}
 * @returns {@link ResetServiceSpecificCredentialCommandOutput}
 * @see {@link ResetServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class ResetServiceSpecificCredentialCommand extends $Command<
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
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
  constructor(readonly input: ResetServiceSpecificCredentialCommandInput) {
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
  ): Handler<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetServiceSpecificCredentialCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ResetServiceSpecificCredentialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ResetServiceSpecificCredentialResponseFilterSensitiveLog,
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
  private serialize(
    input: ResetServiceSpecificCredentialCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ResetServiceSpecificCredentialCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetServiceSpecificCredentialCommandOutput> {
    return de_ResetServiceSpecificCredentialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
