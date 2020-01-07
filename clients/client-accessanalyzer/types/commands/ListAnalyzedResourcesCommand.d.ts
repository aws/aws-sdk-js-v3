import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ListAnalyzedResourcesRequest, ListAnalyzedResourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAnalyzedResourcesCommandInput = ListAnalyzedResourcesRequest;
export declare type ListAnalyzedResourcesCommandOutput = ListAnalyzedResourcesResponse & __MetadataBearer;
export declare class ListAnalyzedResourcesCommand extends $Command<ListAnalyzedResourcesCommandInput, ListAnalyzedResourcesCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: ListAnalyzedResourcesCommandInput;
    constructor(input: ListAnalyzedResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAnalyzedResourcesCommandInput, ListAnalyzedResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
