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

import { GetIdentityDkimAttributesRequest, GetIdentityDkimAttributesResponse } from "../models/models_0";
import { de_GetIdentityDkimAttributesCommand, se_GetIdentityDkimAttributesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityDkimAttributesCommand}.
 */
export interface GetIdentityDkimAttributesCommandInput extends GetIdentityDkimAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityDkimAttributesCommand}.
 */
export interface GetIdentityDkimAttributesCommandOutput extends GetIdentityDkimAttributesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the current status of Easy DKIM signing for an entity. For domain name
 *             identities, this operation also returns the DKIM tokens that are required for Easy DKIM
 *             signing, and whether Amazon SES has successfully verified that these tokens have been
 *             published.</p>
 *          <p>This operation takes a list of identities as input and returns the following
 *             information for each:</p>
 *          <ul>
 *             <li>
 *                <p>Whether Easy DKIM signing is enabled or disabled.</p>
 *             </li>
 *             <li>
 *                <p>A set of DKIM tokens that represent the identity. If the identity is an email
 *                     address, the tokens represent the domain of that address.</p>
 *             </li>
 *             <li>
 *                <p>Whether Amazon SES has successfully verified the DKIM tokens published in the
 *                     domain's DNS. This information is only returned for domain name identities, not
 *                     for email addresses.</p>
 *             </li>
 *          </ul>
 *          <p>This operation is throttled at one request per second and can only get DKIM attributes
 *             for up to 100 identities at a time.</p>
 *          <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy-managing.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityDkimAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityDkimAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetIdentityDkimAttributesRequest
 *   Identities: [ // IdentityList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityDkimAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityDkimAttributesResponse
 * //   DkimAttributes: { // DkimAttributes // required
 * //     "<keys>": { // IdentityDkimAttributes
 * //       DkimEnabled: true || false, // required
 * //       DkimVerificationStatus: "Pending" || "Success" || "Failed" || "TemporaryFailure" || "NotStarted", // required
 * //       DkimTokens: [ // VerificationTokenList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityDkimAttributesCommandInput - {@link GetIdentityDkimAttributesCommandInput}
 * @returns {@link GetIdentityDkimAttributesCommandOutput}
 * @see {@link GetIdentityDkimAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityDkimAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetIdentityDkimAttributes
 * ```javascript
 * // The following example retrieves the Amazon SES Easy DKIM attributes for a list of identities:
 * const input = {
 *   "Identities": [
 *     "example.com",
 *     "user@example.com"
 *   ]
 * };
 * const command = new GetIdentityDkimAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DkimAttributes": {
 *     "example.com": {
 *       "DkimEnabled": true,
 *       "DkimTokens": [
 *         "EXAMPLEjcs5xoyqytjsotsijas7236gr",
 *         "EXAMPLEjr76cvoc6mysspnioorxsn6ep",
 *         "EXAMPLEkbmkqkhlm2lyz77ppkulerm4k"
 *       ],
 *       "DkimVerificationStatus": "Success"
 *     },
 *     "user@example.com": {
 *       "DkimEnabled": false,
 *       "DkimVerificationStatus": "NotStarted"
 *     }
 *   }
 * }
 * *\/
 * // example id: getidentitydkimattributes-1469050695628
 * ```
 *
 */
export class GetIdentityDkimAttributesCommand extends $Command<
  GetIdentityDkimAttributesCommandInput,
  GetIdentityDkimAttributesCommandOutput,
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
  constructor(readonly input: GetIdentityDkimAttributesCommandInput) {
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
  ): Handler<GetIdentityDkimAttributesCommandInput, GetIdentityDkimAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityDkimAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetIdentityDkimAttributesCommand";
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
  private serialize(input: GetIdentityDkimAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIdentityDkimAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityDkimAttributesCommandOutput> {
    return de_GetIdentityDkimAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
