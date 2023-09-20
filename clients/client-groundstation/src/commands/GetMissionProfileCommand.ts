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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetMissionProfileRequest, GetMissionProfileResponse } from "../models/models_0";
import { de_GetMissionProfileCommand, se_GetMissionProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMissionProfileCommand}.
 */
export interface GetMissionProfileCommandInput extends GetMissionProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetMissionProfileCommand}.
 */
export interface GetMissionProfileCommandOutput extends GetMissionProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a mission profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // GetMissionProfileRequest
 *   missionProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetMissionProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetMissionProfileResponse
 * //   missionProfileId: "STRING_VALUE",
 * //   missionProfileArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   region: "STRING_VALUE",
 * //   contactPrePassDurationSeconds: Number("int"),
 * //   contactPostPassDurationSeconds: Number("int"),
 * //   minimumViableContactDurationSeconds: Number("int"),
 * //   dataflowEdges: [ // DataflowEdgeList
 * //     [ // DataflowEdge
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   trackingConfigArn: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   streamsKmsKey: { // KmsKey Union: only one key present
 * //     kmsKeyArn: "STRING_VALUE",
 * //     kmsAliasArn: "STRING_VALUE",
 * //   },
 * //   streamsKmsRole: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMissionProfileCommandInput - {@link GetMissionProfileCommandInput}
 * @returns {@link GetMissionProfileCommandOutput}
 * @see {@link GetMissionProfileCommandInput} for command's `input` shape.
 * @see {@link GetMissionProfileCommandOutput} for command's `response` shape.
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
export class GetMissionProfileCommand extends $Command<
  GetMissionProfileCommandInput,
  GetMissionProfileCommandOutput,
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
  constructor(readonly input: GetMissionProfileCommandInput) {
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
  ): Handler<GetMissionProfileCommandInput, GetMissionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMissionProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "GetMissionProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GroundStation",
        operation: "GetMissionProfile",
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
  private serialize(input: GetMissionProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMissionProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMissionProfileCommandOutput> {
    return de_GetMissionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
