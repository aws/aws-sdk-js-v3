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

import { ListIdentitiesRequest, ListIdentitiesResponse } from "../models/models_0";
import { de_ListIdentitiesCommand, se_ListIdentitiesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIdentitiesCommand}.
 */
export interface ListIdentitiesCommandInput extends ListIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentitiesCommand}.
 */
export interface ListIdentitiesCommandOutput extends ListIdentitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list containing all of the identities (email addresses and domains) for your
 *             Amazon Web Services account in the current Amazon Web Services Region, regardless of verification status.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 *          <note>
 *             <p>It's recommended that for successive pagination calls of this API, you continue to
 *                 the use the same parameter/value pairs as used in the original call, e.g., if you
 *                 used <code>IdentityType=Domain</code> in the the original call and received a
 *                     <code>NextToken</code> in the response, you should continue providing the
 *                     <code>IdentityType=Domain</code> parameter for further <code>NextToken</code>
 *                 calls; however, if you didn't provide the <code>IdentityType</code> parameter in the
 *                 original call, then continue to not provide it for successive pagination calls.
 *                 Using this protocol will ensure consistent results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListIdentitiesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentitiesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListIdentitiesRequest
 *   IdentityType: "EmailAddress" || "Domain",
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentitiesResponse
 * //   Identities: [ // IdentityList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentitiesCommandInput - {@link ListIdentitiesCommandInput}
 * @returns {@link ListIdentitiesCommandOutput}
 * @see {@link ListIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example ListIdentities
 * ```javascript
 * // The following example lists the email address identities that have been submitted for verification with Amazon SES:
 * const input = {
 *   "IdentityType": "EmailAddress",
 *   "MaxItems": 123,
 *   "NextToken": ""
 * };
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Identities": [
 *     "user@example.com"
 *   ],
 *   "NextToken": ""
 * }
 * *\/
 * // example id: listidentities-1469048638493
 * ```
 *
 */
export class ListIdentitiesCommand extends $Command<
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
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
  constructor(readonly input: ListIdentitiesCommandInput) {
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
  ): Handler<ListIdentitiesCommandInput, ListIdentitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIdentitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListIdentitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "ListIdentities",
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
  private serialize(input: ListIdentitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIdentitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIdentitiesCommandOutput> {
    return de_ListIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
