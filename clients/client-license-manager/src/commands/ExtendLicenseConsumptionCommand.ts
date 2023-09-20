// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ExtendLicenseConsumptionRequest, ExtendLicenseConsumptionResponse } from "../models/models_0";
import { de_ExtendLicenseConsumptionCommand, se_ExtendLicenseConsumptionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExtendLicenseConsumptionCommand}.
 */
export interface ExtendLicenseConsumptionCommandInput extends ExtendLicenseConsumptionRequest {}
/**
 * @public
 *
 * The output of {@link ExtendLicenseConsumptionCommand}.
 */
export interface ExtendLicenseConsumptionCommandOutput extends ExtendLicenseConsumptionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Extends the expiration date for license consumption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ExtendLicenseConsumptionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ExtendLicenseConsumptionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ExtendLicenseConsumptionRequest
 *   LicenseConsumptionToken: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ExtendLicenseConsumptionCommand(input);
 * const response = await client.send(command);
 * // { // ExtendLicenseConsumptionResponse
 * //   LicenseConsumptionToken: "STRING_VALUE",
 * //   Expiration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExtendLicenseConsumptionCommandInput - {@link ExtendLicenseConsumptionCommandInput}
 * @returns {@link ExtendLicenseConsumptionCommandOutput}
 * @see {@link ExtendLicenseConsumptionCommandInput} for command's `input` shape.
 * @see {@link ExtendLicenseConsumptionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 */
export class ExtendLicenseConsumptionCommand extends $Command<
  ExtendLicenseConsumptionCommandInput,
  ExtendLicenseConsumptionCommandOutput,
  LicenseManagerClientResolvedConfig
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
  constructor(readonly input: ExtendLicenseConsumptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExtendLicenseConsumptionCommandInput, ExtendLicenseConsumptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExtendLicenseConsumptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ExtendLicenseConsumptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLicenseManager",
        operation: "ExtendLicenseConsumption",
      },
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
  private serialize(input: ExtendLicenseConsumptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExtendLicenseConsumptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExtendLicenseConsumptionCommandOutput> {
    return de_ExtendLicenseConsumptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
