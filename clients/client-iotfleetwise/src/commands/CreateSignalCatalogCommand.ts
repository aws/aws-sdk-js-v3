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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { CreateSignalCatalogRequest, CreateSignalCatalogResponse } from "../models/models_0";
import { de_CreateSignalCatalogCommand, se_CreateSignalCatalogCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSignalCatalogCommand}.
 */
export interface CreateSignalCatalogCommandInput extends CreateSignalCatalogRequest {}
/**
 * @public
 *
 * The output of {@link CreateSignalCatalogCommand}.
 */
export interface CreateSignalCatalogCommandOutput extends CreateSignalCatalogResponse, __MetadataBearer {}

/**
 * @public
 * <p> Creates a collection of standardized signals that can be reused to create vehicle
 *             models.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateSignalCatalogCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateSignalCatalogCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // CreateSignalCatalogRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   nodes: [ // Nodes
 *     { // Node Union: only one key present
 *       branch: { // Branch
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       sensor: { // Sensor
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: [ // listOfStrings
 *           "STRING_VALUE",
 *         ],
 *         min: Number("double"),
 *         max: Number("double"),
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       actuator: { // Actuator
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         min: Number("double"),
 *         max: Number("double"),
 *         assignedValue: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *       attribute: { // Attribute
 *         fullyQualifiedName: "STRING_VALUE", // required
 *         dataType: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         unit: "STRING_VALUE",
 *         allowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         min: Number("double"),
 *         max: Number("double"),
 *         assignedValue: "STRING_VALUE",
 *         defaultValue: "STRING_VALUE",
 *         deprecationMessage: "STRING_VALUE",
 *         comment: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSignalCatalogCommand(input);
 * const response = await client.send(command);
 * // { // CreateSignalCatalogResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSignalCatalogCommandInput - {@link CreateSignalCatalogCommandInput}
 * @returns {@link CreateSignalCatalogCommandOutput}
 * @see {@link CreateSignalCatalogCommandInput} for command's `input` shape.
 * @see {@link CreateSignalCatalogCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InvalidNodeException} (client fault)
 *  <p>The specified node type doesn't match the expected node type for a node. You can
 *             specify the node type as branch, sensor, actuator, or attribute.</p>
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *  <p>The request couldn't be completed because it contains signals that aren't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class CreateSignalCatalogCommand extends $Command<
  CreateSignalCatalogCommandInput,
  CreateSignalCatalogCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: CreateSignalCatalogCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSignalCatalogCommandInput, CreateSignalCatalogCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSignalCatalogCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "CreateSignalCatalogCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTAutobahnControlPlane",
        operation: "CreateSignalCatalog",
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
  private serialize(input: CreateSignalCatalogCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSignalCatalogCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSignalCatalogCommandOutput> {
    return de_CreateSignalCatalogCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
