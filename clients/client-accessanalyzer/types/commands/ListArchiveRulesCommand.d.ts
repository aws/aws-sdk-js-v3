import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ListArchiveRulesRequest, ListArchiveRulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListArchiveRulesCommandInput = ListArchiveRulesRequest;
export declare type ListArchiveRulesCommandOutput = ListArchiveRulesResponse & __MetadataBearer;
export declare class ListArchiveRulesCommand extends $Command<ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: ListArchiveRulesCommandInput;
    constructor(input: ListArchiveRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput>;
    private serialize;
    private deserialize;
}
