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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListRouteCalculatorsRequest, ListRouteCalculatorsResponse } from "../models/models_0";
import { de_ListRouteCalculatorsCommand, se_ListRouteCalculatorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRouteCalculatorsCommand}.
 */
export interface ListRouteCalculatorsCommandInput extends ListRouteCalculatorsRequest {}
/**
 * @public
 *
 * The output of {@link ListRouteCalculatorsCommand}.
 */
export interface ListRouteCalculatorsCommandOutput extends ListRouteCalculatorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists route calculator resources in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListRouteCalculatorsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListRouteCalculatorsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // ListRouteCalculatorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRouteCalculatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListRouteCalculatorsResponse
 * //   Entries: [ // ListRouteCalculatorsResponseEntryList // required
 * //     { // ListRouteCalculatorsResponseEntry
 * //       CalculatorName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       DataSource: "STRING_VALUE", // required
 * //       PricingPlan: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRouteCalculatorsCommandInput - {@link ListRouteCalculatorsCommandInput}
 * @returns {@link ListRouteCalculatorsCommandOutput}
 * @see {@link ListRouteCalculatorsCommandInput} for command's `input` shape.
 * @see {@link ListRouteCalculatorsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class ListRouteCalculatorsCommand extends $Command<
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: ListRouteCalculatorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRouteCalculatorsCommandInput, ListRouteCalculatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRouteCalculatorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListRouteCalculatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "ListRouteCalculators",
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
  private serialize(input: ListRouteCalculatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRouteCalculatorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRouteCalculatorsCommandOutput> {
    return de_ListRouteCalculatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
