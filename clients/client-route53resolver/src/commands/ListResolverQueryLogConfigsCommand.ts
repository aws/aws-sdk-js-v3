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

import { ListResolverQueryLogConfigsRequest, ListResolverQueryLogConfigsResponse } from "../models/models_0";
import { de_ListResolverQueryLogConfigsCommand, se_ListResolverQueryLogConfigsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResolverQueryLogConfigsCommand}.
 */
export interface ListResolverQueryLogConfigsCommandInput extends ListResolverQueryLogConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverQueryLogConfigsCommand}.
 */
export interface ListResolverQueryLogConfigsCommandOutput
  extends ListResolverQueryLogConfigsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save
 * 			DNS query logs and specifies the VPCs that you want to log queries for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverQueryLogConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverQueryLogConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverQueryLogConfigsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortBy: "STRING_VALUE",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 * };
 * const command = new ListResolverQueryLogConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverQueryLogConfigsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * //   TotalFilteredCount: Number("int"),
 * //   ResolverQueryLogConfigs: [ // ResolverQueryLogConfigList
 * //     { // ResolverQueryLogConfig
 * //       Id: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Status: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //       ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //       AssociationCount: Number("int"),
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverQueryLogConfigsCommandInput - {@link ListResolverQueryLogConfigsCommandInput}
 * @returns {@link ListResolverQueryLogConfigsCommandOutput}
 * @see {@link ListResolverQueryLogConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverQueryLogConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class ListResolverQueryLogConfigsCommand extends $Command<
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
  Route53ResolverClientResolvedConfig
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
  constructor(readonly input: ListResolverQueryLogConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResolverQueryLogConfigsCommandInput, ListResolverQueryLogConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResolverQueryLogConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverQueryLogConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "ListResolverQueryLogConfigs",
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
  private serialize(input: ListResolverQueryLogConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResolverQueryLogConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResolverQueryLogConfigsCommandOutput> {
    return de_ListResolverQueryLogConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
