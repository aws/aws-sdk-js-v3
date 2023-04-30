// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyVerifiedAccessTrustProviderRequest,
  ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog,
  ModifyVerifiedAccessTrustProviderResult,
  ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog,
} from "../models/models_6";
import {
  de_ModifyVerifiedAccessTrustProviderCommand,
  se_ModifyVerifiedAccessTrustProviderCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessTrustProviderCommand}.
 */
export interface ModifyVerifiedAccessTrustProviderCommandInput extends ModifyVerifiedAccessTrustProviderRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessTrustProviderCommand}.
 */
export interface ModifyVerifiedAccessTrustProviderCommandOutput
  extends ModifyVerifiedAccessTrustProviderResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the configuration of the specified Amazon Web Services Verified Access trust provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessTrustProviderCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessTrustProviderCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessTrustProviderRequest
 *   VerifiedAccessTrustProviderId: "STRING_VALUE", // required
 *   OidcOptions: { // ModifyVerifiedAccessTrustProviderOidcOptions
 *     Issuer: "STRING_VALUE",
 *     AuthorizationEndpoint: "STRING_VALUE",
 *     TokenEndpoint: "STRING_VALUE",
 *     UserInfoEndpoint: "STRING_VALUE",
 *     ClientId: "STRING_VALUE",
 *     ClientSecret: "STRING_VALUE",
 *     Scope: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ModifyVerifiedAccessTrustProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyVerifiedAccessTrustProviderCommandInput - {@link ModifyVerifiedAccessTrustProviderCommandInput}
 * @returns {@link ModifyVerifiedAccessTrustProviderCommandOutput}
 * @see {@link ModifyVerifiedAccessTrustProviderCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessTrustProviderCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class ModifyVerifiedAccessTrustProviderCommand extends $Command<
  ModifyVerifiedAccessTrustProviderCommandInput,
  ModifyVerifiedAccessTrustProviderCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: ModifyVerifiedAccessTrustProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyVerifiedAccessTrustProviderCommandInput, ModifyVerifiedAccessTrustProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVerifiedAccessTrustProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVerifiedAccessTrustProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog,
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
    input: ModifyVerifiedAccessTrustProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyVerifiedAccessTrustProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVerifiedAccessTrustProviderCommandOutput> {
    return de_ModifyVerifiedAccessTrustProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
