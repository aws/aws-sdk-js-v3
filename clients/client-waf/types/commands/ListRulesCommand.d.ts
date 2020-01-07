import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { ListRulesRequest, ListRulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRulesCommandInput = ListRulesRequest;
export declare type ListRulesCommandOutput = ListRulesResponse & __MetadataBearer;
export declare class ListRulesCommand extends $Command<ListRulesCommandInput, ListRulesCommandOutput, WAFClientResolvedConfig> {
    readonly input: ListRulesCommandInput;
    constructor(input: ListRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRulesCommandInput, ListRulesCommandOutput>;
    private serialize;
    private deserialize;
}
