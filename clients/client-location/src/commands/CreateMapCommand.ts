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
import { CreateMapRequest, CreateMapResponse } from "../models/models_0";
import { de_CreateMapCommand, se_CreateMapCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMapCommand}.
 */
export interface CreateMapCommandInput extends CreateMapRequest {}
/**
 * @public
 *
 * The output of {@link CreateMapCommand}.
 */
export interface CreateMapCommandOutput extends CreateMapResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different
 *             styles sourced from global location data providers.</p>
 *          <note>
 *             <p>If your application is tracking or routing assets you use in your business, such
 *                 as delivery vehicles or employees, you must not use Esri as your geolocation
 *                 provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services
 *                     service terms</a> for more details.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // CreateMapRequest
 *   MapName: "STRING_VALUE", // required
 *   Configuration: { // MapConfiguration
 *     Style: "STRING_VALUE", // required
 *     PoliticalView: "STRING_VALUE",
 *   },
 *   PricingPlan: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMapCommand(input);
 * const response = await client.send(command);
 * // { // CreateMapResponse
 * //   MapName: "STRING_VALUE", // required
 * //   MapArn: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateMapCommandInput - {@link CreateMapCommandInput}
 * @returns {@link CreateMapCommandOutput}
 * @see {@link CreateMapCommandInput} for command's `input` shape.
 * @see {@link CreateMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was unsuccessful because of a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation was denied because the request would exceed the maximum <a href="https://docs.aws.amazon.com/location/latest/developerguide/location-quotas.html">quota</a>
 *       set for Amazon Location Service.</p>
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
export class CreateMapCommand extends $Command<
  CreateMapCommandInput,
  CreateMapCommandOutput,
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
  constructor(readonly input: CreateMapCommandInput) {
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
  ): Handler<CreateMapCommandInput, CreateMapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateMapCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "CreateMapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "CreateMap",
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
  private serialize(input: CreateMapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMapCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMapCommandOutput> {
    return de_CreateMapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
