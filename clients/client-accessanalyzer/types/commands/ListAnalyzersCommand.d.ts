import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ListAnalyzersRequest, ListAnalyzersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAnalyzersCommandInput = ListAnalyzersRequest;
export declare type ListAnalyzersCommandOutput = ListAnalyzersResponse & __MetadataBearer;
export declare class ListAnalyzersCommand extends $Command<ListAnalyzersCommandInput, ListAnalyzersCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: ListAnalyzersCommandInput;
    constructor(input: ListAnalyzersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAnalyzersCommandInput, ListAnalyzersCommandOutput>;
    private serialize;
    private deserialize;
}
