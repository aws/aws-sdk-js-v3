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

import { ListSlackChannelConfigurationsRequest, ListSlackChannelConfigurationsResult } from "../models/models_0";
import {
  de_ListSlackChannelConfigurationsCommand,
  se_ListSlackChannelConfigurationsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSlackChannelConfigurationsCommand}.
 */
export interface ListSlackChannelConfigurationsCommandInput extends ListSlackChannelConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSlackChannelConfigurationsCommand}.
 */
export interface ListSlackChannelConfigurationsCommandOutput
  extends ListSlackChannelConfigurationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the Slack channel configurations for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, ListSlackChannelConfigurationsCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, ListSlackChannelConfigurationsCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * const client = new SupportAppClient(config);
 * const input = { // ListSlackChannelConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSlackChannelConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSlackChannelConfigurationsResult
 * //   nextToken: "STRING_VALUE",
 * //   slackChannelConfigurations: [ // slackChannelConfigurationList // required
 * //     { // SlackChannelConfiguration
 * //       teamId: "STRING_VALUE", // required
 * //       channelId: "STRING_VALUE", // required
 * //       channelName: "STRING_VALUE",
 * //       notifyOnCreateOrReopenCase: true || false,
 * //       notifyOnAddCorrespondenceToCase: true || false,
 * //       notifyOnResolveCase: true || false,
 * //       notifyOnCaseSeverity: "STRING_VALUE",
 * //       channelRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSlackChannelConfigurationsCommandInput - {@link ListSlackChannelConfigurationsCommandInput}
 * @returns {@link ListSlackChannelConfigurationsCommandOutput}
 * @see {@link ListSlackChannelConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSlackChannelConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link SupportAppServiceException}
 * <p>Base exception class for all service exceptions from SupportApp service.</p>
 *
 */
export class ListSlackChannelConfigurationsCommand extends $Command<
  ListSlackChannelConfigurationsCommandInput,
  ListSlackChannelConfigurationsCommandOutput,
  SupportAppClientResolvedConfig
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
  constructor(readonly input: ListSlackChannelConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportAppClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSlackChannelConfigurationsCommandInput, ListSlackChannelConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSlackChannelConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportAppClient";
    const commandName = "ListSlackChannelConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SupportApp",
        operation: "ListSlackChannelConfigurations",
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
  private serialize(
    input: ListSlackChannelConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListSlackChannelConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSlackChannelConfigurationsCommandOutput> {
    return de_ListSlackChannelConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
