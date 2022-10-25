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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import {
  PutAccountPreferencesRequest,
  PutAccountPreferencesRequestFilterSensitiveLog,
  PutAccountPreferencesResponse,
  PutAccountPreferencesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutAccountPreferencesCommand,
  serializeAws_restJson1PutAccountPreferencesCommand,
} from "../protocols/Aws_restJson1";

export interface PutAccountPreferencesCommandInput extends PutAccountPreferencesRequest {}
export interface PutAccountPreferencesCommandOutput extends PutAccountPreferencesResponse, __MetadataBearer {}

/**
 * <p>Use this operation to set the account preference in the current Amazon Web Services Region
 *       to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for
 *       new EFS file system and mount target resources. All existing resource IDs are not affected
 *       by any changes you make. You can set the ID preference during the
 *       opt-in period as EFS transitions to long resource IDs. For more information,
 *       see <a href="https://docs.aws.amazon.com/efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p>
 *          <note>
 *             <p>Starting in October, 2021, you will receive an error if you try to set the account preference
 *         to use the short 8 character format resource ID. Contact Amazon Web Services support if you
 *         receive an error and must use short IDs for file system and mount target resources.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutAccountPreferencesCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutAccountPreferencesCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutAccountPreferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutAccountPreferencesCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class PutAccountPreferencesCommand extends $Command<
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
  EFSClientResolvedConfig
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

  constructor(readonly input: PutAccountPreferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountPreferencesCommandInput, PutAccountPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccountPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "PutAccountPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountPreferencesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutAccountPreferencesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccountPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAccountPreferencesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountPreferencesCommandOutput> {
    return deserializeAws_restJson1PutAccountPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
