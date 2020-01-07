import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeDocumentRequest, DescribeDocumentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDocumentCommandInput = DescribeDocumentRequest;
export declare type DescribeDocumentCommandOutput = DescribeDocumentResult & __MetadataBearer;
export declare class DescribeDocumentCommand extends $Command<DescribeDocumentCommandInput, DescribeDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeDocumentCommandInput;
    constructor(input: DescribeDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDocumentCommandInput, DescribeDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
