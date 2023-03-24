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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { RestoreVolumeFromSnapshotRequest, RestoreVolumeFromSnapshotResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RestoreVolumeFromSnapshotCommand,
  serializeAws_json1_1RestoreVolumeFromSnapshotCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RestoreVolumeFromSnapshotCommand}.
 */
export interface RestoreVolumeFromSnapshotCommandInput extends RestoreVolumeFromSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link RestoreVolumeFromSnapshotCommand}.
 */
export interface RestoreVolumeFromSnapshotCommandOutput extends RestoreVolumeFromSnapshotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns an Amazon FSx for OpenZFS volume to the state saved by the specified
 *             snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, RestoreVolumeFromSnapshotCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, RestoreVolumeFromSnapshotCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = {
 *   ClientRequestToken: "STRING_VALUE",
 *   VolumeId: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   Options: [
 *     "DELETE_INTERMEDIATE_SNAPSHOTS" || "DELETE_CLONED_VOLUMES",
 *   ],
 * };
 * const command = new RestoreVolumeFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RestoreVolumeFromSnapshotCommandInput - {@link RestoreVolumeFromSnapshotCommandInput}
 * @returns {@link RestoreVolumeFromSnapshotCommandOutput}
 * @see {@link RestoreVolumeFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreVolumeFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link VolumeNotFound} (client fault)
 *  <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 *
 *
 */
export class RestoreVolumeFromSnapshotCommand extends $Command<
  RestoreVolumeFromSnapshotCommandInput,
  RestoreVolumeFromSnapshotCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: RestoreVolumeFromSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreVolumeFromSnapshotCommandInput, RestoreVolumeFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreVolumeFromSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "RestoreVolumeFromSnapshotCommand";
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
  private serialize(input: RestoreVolumeFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreVolumeFromSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreVolumeFromSnapshotCommandOutput> {
    return deserializeAws_json1_1RestoreVolumeFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
