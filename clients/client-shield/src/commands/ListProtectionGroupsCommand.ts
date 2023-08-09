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

import { ListProtectionGroupsRequest, ListProtectionGroupsResponse } from "../models/models_0";
import { de_ListProtectionGroupsCommand, se_ListProtectionGroupsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProtectionGroupsCommand}.
 */
export interface ListProtectionGroupsCommandInput extends ListProtectionGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListProtectionGroupsCommand}.
 */
export interface ListProtectionGroupsCommandOutput extends ListProtectionGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide
 *        filtering criteria and retrieve just the subset of protection groups that match the criteria. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionGroupsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionGroupsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // ListProtectionGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InclusionFilters: { // InclusionProtectionGroupFilters
 *     ProtectionGroupIds: [ // ProtectionGroupIdFilters
 *       "STRING_VALUE",
 *     ],
 *     Patterns: [ // ProtectionGroupPatternFilters
 *       "STRING_VALUE",
 *     ],
 *     ResourceTypes: [ // ProtectedResourceTypeFilters
 *       "STRING_VALUE",
 *     ],
 *     Aggregations: [ // ProtectionGroupAggregationFilters
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListProtectionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectionGroupsResponse
 * //   ProtectionGroups: [ // ProtectionGroups // required
 * //     { // ProtectionGroup
 * //       ProtectionGroupId: "STRING_VALUE", // required
 * //       Aggregation: "STRING_VALUE", // required
 * //       Pattern: "STRING_VALUE", // required
 * //       ResourceType: "STRING_VALUE",
 * //       Members: [ // ProtectionGroupMembers // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ProtectionGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProtectionGroupsCommandInput - {@link ListProtectionGroupsCommandInput}
 * @returns {@link ListProtectionGroupsCommandOutput}
 * @see {@link ListProtectionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionGroupsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Exception that indicates that the <code>NextToken</code> specified in the request is invalid. Submit the request using the <code>NextToken</code> value that was returned in the prior response.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class ListProtectionGroupsCommand extends $Command<
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
  ShieldClientResolvedConfig
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
  constructor(readonly input: ListProtectionGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProtectionGroupsCommandInput, ListProtectionGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProtectionGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "ListProtectionGroupsCommand";
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
  private serialize(input: ListProtectionGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProtectionGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProtectionGroupsCommandOutput> {
    return de_ListProtectionGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
