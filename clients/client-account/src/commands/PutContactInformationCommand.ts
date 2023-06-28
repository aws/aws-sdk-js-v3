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

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { PutContactInformationRequest, PutContactInformationRequestFilterSensitiveLog } from "../models/models_0";
import { de_PutContactInformationCommand, se_PutContactInformationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutContactInformationCommand}.
 */
export interface PutContactInformationCommandInput extends PutContactInformationRequest {}
/**
 * @public
 *
 * The output of {@link PutContactInformationCommand}.
 */
export interface PutContactInformationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the primary contact information of an Amazon Web Services account.</p>
 *          <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update
 *             the primary and alternate contact information</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, PutContactInformationCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, PutContactInformationCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const input = { // PutContactInformationRequest
 *   ContactInformation: { // ContactInformation
 *     FullName: "STRING_VALUE", // required
 *     AddressLine1: "STRING_VALUE", // required
 *     AddressLine2: "STRING_VALUE",
 *     AddressLine3: "STRING_VALUE",
 *     City: "STRING_VALUE", // required
 *     StateOrRegion: "STRING_VALUE",
 *     DistrictOrCounty: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE", // required
 *     CountryCode: "STRING_VALUE", // required
 *     PhoneNumber: "STRING_VALUE", // required
 *     CompanyName: "STRING_VALUE",
 *     WebsiteUrl: "STRING_VALUE",
 *   },
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new PutContactInformationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutContactInformationCommandInput - {@link PutContactInformationCommandInput}
 * @returns {@link PutContactInformationCommandOutput}
 * @see {@link PutContactInformationCommandInput} for command's `input` shape.
 * @see {@link PutContactInformationCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again
 *             later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle
 *             limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed because one of the input parameters was invalid.</p>
 *
 * @throws {@link AccountServiceException}
 * <p>Base exception class for all service exceptions from Account service.</p>
 *
 */
export class PutContactInformationCommand extends $Command<
  PutContactInformationCommandInput,
  PutContactInformationCommandOutput,
  AccountClientResolvedConfig
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
  constructor(readonly input: PutContactInformationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccountClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutContactInformationCommandInput, PutContactInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutContactInformationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccountClient";
    const commandName = "PutContactInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutContactInformationRequestFilterSensitiveLog,
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
  private serialize(input: PutContactInformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutContactInformationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutContactInformationCommandOutput> {
    return de_PutContactInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
