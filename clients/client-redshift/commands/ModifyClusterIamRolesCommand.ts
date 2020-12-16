import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterIamRolesMessage, ModifyClusterIamRolesResult } from "../models/models_1";
import {
  deserializeAws_queryModifyClusterIamRolesCommand,
  serializeAws_queryModifyClusterIamRolesCommand,
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

export type ModifyClusterIamRolesCommandInput = ModifyClusterIamRolesMessage;
export type ModifyClusterIamRolesCommandOutput = ModifyClusterIamRolesResult & __MetadataBearer;

/**
 * <p>Modifies the list of AWS Identity and Access Management (IAM) roles that can be
 *             used by the cluster to access other AWS services.</p>
 *         <p>A cluster can have up to 10 IAM roles associated at any time.</p>
 */
export class ModifyClusterIamRolesCommand extends $Command<
  ModifyClusterIamRolesCommandInput,
  ModifyClusterIamRolesCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClusterIamRolesCommandInput) {
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
  ): Handler<ModifyClusterIamRolesCommandInput, ModifyClusterIamRolesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterIamRolesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClusterIamRolesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyClusterIamRolesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClusterIamRolesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyClusterIamRolesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterIamRolesCommandOutput> {
    return deserializeAws_queryModifyClusterIamRolesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
