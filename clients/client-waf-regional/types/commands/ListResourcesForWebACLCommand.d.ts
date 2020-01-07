import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListResourcesForWebACLRequest, ListResourcesForWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourcesForWebACLCommandInput = ListResourcesForWebACLRequest;
export declare type ListResourcesForWebACLCommandOutput = ListResourcesForWebACLResponse & __MetadataBearer;
export declare class ListResourcesForWebACLCommand extends $Command<ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListResourcesForWebACLCommandInput;
    constructor(input: ListResourcesForWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
