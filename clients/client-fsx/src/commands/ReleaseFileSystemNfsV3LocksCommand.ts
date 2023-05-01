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
import { ReleaseFileSystemNfsV3LocksRequest, ReleaseFileSystemNfsV3LocksResponse } from "../models/models_0";
import { de_ReleaseFileSystemNfsV3LocksCommand, se_ReleaseFileSystemNfsV3LocksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ReleaseFileSystemNfsV3LocksCommand}.
 */
export interface ReleaseFileSystemNfsV3LocksCommandInput extends ReleaseFileSystemNfsV3LocksRequest {}
/**
 * @public
 *
 * The output of {@link ReleaseFileSystemNfsV3LocksCommand}.
 */
export interface ReleaseFileSystemNfsV3LocksCommandOutput
  extends ReleaseFileSystemNfsV3LocksResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Releases the file system lock from an Amazon FSx for OpenZFS file
 *             system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, ReleaseFileSystemNfsV3LocksCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, ReleaseFileSystemNfsV3LocksCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // ReleaseFileSystemNfsV3LocksRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new ReleaseFileSystemNfsV3LocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ReleaseFileSystemNfsV3LocksCommandInput - {@link ReleaseFileSystemNfsV3LocksCommandInput}
 * @returns {@link ReleaseFileSystemNfsV3LocksCommandOutput}
 * @see {@link ReleaseFileSystemNfsV3LocksCommandInput} for command's `input` shape.
 * @see {@link ReleaseFileSystemNfsV3LocksCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 *
 */
export class ReleaseFileSystemNfsV3LocksCommand extends $Command<
  ReleaseFileSystemNfsV3LocksCommandInput,
  ReleaseFileSystemNfsV3LocksCommandOutput,
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
  constructor(readonly input: ReleaseFileSystemNfsV3LocksCommandInput) {
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
  ): Handler<ReleaseFileSystemNfsV3LocksCommandInput, ReleaseFileSystemNfsV3LocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReleaseFileSystemNfsV3LocksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "ReleaseFileSystemNfsV3LocksCommand";
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
  private serialize(input: ReleaseFileSystemNfsV3LocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReleaseFileSystemNfsV3LocksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReleaseFileSystemNfsV3LocksCommandOutput> {
    return de_ReleaseFileSystemNfsV3LocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
