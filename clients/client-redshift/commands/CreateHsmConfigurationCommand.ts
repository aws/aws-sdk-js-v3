import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateHsmConfigurationMessage, CreateHsmConfigurationResult } from "../models/models_0";
import {
  deserializeAws_queryCreateHsmConfigurationCommand,
  serializeAws_queryCreateHsmConfigurationCommand,
} from "../protocols/Aws_query";
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

export type CreateHsmConfigurationCommandInput = CreateHsmConfigurationMessage;
export type CreateHsmConfigurationCommandOutput = CreateHsmConfigurationResult & __MetadataBearer;

/**
 * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift
 *             cluster to store and use database encryption keys in a Hardware Security Module (HSM).
 *             After creating the HSM configuration, you can specify it as a parameter when creating a
 *             cluster. The cluster will then store its encryption keys in the HSM.</p>
 *         <p>In addition to creating an HSM configuration, you must also create an HSM client
 *             certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
 *             in the Amazon Redshift Cluster Management Guide.</p>
 */
export class CreateHsmConfigurationCommand extends $Command<
  CreateHsmConfigurationCommandInput,
  CreateHsmConfigurationCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHsmConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHsmConfigurationCommandInput, CreateHsmConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateHsmConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHsmConfigurationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHsmConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHsmConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateHsmConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHsmConfigurationCommandOutput> {
    return deserializeAws_queryCreateHsmConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
