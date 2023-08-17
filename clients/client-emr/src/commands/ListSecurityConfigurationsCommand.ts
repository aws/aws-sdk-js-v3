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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListSecurityConfigurationsInput, ListSecurityConfigurationsOutput } from "../models/models_0";
import { de_ListSecurityConfigurationsCommand, se_ListSecurityConfigurationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityConfigurationsCommand}.
 */
export interface ListSecurityConfigurationsCommandInput extends ListSecurityConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListSecurityConfigurationsCommand}.
 */
export interface ListSecurityConfigurationsCommandOutput extends ListSecurityConfigurationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the security configurations visible to this account, providing their creation
 *          dates and times, and their names. This call returns a maximum of 50 clusters per call, but
 *          returns a marker to track the paging of the cluster list across multiple
 *          ListSecurityConfigurations calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListSecurityConfigurationsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListSecurityConfigurationsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListSecurityConfigurationsInput
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityConfigurationsOutput
 * //   SecurityConfigurations: [ // SecurityConfigurationList
 * //     { // SecurityConfigurationSummary
 * //       Name: "STRING_VALUE",
 * //       CreationDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityConfigurationsCommandInput - {@link ListSecurityConfigurationsCommandInput}
 * @returns {@link ListSecurityConfigurationsCommandOutput}
 * @see {@link ListSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class ListSecurityConfigurationsCommand extends $Command<
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: ListSecurityConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecurityConfigurationsCommandInput, ListSecurityConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSecurityConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListSecurityConfigurationsCommand";
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
  private serialize(input: ListSecurityConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSecurityConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSecurityConfigurationsCommandOutput> {
    return de_ListSecurityConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
