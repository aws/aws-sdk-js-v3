import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListRateBasedRulesRequest, ListRateBasedRulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRateBasedRulesCommandInput = ListRateBasedRulesRequest;
export declare type ListRateBasedRulesCommandOutput = ListRateBasedRulesResponse & __MetadataBearer;
export declare class ListRateBasedRulesCommand extends $Command<ListRateBasedRulesCommandInput, ListRateBasedRulesCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListRateBasedRulesCommandInput;
    constructor(input: ListRateBasedRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRateBasedRulesCommandInput, ListRateBasedRulesCommandOutput>;
    private serialize;
    private deserialize;
}
