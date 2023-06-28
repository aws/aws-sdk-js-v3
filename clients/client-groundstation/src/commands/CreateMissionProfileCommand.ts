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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateMissionProfileRequest, MissionProfileIdResponse } from "../models/models_0";
import { de_CreateMissionProfileCommand, se_CreateMissionProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMissionProfileCommand}.
 */
export interface CreateMissionProfileCommandInput extends CreateMissionProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateMissionProfileCommand}.
 */
export interface CreateMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a mission profile.</p>
 *          <p>
 *             <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings
 *          has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // CreateMissionProfileRequest
 *   name: "STRING_VALUE", // required
 *   contactPrePassDurationSeconds: Number("int"),
 *   contactPostPassDurationSeconds: Number("int"),
 *   minimumViableContactDurationSeconds: Number("int"), // required
 *   dataflowEdges: [ // DataflowEdgeList // required
 *     [ // DataflowEdge
 *       "STRING_VALUE",
 *     ],
 *   ],
 *   trackingConfigArn: "STRING_VALUE", // required
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   streamsKmsKey: { // KmsKey Union: only one key present
 *     kmsKeyArn: "STRING_VALUE",
 *     kmsAliasArn: "STRING_VALUE",
 *   },
 *   streamsKmsRole: "STRING_VALUE",
 * };
 * const command = new CreateMissionProfileCommand(input);
 * const response = await client.send(command);
 * // { // MissionProfileIdResponse
 * //   missionProfileId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMissionProfileCommandInput - {@link CreateMissionProfileCommandInput}
 * @returns {@link CreateMissionProfileCommandOutput}
 * @see {@link CreateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link CreateMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class CreateMissionProfileCommand extends $Command<
  CreateMissionProfileCommandInput,
  CreateMissionProfileCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: CreateMissionProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMissionProfileCommandInput, CreateMissionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMissionProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "CreateMissionProfileCommand";
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
  private serialize(input: CreateMissionProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMissionProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMissionProfileCommandOutput> {
    return de_CreateMissionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
