import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartMLEvaluationTaskRunRequest, StartMLEvaluationTaskRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartMLEvaluationTaskRunCommandInput = StartMLEvaluationTaskRunRequest;
export declare type StartMLEvaluationTaskRunCommandOutput = StartMLEvaluationTaskRunResponse & __MetadataBearer;
export declare class StartMLEvaluationTaskRunCommand extends $Command<StartMLEvaluationTaskRunCommandInput, StartMLEvaluationTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartMLEvaluationTaskRunCommandInput;
    constructor(input: StartMLEvaluationTaskRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMLEvaluationTaskRunCommandInput, StartMLEvaluationTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
