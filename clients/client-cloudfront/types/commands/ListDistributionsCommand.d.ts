import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListDistributionsRequest, ListDistributionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDistributionsCommandInput = ListDistributionsRequest;
export declare type ListDistributionsCommandOutput = ListDistributionsResult & __MetadataBearer;
export declare class ListDistributionsCommand extends $Command<ListDistributionsCommandInput, ListDistributionsCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: ListDistributionsCommandInput;
    constructor(input: ListDistributionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDistributionsCommandInput, ListDistributionsCommandOutput>;
    private serialize;
    private deserialize;
}
