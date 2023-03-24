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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateAssetModelRequest, CreateAssetModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAssetModelCommand,
  serializeAws_restJson1CreateAssetModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateAssetModelCommand}.
 */
export interface CreateAssetModelCommandInput extends CreateAssetModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssetModelCommand}.
 */
export interface CreateAssetModelCommandOutput extends CreateAssetModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an asset model from specified property and hierarchy definitions. You create
 *       assets from asset models. With asset models, you can easily create assets of the same type
 *       that have standardized definitions. Each asset created from a model inherits the asset model's
 *       property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = {
 *   assetModelName: "STRING_VALUE", // required
 *   assetModelDescription: "STRING_VALUE",
 *   assetModelProperties: [
 *     {
 *       name: "STRING_VALUE", // required
 *       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 *       dataTypeSpec: "STRING_VALUE",
 *       unit: "STRING_VALUE",
 *       type: {
 *         attribute: {
 *           defaultValue: "STRING_VALUE",
 *         },
 *         measurement: {
 *           processingConfig: {
 *             forwardingConfig: {
 *               state: "DISABLED" || "ENABLED", // required
 *             },
 *           },
 *         },
 *         transform: {
 *           expression: "STRING_VALUE", // required
 *           variables: [ // required
 *             {
 *               name: "STRING_VALUE", // required
 *               value: {
 *                 propertyId: "STRING_VALUE", // required
 *                 hierarchyId: "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           processingConfig: {
 *             computeLocation: "EDGE" || "CLOUD", // required
 *             forwardingConfig: {
 *               state: "DISABLED" || "ENABLED", // required
 *             },
 *           },
 *         },
 *         metric: {
 *           expression: "STRING_VALUE", // required
 *           variables: [ // required
 *             {
 *               name: "STRING_VALUE", // required
 *               value: {
 *                 propertyId: "STRING_VALUE", // required
 *                 hierarchyId: "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           window: {
 *             tumbling: {
 *               interval: "STRING_VALUE", // required
 *               offset: "STRING_VALUE",
 *             },
 *           },
 *           processingConfig: {
 *             computeLocation: "EDGE" || "CLOUD", // required
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   assetModelHierarchies: [
 *     {
 *       name: "STRING_VALUE", // required
 *       childAssetModelId: "STRING_VALUE", // required
 *     },
 *   ],
 *   assetModelCompositeModels: [
 *     {
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       type: "STRING_VALUE", // required
 *       properties: [
 *         {
 *           name: "STRING_VALUE", // required
 *           dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 *           dataTypeSpec: "STRING_VALUE",
 *           unit: "STRING_VALUE",
 *           type: {
 *             attribute: {
 *               defaultValue: "STRING_VALUE",
 *             },
 *             measurement: {
 *               processingConfig: {
 *                 forwardingConfig: {
 *                   state: "DISABLED" || "ENABLED", // required
 *                 },
 *               },
 *             },
 *             transform: {
 *               expression: "STRING_VALUE", // required
 *               variables: [ // required
 *                 {
 *                   name: "STRING_VALUE", // required
 *                   value: {
 *                     propertyId: "STRING_VALUE", // required
 *                     hierarchyId: "STRING_VALUE",
 *                   },
 *                 },
 *               ],
 *               processingConfig: {
 *                 computeLocation: "EDGE" || "CLOUD", // required
 *                 forwardingConfig: {
 *                   state: "DISABLED" || "ENABLED", // required
 *                 },
 *               },
 *             },
 *             metric: {
 *               expression: "STRING_VALUE", // required
 *               variables: [ // required
 *                 {
 *                   name: "STRING_VALUE", // required
 *                   value: {
 *                     propertyId: "STRING_VALUE", // required
 *                     hierarchyId: "STRING_VALUE",
 *                   },
 *                 },
 *               ],
 *               window: {
 *                 tumbling: {
 *                   interval: "STRING_VALUE", // required
 *                   offset: "STRING_VALUE",
 *                 },
 *               },
 *               processingConfig: {
 *                 computeLocation: "EDGE" || "CLOUD", // required
 *               },
 *             },
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateAssetModelCommandInput - {@link CreateAssetModelCommandInput}
 * @returns {@link CreateAssetModelCommandOutput}
 * @see {@link CreateAssetModelCommandInput} for command's `input` shape.
 * @see {@link CreateAssetModelCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
 *
 */
export class CreateAssetModelCommand extends $Command<
  CreateAssetModelCommandInput,
  CreateAssetModelCommandOutput,
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
  constructor(readonly input: CreateAssetModelCommandInput) {
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
  ): Handler<CreateAssetModelCommandInput, CreateAssetModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssetModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "CreateAssetModelCommand";
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
  private serialize(input: CreateAssetModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAssetModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssetModelCommandOutput> {
    return deserializeAws_restJson1CreateAssetModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
