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
import { CreateVolumeRequest, CreateVolumeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateVolumeCommand,
  serializeAws_json1_1CreateVolumeCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateVolumeCommand}.
 */
export interface CreateVolumeCommandInput extends CreateVolumeRequest {}
/**
 * @public
 *
 * The output of {@link CreateVolumeCommand}.
 */
export interface CreateVolumeCommandOutput extends CreateVolumeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateVolumeCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateVolumeCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateVolumeCommandInput - {@link CreateVolumeCommandInput}
 * @returns {@link CreateVolumeCommandOutput}
 * @see {@link CreateVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateVolumeCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link MissingVolumeConfiguration} (client fault)
 *  <p>A volume configuration is required for this operation.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 *
 */
export class CreateVolumeCommand extends $Command<
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
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
  constructor(readonly input: CreateVolumeCommandInput) {
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
  ): Handler<CreateVolumeCommandInput, CreateVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateVolumeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateVolumeCommand";
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
  private serialize(input: CreateVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVolumeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVolumeCommandOutput> {
    return deserializeAws_json1_1CreateVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
