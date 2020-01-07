import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListStreamingDistributionsRequest, ListStreamingDistributionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStreamingDistributionsCommandInput = ListStreamingDistributionsRequest;
export declare type ListStreamingDistributionsCommandOutput = ListStreamingDistributionsResult & __MetadataBearer;
export declare class ListStreamingDistributionsCommand extends $Command<ListStreamingDistributionsCommandInput, ListStreamingDistributionsCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: ListStreamingDistributionsCommandInput;
    constructor(input: ListStreamingDistributionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStreamingDistributionsCommandInput, ListStreamingDistributionsCommandOutput>;
    private serialize;
    private deserialize;
}
