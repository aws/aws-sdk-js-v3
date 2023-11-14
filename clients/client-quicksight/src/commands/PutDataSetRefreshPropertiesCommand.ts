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

import { PutDataSetRefreshPropertiesRequest, PutDataSetRefreshPropertiesResponse } from "../models/models_3";
import {
  de_PutDataSetRefreshPropertiesCommand,
  se_PutDataSetRefreshPropertiesCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDataSetRefreshPropertiesCommand}.
 */
export interface PutDataSetRefreshPropertiesCommandInput extends PutDataSetRefreshPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link PutDataSetRefreshPropertiesCommand}.
 */
export interface PutDataSetRefreshPropertiesCommandOutput
  extends PutDataSetRefreshPropertiesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates the dataset refresh properties for the dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, PutDataSetRefreshPropertiesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, PutDataSetRefreshPropertiesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // PutDataSetRefreshPropertiesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   DataSetRefreshProperties: { // DataSetRefreshProperties
 *     RefreshConfiguration: { // RefreshConfiguration
 *       IncrementalRefresh: { // IncrementalRefresh
 *         LookbackWindow: { // LookbackWindow
 *           ColumnName: "STRING_VALUE", // required
 *           Size: Number("long"), // required
 *           SizeUnit: "HOUR" || "DAY" || "WEEK", // required
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new PutDataSetRefreshPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // PutDataSetRefreshPropertiesResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param PutDataSetRefreshPropertiesCommandInput - {@link PutDataSetRefreshPropertiesCommandInput}
 * @returns {@link PutDataSetRefreshPropertiesCommandOutput}
 * @see {@link PutDataSetRefreshPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutDataSetRefreshPropertiesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class PutDataSetRefreshPropertiesCommand extends $Command<
  PutDataSetRefreshPropertiesCommandInput,
  PutDataSetRefreshPropertiesCommandOutput,
  QuickSightClientResolvedConfig
> {
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
  constructor(readonly input: PutDataSetRefreshPropertiesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDataSetRefreshPropertiesCommandInput, PutDataSetRefreshPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDataSetRefreshPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "PutDataSetRefreshPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "PutDataSetRefreshProperties",
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
  private serialize(input: PutDataSetRefreshPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutDataSetRefreshPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDataSetRefreshPropertiesCommandOutput> {
    return de_PutDataSetRefreshPropertiesCommand(output, context);
  }
}
