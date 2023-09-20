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
import { SetSecurityTokenServicePreferencesRequest } from "../models/models_0";
import {
  de_SetSecurityTokenServicePreferencesCommand,
  se_SetSecurityTokenServicePreferencesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetSecurityTokenServicePreferencesCommand}.
 */
export interface SetSecurityTokenServicePreferencesCommandInput extends SetSecurityTokenServicePreferencesRequest {}
/**
 * @public
 *
 * The output of {@link SetSecurityTokenServicePreferencesCommand}.
 */
export interface SetSecurityTokenServicePreferencesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets the specified version of the global endpoint token as the token version used for
 *             the Amazon Web Services account.</p>
 *          <p>By default, Security Token Service (STS) is available as a global service, and all STS requests
 *             go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends
 *             using Regional STS endpoints to reduce latency, build in redundancy, and increase
 *             session token availability. For information about Regional endpoints for STS, see
 *                 <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service
 *                 endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *          <p>If you make an STS call to the global endpoint, the resulting session tokens might
 *             be valid in some Regions but not others. It depends on the version that is set in this
 *             operation. Version 1 tokens are valid only in Amazon Web Services Regions that are
 *             available by default. These tokens do not work in manually enabled Regions, such as Asia
 *             Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2
 *             tokens are longer and might affect systems where you temporarily store tokens. For
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                 deactivating STS in an Amazon Web Services Region</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          <p>To view the current session token version, see the
 *                 <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SetSecurityTokenServicePreferencesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SetSecurityTokenServicePreferencesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // SetSecurityTokenServicePreferencesRequest
 *   GlobalEndpointTokenVersion: "v1Token" || "v2Token", // required
 * };
 * const command = new SetSecurityTokenServicePreferencesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetSecurityTokenServicePreferencesCommandInput - {@link SetSecurityTokenServicePreferencesCommandInput}
 * @returns {@link SetSecurityTokenServicePreferencesCommandOutput}
 * @see {@link SetSecurityTokenServicePreferencesCommandInput} for command's `input` shape.
 * @see {@link SetSecurityTokenServicePreferencesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * // The following command sets the STS global endpoint token to version 2. Version 2 tokens are valid in all Regions.
 * const input = {
 *   "GlobalEndpointTokenVersion": "v2Token"
 * };
 * const command = new SetSecurityTokenServicePreferencesCommand(input);
 * await client.send(command);
 * // example id: 61a785a7-d30a-415a-ae18-ab9236e56871
 * ```
 *
 */
export class SetSecurityTokenServicePreferencesCommand extends $Command<
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
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
  constructor(readonly input: SetSecurityTokenServicePreferencesCommandInput) {
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
  ): Handler<SetSecurityTokenServicePreferencesCommandInput, SetSecurityTokenServicePreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetSecurityTokenServicePreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "SetSecurityTokenServicePreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "SetSecurityTokenServicePreferences",
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
  private serialize(
    input: SetSecurityTokenServicePreferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SetSecurityTokenServicePreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetSecurityTokenServicePreferencesCommandOutput> {
    return de_SetSecurityTokenServicePreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
