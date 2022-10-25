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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  PutDataLakeSettingsRequest,
  PutDataLakeSettingsRequestFilterSensitiveLog,
  PutDataLakeSettingsResponse,
  PutDataLakeSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutDataLakeSettingsCommand,
  serializeAws_restJson1PutDataLakeSettingsCommand,
} from "../protocols/Aws_restJson1";

export interface PutDataLakeSettingsCommandInput extends PutDataLakeSettingsRequest {}
export interface PutDataLakeSettingsCommandOutput extends PutDataLakeSettingsResponse, __MetadataBearer {}

/**
 * <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p>
 *
 * 	        <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, PutDataLakeSettingsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, PutDataLakeSettingsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new PutDataLakeSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDataLakeSettingsCommandInput} for command's `input` shape.
 * @see {@link PutDataLakeSettingsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class PutDataLakeSettingsCommand extends $Command<
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
  LakeFormationClientResolvedConfig
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

  constructor(readonly input: PutDataLakeSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDataLakeSettingsCommandInput, PutDataLakeSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDataLakeSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "PutDataLakeSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDataLakeSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutDataLakeSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDataLakeSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDataLakeSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDataLakeSettingsCommandOutput> {
    return deserializeAws_restJson1PutDataLakeSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
