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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  SearchContactsRequest,
  SearchContactsResponse,
  SearchContactsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchContactsCommand, se_SearchContactsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchContactsCommand}.
 */
export interface SearchContactsCommandInput extends SearchContactsRequest {}
/**
 * @public
 *
 * The output of {@link SearchContactsCommand}.
 */
export interface SearchContactsCommandOutput extends SearchContactsResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Searches contacts and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchContactsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchContactsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchContactsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortCriteria: [ // SortList
 *     { // Sort
 *       Key: "STRING_VALUE", // required
 *       Value: "ASC" || "DESC", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchContactsCommand(input);
 * const response = await client.send(command);
 * // { // SearchContactsResponse
 * //   Contacts: [ // ContactDataList
 * //     { // ContactData
 * //       ContactArn: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       FirstName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       PhoneNumber: "STRING_VALUE",
 * //       PhoneNumbers: [ // PhoneNumberList
 * //         { // PhoneNumber
 * //           Number: "STRING_VALUE", // required
 * //           Type: "MOBILE" || "WORK" || "HOME", // required
 * //         },
 * //       ],
 * //       SipAddresses: [ // SipAddressList
 * //         { // SipAddress
 * //           Uri: "STRING_VALUE", // required
 * //           Type: "WORK", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchContactsCommandInput - {@link SearchContactsCommandInput}
 * @returns {@link SearchContactsCommandOutput}
 * @see {@link SearchContactsCommandInput} for command's `input` shape.
 * @see {@link SearchContactsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchContactsCommand extends $Command<
  SearchContactsCommandInput,
  SearchContactsCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: SearchContactsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchContactsCommandInput, SearchContactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchContactsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchContactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: SearchContactsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "SearchContacts",
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
  private serialize(input: SearchContactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchContactsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchContactsCommandOutput> {
    return de_SearchContactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
