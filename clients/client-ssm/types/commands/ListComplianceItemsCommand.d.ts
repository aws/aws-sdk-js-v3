import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListComplianceItemsRequest, ListComplianceItemsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListComplianceItemsCommandInput = ListComplianceItemsRequest;
export declare type ListComplianceItemsCommandOutput = ListComplianceItemsResult & __MetadataBearer;
export declare class ListComplianceItemsCommand extends $Command<ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListComplianceItemsCommandInput;
    constructor(input: ListComplianceItemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput>;
    private serialize;
    private deserialize;
}
