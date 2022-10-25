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

import {
  TrustAnchorDetailResponse,
  TrustAnchorDetailResponseFilterSensitiveLog,
  UpdateTrustAnchorRequest,
  UpdateTrustAnchorRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateTrustAnchorCommand,
  serializeAws_restJson1UpdateTrustAnchorCommand,
} from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

export interface UpdateTrustAnchorCommandInput extends UpdateTrustAnchorRequest {}
export interface UpdateTrustAnchorCommandOutput extends TrustAnchorDetailResponse, __MetadataBearer {}

/**
 * <p>Updates the trust anchor.You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:UpdateTrustAnchor</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, UpdateTrustAnchorCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, UpdateTrustAnchorCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const command = new UpdateTrustAnchorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrustAnchorCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustAnchorCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 */
export class UpdateTrustAnchorCommand extends $Command<
  UpdateTrustAnchorCommandInput,
  UpdateTrustAnchorCommandOutput,
  RolesAnywhereClientResolvedConfig
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

  constructor(readonly input: UpdateTrustAnchorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RolesAnywhereClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTrustAnchorCommandInput, UpdateTrustAnchorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTrustAnchorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "UpdateTrustAnchorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTrustAnchorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TrustAnchorDetailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTrustAnchorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateTrustAnchorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTrustAnchorCommandOutput> {
    return deserializeAws_restJson1UpdateTrustAnchorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
