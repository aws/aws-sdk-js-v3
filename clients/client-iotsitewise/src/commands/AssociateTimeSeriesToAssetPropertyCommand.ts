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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { AssociateTimeSeriesToAssetPropertyRequest } from "../models/models_0";
import {
  de_AssociateTimeSeriesToAssetPropertyCommand,
  se_AssociateTimeSeriesToAssetPropertyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateTimeSeriesToAssetPropertyCommand}.
 */
export interface AssociateTimeSeriesToAssetPropertyCommandInput extends AssociateTimeSeriesToAssetPropertyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTimeSeriesToAssetPropertyCommand}.
 */
export interface AssociateTimeSeriesToAssetPropertyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Associates a time series (data stream) with an asset property.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, AssociateTimeSeriesToAssetPropertyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, AssociateTimeSeriesToAssetPropertyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // AssociateTimeSeriesToAssetPropertyRequest
 *   alias: "STRING_VALUE", // required
 *   assetId: "STRING_VALUE", // required
 *   propertyId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AssociateTimeSeriesToAssetPropertyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateTimeSeriesToAssetPropertyCommandInput - {@link AssociateTimeSeriesToAssetPropertyCommandInput}
 * @returns {@link AssociateTimeSeriesToAssetPropertyCommandOutput}
 * @see {@link AssociateTimeSeriesToAssetPropertyCommandInput} for command's `input` shape.
 * @see {@link AssociateTimeSeriesToAssetPropertyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 */
export class AssociateTimeSeriesToAssetPropertyCommand extends $Command<
  AssociateTimeSeriesToAssetPropertyCommandInput,
  AssociateTimeSeriesToAssetPropertyCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: AssociateTimeSeriesToAssetPropertyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateTimeSeriesToAssetPropertyCommandInput, AssociateTimeSeriesToAssetPropertyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTimeSeriesToAssetPropertyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "AssociateTimeSeriesToAssetPropertyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTSiteWise",
        operation: "AssociateTimeSeriesToAssetProperty",
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
  private serialize(
    input: AssociateTimeSeriesToAssetPropertyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateTimeSeriesToAssetPropertyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateTimeSeriesToAssetPropertyCommandOutput> {
    return de_AssociateTimeSeriesToAssetPropertyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
