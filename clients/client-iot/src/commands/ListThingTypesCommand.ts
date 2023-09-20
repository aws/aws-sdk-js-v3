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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingTypesRequest, ListThingTypesResponse } from "../models/models_2";
import { de_ListThingTypesCommand, se_ListThingTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListThingTypesCommand}.
 */
export interface ListThingTypesCommandInput extends ListThingTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListThingTypesCommand}.
 */
export interface ListThingTypesCommandOutput extends ListThingTypesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the existing thing types.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingTypesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingTypesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListThingTypesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   thingTypeName: "STRING_VALUE",
 * };
 * const command = new ListThingTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListThingTypesResponse
 * //   thingTypes: [ // ThingTypeList
 * //     { // ThingTypeDefinition
 * //       thingTypeName: "STRING_VALUE",
 * //       thingTypeArn: "STRING_VALUE",
 * //       thingTypeProperties: { // ThingTypeProperties
 * //         thingTypeDescription: "STRING_VALUE",
 * //         searchableAttributes: [ // SearchableAttributes
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       thingTypeMetadata: { // ThingTypeMetadata
 * //         deprecated: true || false,
 * //         deprecationDate: new Date("TIMESTAMP"),
 * //         creationDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingTypesCommandInput - {@link ListThingTypesCommandInput}
 * @returns {@link ListThingTypesCommandOutput}
 * @see {@link ListThingTypesCommandInput} for command's `input` shape.
 * @see {@link ListThingTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class ListThingTypesCommand extends $Command<
  ListThingTypesCommandInput,
  ListThingTypesCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: ListThingTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThingTypesCommandInput, ListThingTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListThingTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ListThingTypes",
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
  private serialize(input: ListThingTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListThingTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThingTypesCommandOutput> {
    return de_ListThingTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
