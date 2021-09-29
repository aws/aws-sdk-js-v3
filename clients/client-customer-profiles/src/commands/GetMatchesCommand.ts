import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetMatchesRequest, GetMatchesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetMatchesCommand,
  serializeAws_restJson1GetMatchesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetMatchesCommandInput extends GetMatchesRequest {}
export interface GetMatchesCommandOutput extends GetMatchesResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and subject to change.</p>
 *          <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or
 *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to
 *          enable identity resolution: set <code>Matching</code> to true.</p>
 *          <p>GetMatches returns potentially matching profiles, based on the results of the latest run
 *          of a machine learning process. </p>
 *          <important>
 *             <p>Amazon Connect starts a batch process every Saturday at 12AM UTC to identify matching profiles.
 *             The results are returned up to seven days after the Saturday run.</p>
 *          </important>
 *
 *          <p>Amazon Connect uses the following profile attributes to identify matches:</p>
 *          <ul>
 *             <li>
 *                <p>PhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>HomePhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>BusinessPhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>MobilePhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>EmailAddress</p>
 *             </li>
 *             <li>
 *                <p>PersonalEmailAddress</p>
 *             </li>
 *             <li>
 *                <p>BusinessEmailAddress</p>
 *             </li>
 *             <li>
 *                <p>FullName</p>
 *             </li>
 *             <li>
 *                <p>BusinessName</p>
 *             </li>
 *          </ul>
 *          <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing
 *          email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and
 *             <b>johndoe@anycompany.com</b>, or different phone number
 *          formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetMatchesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetMatchesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetMatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMatchesCommandInput} for command's `input` shape.
 * @see {@link GetMatchesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMatchesCommand extends $Command<
  GetMatchesCommandInput,
  GetMatchesCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMatchesCommandInput, GetMatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetMatchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMatchesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMatchesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMatchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMatchesCommandOutput> {
    return deserializeAws_restJson1GetMatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
