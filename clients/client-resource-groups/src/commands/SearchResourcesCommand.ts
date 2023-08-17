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

import { SearchResourcesInput, SearchResourcesOutput } from "../models/models_0";
import { de_SearchResourcesCommand, se_SearchResourcesCommand } from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandInput extends SearchResourcesInput {}
/**
 * @public
 *
 * The output of {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandOutput extends SearchResourcesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of Amazon Web Services resource identifiers that matches the specified query. The
 *             query uses the same format as a resource query in a <a>CreateGroup</a> or
 *                 <a>UpdateGroupQuery</a> operation.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:SearchResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudformation:DescribeStacks</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudformation:ListStackResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>tag:GetResources</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, SearchResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, SearchResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const input = { // SearchResourcesInput
 *   ResourceQuery: { // ResourceQuery
 *     Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 *     Query: "STRING_VALUE", // required
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchResourcesCommand(input);
 * const response = await client.send(command);
 * // { // SearchResourcesOutput
 * //   ResourceIdentifiers: [ // ResourceIdentifierList
 * //     { // ResourceIdentifier
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   QueryErrors: [ // QueryErrorList
 * //     { // QueryError
 * //       ErrorCode: "CLOUDFORMATION_STACK_INACTIVE" || "CLOUDFORMATION_STACK_NOT_EXISTING" || "CLOUDFORMATION_STACK_UNASSUMABLE_ROLE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchResourcesCommandInput - {@link SearchResourcesCommandInput}
 * @returns {@link SearchResourcesCommandOutput}
 * @see {@link SearchResourcesCommandInput} for command's `input` shape.
 * @see {@link SearchResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request includes one or more parameters that violate validation rules.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request. Check permissions.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred while processing the request. Try again later.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The request uses an HTTP method that isn't allowed for the specified resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request was rejected because it doesn't have valid credentials for the target
 *             resource.</p>
 *
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 */
export class SearchResourcesCommand extends $Command<
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
  ResourceGroupsClientResolvedConfig
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
  constructor(readonly input: SearchResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchResourcesCommandInput, SearchResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "SearchResourcesCommand";
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
  private serialize(input: SearchResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchResourcesCommandOutput> {
    return de_SearchResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
