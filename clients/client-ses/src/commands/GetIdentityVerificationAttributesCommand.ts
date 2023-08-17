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

import {
  GetIdentityVerificationAttributesRequest,
  GetIdentityVerificationAttributesResponse,
} from "../models/models_0";
import {
  de_GetIdentityVerificationAttributesCommand,
  se_GetIdentityVerificationAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityVerificationAttributesCommand}.
 */
export interface GetIdentityVerificationAttributesCommandInput extends GetIdentityVerificationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityVerificationAttributesCommand}.
 */
export interface GetIdentityVerificationAttributesCommandOutput
  extends GetIdentityVerificationAttributesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Given a list of identities (email addresses and/or domains), returns the verification
 *             status and (for domain identities) the verification token for each identity.</p>
 *          <p>The verification status of an email address is "Pending" until the email address owner
 *             clicks the link within the verification email that Amazon SES sent to that address. If the
 *             email address owner clicks the link within 24 hours, the verification status of the
 *             email address changes to "Success". If the link is not clicked within 24 hours, the
 *             verification status changes to "Failed." In that case, to verify the email address, you
 *             must restart the verification process from the beginning.</p>
 *          <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches
 *             for the required TXT record in the DNS settings of the domain. When Amazon SES detects the
 *             record, the domain's verification status changes to "Success". If Amazon SES is unable to
 *             detect the record within 72 hours, the domain's verification status changes to "Failed."
 *             In that case, to verify the domain, you must restart the verification process from the
 *             beginning.</p>
 *          <p>This operation is throttled at one request per second and can only get verification
 *             attributes for up to 100 identities at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityVerificationAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityVerificationAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetIdentityVerificationAttributesRequest
 *   Identities: [ // IdentityList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityVerificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityVerificationAttributesResponse
 * //   VerificationAttributes: { // VerificationAttributes // required
 * //     "<keys>": { // IdentityVerificationAttributes
 * //       VerificationStatus: "Pending" || "Success" || "Failed" || "TemporaryFailure" || "NotStarted", // required
 * //       VerificationToken: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityVerificationAttributesCommandInput - {@link GetIdentityVerificationAttributesCommandInput}
 * @returns {@link GetIdentityVerificationAttributesCommandOutput}
 * @see {@link GetIdentityVerificationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityVerificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetIdentityVerificationAttributes
 * ```javascript
 * // The following example returns the verification status and the verification token for a domain identity:
 * const input = {
 *   "Identities": [
 *     "example.com"
 *   ]
 * };
 * const command = new GetIdentityVerificationAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VerificationAttributes": {
 *     "example.com": {
 *       "VerificationStatus": "Success",
 *       "VerificationToken": "EXAMPLE3VYb9EDI2nTOQRi/Tf6MI/6bD6THIGiP1MVY="
 *     }
 *   }
 * }
 * *\/
 * // example id: getidentityverificationattributes-1469124205897
 * ```
 *
 */
export class GetIdentityVerificationAttributesCommand extends $Command<
  GetIdentityVerificationAttributesCommandInput,
  GetIdentityVerificationAttributesCommandOutput,
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
  constructor(readonly input: GetIdentityVerificationAttributesCommandInput) {
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
  ): Handler<GetIdentityVerificationAttributesCommandInput, GetIdentityVerificationAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityVerificationAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetIdentityVerificationAttributesCommand";
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
  private serialize(
    input: GetIdentityVerificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetIdentityVerificationAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityVerificationAttributesCommandOutput> {
    return de_GetIdentityVerificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
