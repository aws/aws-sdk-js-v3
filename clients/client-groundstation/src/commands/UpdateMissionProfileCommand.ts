// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import {
  MissionProfileIdResponse,
  MissionProfileIdResponseFilterSensitiveLog,
  UpdateMissionProfileRequest,
  UpdateMissionProfileRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMissionProfileCommand,
  serializeAws_restJson1UpdateMissionProfileCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateMissionProfileCommandInput extends UpdateMissionProfileRequest {}
export interface UpdateMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {}

/**
 * <p>Updates a mission profile.</p>
 *          <p>Updating a mission profile will not update the execution parameters
 *          for existing future contacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new UpdateMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 */
export class UpdateMissionProfileCommand extends $Command<
  UpdateMissionProfileCommandInput,
  UpdateMissionProfileCommandOutput,
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

  constructor(readonly input: UpdateMissionProfileCommandInput) {
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
  ): Handler<UpdateMissionProfileCommandInput, UpdateMissionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMissionProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "UpdateMissionProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMissionProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: MissionProfileIdResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMissionProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateMissionProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMissionProfileCommandOutput> {
    return deserializeAws_restJson1UpdateMissionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
