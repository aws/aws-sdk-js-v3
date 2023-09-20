// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { GetChangeRequest, GetChangeResponse } from "../models/models_0";
import { de_GetChangeCommand, se_GetChangeCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetChangeCommand}.
 */
export interface GetChangeCommandInput extends GetChangeRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeCommand}.
 */
export interface GetChangeCommandOutput extends GetChangeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the current status of a change batch request. The status is one of the
 * 			following values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PENDING</code> indicates that the changes in this request have not
 * 					propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all
 * 					change batch requests.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSYNC</code> indicates that the changes have propagated to all Route 53
 * 					DNS servers managing the hosted zone. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetChangeCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetChangeCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetChangeRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetChangeCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChangeCommandInput - {@link GetChangeCommandInput}
 * @returns {@link GetChangeCommandOutput}
 * @see {@link GetChangeCommandInput} for command's `input` shape.
 * @see {@link GetChangeCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchChange} (client fault)
 *  <p>A change with the specified change ID does not exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class GetChangeCommand extends $Command<
  GetChangeCommandInput,
  GetChangeCommandOutput,
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
  constructor(readonly input: GetChangeCommandInput) {
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
  ): Handler<GetChangeCommandInput, GetChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetChangeCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "GetChange",
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
  private serialize(input: GetChangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetChangeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChangeCommandOutput> {
    return de_GetChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
