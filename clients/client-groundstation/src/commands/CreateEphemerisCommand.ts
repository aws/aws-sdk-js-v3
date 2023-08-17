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
import { CreateEphemerisRequest, EphemerisIdResponse } from "../models/models_0";
import { de_CreateEphemerisCommand, se_CreateEphemerisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEphemerisCommand}.
 */
export interface CreateEphemerisCommandInput extends CreateEphemerisRequest {}
/**
 * @public
 *
 * The output of {@link CreateEphemerisCommand}.
 */
export interface CreateEphemerisCommandOutput extends EphemerisIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Ephemeris with the specified <code>EphemerisData</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // CreateEphemerisRequest
 *   satelliteId: "STRING_VALUE", // required
 *   enabled: true || false,
 *   priority: Number("int"),
 *   expirationTime: new Date("TIMESTAMP"),
 *   name: "STRING_VALUE", // required
 *   kmsKeyArn: "STRING_VALUE",
 *   ephemeris: { // EphemerisData Union: only one key present
 *     tle: { // TLEEphemeris
 *       s3Object: { // S3Object
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         version: "STRING_VALUE",
 *       },
 *       tleData: [ // TLEDataList
 *         { // TLEData
 *           tleLine1: "STRING_VALUE", // required
 *           tleLine2: "STRING_VALUE", // required
 *           validTimeRange: { // TimeRange
 *             startTime: new Date("TIMESTAMP"), // required
 *             endTime: new Date("TIMESTAMP"), // required
 *           },
 *         },
 *       ],
 *     },
 *     oem: { // OEMEphemeris
 *       s3Object: {
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         version: "STRING_VALUE",
 *       },
 *       oemData: "STRING_VALUE",
 *     },
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEphemerisCommand(input);
 * const response = await client.send(command);
 * // { // EphemerisIdResponse
 * //   ephemerisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEphemerisCommandInput - {@link CreateEphemerisCommandInput}
 * @returns {@link CreateEphemerisCommandOutput}
 * @see {@link CreateEphemerisCommandInput} for command's `input` shape.
 * @see {@link CreateEphemerisCommandOutput} for command's `response` shape.
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
export class CreateEphemerisCommand extends $Command<
  CreateEphemerisCommandInput,
  CreateEphemerisCommandOutput,
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
  constructor(readonly input: CreateEphemerisCommandInput) {
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
  ): Handler<CreateEphemerisCommandInput, CreateEphemerisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEphemerisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "CreateEphemerisCommand";
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
  private serialize(input: CreateEphemerisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEphemerisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEphemerisCommandOutput> {
    return de_CreateEphemerisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
