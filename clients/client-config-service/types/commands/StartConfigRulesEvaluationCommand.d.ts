import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StartConfigRulesEvaluationRequest, StartConfigRulesEvaluationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartConfigRulesEvaluationCommandInput = StartConfigRulesEvaluationRequest;
export declare type StartConfigRulesEvaluationCommandOutput = StartConfigRulesEvaluationResponse & __MetadataBearer;
export declare class StartConfigRulesEvaluationCommand extends $Command<StartConfigRulesEvaluationCommandInput, StartConfigRulesEvaluationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: StartConfigRulesEvaluationCommandInput;
    constructor(input: StartConfigRulesEvaluationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartConfigRulesEvaluationCommandInput, StartConfigRulesEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
