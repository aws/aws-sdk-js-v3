import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutContainerPolicyInput, PutContainerPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PutContainerPolicyCommand,
  serializeAws_json1_1PutContainerPolicyCommand,
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

export type PutContainerPolicyCommandInput = PutContainerPolicyInput;
export type PutContainerPolicyCommandOutput = PutContainerPolicyOutput & __MetadataBearer;

/**
 * <p>Creates an access policy for the specified container to restrict the users and
 *          clients that can access it. For information about the data that is included in an access
 *          policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and
 *             Access Management User Guide</a>.</p>
 *          <p>For this release of the REST API, you can create only one policy for a container. If
 *          you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing
 *          policy. </p>
 */
export class PutContainerPolicyCommand extends $Command<
  PutContainerPolicyCommandInput,
  PutContainerPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutContainerPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutContainerPolicyCommandInput, PutContainerPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "PutContainerPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutContainerPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutContainerPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutContainerPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutContainerPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutContainerPolicyCommandOutput> {
    return deserializeAws_json1_1PutContainerPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
