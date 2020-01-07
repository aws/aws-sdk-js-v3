import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspacesConnectionStatusRequest, DescribeWorkspacesConnectionStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkspacesConnectionStatusCommandInput = DescribeWorkspacesConnectionStatusRequest;
export declare type DescribeWorkspacesConnectionStatusCommandOutput = DescribeWorkspacesConnectionStatusResult & __MetadataBearer;
export declare class DescribeWorkspacesConnectionStatusCommand extends $Command<DescribeWorkspacesConnectionStatusCommandInput, DescribeWorkspacesConnectionStatusCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeWorkspacesConnectionStatusCommandInput;
    constructor(input: DescribeWorkspacesConnectionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkspacesConnectionStatusCommandInput, DescribeWorkspacesConnectionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
