import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListWebACLsRequest, ListWebACLsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWebACLsCommandInput = ListWebACLsRequest;
export declare type ListWebACLsCommandOutput = ListWebACLsResponse & __MetadataBearer;
export declare class ListWebACLsCommand extends $Command<ListWebACLsCommandInput, ListWebACLsCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: ListWebACLsCommandInput;
    constructor(input: ListWebACLsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWebACLsCommandInput, ListWebACLsCommandOutput>;
    private serialize;
    private deserialize;
}
