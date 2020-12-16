import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetJobUnlockCodeRequest, GetJobUnlockCodeResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetJobUnlockCodeCommand,
  serializeAws_json1_1GetJobUnlockCodeCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetJobUnlockCodeCommandInput = GetJobUnlockCodeRequest;
export type GetJobUnlockCodeCommandOutput = GetJobUnlockCodeResult & __MetadataBearer;

/**
 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular
 *         <code>UnlockCode</code> value can be accessed for up to 90 days after the associated job has
 *       been created.</p>
 *
 *          <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric
 *       characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed
 *       along with the manifest to the Snow device through the Snowball client when the client is started
 *       for the first time.</p>
 *
 *          <p>As a best practice, we recommend that you don't save a copy of the
 *         <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these
 *       separately helps prevent unauthorized parties from gaining access to the Snow device associated
 *       with that job.</p>
 */
export class GetJobUnlockCodeCommand extends $Command<
  GetJobUnlockCodeCommandInput,
  GetJobUnlockCodeCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetJobUnlockCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobUnlockCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJobUnlockCodeResult.filterSensitiveLog,
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
