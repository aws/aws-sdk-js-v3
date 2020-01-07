import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeDocumentPermissionRequest, DescribeDocumentPermissionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDocumentPermissionCommandInput = DescribeDocumentPermissionRequest;
export declare type DescribeDocumentPermissionCommandOutput = DescribeDocumentPermissionResponse & __MetadataBearer;
export declare class DescribeDocumentPermissionCommand extends $Command<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeDocumentPermissionCommandInput;
    constructor(input: DescribeDocumentPermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
