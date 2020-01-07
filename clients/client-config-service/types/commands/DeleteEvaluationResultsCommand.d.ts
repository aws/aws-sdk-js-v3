import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteEvaluationResultsRequest, DeleteEvaluationResultsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEvaluationResultsCommandInput = DeleteEvaluationResultsRequest;
export declare type DeleteEvaluationResultsCommandOutput = DeleteEvaluationResultsResponse & __MetadataBearer;
export declare class DeleteEvaluationResultsCommand extends $Command<DeleteEvaluationResultsCommandInput, DeleteEvaluationResultsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteEvaluationResultsCommandInput;
    constructor(input: DeleteEvaluationResultsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEvaluationResultsCommandInput, DeleteEvaluationResultsCommandOutput>;
    private serialize;
    private deserialize;
}
