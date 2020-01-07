import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspacesRequest, DescribeWorkspacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkspacesCommandInput = DescribeWorkspacesRequest;
export declare type DescribeWorkspacesCommandOutput = DescribeWorkspacesResult & __MetadataBearer;
export declare class DescribeWorkspacesCommand extends $Command<DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeWorkspacesCommandInput;
    constructor(input: DescribeWorkspacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
