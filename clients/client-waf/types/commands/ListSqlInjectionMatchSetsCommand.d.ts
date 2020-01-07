import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { ListSqlInjectionMatchSetsRequest, ListSqlInjectionMatchSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSqlInjectionMatchSetsCommandInput = ListSqlInjectionMatchSetsRequest;
export declare type ListSqlInjectionMatchSetsCommandOutput = ListSqlInjectionMatchSetsResponse & __MetadataBearer;
export declare class ListSqlInjectionMatchSetsCommand extends $Command<ListSqlInjectionMatchSetsCommandInput, ListSqlInjectionMatchSetsCommandOutput, WAFClientResolvedConfig> {
    readonly input: ListSqlInjectionMatchSetsCommandInput;
    constructor(input: ListSqlInjectionMatchSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSqlInjectionMatchSetsCommandInput, ListSqlInjectionMatchSetsCommandOutput>;
    private serialize;
    private deserialize;
}
