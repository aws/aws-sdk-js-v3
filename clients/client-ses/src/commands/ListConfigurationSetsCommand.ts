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

import { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/models_0";
import { de_ListConfigurationSetsCommand, se_ListConfigurationSetsCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationSetsCommand}.
 */
export interface ListConfigurationSetsCommandInput extends ListConfigurationSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationSetsCommand}.
 */
export interface ListConfigurationSetsCommandOutput extends ListConfigurationSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of the configuration sets associated with your Amazon SES account in the
 *             current Amazon Web Services Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html">Monitoring
 *                 Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer
 *                 Guide.</i>
 *          </p>
 *          <p>You can execute this operation no more than once per second. This operation returns up
 *             to 1,000 configuration sets each time it is run. If your Amazon SES account has more than
 *             1,000 configuration sets, this operation also returns <code>NextToken</code>. You can
 *             then execute the <code>ListConfigurationSets</code> operation again, passing the
 *                 <code>NextToken</code> parameter and the value of the NextToken element to retrieve
 *             additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListConfigurationSetsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListConfigurationSetsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListConfigurationSetsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationSetsResponse
 * //   ConfigurationSets: [ // ConfigurationSets
 * //     { // ConfigurationSet
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationSetsCommandInput - {@link ListConfigurationSetsCommandInput}
 * @returns {@link ListConfigurationSetsCommandOutput}
 * @see {@link ListConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export class ListConfigurationSetsCommand extends $Command<
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: ListConfigurationSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListConfigurationSetsCommand";
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
  private serialize(input: ListConfigurationSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListConfigurationSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConfigurationSetsCommandOutput> {
    return de_ListConfigurationSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
