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
  UpdateProfileRequest,
  UpdateProfileRequestFilterSensitiveLog,
  UpdateProfileResponse,
} from "../models/models_0";
import { de_UpdateProfileCommand, se_UpdateProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandInput extends UpdateProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandOutput extends UpdateProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the properties of a profile. The ProfileId is required for updating a customer
 *          profile.</p>
 *          <p>When calling the UpdateProfile API, specifying an empty string value means that any
 *          existing value will be removed. Not specifying a string value means that any value already
 *          there will be kept.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateProfileRequest
 *   DomainName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 *   AdditionalInformation: "STRING_VALUE",
 *   AccountNumber: "STRING_VALUE",
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
 *   Address: { // UpdateAddress
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
 *   Attributes: { // UpdateAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PartyTypeString: "STRING_VALUE",
 *   GenderString: "STRING_VALUE",
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateProfileCommandInput - {@link UpdateProfileCommandInput}
 * @returns {@link UpdateProfileCommandOutput}
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
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
export class UpdateProfileCommand extends $Command<
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
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
  constructor(readonly input: UpdateProfileCommandInput) {
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
  ): Handler<UpdateProfileCommandInput, UpdateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateProfileCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "UpdateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CustomerProfiles_20200815",
        operation: "UpdateProfile",
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
  private serialize(input: UpdateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProfileCommandOutput> {
    return de_UpdateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
