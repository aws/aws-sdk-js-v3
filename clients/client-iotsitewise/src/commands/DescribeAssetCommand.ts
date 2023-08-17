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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetRequest, DescribeAssetResponse } from "../models/models_0";
import { de_DescribeAssetCommand, se_DescribeAssetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetCommand}.
 */
export interface DescribeAssetCommandInput extends DescribeAssetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetCommand}.
 */
export interface DescribeAssetCommandOutput extends DescribeAssetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAssetRequest
 *   assetId: "STRING_VALUE", // required
 *   excludeProperties: true || false,
 * };
 * const command = new DescribeAssetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetResponse
 * //   assetId: "STRING_VALUE", // required
 * //   assetArn: "STRING_VALUE", // required
 * //   assetName: "STRING_VALUE", // required
 * //   assetModelId: "STRING_VALUE", // required
 * //   assetProperties: [ // AssetProperties // required
 * //     { // AssetProperty
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       alias: "STRING_VALUE",
 * //       notification: { // PropertyNotification
 * //         topic: "STRING_VALUE", // required
 * //         state: "ENABLED" || "DISABLED", // required
 * //       },
 * //       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //       dataTypeSpec: "STRING_VALUE",
 * //       unit: "STRING_VALUE",
 * //     },
 * //   ],
 * //   assetHierarchies: [ // AssetHierarchies // required
 * //     { // AssetHierarchy
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   assetCompositeModels: [ // AssetCompositeModels
 * //     { // AssetCompositeModel
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "STRING_VALUE", // required
 * //       properties: [ // required
 * //         {
 * //           id: "STRING_VALUE", // required
 * //           name: "STRING_VALUE", // required
 * //           alias: "STRING_VALUE",
 * //           notification: {
 * //             topic: "STRING_VALUE", // required
 * //             state: "ENABLED" || "DISABLED", // required
 * //           },
 * //           dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //           dataTypeSpec: "STRING_VALUE",
 * //           unit: "STRING_VALUE",
 * //         },
 * //       ],
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   assetCreationDate: new Date("TIMESTAMP"), // required
 * //   assetLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   assetStatus: { // AssetStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //     error: { // ErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrors
 * //         { // DetailedError
 * //           code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   assetDescription: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAssetCommandInput - {@link DescribeAssetCommandInput}
 * @returns {@link DescribeAssetCommandOutput}
 * @see {@link DescribeAssetCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
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
export class DescribeAssetCommand extends $Command<
  DescribeAssetCommandInput,
  DescribeAssetCommandOutput,
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
  constructor(readonly input: DescribeAssetCommandInput) {
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
  ): Handler<DescribeAssetCommandInput, DescribeAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeAssetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeAssetCommand";
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
  private serialize(input: DescribeAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAssetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssetCommandOutput> {
    return de_DescribeAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
