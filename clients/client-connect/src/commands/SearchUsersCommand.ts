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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { SearchUsersResponse } from "../models/models_1";
import { SearchUsersRequest } from "../models/models_2";
import { de_SearchUsersCommand, se_SearchUsersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandInput extends SearchUsersRequest {}
/**
 * @public
 *
 * The output of {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandOutput extends SearchUsersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches users in an Amazon Connect instance, with optional filtering.</p>
 *          <note>
 *             <p>
 *                <code>AfterContactWorkTimeLimit</code> is returned in milliseconds. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchUsersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchUsersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchUsersRequest
 *   InstanceId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // UserSearchFilter
 *     TagFilter: { // ControlPlaneTagFilter
 *       OrConditions: [ // TagOrConditionList
 *         [ // TagAndConditionList
 *           { // TagCondition
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       ],
 *       AndConditions: [
 *         {
 *           TagKey: "STRING_VALUE",
 *           TagValue: "STRING_VALUE",
 *         },
 *       ],
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 *   SearchCriteria: { // UserSearchCriteria
 *     OrConditions: [ // UserSearchConditionList
 *       {
 *         OrConditions: [
 *           "<UserSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<UserSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         HierarchyGroupCondition: { // HierarchyGroupCondition
 *           Value: "STRING_VALUE",
 *           HierarchyGroupMatchType: "EXACT" || "WITH_CHILD_GROUPS",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<UserSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     HierarchyGroupCondition: {
 *       Value: "STRING_VALUE",
 *       HierarchyGroupMatchType: "EXACT" || "WITH_CHILD_GROUPS",
 *     },
 *   },
 * };
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * // { // SearchUsersResponse
 * //   Users: [ // UserSearchSummaryList
 * //     { // UserSearchSummary
 * //       Arn: "STRING_VALUE",
 * //       DirectoryUserId: "STRING_VALUE",
 * //       HierarchyGroupId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       IdentityInfo: { // UserIdentityInfoLite
 * //         FirstName: "STRING_VALUE",
 * //         LastName: "STRING_VALUE",
 * //       },
 * //       PhoneConfig: { // UserPhoneConfig
 * //         PhoneType: "SOFT_PHONE" || "DESK_PHONE", // required
 * //         AutoAccept: true || false,
 * //         AfterContactWorkTimeLimit: Number("int"),
 * //         DeskPhoneNumber: "STRING_VALUE",
 * //       },
 * //       RoutingProfileId: "STRING_VALUE",
 * //       SecurityProfileIds: [ // SecurityProfileIds
 * //         "STRING_VALUE",
 * //       ],
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Username: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchUsersCommandInput - {@link SearchUsersCommandInput}
 * @returns {@link SearchUsersCommandOutput}
 * @see {@link SearchUsersCommandInput} for command's `input` shape.
 * @see {@link SearchUsersCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class SearchUsersCommand extends $Command<
  SearchUsersCommandInput,
  SearchUsersCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: SearchUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchUsersCommandInput, SearchUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchUsersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SearchUsersCommand";
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
  private serialize(input: SearchUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchUsersCommandOutput> {
    return de_SearchUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
