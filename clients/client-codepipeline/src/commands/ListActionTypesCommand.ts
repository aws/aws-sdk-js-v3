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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListActionTypesInput, ListActionTypesOutput } from "../models/models_0";
import { de_ListActionTypesCommand, se_ListActionTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListActionTypesCommand}.
 */
export interface ListActionTypesCommandInput extends ListActionTypesInput {}
/**
 * @public
 *
 * The output of {@link ListActionTypesCommand}.
 */
export interface ListActionTypesCommandOutput extends ListActionTypesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a summary of all CodePipeline action types associated with your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListActionTypesCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListActionTypesCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // ListActionTypesInput
 *   actionOwnerFilter: "AWS" || "ThirdParty" || "Custom",
 *   nextToken: "STRING_VALUE",
 *   regionFilter: "STRING_VALUE",
 * };
 * const command = new ListActionTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListActionTypesOutput
 * //   actionTypes: [ // ActionTypeList // required
 * //     { // ActionType
 * //       id: { // ActionTypeId
 * //         category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 * //         owner: "AWS" || "ThirdParty" || "Custom", // required
 * //         provider: "STRING_VALUE", // required
 * //         version: "STRING_VALUE", // required
 * //       },
 * //       settings: { // ActionTypeSettings
 * //         thirdPartyConfigurationUrl: "STRING_VALUE",
 * //         entityUrlTemplate: "STRING_VALUE",
 * //         executionUrlTemplate: "STRING_VALUE",
 * //         revisionUrlTemplate: "STRING_VALUE",
 * //       },
 * //       actionConfigurationProperties: [ // ActionConfigurationPropertyList
 * //         { // ActionConfigurationProperty
 * //           name: "STRING_VALUE", // required
 * //           required: true || false, // required
 * //           key: true || false, // required
 * //           secret: true || false, // required
 * //           queryable: true || false,
 * //           description: "STRING_VALUE",
 * //           type: "String" || "Number" || "Boolean",
 * //         },
 * //       ],
 * //       inputArtifactDetails: { // ArtifactDetails
 * //         minimumCount: Number("int"), // required
 * //         maximumCount: Number("int"), // required
 * //       },
 * //       outputArtifactDetails: {
 * //         minimumCount: Number("int"), // required
 * //         maximumCount: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActionTypesCommandInput - {@link ListActionTypesCommandInput}
 * @returns {@link ListActionTypesCommandOutput}
 * @see {@link ListActionTypesCommandInput} for command's `input` shape.
 * @see {@link ListActionTypesCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class ListActionTypesCommand extends $Command<
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: ListActionTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListActionTypesCommandInput, ListActionTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListActionTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "ListActionTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "ListActionTypes",
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
  private serialize(input: ListActionTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListActionTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListActionTypesCommandOutput> {
    return de_ListActionTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
