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

import { GetCheckerIpRangesRequest, GetCheckerIpRangesResponse } from "../models/models_0";
import { de_GetCheckerIpRangesCommand, se_GetCheckerIpRangesCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCheckerIpRangesCommand}.
 */
export interface GetCheckerIpRangesCommandInput extends GetCheckerIpRangesRequest {}
/**
 * @public
 *
 * The output of {@link GetCheckerIpRangesCommand}.
 */
export interface GetCheckerIpRangesCommandOutput extends GetCheckerIpRangesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Route 53 does not perform authorization for this API because it retrieves information
 * 			that is already available to the public.</p>
 *          <important>
 *             <p>
 *                <code>GetCheckerIpRanges</code> still works, but we recommend that you download
 * 				ip-ranges.json, which includes IP address ranges for all Amazon Web Services
 * 				services. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges
 * 					of Amazon Route 53 Servers</a> in the <i>Amazon Route 53 Developer
 * 					Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetCheckerIpRangesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetCheckerIpRangesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = {};
 * const command = new GetCheckerIpRangesCommand(input);
 * const response = await client.send(command);
 * // { // GetCheckerIpRangesResponse
 * //   CheckerIpRanges: [ // CheckerIpRanges // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCheckerIpRangesCommandInput - {@link GetCheckerIpRangesCommandInput}
 * @returns {@link GetCheckerIpRangesCommandOutput}
 * @see {@link GetCheckerIpRangesCommandInput} for command's `input` shape.
 * @see {@link GetCheckerIpRangesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class GetCheckerIpRangesCommand extends $Command<
  GetCheckerIpRangesCommandInput,
  GetCheckerIpRangesCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: GetCheckerIpRangesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCheckerIpRangesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetCheckerIpRangesCommand";
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
  private serialize(input: GetCheckerIpRangesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCheckerIpRangesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCheckerIpRangesCommandOutput> {
    return de_GetCheckerIpRangesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
