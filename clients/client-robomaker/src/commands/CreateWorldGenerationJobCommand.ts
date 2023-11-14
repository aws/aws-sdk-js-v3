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

import { CreateWorldGenerationJobRequest, CreateWorldGenerationJobResponse } from "../models/models_0";
import { de_CreateWorldGenerationJobCommand, se_CreateWorldGenerationJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorldGenerationJobCommand}.
 */
export interface CreateWorldGenerationJobCommandInput extends CreateWorldGenerationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorldGenerationJobCommand}.
 */
export interface CreateWorldGenerationJobCommandOutput extends CreateWorldGenerationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates worlds using the specified template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CreateWorldGenerationJobRequest
 *   clientRequestToken: "STRING_VALUE",
 *   template: "STRING_VALUE", // required
 *   worldCount: { // WorldCount
 *     floorplanCount: Number("int"),
 *     interiorCountPerFloorplan: Number("int"),
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   worldTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorldGenerationJobResponse
 * //   arn: "STRING_VALUE",
 * //   status: "Pending" || "Running" || "Completed" || "Failed" || "PartialFailed" || "Canceling" || "Canceled",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   failureCode: "InternalServiceError" || "LimitExceeded" || "ResourceNotFound" || "RequestThrottled" || "InvalidInput" || "AllWorldGenerationFailed",
 * //   clientRequestToken: "STRING_VALUE",
 * //   template: "STRING_VALUE",
 * //   worldCount: { // WorldCount
 * //     floorplanCount: Number("int"),
 * //     interiorCountPerFloorplan: Number("int"),
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   worldTags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWorldGenerationJobCommandInput - {@link CreateWorldGenerationJobCommandInput}
 * @returns {@link CreateWorldGenerationJobCommandOutput}
 * @see {@link CreateWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The request uses the same client token as a previous, but non-identical request. Do not
 *          reuse a client token with different requests, unless the requests are identical. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class CreateWorldGenerationJobCommand extends $Command<
  CreateWorldGenerationJobCommandInput,
  CreateWorldGenerationJobCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: CreateWorldGenerationJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorldGenerationJobCommandInput, CreateWorldGenerationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorldGenerationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateWorldGenerationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "CreateWorldGenerationJob",
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
  private serialize(input: CreateWorldGenerationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorldGenerationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorldGenerationJobCommandOutput> {
    return de_CreateWorldGenerationJobCommand(output, context);
  }
}
