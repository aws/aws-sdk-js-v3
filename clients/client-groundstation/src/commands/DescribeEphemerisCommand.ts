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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DescribeEphemerisRequest, DescribeEphemerisResponse } from "../models/models_0";
import { de_DescribeEphemerisCommand, se_DescribeEphemerisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEphemerisCommand}.
 */
export interface DescribeEphemerisCommandInput extends DescribeEphemerisRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEphemerisCommand}.
 */
export interface DescribeEphemerisCommandOutput extends DescribeEphemerisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an existing ephemeris.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DescribeEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DescribeEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // DescribeEphemerisRequest
 *   ephemerisId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEphemerisCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEphemerisResponse
 * //   ephemerisId: "STRING_VALUE",
 * //   satelliteId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   priority: Number("int"),
 * //   creationTime: new Date("TIMESTAMP"),
 * //   enabled: true || false,
 * //   name: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   suppliedData: { // EphemerisTypeDescription Union: only one key present
 * //     tle: { // EphemerisDescription
 * //       sourceS3Object: { // S3Object
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //       ephemerisData: "STRING_VALUE",
 * //     },
 * //     oem: {
 * //       sourceS3Object: {
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //       ephemerisData: "STRING_VALUE",
 * //     },
 * //   },
 * //   invalidReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEphemerisCommandInput - {@link DescribeEphemerisCommandInput}
 * @returns {@link DescribeEphemerisCommandOutput}
 * @see {@link DescribeEphemerisCommandInput} for command's `input` shape.
 * @see {@link DescribeEphemerisCommandOutput} for command's `response` shape.
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
export class DescribeEphemerisCommand extends $Command<
  DescribeEphemerisCommandInput,
  DescribeEphemerisCommandOutput,
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
  constructor(readonly input: DescribeEphemerisCommandInput) {
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
  ): Handler<DescribeEphemerisCommandInput, DescribeEphemerisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEphemerisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "DescribeEphemerisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GroundStation",
        operation: "DescribeEphemeris",
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
  private serialize(input: DescribeEphemerisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEphemerisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEphemerisCommandOutput> {
    return de_DescribeEphemerisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
