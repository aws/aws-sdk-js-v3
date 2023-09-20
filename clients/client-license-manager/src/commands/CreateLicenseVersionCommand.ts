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
import { CreateLicenseVersionRequest, CreateLicenseVersionResponse } from "../models/models_0";
import { de_CreateLicenseVersionCommand, se_CreateLicenseVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLicenseVersionCommand}.
 */
export interface CreateLicenseVersionCommandInput extends CreateLicenseVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseVersionCommand}.
 */
export interface CreateLicenseVersionCommandOutput extends CreateLicenseVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new version of the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseVersionRequest
 *   LicenseArn: "STRING_VALUE", // required
 *   LicenseName: "STRING_VALUE", // required
 *   ProductName: "STRING_VALUE", // required
 *   Issuer: { // Issuer
 *     Name: "STRING_VALUE", // required
 *     SignKey: "STRING_VALUE",
 *   },
 *   HomeRegion: "STRING_VALUE", // required
 *   Validity: { // DatetimeRange
 *     Begin: "STRING_VALUE", // required
 *     End: "STRING_VALUE",
 *   },
 *   LicenseMetadata: [ // MetadataList
 *     { // Metadata
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Entitlements: [ // EntitlementList // required
 *     { // Entitlement
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *       MaxCount: Number("long"),
 *       Overage: true || false,
 *       Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 *       AllowCheckIn: true || false,
 *     },
 *   ],
 *   ConsumptionConfiguration: { // ConsumptionConfiguration
 *     RenewType: "None" || "Weekly" || "Monthly",
 *     ProvisionalConfiguration: { // ProvisionalConfiguration
 *       MaxTimeToLiveInMinutes: Number("int"), // required
 *     },
 *     BorrowConfiguration: { // BorrowConfiguration
 *       AllowEarlyCheckIn: true || false, // required
 *       MaxTimeToLiveInMinutes: Number("int"), // required
 *     },
 *   },
 *   Status: "AVAILABLE" || "PENDING_AVAILABLE" || "DEACTIVATED" || "SUSPENDED" || "EXPIRED" || "PENDING_DELETE" || "DELETED", // required
 *   ClientToken: "STRING_VALUE", // required
 *   SourceVersion: "STRING_VALUE",
 * };
 * const command = new CreateLicenseVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseVersionResponse
 * //   LicenseArn: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * //   Status: "AVAILABLE" || "PENDING_AVAILABLE" || "DEACTIVATED" || "SUSPENDED" || "EXPIRED" || "PENDING_DELETE" || "DELETED",
 * // };
 *
 * ```
 *
 * @param CreateLicenseVersionCommandInput - {@link CreateLicenseVersionCommandInput}
 * @returns {@link CreateLicenseVersionCommandOutput}
 * @see {@link CreateLicenseVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseVersionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link RedirectException} (client fault)
 *  <p>This is not the correct Region for the resource. Try again.</p>
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
export class CreateLicenseVersionCommand extends $Command<
  CreateLicenseVersionCommandInput,
  CreateLicenseVersionCommandOutput,
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
  constructor(readonly input: CreateLicenseVersionCommandInput) {
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
  ): Handler<CreateLicenseVersionCommandInput, CreateLicenseVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLicenseVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CreateLicenseVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLicenseManager",
        operation: "CreateLicenseVersion",
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
  private serialize(input: CreateLicenseVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLicenseVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLicenseVersionCommandOutput> {
    return de_CreateLicenseVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
