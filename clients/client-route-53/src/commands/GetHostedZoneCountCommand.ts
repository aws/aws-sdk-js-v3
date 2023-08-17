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

import { GetHostedZoneCountRequest, GetHostedZoneCountResponse } from "../models/models_0";
import { de_GetHostedZoneCountCommand, se_GetHostedZoneCountCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetHostedZoneCountCommand}.
 */
export interface GetHostedZoneCountCommandInput extends GetHostedZoneCountRequest {}
/**
 * @public
 *
 * The output of {@link GetHostedZoneCountCommand}.
 */
export interface GetHostedZoneCountCommandOutput extends GetHostedZoneCountResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the number of hosted zones that are associated with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = {};
 * const command = new GetHostedZoneCountCommand(input);
 * const response = await client.send(command);
 * // { // GetHostedZoneCountResponse
 * //   HostedZoneCount: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetHostedZoneCountCommandInput - {@link GetHostedZoneCountCommandInput}
 * @returns {@link GetHostedZoneCountCommandOutput}
 * @see {@link GetHostedZoneCountCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class GetHostedZoneCountCommand extends $Command<
  GetHostedZoneCountCommandInput,
  GetHostedZoneCountCommandOutput,
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
  constructor(readonly input: GetHostedZoneCountCommandInput) {
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
  ): Handler<GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHostedZoneCountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHostedZoneCountCommand";
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
  private serialize(input: GetHostedZoneCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetHostedZoneCountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostedZoneCountCommandOutput> {
    return de_GetHostedZoneCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
