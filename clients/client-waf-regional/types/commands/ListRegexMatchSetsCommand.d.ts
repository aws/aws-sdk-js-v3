import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListRegexMatchSetsRequest, ListRegexMatchSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRegexMatchSetsCommandInput = ListRegexMatchSetsRequest;
export declare type ListRegexMatchSetsCommandOutput = ListRegexMatchSetsResponse & __MetadataBearer;
export declare class ListRegexMatchSetsCommand extends $Command<ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListRegexMatchSetsCommandInput;
    constructor(input: ListRegexMatchSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput>;
    private serialize;
    private deserialize;
}
