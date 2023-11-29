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

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { GetConfiguredAudienceModelRequest, GetConfiguredAudienceModelResponse } from "../models/models_0";
import { de_GetConfiguredAudienceModelCommand, se_GetConfiguredAudienceModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredAudienceModelCommand}.
 */
export interface GetConfiguredAudienceModelCommandInput extends GetConfiguredAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link GetConfiguredAudienceModelCommand}.
 */
export interface GetConfiguredAudienceModelCommandOutput extends GetConfiguredAudienceModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specified configured audience model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetConfiguredAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetConfiguredAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetConfiguredAudienceModelRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredAudienceModelResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   audienceModelArn: "STRING_VALUE", // required
 * //   outputConfig: { // ConfiguredAudienceModelOutputConfig
 * //     destination: { // AudienceDestination
 * //       s3Destination: { // S3ConfigMap
 * //         s3Uri: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE", // required
 * //   },
 * //   description: "STRING_VALUE",
 * //   status: "ACTIVE", // required
 * //   sharedAudienceMetrics: [ // MetricsList // required
 * //     "ALL" || "NONE",
 * //   ],
 * //   minMatchingSeedSize: Number("int"),
 * //   audienceSizeConfig: { // AudienceSizeConfig
 * //     audienceSizeType: "ABSOLUTE" || "PERCENTAGE", // required
 * //     audienceSizeBins: [ // AudienceSizeBins // required
 * //       Number("int"),
 * //     ],
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   childResourceTagOnCreatePolicy: "FROM_PARENT_RESOURCE" || "NONE",
 * // };
 *
 * ```
 *
 * @param GetConfiguredAudienceModelCommandInput - {@link GetConfiguredAudienceModelCommandInput}
 * @returns {@link GetConfiguredAudienceModelCommandOutput}
 * @see {@link GetConfiguredAudienceModelCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredAudienceModelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class GetConfiguredAudienceModelCommand extends $Command<
  GetConfiguredAudienceModelCommandInput,
  GetConfiguredAudienceModelCommandOutput,
  CleanRoomsMLClientResolvedConfig
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
  constructor(readonly input: GetConfiguredAudienceModelCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfiguredAudienceModelCommandInput, GetConfiguredAudienceModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfiguredAudienceModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "GetConfiguredAudienceModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "GetConfiguredAudienceModel",
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
  private serialize(input: GetConfiguredAudienceModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConfiguredAudienceModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConfiguredAudienceModelCommandOutput> {
    return de_GetConfiguredAudienceModelCommand(output, context);
  }
}
