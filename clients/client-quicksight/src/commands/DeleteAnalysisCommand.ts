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

import { DeleteAnalysisRequest, DeleteAnalysisResponse } from "../models/models_3";
import { de_DeleteAnalysisCommand, se_DeleteAnalysisCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnalysisCommand}.
 */
export interface DeleteAnalysisCommandInput extends DeleteAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnalysisCommand}.
 */
export interface DeleteAnalysisCommandOutput extends DeleteAnalysisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during
 *             which you can restore the analysis. If you don't specify a recovery window value, the
 *             operation defaults to 30 days. Amazon QuickSight attaches a <code>DeletionTime</code> stamp to
 *             the response that specifies the end of the recovery window. At the end of the recovery
 *             window, Amazon QuickSight deletes the analysis permanently.</p>
 *          <p>At any time before recovery window ends, you can use the <code>RestoreAnalysis</code>
 *             API operation to remove the <code>DeletionTime</code> stamp and cancel the deletion of
 *             the analysis. The analysis remains visible in the API until it's deleted, so you can
 *             describe it but you can't make a template from it.</p>
 *          <p>An analysis that's scheduled for deletion isn't accessible in the Amazon QuickSight console.
 *             To access it in the console, restore it. Deleting an analysis doesn't delete the
 *             dashboards that you publish from it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAnalysisRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AnalysisId: "STRING_VALUE", // required
 *   RecoveryWindowInDays: Number("long"),
 *   ForceDeleteWithoutRecovery: true || false,
 * };
 * const command = new DeleteAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAnalysisResponse
 * //   Status: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   AnalysisId: "STRING_VALUE",
 * //   DeletionTime: new Date("TIMESTAMP"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAnalysisCommandInput - {@link DeleteAnalysisCommandInput}
 * @returns {@link DeleteAnalysisCommandOutput}
 * @see {@link DeleteAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class DeleteAnalysisCommand extends $Command<
  DeleteAnalysisCommandInput,
  DeleteAnalysisCommandOutput,
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
  constructor(readonly input: DeleteAnalysisCommandInput) {
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
  ): Handler<DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteAnalysisCommand";
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
  private serialize(input: DeleteAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAnalysisCommandOutput> {
    return de_DeleteAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
