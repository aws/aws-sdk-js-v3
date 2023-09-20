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
import { EphemerisIdResponse, UpdateEphemerisRequest } from "../models/models_0";
import { de_UpdateEphemerisCommand, se_UpdateEphemerisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEphemerisCommand}.
 */
export interface UpdateEphemerisCommandInput extends UpdateEphemerisRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEphemerisCommand}.
 */
export interface UpdateEphemerisCommandOutput extends EphemerisIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing ephemeris</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // UpdateEphemerisRequest
 *   ephemerisId: "STRING_VALUE", // required
 *   enabled: true || false, // required
 *   name: "STRING_VALUE",
 *   priority: Number("int"),
 * };
 * const command = new UpdateEphemerisCommand(input);
 * const response = await client.send(command);
 * // { // EphemerisIdResponse
 * //   ephemerisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEphemerisCommandInput - {@link UpdateEphemerisCommandInput}
 * @returns {@link UpdateEphemerisCommandOutput}
 * @see {@link UpdateEphemerisCommandInput} for command's `input` shape.
 * @see {@link UpdateEphemerisCommandOutput} for command's `response` shape.
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
export class UpdateEphemerisCommand extends $Command<
  UpdateEphemerisCommandInput,
  UpdateEphemerisCommandOutput,
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
  constructor(readonly input: UpdateEphemerisCommandInput) {
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
  ): Handler<UpdateEphemerisCommandInput, UpdateEphemerisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEphemerisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "UpdateEphemerisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GroundStation",
        operation: "UpdateEphemeris",
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
  private serialize(input: UpdateEphemerisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEphemerisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEphemerisCommandOutput> {
    return de_UpdateEphemerisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
