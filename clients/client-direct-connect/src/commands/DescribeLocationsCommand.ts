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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Locations } from "../models/models_0";
import { de_DescribeLocationsCommand, se_DescribeLocationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationsCommand}.
 */
export interface DescribeLocationsCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeLocationsCommand}.
 */
export interface DescribeLocationsCommandOutput extends Locations, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling
 *       <a>CreateConnection</a> or <a>CreateInterconnect</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeLocationsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeLocationsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = {};
 * const command = new DescribeLocationsCommand(input);
 * const response = await client.send(command);
 * // { // Locations
 * //   locations: [ // LocationList
 * //     { // Location
 * //       locationCode: "STRING_VALUE",
 * //       locationName: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       availablePortSpeeds: [ // AvailablePortSpeeds
 * //         "STRING_VALUE",
 * //       ],
 * //       availableProviders: [ // ProviderList
 * //         "STRING_VALUE",
 * //       ],
 * //       availableMacSecPortSpeeds: [ // AvailableMacSecPortSpeeds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLocationsCommandInput - {@link DescribeLocationsCommandInput}
 * @returns {@link DescribeLocationsCommandOutput}
 * @see {@link DescribeLocationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class DescribeLocationsCommand extends $Command<
  DescribeLocationsCommandInput,
  DescribeLocationsCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: DescribeLocationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLocationsCommandInput, DescribeLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "DescribeLocations",
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
  private serialize(input: DescribeLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLocationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLocationsCommandOutput> {
    return de_DescribeLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
