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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { GetSourceRepositoryCloneUrlsRequest, GetSourceRepositoryCloneUrlsResponse } from "../models/models_0";
import {
  de_GetSourceRepositoryCloneUrlsCommand,
  se_GetSourceRepositoryCloneUrlsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSourceRepositoryCloneUrlsCommand}.
 */
export interface GetSourceRepositoryCloneUrlsCommandInput extends GetSourceRepositoryCloneUrlsRequest {}
/**
 * @public
 *
 * The output of {@link GetSourceRepositoryCloneUrlsCommand}.
 */
export interface GetSourceRepositoryCloneUrlsCommandOutput
  extends GetSourceRepositoryCloneUrlsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the URLs that can be used with a Git client to clone a source
 *       repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, GetSourceRepositoryCloneUrlsCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, GetSourceRepositoryCloneUrlsCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // GetSourceRepositoryCloneUrlsRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   sourceRepositoryName: "STRING_VALUE", // required
 * };
 * const command = new GetSourceRepositoryCloneUrlsCommand(input);
 * const response = await client.send(command);
 * // { // GetSourceRepositoryCloneUrlsResponse
 * //   https: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetSourceRepositoryCloneUrlsCommandInput - {@link GetSourceRepositoryCloneUrlsCommandInput}
 * @returns {@link GetSourceRepositoryCloneUrlsCommandOutput}
 * @see {@link GetSourceRepositoryCloneUrlsCommandInput} for command's `input` shape.
 * @see {@link GetSourceRepositoryCloneUrlsCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 */
export class GetSourceRepositoryCloneUrlsCommand extends $Command<
  GetSourceRepositoryCloneUrlsCommandInput,
  GetSourceRepositoryCloneUrlsCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetSourceRepositoryCloneUrlsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSourceRepositoryCloneUrlsCommandInput, GetSourceRepositoryCloneUrlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSourceRepositoryCloneUrlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "GetSourceRepositoryCloneUrlsCommand";
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
  private serialize(input: GetSourceRepositoryCloneUrlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSourceRepositoryCloneUrlsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSourceRepositoryCloneUrlsCommandOutput> {
    return de_GetSourceRepositoryCloneUrlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
