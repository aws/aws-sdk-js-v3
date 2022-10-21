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

import {
  GetJobUnlockCodeRequest,
  GetJobUnlockCodeRequestFilterSensitiveLog,
  GetJobUnlockCodeResult,
  GetJobUnlockCodeResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetJobUnlockCodeCommand,
  serializeAws_json1_1GetJobUnlockCodeCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface GetJobUnlockCodeCommandInput extends GetJobUnlockCodeRequest {}
export interface GetJobUnlockCodeCommandOutput extends GetJobUnlockCodeResult, __MetadataBearer {}

/**
 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular
 *         <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job
 *       has been created.</p>
 *
 *          <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric
 *       characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed
 *       along with the manifest to the Snow device through the Snowball client when the client is
 *       started for the first time. The only valid status for calling this API is
 *         <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for
 *       securing your device and should only be used when you have the device.</p>
 *
 *          <p>As a best practice, we recommend that you don't save a copy of the
 *         <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these
 *       separately helps prevent unauthorized parties from gaining access to the Snow device
 *       associated with that job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobUnlockCodeCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobUnlockCodeCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetJobUnlockCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobUnlockCodeCommandInput} for command's `input` shape.
 * @see {@link GetJobUnlockCodeCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class GetJobUnlockCodeCommand extends $Command<
  GetJobUnlockCodeCommandInput,
  GetJobUnlockCodeCommandOutput,
  SnowballClientResolvedConfig
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

  constructor(readonly input: GetJobUnlockCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetJobUnlockCodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetJobUnlockCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobUnlockCodeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetJobUnlockCodeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJobUnlockCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetJobUnlockCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobUnlockCodeCommandOutput> {
    return deserializeAws_json1_1GetJobUnlockCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
