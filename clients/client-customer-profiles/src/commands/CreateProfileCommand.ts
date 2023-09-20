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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  CreateProfileRequest,
  CreateProfileRequestFilterSensitiveLog,
  CreateProfileResponse,
} from "../models/models_0";
import { de_CreateProfileCommand, se_CreateProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandInput extends CreateProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandOutput extends CreateProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a standard profile.</p>
 *          <p>A standard profile represents the following attributes for a customer profile in a
 *          domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateProfileRequest
 *   DomainName: "STRING_VALUE", // required
 *   AccountNumber: "STRING_VALUE",
 *   AdditionalInformation: "STRING_VALUE",
 *   PartyType: "INDIVIDUAL" || "BUSINESS" || "OTHER",
 *   BusinessName: "STRING_VALUE",
 *   FirstName: "STRING_VALUE",
 *   MiddleName: "STRING_VALUE",
 *   LastName: "STRING_VALUE",
 *   BirthDate: "STRING_VALUE",
 *   Gender: "MALE" || "FEMALE" || "UNSPECIFIED",
 *   PhoneNumber: "STRING_VALUE",
 *   MobilePhoneNumber: "STRING_VALUE",
 *   HomePhoneNumber: "STRING_VALUE",
 *   BusinessPhoneNumber: "STRING_VALUE",
 *   EmailAddress: "STRING_VALUE",
 *   PersonalEmailAddress: "STRING_VALUE",
 *   BusinessEmailAddress: "STRING_VALUE",
 *   Address: { // Address
 *     Address1: "STRING_VALUE",
 *     Address2: "STRING_VALUE",
 *     Address3: "STRING_VALUE",
 *     Address4: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     County: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     Province: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   ShippingAddress: {
 *     Address1: "STRING_VALUE",
 *     Address2: "STRING_VALUE",
 *     Address3: "STRING_VALUE",
 *     Address4: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     County: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     Province: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   MailingAddress: {
 *     Address1: "STRING_VALUE",
 *     Address2: "STRING_VALUE",
 *     Address3: "STRING_VALUE",
 *     Address4: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     County: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     Province: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   BillingAddress: {
 *     Address1: "STRING_VALUE",
 *     Address2: "STRING_VALUE",
 *     Address3: "STRING_VALUE",
 *     Address4: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     County: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     Province: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PartyTypeString: "STRING_VALUE",
 *   GenderString: "STRING_VALUE",
 * };
 * const command = new CreateProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateProfileCommandInput - {@link CreateProfileCommandInput}
 * @returns {@link CreateProfileCommandOutput}
 * @see {@link CreateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProfileCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class CreateProfileCommand extends $Command<
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: CreateProfileCommandInput) {
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
  ): Handler<CreateProfileCommandInput, CreateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateProfileCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "CreateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CustomerProfiles_20200815",
        operation: "CreateProfile",
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
  private serialize(input: CreateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProfileCommandOutput> {
    return de_CreateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
