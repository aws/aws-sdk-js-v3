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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { ListAutoScalingConfigurationsRequest, ListAutoScalingConfigurationsResponse } from "../models/models_0";
import {
  de_ListAutoScalingConfigurationsCommand,
  se_ListAutoScalingConfigurationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAutoScalingConfigurationsCommand}.
 */
export interface ListAutoScalingConfigurationsCommandInput extends ListAutoScalingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutoScalingConfigurationsCommand}.
 */
export interface ListAutoScalingConfigurationsCommandOutput
  extends ListAutoScalingConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific
 *       configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
 *       name.</p>
 *          <p>To retrieve a full description of a particular configuration revision, call  and provide one of
 *       the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListAutoScalingConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListAutoScalingConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // ListAutoScalingConfigurationsRequest
 *   AutoScalingConfigurationName: "STRING_VALUE",
 *   LatestOnly: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAutoScalingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutoScalingConfigurationsResponse
 * //   AutoScalingConfigurationSummaryList: [ // AutoScalingConfigurationSummaryList // required
 * //     { // AutoScalingConfigurationSummary
 * //       AutoScalingConfigurationArn: "STRING_VALUE",
 * //       AutoScalingConfigurationName: "STRING_VALUE",
 * //       AutoScalingConfigurationRevision: Number("int"),
 * //       Status: "ACTIVE" || "INACTIVE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       HasAssociatedService: true || false,
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutoScalingConfigurationsCommandInput - {@link ListAutoScalingConfigurationsCommandInput}
 * @returns {@link ListAutoScalingConfigurationsCommandOutput}
 * @see {@link ListAutoScalingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAutoScalingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class ListAutoScalingConfigurationsCommand extends $Command<
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
  AppRunnerClientResolvedConfig
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
  constructor(readonly input: ListAutoScalingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAutoScalingConfigurationsCommandInput, ListAutoScalingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAutoScalingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "ListAutoScalingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "ListAutoScalingConfigurations",
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
  private serialize(input: ListAutoScalingConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAutoScalingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAutoScalingConfigurationsCommandOutput> {
    return de_ListAutoScalingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
