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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { ListObservabilityConfigurationsRequest, ListObservabilityConfigurationsResponse } from "../models/models_0";
import {
  de_ListObservabilityConfigurationsCommand,
  se_ListObservabilityConfigurationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListObservabilityConfigurationsCommand}.
 */
export interface ListObservabilityConfigurationsCommandInput extends ListObservabilityConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListObservabilityConfigurationsCommand}.
 */
export interface ListObservabilityConfigurationsCommandOutput
  extends ListObservabilityConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific
 *       configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
 *       name.</p>
 *          <p>To retrieve a full description of a particular configuration revision, call  and provide one
 *       of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListObservabilityConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListObservabilityConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // ListObservabilityConfigurationsRequest
 *   ObservabilityConfigurationName: "STRING_VALUE",
 *   LatestOnly: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListObservabilityConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListObservabilityConfigurationsResponse
 * //   ObservabilityConfigurationSummaryList: [ // ObservabilityConfigurationSummaryList // required
 * //     { // ObservabilityConfigurationSummary
 * //       ObservabilityConfigurationArn: "STRING_VALUE",
 * //       ObservabilityConfigurationName: "STRING_VALUE",
 * //       ObservabilityConfigurationRevision: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListObservabilityConfigurationsCommandInput - {@link ListObservabilityConfigurationsCommandInput}
 * @returns {@link ListObservabilityConfigurationsCommandOutput}
 * @see {@link ListObservabilityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListObservabilityConfigurationsCommandOutput} for command's `response` shape.
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
export class ListObservabilityConfigurationsCommand extends $Command<
  ListObservabilityConfigurationsCommandInput,
  ListObservabilityConfigurationsCommandOutput,
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
  constructor(readonly input: ListObservabilityConfigurationsCommandInput) {
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
  ): Handler<ListObservabilityConfigurationsCommandInput, ListObservabilityConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListObservabilityConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "ListObservabilityConfigurationsCommand";
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
  private serialize(
    input: ListObservabilityConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListObservabilityConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListObservabilityConfigurationsCommandOutput> {
    return de_ListObservabilityConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
