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
  CrlDetailResponse,
  CrlDetailResponseFilterSensitiveLog,
  ImportCrlRequest,
  ImportCrlRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ImportCrlCommand,
  serializeAws_restJson1ImportCrlCommand,
} from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

export interface ImportCrlCommandInput extends ImportCrlRequest {}
export interface ImportCrlCommandOutput extends CrlDetailResponse, __MetadataBearer {}

/**
 * <p>Imports the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials. </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:ImportCrl</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ImportCrlCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ImportCrlCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const command = new ImportCrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportCrlCommandInput} for command's `input` shape.
 * @see {@link ImportCrlCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 */
export class ImportCrlCommand extends $Command<
  ImportCrlCommandInput,
  ImportCrlCommandOutput,
  RolesAnywhereClientResolvedConfig
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

  constructor(readonly input: ImportCrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RolesAnywhereClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportCrlCommandInput, ImportCrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportCrlCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "ImportCrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportCrlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CrlDetailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportCrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportCrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportCrlCommandOutput> {
    return deserializeAws_restJson1ImportCrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
