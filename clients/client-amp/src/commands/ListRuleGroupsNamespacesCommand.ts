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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { ListRuleGroupsNamespacesRequest, ListRuleGroupsNamespacesResponse } from "../models/models_0";
import { de_ListRuleGroupsNamespacesCommand, se_ListRuleGroupsNamespacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRuleGroupsNamespacesCommand}.
 */
export interface ListRuleGroupsNamespacesCommandInput extends ListRuleGroupsNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListRuleGroupsNamespacesCommand}.
 */
export interface ListRuleGroupsNamespacesCommandOutput extends ListRuleGroupsNamespacesResponse, __MetadataBearer {}

/**
 * @public
 * Lists rule groups namespaces.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListRuleGroupsNamespacesCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListRuleGroupsNamespacesCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // ListRuleGroupsNamespacesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRuleGroupsNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleGroupsNamespacesResponse
 * //   ruleGroupsNamespaces: [ // RuleGroupsNamespaceSummaryList // required
 * //     { // RuleGroupsNamespaceSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: { // RuleGroupsNamespaceStatus
 * //         statusCode: "STRING_VALUE", // required
 * //         statusReason: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"), // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuleGroupsNamespacesCommandInput - {@link ListRuleGroupsNamespacesCommandInput}
 * @returns {@link ListRuleGroupsNamespacesCommandOutput}
 * @see {@link ListRuleGroupsNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListRuleGroupsNamespacesCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 */
export class ListRuleGroupsNamespacesCommand extends $Command<
  ListRuleGroupsNamespacesCommandInput,
  ListRuleGroupsNamespacesCommandOutput,
  AmpClientResolvedConfig
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
  constructor(readonly input: ListRuleGroupsNamespacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRuleGroupsNamespacesCommandInput, ListRuleGroupsNamespacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRuleGroupsNamespacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "ListRuleGroupsNamespacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPrometheusService",
        operation: "ListRuleGroupsNamespaces",
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
  private serialize(input: ListRuleGroupsNamespacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRuleGroupsNamespacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRuleGroupsNamespacesCommandOutput> {
    return de_ListRuleGroupsNamespacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
