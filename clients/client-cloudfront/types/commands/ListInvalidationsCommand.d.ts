import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListInvalidationsRequest, ListInvalidationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInvalidationsCommandInput = ListInvalidationsRequest;
export declare type ListInvalidationsCommandOutput = ListInvalidationsResult & __MetadataBearer;
export declare class ListInvalidationsCommand extends $Command<ListInvalidationsCommandInput, ListInvalidationsCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: ListInvalidationsCommandInput;
    constructor(input: ListInvalidationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInvalidationsCommandInput, ListInvalidationsCommandOutput>;
    private serialize;
    private deserialize;
}
