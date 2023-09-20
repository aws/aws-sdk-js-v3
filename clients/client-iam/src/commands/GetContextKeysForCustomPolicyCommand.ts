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
import { GetContextKeysForCustomPolicyRequest, GetContextKeysForPolicyResponse } from "../models/models_0";
import {
  de_GetContextKeysForCustomPolicyCommand,
  se_GetContextKeysForCustomPolicyCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetContextKeysForCustomPolicyCommand}.
 */
export interface GetContextKeysForCustomPolicyCommandInput extends GetContextKeysForCustomPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetContextKeysForCustomPolicyCommand}.
 */
export interface GetContextKeysForCustomPolicyCommandOutput extends GetContextKeysForPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of all of the context keys referenced in the input policies. The policies
 *             are supplied as a list of one or more strings. To get the context keys from policies
 *             associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
 *          <p>Context keys are variables maintained by Amazon Web Services and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value specified in an IAM policy. Use
 *                 <code>GetContextKeysForCustomPolicy</code> to understand what key names and values
 *             you must supply when you call <a>SimulateCustomPolicy</a>. Note that all
 *             parameters are shown in unencoded form here for clarity but must be URL encoded to be
 *             included as a part of a real HTML request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForCustomPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForCustomPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetContextKeysForCustomPolicyRequest
 *   PolicyInputList: [ // SimulationPolicyListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetContextKeysForCustomPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContextKeysForPolicyResponse
 * //   ContextKeyNames: [ // ContextKeyNamesResultListType
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContextKeysForCustomPolicyCommandInput - {@link GetContextKeysForCustomPolicyCommandInput}
 * @returns {@link GetContextKeysForCustomPolicyCommandOutput}
 * @see {@link GetContextKeysForCustomPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForCustomPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class GetContextKeysForCustomPolicyCommand extends $Command<
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
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
  constructor(readonly input: GetContextKeysForCustomPolicyCommandInput) {
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
  ): Handler<GetContextKeysForCustomPolicyCommandInput, GetContextKeysForCustomPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContextKeysForCustomPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetContextKeysForCustomPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "GetContextKeysForCustomPolicy",
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
  private serialize(input: GetContextKeysForCustomPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetContextKeysForCustomPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContextKeysForCustomPolicyCommandOutput> {
    return de_GetContextKeysForCustomPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
