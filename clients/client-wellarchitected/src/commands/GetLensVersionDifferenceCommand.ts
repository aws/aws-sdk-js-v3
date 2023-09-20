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

import { GetLensVersionDifferenceInput, GetLensVersionDifferenceOutput } from "../models/models_0";
import { de_GetLensVersionDifferenceCommand, se_GetLensVersionDifferenceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLensVersionDifferenceCommand}.
 */
export interface GetLensVersionDifferenceCommandInput extends GetLensVersionDifferenceInput {}
/**
 * @public
 *
 * The output of {@link GetLensVersionDifferenceCommand}.
 */
export interface GetLensVersionDifferenceCommandOutput extends GetLensVersionDifferenceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Get lens version differences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensVersionDifferenceCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensVersionDifferenceCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // GetLensVersionDifferenceInput
 *   LensAlias: "STRING_VALUE", // required
 *   BaseLensVersion: "STRING_VALUE",
 *   TargetLensVersion: "STRING_VALUE",
 * };
 * const command = new GetLensVersionDifferenceCommand(input);
 * const response = await client.send(command);
 * // { // GetLensVersionDifferenceOutput
 * //   LensAlias: "STRING_VALUE",
 * //   LensArn: "STRING_VALUE",
 * //   BaseLensVersion: "STRING_VALUE",
 * //   TargetLensVersion: "STRING_VALUE",
 * //   LatestLensVersion: "STRING_VALUE",
 * //   VersionDifferences: { // VersionDifferences
 * //     PillarDifferences: [ // PillarDifferences
 * //       { // PillarDifference
 * //         PillarId: "STRING_VALUE",
 * //         PillarName: "STRING_VALUE",
 * //         DifferenceStatus: "UPDATED" || "NEW" || "DELETED",
 * //         QuestionDifferences: [ // QuestionDifferences
 * //           { // QuestionDifference
 * //             QuestionId: "STRING_VALUE",
 * //             QuestionTitle: "STRING_VALUE",
 * //             DifferenceStatus: "UPDATED" || "NEW" || "DELETED",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLensVersionDifferenceCommandInput - {@link GetLensVersionDifferenceCommandInput}
 * @returns {@link GetLensVersionDifferenceCommandOutput}
 * @see {@link GetLensVersionDifferenceCommandInput} for command's `input` shape.
 * @see {@link GetLensVersionDifferenceCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class GetLensVersionDifferenceCommand extends $Command<
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: GetLensVersionDifferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLensVersionDifferenceCommandInput, GetLensVersionDifferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLensVersionDifferenceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "GetLensVersionDifferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "GetLensVersionDifference",
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
  private serialize(input: GetLensVersionDifferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLensVersionDifferenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLensVersionDifferenceCommandOutput> {
    return de_GetLensVersionDifferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
