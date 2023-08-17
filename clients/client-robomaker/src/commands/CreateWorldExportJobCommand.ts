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

import { CreateWorldExportJobRequest, CreateWorldExportJobResponse } from "../models/models_0";
import { de_CreateWorldExportJobCommand, se_CreateWorldExportJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorldExportJobCommand}.
 */
export interface CreateWorldExportJobCommandInput extends CreateWorldExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorldExportJobCommand}.
 */
export interface CreateWorldExportJobCommandOutput extends CreateWorldExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a world export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CreateWorldExportJobRequest
 *   clientRequestToken: "STRING_VALUE",
 *   worlds: [ // Arns // required
 *     "STRING_VALUE",
 *   ],
 *   outputLocation: { // OutputLocation
 *     s3Bucket: "STRING_VALUE",
 *     s3Prefix: "STRING_VALUE",
 *   },
 *   iamRole: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorldExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorldExportJobResponse
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   failureCode: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   outputLocation: { // OutputLocation
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Prefix: "STRING_VALUE",
 * //   },
 * //   iamRole: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWorldExportJobCommandInput - {@link CreateWorldExportJobCommandInput}
 * @returns {@link CreateWorldExportJobCommandOutput}
 * @see {@link CreateWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldExportJobCommandOutput} for command's `response` shape.
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
export class CreateWorldExportJobCommand extends $Command<
  CreateWorldExportJobCommandInput,
  CreateWorldExportJobCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: CreateWorldExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorldExportJobCommandInput, CreateWorldExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorldExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateWorldExportJobCommand";
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
  private serialize(input: CreateWorldExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorldExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorldExportJobCommandOutput> {
    return de_CreateWorldExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
