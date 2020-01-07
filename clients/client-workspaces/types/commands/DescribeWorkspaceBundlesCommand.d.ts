import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceBundlesRequest, DescribeWorkspaceBundlesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkspaceBundlesCommandInput = DescribeWorkspaceBundlesRequest;
export declare type DescribeWorkspaceBundlesCommandOutput = DescribeWorkspaceBundlesResult & __MetadataBearer;
export declare class DescribeWorkspaceBundlesCommand extends $Command<DescribeWorkspaceBundlesCommandInput, DescribeWorkspaceBundlesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeWorkspaceBundlesCommandInput;
    constructor(input: DescribeWorkspaceBundlesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkspaceBundlesCommandInput, DescribeWorkspaceBundlesCommandOutput>;
    private serialize;
    private deserialize;
}
