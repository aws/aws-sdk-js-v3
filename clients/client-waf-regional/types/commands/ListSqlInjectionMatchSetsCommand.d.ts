import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListSqlInjectionMatchSetsRequest, ListSqlInjectionMatchSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSqlInjectionMatchSetsCommandInput = ListSqlInjectionMatchSetsRequest;
export declare type ListSqlInjectionMatchSetsCommandOutput = ListSqlInjectionMatchSetsResponse & __MetadataBearer;
export declare class ListSqlInjectionMatchSetsCommand extends $Command<ListSqlInjectionMatchSetsCommandInput, ListSqlInjectionMatchSetsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListSqlInjectionMatchSetsCommandInput;
    constructor(input: ListSqlInjectionMatchSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSqlInjectionMatchSetsCommandInput, ListSqlInjectionMatchSetsCommandOutput>;
    private serialize;
    private deserialize;
}
