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
import { MergeProfilesRequest, MergeProfilesResponse } from "../models/models_0";
import { de_MergeProfilesCommand, se_MergeProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link MergeProfilesCommand}.
 */
export interface MergeProfilesCommandInput extends MergeProfilesRequest {}
/**
 * @public
 *
 * The output of {@link MergeProfilesCommand}.
 */
export interface MergeProfilesCommandOutput extends MergeProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Runs an AWS Lambda job that does the following:</p>
 *          <ol>
 *             <li>
 *                <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the
 *                main profile.</p>
 *             </li>
 *             <li>
 *                <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main
 *                profile.</p>
 *             </li>
 *             <li>
 *                <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p>
 *             </li>
 *             <li>
 *                <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the
 *                main profile.</p>
 *             </li>
 *             <li>
 *                <p>Standard fields are merged as follows:</p>
 *                <ol>
 *                   <li>
 *                      <p>Fields are always "union"-ed if there are no conflicts in standard fields or
 *                      attributeKeys.</p>
 *                   </li>
 *                   <li>
 *                      <p>When there are conflicting fields:</p>
 *                      <ol>
 *                         <li>
 *                            <p>If no <code>SourceProfileIds</code> entry is specified, the main
 *                            Profile value is always taken. </p>
 *                         </li>
 *                         <li>
 *                            <p>If a <code>SourceProfileIds</code> entry is specified, the specified
 *                            profileId is always taken, even if it is a NULL value.</p>
 *                         </li>
 *                      </ol>
 *                   </li>
 *                </ol>
 *             </li>
 *          </ol>
 *          <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which
 *          returns potentially matching profiles, or use it with the results of another matching
 *          system. After profiles have been merged, they cannot be separated (unmerged).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, MergeProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, MergeProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // MergeProfilesRequest
 *   DomainName: "STRING_VALUE", // required
 *   MainProfileId: "STRING_VALUE", // required
 *   ProfileIdsToBeMerged: [ // ProfileIdToBeMergedList // required
 *     "STRING_VALUE",
 *   ],
 *   FieldSourceProfileIds: { // FieldSourceProfileIds
 *     AccountNumber: "STRING_VALUE",
 *     AdditionalInformation: "STRING_VALUE",
 *     PartyType: "STRING_VALUE",
 *     BusinessName: "STRING_VALUE",
 *     FirstName: "STRING_VALUE",
 *     MiddleName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     BirthDate: "STRING_VALUE",
 *     Gender: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     MobilePhoneNumber: "STRING_VALUE",
 *     HomePhoneNumber: "STRING_VALUE",
 *     BusinessPhoneNumber: "STRING_VALUE",
 *     EmailAddress: "STRING_VALUE",
 *     PersonalEmailAddress: "STRING_VALUE",
 *     BusinessEmailAddress: "STRING_VALUE",
 *     Address: "STRING_VALUE",
 *     ShippingAddress: "STRING_VALUE",
 *     MailingAddress: "STRING_VALUE",
 *     BillingAddress: "STRING_VALUE",
 *     Attributes: { // AttributeSourceIdMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new MergeProfilesCommand(input);
 * const response = await client.send(command);
 * // { // MergeProfilesResponse
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MergeProfilesCommandInput - {@link MergeProfilesCommandInput}
 * @returns {@link MergeProfilesCommandOutput}
 * @see {@link MergeProfilesCommandInput} for command's `input` shape.
 * @see {@link MergeProfilesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
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
export class MergeProfilesCommand extends $Command<
  MergeProfilesCommandInput,
  MergeProfilesCommandOutput,
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
  constructor(readonly input: MergeProfilesCommandInput) {
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
  ): Handler<MergeProfilesCommandInput, MergeProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, MergeProfilesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "MergeProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CustomerProfiles_20200815",
        operation: "MergeProfiles",
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
  private serialize(input: MergeProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_MergeProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MergeProfilesCommandOutput> {
    return de_MergeProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
