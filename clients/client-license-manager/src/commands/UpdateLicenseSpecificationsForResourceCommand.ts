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
} from "@smithy/types";

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceResponse,
} from "../models/models_0";
import {
  de_UpdateLicenseSpecificationsForResourceCommand,
  se_UpdateLicenseSpecificationsForResourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLicenseSpecificationsForResourceCommand}.
 */
export interface UpdateLicenseSpecificationsForResourceCommandInput
  extends UpdateLicenseSpecificationsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLicenseSpecificationsForResourceCommand}.
 */
export interface UpdateLicenseSpecificationsForResourceCommandOutput
  extends UpdateLicenseSpecificationsForResourceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p>
 *          <p>You can update the license specifications of AMIs, instances, and hosts.
 *          You cannot update the license specifications for launch templates and CloudFormation templates,
 *          as they send license configurations to the operation that creates the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // UpdateLicenseSpecificationsForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   AddLicenseSpecifications: [ // LicenseSpecifications
 *     { // LicenseSpecification
 *       LicenseConfigurationArn: "STRING_VALUE", // required
 *       AmiAssociationScope: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveLicenseSpecifications: [
 *     {
 *       LicenseConfigurationArn: "STRING_VALUE", // required
 *       AmiAssociationScope: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateLicenseSpecificationsForResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLicenseSpecificationsForResourceCommandInput - {@link UpdateLicenseSpecificationsForResourceCommandInput}
 * @returns {@link UpdateLicenseSpecificationsForResourceCommandOutput}
 * @see {@link UpdateLicenseSpecificationsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseSpecificationsForResourceCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>License Manager cannot allocate a license to a resource because of its state. </p>
 *          <p>For example, you cannot allocate a license to an instance in the process of shutting
 *          down.</p>
 *
 * @throws {@link LicenseUsageException} (client fault)
 *  <p>You do not have enough licenses available to support a new resource launch.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 */
export class UpdateLicenseSpecificationsForResourceCommand extends $Command<
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
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
  constructor(readonly input: UpdateLicenseSpecificationsForResourceCommandInput) {
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
  ): Handler<UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLicenseSpecificationsForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "UpdateLicenseSpecificationsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: UpdateLicenseSpecificationsForResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateLicenseSpecificationsForResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> {
    return de_UpdateLicenseSpecificationsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
