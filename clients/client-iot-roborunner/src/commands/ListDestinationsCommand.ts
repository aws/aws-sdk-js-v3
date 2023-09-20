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

import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { ListDestinationsRequest, ListDestinationsResponse } from "../models/models_0";
import { de_ListDestinationsCommand, se_ListDestinationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDestinationsCommand}.
 */
export interface ListDestinationsCommandInput extends ListDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDestinationsCommand}.
 */
export interface ListDestinationsCommandOutput extends ListDestinationsResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to list destinations
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, ListDestinationsCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, ListDestinationsCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // ListDestinationsRequest
 *   site: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   state: "STRING_VALUE",
 * };
 * const command = new ListDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDestinationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   destinations: [ // Destinations
 * //     { // Destination
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       site: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       state: "STRING_VALUE", // required
 * //       additionalFixedProperties: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDestinationsCommandInput - {@link ListDestinationsCommandInput}
 * @returns {@link ListDestinationsCommandOutput}
 * @see {@link ListDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListDestinationsCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *   User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Exception thrown if something goes wrong within the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Exception thrown if a resource referenced in the request doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Exception thrown if the api has been called too quickly be the client.
 *
 * @throws {@link ValidationException} (client fault)
 *  Exception thrown if an invalid parameter is provided to an API.
 *
 * @throws {@link IoTRoboRunnerServiceException}
 * <p>Base exception class for all service exceptions from IoTRoboRunner service.</p>
 *
 */
export class ListDestinationsCommand extends $Command<
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
  IoTRoboRunnerClientResolvedConfig
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
  constructor(readonly input: ListDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTRoboRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDestinationsCommandInput, ListDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDestinationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "ListDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTRoboRunner",
        operation: "ListDestinations",
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
  private serialize(input: ListDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDestinationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDestinationsCommandOutput> {
    return de_ListDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
