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

import { ListIdentityPoliciesRequest, ListIdentityPoliciesResponse } from "../models/models_0";
import { de_ListIdentityPoliciesCommand, se_ListIdentityPoliciesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityPoliciesCommand}.
 */
export interface ListIdentityPoliciesCommandInput extends ListIdentityPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityPoliciesCommand}.
 */
export interface ListIdentityPoliciesCommandOutput extends ListIdentityPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of sending authorization policies that are attached to the given
 *             identity (an email address or a domain). This operation returns only a list. To get the
 *             actual policy content, use <code>GetIdentityPolicies</code>.</p>
 *          <note>
 *             <p>This operation is for the identity owner only. If you have not verified the
 *                 identity, it returns an error.</p>
 *          </note>
 *          <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListIdentityPoliciesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentityPoliciesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListIdentityPoliciesRequest
 *   Identity: "STRING_VALUE", // required
 * };
 * const command = new ListIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityPoliciesResponse
 * //   PolicyNames: [ // PolicyNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIdentityPoliciesCommandInput - {@link ListIdentityPoliciesCommandInput}
 * @returns {@link ListIdentityPoliciesCommandOutput}
 * @see {@link ListIdentityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example ListIdentityPolicies
 * ```javascript
 * // The following example returns a list of sending authorization policies that are attached to an identity:
 * const input = {
 *   "Identity": "example.com"
 * };
 * const command = new ListIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyNames": [
 *     "MyPolicy"
 *   ]
 * }
 * *\/
 * // example id: listidentitypolicies-1469124417674
 * ```
 *
 */
export class ListIdentityPoliciesCommand extends $Command<
  ListIdentityPoliciesCommandInput,
  ListIdentityPoliciesCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: ListIdentityPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIdentityPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListIdentityPoliciesCommand";
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
  private serialize(input: ListIdentityPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIdentityPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIdentityPoliciesCommandOutput> {
    return de_ListIdentityPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
