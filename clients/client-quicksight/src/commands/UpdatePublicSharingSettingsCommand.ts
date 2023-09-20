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

import { UpdatePublicSharingSettingsRequest, UpdatePublicSharingSettingsResponse } from "../models/models_4";
import {
  de_UpdatePublicSharingSettingsCommand,
  se_UpdatePublicSharingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePublicSharingSettingsCommand}.
 */
export interface UpdatePublicSharingSettingsCommandInput extends UpdatePublicSharingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePublicSharingSettingsCommand}.
 */
export interface UpdatePublicSharingSettingsCommandOutput
  extends UpdatePublicSharingSettingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Use the <code>UpdatePublicSharingSettings</code> operation to turn on or turn off the
 *             public sharing settings of an Amazon QuickSight dashboard.</p>
 *          <p>To use this operation, turn on session capacity pricing for your Amazon QuickSight
 *             account.</p>
 *          <p>Before you can turn on public sharing on your account, make sure to give public sharing
 *             permissions to an administrative user in the Identity and Access Management (IAM)
 *             console. For more information on using IAM with Amazon QuickSight, see
 *                 <a href="https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html">Using Amazon QuickSight with IAM</a> in the <i>Amazon QuickSight
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdatePublicSharingSettingsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdatePublicSharingSettingsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdatePublicSharingSettingsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   PublicSharingEnabled: true || false,
 * };
 * const command = new UpdatePublicSharingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePublicSharingSettingsResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdatePublicSharingSettingsCommandInput - {@link UpdatePublicSharingSettingsCommandInput}
 * @returns {@link UpdatePublicSharingSettingsCommandOutput}
 * @see {@link UpdatePublicSharingSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicSharingSettingsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedPricingPlanException} (client fault)
 *  <p>This error indicates that you are calling an embedding operation in Amazon QuickSight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a QuickSight administrator needs to add capacity pricing to Amazon QuickSight. You
 * 		    can do this on the <b>Manage Amazon QuickSight</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class UpdatePublicSharingSettingsCommand extends $Command<
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: UpdatePublicSharingSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePublicSharingSettingsCommandInput, UpdatePublicSharingSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePublicSharingSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdatePublicSharingSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "UpdatePublicSharingSettings",
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
  private serialize(input: UpdatePublicSharingSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePublicSharingSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePublicSharingSettingsCommandOutput> {
    return de_UpdatePublicSharingSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
