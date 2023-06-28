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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { AssumeDecoratedRoleWithSAMLRequest, AssumeDecoratedRoleWithSAMLResponse } from "../models/models_0";
import {
  de_AssumeDecoratedRoleWithSAMLCommand,
  se_AssumeDecoratedRoleWithSAMLCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssumeDecoratedRoleWithSAMLCommand}.
 */
export interface AssumeDecoratedRoleWithSAMLCommandInput extends AssumeDecoratedRoleWithSAMLRequest {}
/**
 * @public
 *
 * The output of {@link AssumeDecoratedRoleWithSAMLCommand}.
 */
export interface AssumeDecoratedRoleWithSAMLCommandOutput
  extends AssumeDecoratedRoleWithSAMLResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups.  This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions.
 *       Lake Formation does not scope down the permission of the assumed role.  All permissions attached to the role via the SAML federation setup will be included in the role session.
 *     </p>
 *          <p>
 *       This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>.  Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies.  A typical IAM policy attached to such a role would look as follows:
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, AssumeDecoratedRoleWithSAMLCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, AssumeDecoratedRoleWithSAMLCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // AssumeDecoratedRoleWithSAMLRequest
 *   SAMLAssertion: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   PrincipalArn: "STRING_VALUE", // required
 *   DurationSeconds: Number("int"),
 * };
 * const command = new AssumeDecoratedRoleWithSAMLCommand(input);
 * const response = await client.send(command);
 * // { // AssumeDecoratedRoleWithSAMLResponse
 * //   AccessKeyId: "STRING_VALUE",
 * //   SecretAccessKey: "STRING_VALUE",
 * //   SessionToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param AssumeDecoratedRoleWithSAMLCommandInput - {@link AssumeDecoratedRoleWithSAMLCommandInput}
 * @returns {@link AssumeDecoratedRoleWithSAMLCommandOutput}
 * @see {@link AssumeDecoratedRoleWithSAMLCommandInput} for command's `input` shape.
 * @see {@link AssumeDecoratedRoleWithSAMLCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class AssumeDecoratedRoleWithSAMLCommand extends $Command<
  AssumeDecoratedRoleWithSAMLCommandInput,
  AssumeDecoratedRoleWithSAMLCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: AssumeDecoratedRoleWithSAMLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssumeDecoratedRoleWithSAMLCommandInput, AssumeDecoratedRoleWithSAMLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssumeDecoratedRoleWithSAMLCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "AssumeDecoratedRoleWithSAMLCommand";
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
  private serialize(input: AssumeDecoratedRoleWithSAMLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssumeDecoratedRoleWithSAMLCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssumeDecoratedRoleWithSAMLCommandOutput> {
    return de_AssumeDecoratedRoleWithSAMLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
