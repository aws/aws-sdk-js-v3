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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListEphemeridesRequest, ListEphemeridesResponse } from "../models/models_0";
import { de_ListEphemeridesCommand, se_ListEphemeridesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEphemeridesCommand}.
 */
export interface ListEphemeridesCommandInput extends ListEphemeridesRequest {}
/**
 * @public
 *
 * The output of {@link ListEphemeridesCommand}.
 */
export interface ListEphemeridesCommandOutput extends ListEphemeridesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List existing ephemerides.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListEphemeridesCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListEphemeridesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // ListEphemeridesRequest
 *   satelliteId: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   statusList: [ // EphemerisStatusList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEphemeridesCommand(input);
 * const response = await client.send(command);
 * // { // ListEphemeridesResponse
 * //   nextToken: "STRING_VALUE",
 * //   ephemerides: [ // EphemeridesList
 * //     { // EphemerisItem
 * //       ephemerisId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       priority: Number("int"),
 * //       enabled: true || false,
 * //       creationTime: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE",
 * //       sourceS3Object: { // S3Object
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEphemeridesCommandInput - {@link ListEphemeridesCommandInput}
 * @returns {@link ListEphemeridesCommandOutput}
 * @see {@link ListEphemeridesCommandInput} for command's `input` shape.
 * @see {@link ListEphemeridesCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class ListEphemeridesCommand extends $Command<
  ListEphemeridesCommandInput,
  ListEphemeridesCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: ListEphemeridesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEphemeridesCommandInput, ListEphemeridesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEphemeridesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "ListEphemeridesCommand";
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
  private serialize(input: ListEphemeridesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEphemeridesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEphemeridesCommandOutput> {
    return de_ListEphemeridesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
