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
import { ListSpacesRequest, ListSpacesResponse } from "../models/models_0";
import { de_ListSpacesCommand, se_ListSpacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandInput extends ListSpacesRequest {}
/**
 * @public
 *
 * The output of {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandOutput extends ListSpacesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of spaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListSpacesCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListSpacesCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // ListSpacesRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSpacesCommand(input);
 * const response = await client.send(command);
 * // { // ListSpacesResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // SpaceSummaries
 * //     { // SpaceSummary
 * //       name: "STRING_VALUE", // required
 * //       regionName: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSpacesCommandInput - {@link ListSpacesCommandInput}
 * @returns {@link ListSpacesCommandOutput}
 * @see {@link ListSpacesCommandInput} for command's `input` shape.
 * @see {@link ListSpacesCommandOutput} for command's `response` shape.
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
export class ListSpacesCommand extends $Command<
  ListSpacesCommandInput,
  ListSpacesCommandOutput,
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
  constructor(readonly input: ListSpacesCommandInput) {
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
  ): Handler<ListSpacesCommandInput, ListSpacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSpacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "ListSpacesCommand";
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
  private serialize(input: ListSpacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSpacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSpacesCommandOutput> {
    return de_ListSpacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
