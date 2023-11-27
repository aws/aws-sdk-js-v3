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

import { CreateSpaceInput, CreateSpaceInputFilterSensitiveLog, CreateSpaceOutput } from "../models/models_0";
import { de_CreateSpaceCommand, se_CreateSpaceCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSpaceCommand}.
 */
export interface CreateSpaceCommandInput extends CreateSpaceInput {}
/**
 * @public
 *
 * The output of {@link CreateSpaceCommand}.
 */
export interface CreateSpaceCommandOutput extends CreateSpaceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an AWS re:Post Private private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, CreateSpaceCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, CreateSpaceCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // CreateSpaceInput
 *   name: "STRING_VALUE", // required
 *   subdomain: "STRING_VALUE", // required
 *   tier: "BASIC" || "STANDARD", // required
 *   description: "STRING_VALUE",
 *   userKMSKey: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new CreateSpaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateSpaceOutput
 * //   spaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSpaceCommandInput - {@link CreateSpaceCommandInput}
 * @returns {@link CreateSpaceCommandOutput}
 * @see {@link CreateSpaceCommandInput} for command's `input` shape.
 * @see {@link CreateSpaceCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 */
export class CreateSpaceCommand extends $Command<
  CreateSpaceCommandInput,
  CreateSpaceCommandOutput,
  RepostspaceClientResolvedConfig
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
  constructor(readonly input: CreateSpaceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RepostspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSpaceCommandInput, CreateSpaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSpaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RepostspaceClient";
    const commandName = "CreateSpaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSpaceInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RepostSpace",
        operation: "CreateSpace",
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
  private serialize(input: CreateSpaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSpaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSpaceCommandOutput> {
    return de_CreateSpaceCommand(output, context);
  }
}
