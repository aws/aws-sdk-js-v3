import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { ListRegexMatchSetsRequest, ListRegexMatchSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRegexMatchSetsCommandInput = ListRegexMatchSetsRequest;
export declare type ListRegexMatchSetsCommandOutput = ListRegexMatchSetsResponse & __MetadataBearer;
export declare class ListRegexMatchSetsCommand extends $Command<ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput, WAFClientResolvedConfig> {
    readonly input: ListRegexMatchSetsCommandInput;
    constructor(input: ListRegexMatchSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput>;
    private serialize;
    private deserialize;
}
