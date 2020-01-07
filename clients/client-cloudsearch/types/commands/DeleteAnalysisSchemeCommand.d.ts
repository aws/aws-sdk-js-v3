import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteAnalysisSchemeRequest, DeleteAnalysisSchemeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAnalysisSchemeCommandInput = DeleteAnalysisSchemeRequest;
export declare type DeleteAnalysisSchemeCommandOutput = DeleteAnalysisSchemeResponse & __MetadataBearer;
export declare class DeleteAnalysisSchemeCommand extends $Command<DeleteAnalysisSchemeCommandInput, DeleteAnalysisSchemeCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteAnalysisSchemeCommandInput;
    constructor(input: DeleteAnalysisSchemeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAnalysisSchemeCommandInput, DeleteAnalysisSchemeCommandOutput>;
    private serialize;
    private deserialize;
}
