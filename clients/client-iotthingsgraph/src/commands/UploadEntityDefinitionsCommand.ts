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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UploadEntityDefinitionsRequest, UploadEntityDefinitionsResponse } from "../models/models_0";
import { de_UploadEntityDefinitionsCommand, se_UploadEntityDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UploadEntityDefinitionsCommand}.
 */
export interface UploadEntityDefinitionsCommandInput extends UploadEntityDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link UploadEntityDefinitionsCommand}.
 */
export interface UploadEntityDefinitionsCommandOutput extends UploadEntityDefinitionsResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if
 *       <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter  is set to
 *          <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true,
 *       all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p>
 *          <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users
 *       can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the
 *          <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p>
 *          <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p>
 *          <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>,
 *          <code>Mapping</code>, <code>Enum</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UploadEntityDefinitionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UploadEntityDefinitionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // UploadEntityDefinitionsRequest
 *   document: { // DefinitionDocument
 *     language: "GRAPHQL", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   syncWithPublicNamespace: true || false,
 *   deprecateExistingEntities: true || false,
 * };
 * const command = new UploadEntityDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // UploadEntityDefinitionsResponse
 * //   uploadId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UploadEntityDefinitionsCommandInput - {@link UploadEntityDefinitionsCommandInput}
 * @returns {@link UploadEntityDefinitionsCommandOutput}
 * @see {@link UploadEntityDefinitionsCommandInput} for command's `input` shape.
 * @see {@link UploadEntityDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class UploadEntityDefinitionsCommand extends $Command<
  UploadEntityDefinitionsCommandInput,
  UploadEntityDefinitionsCommandOutput,
  IoTThingsGraphClientResolvedConfig
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
  constructor(readonly input: UploadEntityDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadEntityDefinitionsCommandInput, UploadEntityDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UploadEntityDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "UploadEntityDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotThingsGraphFrontEndService",
        operation: "UploadEntityDefinitions",
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
  private serialize(input: UploadEntityDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UploadEntityDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadEntityDefinitionsCommandOutput> {
    return de_UploadEntityDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
