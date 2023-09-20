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
  SearchProfilesRequest,
  SearchProfilesResponse,
  SearchProfilesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchProfilesCommand, se_SearchProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchProfilesCommand}.
 */
export interface SearchProfilesCommandInput extends SearchProfilesRequest {}
/**
 * @public
 *
 * The output of {@link SearchProfilesCommand}.
 */
export interface SearchProfilesCommandOutput extends SearchProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches for profiles within a specific domain using one or more predefined search keys
 *          (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key
 *          is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p>
 *          <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to
 *          5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, SearchProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, SearchProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // SearchProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   KeyName: "STRING_VALUE", // required
 *   Values: [ // requestValueList // required
 *     "STRING_VALUE",
 *   ],
 *   AdditionalSearchKeys: [ // additionalSearchKeysList
 *     { // AdditionalSearchKey
 *       KeyName: "STRING_VALUE", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   LogicalOperator: "AND" || "OR",
 * };
 * const command = new SearchProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchProfilesResponse
 * //   Items: [ // ProfileList
 * //     { // Profile
 * //       ProfileId: "STRING_VALUE",
 * //       AccountNumber: "STRING_VALUE",
 * //       AdditionalInformation: "STRING_VALUE",
 * //       PartyType: "INDIVIDUAL" || "BUSINESS" || "OTHER",
 * //       BusinessName: "STRING_VALUE",
 * //       FirstName: "STRING_VALUE",
 * //       MiddleName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       BirthDate: "STRING_VALUE",
 * //       Gender: "MALE" || "FEMALE" || "UNSPECIFIED",
 * //       PhoneNumber: "STRING_VALUE",
 * //       MobilePhoneNumber: "STRING_VALUE",
 * //       HomePhoneNumber: "STRING_VALUE",
 * //       BusinessPhoneNumber: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       PersonalEmailAddress: "STRING_VALUE",
 * //       BusinessEmailAddress: "STRING_VALUE",
 * //       Address: { // Address
 * //         Address1: "STRING_VALUE",
 * //         Address2: "STRING_VALUE",
 * //         Address3: "STRING_VALUE",
 * //         Address4: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         County: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         Province: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       ShippingAddress: {
 * //         Address1: "STRING_VALUE",
 * //         Address2: "STRING_VALUE",
 * //         Address3: "STRING_VALUE",
 * //         Address4: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         County: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         Province: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       MailingAddress: {
 * //         Address1: "STRING_VALUE",
 * //         Address2: "STRING_VALUE",
 * //         Address3: "STRING_VALUE",
 * //         Address4: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         County: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         Province: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       BillingAddress: {
 * //         Address1: "STRING_VALUE",
 * //         Address2: "STRING_VALUE",
 * //         Address3: "STRING_VALUE",
 * //         Address4: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         County: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         Province: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       Attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       FoundByItems: [ // foundByList
 * //         { // FoundByKeyValue
 * //           KeyName: "STRING_VALUE",
 * //           Values: [ // requestValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       PartyTypeString: "STRING_VALUE",
 * //       GenderString: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchProfilesCommandInput - {@link SearchProfilesCommandInput}
 * @returns {@link SearchProfilesCommandOutput}
 * @see {@link SearchProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchProfilesCommandOutput} for command's `response` shape.
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
export class SearchProfilesCommand extends $Command<
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
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
  constructor(readonly input: SearchProfilesCommandInput) {
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
  ): Handler<SearchProfilesCommandInput, SearchProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "SearchProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: SearchProfilesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CustomerProfiles_20200815",
        operation: "SearchProfiles",
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
  private serialize(input: SearchProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchProfilesCommandOutput> {
    return de_SearchProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
