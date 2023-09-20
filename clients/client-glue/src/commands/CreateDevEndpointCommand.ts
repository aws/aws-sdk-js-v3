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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateDevEndpointRequest, CreateDevEndpointResponse } from "../models/models_0";
import { de_CreateDevEndpointCommand, se_CreateDevEndpointCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDevEndpointCommand}.
 */
export interface CreateDevEndpointCommandInput extends CreateDevEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateDevEndpointCommand}.
 */
export interface CreateDevEndpointCommandOutput extends CreateDevEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateDevEndpointRequest
 *   EndpointName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   SecurityGroupIds: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   SubnetId: "STRING_VALUE",
 *   PublicKey: "STRING_VALUE",
 *   PublicKeys: [ // PublicKeysList
 *     "STRING_VALUE",
 *   ],
 *   NumberOfNodes: Number("int"),
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 *   GlueVersion: "STRING_VALUE",
 *   NumberOfWorkers: Number("int"),
 *   ExtraPythonLibsS3Path: "STRING_VALUE",
 *   ExtraJarsS3Path: "STRING_VALUE",
 *   SecurityConfiguration: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Arguments: { // MapValue
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDevEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateDevEndpointResponse
 * //   EndpointName: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   SecurityGroupIds: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   SubnetId: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   YarnEndpointAddress: "STRING_VALUE",
 * //   ZeppelinRemoteSparkInterpreterPort: Number("int"),
 * //   NumberOfNodes: Number("int"),
 * //   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //   GlueVersion: "STRING_VALUE",
 * //   NumberOfWorkers: Number("int"),
 * //   AvailabilityZone: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   ExtraPythonLibsS3Path: "STRING_VALUE",
 * //   ExtraJarsS3Path: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * //   SecurityConfiguration: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   Arguments: { // MapValue
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDevEndpointCommandInput - {@link CreateDevEndpointCommandInput}
 * @returns {@link CreateDevEndpointCommandOutput}
 * @see {@link CreateDevEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreateDevEndpointCommand extends $Command<
  CreateDevEndpointCommandInput,
  CreateDevEndpointCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: CreateDevEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDevEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateDevEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "CreateDevEndpoint",
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
  private serialize(input: CreateDevEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDevEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDevEndpointCommandOutput> {
    return de_CreateDevEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
