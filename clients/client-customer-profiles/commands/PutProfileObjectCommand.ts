import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { PutProfileObjectRequest, PutProfileObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutProfileObjectCommand,
  serializeAws_restJson1PutProfileObjectCommand,
} from "../protocols/Aws_restJson1";
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

export type PutProfileObjectCommandInput = PutProfileObjectRequest;
export type PutProfileObjectCommandOutput = PutProfileObjectResponse & __MetadataBearer;

/**
 * <p>Adds additional objects to customer profiles of a given ObjectType.</p>
 *          <p>When adding a specific profile object, like a Contact Trace Record (CTR), an inferred
 *          profile can get created if it is not mapped to an existing profile. The resulting profile
 *          will only have a phone number populated in the standard ProfileObject. Any additional CTRs
 *          with the same phone number will be mapped to the same inferred profile.</p>
 *          <p>When a ProfileObject is created and if a ProfileObjectType already exists for the
 *          ProfileObject, it will provide data to a standard profile depending on the
 *          ProfileObjectType definition.</p>
 *          <p>PutProfileObject needs an ObjectType, which can be created using
 *          PutProfileObjectType.</p>
 */
export class PutProfileObjectCommand extends $Command<
  PutProfileObjectCommandInput,
  PutProfileObjectCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutProfileObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutProfileObjectCommandInput, PutProfileObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "PutProfileObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutProfileObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutProfileObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutProfileObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutProfileObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutProfileObjectCommandOutput> {
    return deserializeAws_restJson1PutProfileObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
