import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeDocumentClassifierRequest, DescribeDocumentClassifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDocumentClassifierCommandInput = DescribeDocumentClassifierRequest;
export declare type DescribeDocumentClassifierCommandOutput = DescribeDocumentClassifierResponse & __MetadataBearer;
export declare class DescribeDocumentClassifierCommand extends $Command<DescribeDocumentClassifierCommandInput, DescribeDocumentClassifierCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeDocumentClassifierCommandInput;
    constructor(input: DescribeDocumentClassifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDocumentClassifierCommandInput, DescribeDocumentClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
