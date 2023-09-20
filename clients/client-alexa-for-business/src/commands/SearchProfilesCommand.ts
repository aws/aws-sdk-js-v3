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
import { SearchProfilesRequest, SearchProfilesResponse } from "../models/models_0";
import { de_SearchProfilesCommand, se_SearchProfilesCommand } from "../protocols/Aws_json1_1";

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
 * @deprecated
 *
 * <p>Searches room profiles and lists the ones that meet a set of filter
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchProfilesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchProfilesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
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
 * };
 * const command = new SearchProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchProfilesResponse
 * //   Profiles: [ // ProfileDataList
 * //     { // ProfileData
 * //       ProfileArn: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //       Address: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //       DistanceUnit: "METRIC" || "IMPERIAL",
 * //       TemperatureUnit: "FAHRENHEIT" || "CELSIUS",
 * //       WakeWord: "ALEXA" || "AMAZON" || "ECHO" || "COMPUTER",
 * //       Locale: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchProfilesCommandInput - {@link SearchProfilesCommandInput}
 * @returns {@link SearchProfilesCommandOutput}
 * @see {@link SearchProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchProfilesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchProfilesCommand extends $Command<
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
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
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchProfilesCommandInput, SearchProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
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
