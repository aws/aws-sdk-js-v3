import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetAnalyzedResourceRequest, GetAnalyzedResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAnalyzedResourceCommandInput = GetAnalyzedResourceRequest;
export declare type GetAnalyzedResourceCommandOutput = GetAnalyzedResourceResponse & __MetadataBearer;
export declare class GetAnalyzedResourceCommand extends $Command<GetAnalyzedResourceCommandInput, GetAnalyzedResourceCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: GetAnalyzedResourceCommandInput;
    constructor(input: GetAnalyzedResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAnalyzedResourceCommandInput, GetAnalyzedResourceCommandOutput>;
    private serialize;
    private deserialize;
}
