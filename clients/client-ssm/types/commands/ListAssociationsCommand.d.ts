import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListAssociationsRequest, ListAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssociationsCommandInput = ListAssociationsRequest;
export declare type ListAssociationsCommandOutput = ListAssociationsResult & __MetadataBearer;
export declare class ListAssociationsCommand extends $Command<ListAssociationsCommandInput, ListAssociationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListAssociationsCommandInput;
    constructor(input: ListAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociationsCommandInput, ListAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
