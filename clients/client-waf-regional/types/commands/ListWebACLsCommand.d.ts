import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListWebACLsRequest, ListWebACLsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWebACLsCommandInput = ListWebACLsRequest;
export declare type ListWebACLsCommandOutput = ListWebACLsResponse & __MetadataBearer;
export declare class ListWebACLsCommand extends $Command<ListWebACLsCommandInput, ListWebACLsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListWebACLsCommandInput;
    constructor(input: ListWebACLsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWebACLsCommandInput, ListWebACLsCommandOutput>;
    private serialize;
    private deserialize;
}
